import type { NextRequest } from "next/server"
import { createBooking, buildPayFastForm, CONSULTATION, getAvailableSlots, getGoogleBusyTimes } from "@/lib/booking"

const ALLOWED_ORIGINS = [
  "https://www.rfhinc.co.za", "https://rfhinc.co.za",
  "http://localhost:3000", "http://127.0.0.1:5500",
]

function cors(origin: string | null) {
  const h: Record<string, string> = {
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  }
  if (origin && ALLOWED_ORIGINS.some((o) => origin.startsWith(o))) {
    h["Access-Control-Allow-Origin"] = origin
  }
  return h
}

export const OPTIONS = async (req: NextRequest) =>
  new Response(null, { status: 204, headers: cors(req.headers.get("origin")) })

/**
 * POST /api/booking/create
 * Body: { firstName, lastName, email, phone, matter, date, time }
 * Returns PayFast form action URL + hidden fields for the payment form.
 */
export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin")
  const headers = cors(origin)

  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, matter, date, time } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !matter || !date || !time) {
      return Response.json({ error: "All fields are required" }, { status: 400, headers })
    }

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: "Invalid email address" }, { status: 400, headers })
    }

    // Verify the slot is still available
    let busyTimes: { start: string; end: string }[] = []
    try { busyTimes = await getGoogleBusyTimes(date) } catch { /* fallback */ }
    const available = await getAvailableSlots(date, busyTimes)
    if (!available.includes(time)) {
      return Response.json({ error: "This time slot is no longer available. Please choose another." }, { status: 409, headers })
    }

    // Create the booking
    const booking = await createBooking({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      matter: matter.trim(),
      date,
      time,
      duration: CONSULTATION.durationMinutes,
      amount: CONSULTATION.amountZAR,
    })

    // Build the PayFast redirect form
    const payfast = buildPayFastForm(booking)

    return Response.json({
      bookingId: booking.id,
      payfast: {
        action: payfast.url,
        fields: payfast.data,
      },
    }, { headers })
  } catch (error) {
    console.error("Booking create error:", error)
    return Response.json({ error: "Failed to create booking" }, { status: 500, headers })
  }
}
