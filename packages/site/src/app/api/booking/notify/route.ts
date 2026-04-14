import type { NextRequest } from "next/server"
import { getBooking, updateBooking, createCalendarEvent, generatePayFastSignature, PAYFAST, buildConfirmationEmailHTML, buildNotificationEmailHTML } from "@/lib/booking"
import { Resend } from "resend"

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null
const EMAIL_FROM = process.env.EMAIL_FROM || "onboarding@resend.dev"

/**
 * POST /api/booking/notify
 * PayFast Instant Transaction Notification (ITN) callback.
 * Called server-to-server by PayFast when a payment is processed.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const params = new URLSearchParams(body)
    const data: Record<string, string> = {}
    params.forEach((value, key) => { data[key] = value })

    console.log("PayFast ITN received:", data.m_payment_id, data.payment_status)

    // 1. Verify the booking exists
    const bookingId = data.m_payment_id
    if (!bookingId) {
      console.error("ITN: No m_payment_id")
      return new Response("OK", { status: 200 })
    }

    const booking = await getBooking(bookingId)
    if (!booking) {
      console.error("ITN: Booking not found:", bookingId)
      return new Response("OK", { status: 200 })
    }

    // 2. Verify the amount matches
    const paidAmount = parseFloat(data.amount_gross || "0")
    if (Math.abs(paidAmount - booking.amount) > 0.01) {
      console.error("ITN: Amount mismatch. Expected:", booking.amount, "Got:", paidAmount)
      return new Response("OK", { status: 200 })
    }

    // 3. Verify the signature
    const receivedSignature = data.signature
    const signatureData = { ...data }
    delete signatureData.signature
    const expectedSignature = generatePayFastSignature(signatureData, PAYFAST.passphrase)
    if (receivedSignature !== expectedSignature) {
      console.error("ITN: Signature mismatch")
      // In sandbox mode, skip signature verification
      if (!PAYFAST.sandbox) {
        return new Response("OK", { status: 200 })
      }
      console.warn("ITN: Skipping signature check (sandbox mode)")
    }

    // 4. Check payment status
    if (data.payment_status !== "COMPLETE") {
      console.log("ITN: Payment not complete:", data.payment_status)
      if (data.payment_status === "CANCELLED") {
        await updateBooking(bookingId, { status: "cancelled" })
      }
      return new Response("OK", { status: 200 })
    }

    // 5. Already processed?
    if (booking.status === "paid") {
      console.log("ITN: Booking already paid:", bookingId)
      return new Response("OK", { status: 200 })
    }

    // 6. Mark as paid
    await updateBooking(bookingId, {
      status: "paid",
      paidAt: new Date().toISOString(),
      payfast_payment_id: data.pf_payment_id,
    })

    // 7. Create Google Calendar event with Meet link
    let meetLink = ""
    let eventId = ""
    try {
      const calResult = await createCalendarEvent(booking)
      if (calResult) {
        meetLink = calResult.meetLink
        eventId = calResult.eventId
        await updateBooking(bookingId, { meetLink, calendarEventId: eventId })
      }
    } catch (err) {
      console.error("ITN: Failed to create calendar event:", err)
    }

    // Update booking reference for emails
    const updatedBooking = await getBooking(bookingId)

    // 8. Send confirmation email to client
    if (resend && updatedBooking) {
      try {
        await resend.emails.send({
          from: EMAIL_FROM,
          to: [updatedBooking.email],
          subject: `Consultation Confirmed — ${updatedBooking.date} at ${updatedBooking.time} | RFH Inc Attorneys`,
          html: buildConfirmationEmailHTML(updatedBooking),
        })
      } catch (err) {
        console.error("ITN: Failed to send client email:", err)
      }

      // 9. Send notification to Raymond
      try {
        await resend.emails.send({
          from: EMAIL_FROM,
          to: ["raymond@rfhinc.co.za"],
          subject: `New consultation booking: ${updatedBooking.firstName} ${updatedBooking.lastName} — ${updatedBooking.date}`,
          html: buildNotificationEmailHTML(updatedBooking),
        })
      } catch (err) {
        console.error("ITN: Failed to send notification email:", err)
      }
    }

    console.log("ITN: Booking confirmed:", bookingId, meetLink ? `Meet: ${meetLink}` : "(no meet link)")
    return new Response("OK", { status: 200 })
  } catch (error) {
    console.error("ITN handler error:", error)
    return new Response("OK", { status: 200 }) // Always return 200 to PayFast
  }
}
