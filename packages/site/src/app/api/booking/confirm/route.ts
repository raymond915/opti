import type { NextRequest } from "next/server"
import { getBooking } from "@/lib/booking"

/**
 * GET /api/booking/confirm?booking_id=xxx[&cancelled=true]
 * PayFast redirects the client here after payment.
 * Renders a branded confirmation (or cancellation) page.
 */
export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const bookingId = url.searchParams.get("booking_id")
  const cancelled = url.searchParams.get("cancelled") === "true"

  // Base styles
  const page = (title: string, body: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} — RFH Inc Attorneys</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #FAF8F5;
      color: #2A2A38;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }
    .card {
      background: #fff;
      border-radius: 16px;
      box-shadow: 0 4px 24px rgba(0,0,0,0.08);
      max-width: 520px;
      width: 100%;
      overflow: hidden;
    }
    .card-header {
      background: #C95520;
      padding: 28px 32px;
      text-align: center;
    }
    .card-header h1 {
      color: #fff;
      font-size: 22px;
      font-weight: 700;
    }
    .card-header .icon {
      font-size: 48px;
      margin-bottom: 8px;
    }
    .card-body {
      padding: 32px;
    }
    .card-body p {
      font-size: 15px;
      line-height: 1.7;
      margin-bottom: 16px;
      color: #4A4A5A;
    }
    .detail-box {
      background: #FFF5F0;
      border: 1px solid #F0C9B8;
      border-radius: 12px;
      padding: 20px;
      margin: 20px 0;
    }
    .detail-row {
      display: flex;
      justify-content: space-between;
      padding: 8px 0;
      font-size: 14px;
      border-bottom: 1px solid rgba(201,85,32,0.1);
    }
    .detail-row:last-child { border-bottom: none; }
    .detail-label { color: #888; }
    .detail-value { font-weight: 600; text-align: right; }
    .meet-btn {
      display: block;
      background: #C95520;
      color: #fff;
      text-align: center;
      padding: 16px;
      border-radius: 10px;
      text-decoration: none;
      font-weight: 600;
      font-size: 15px;
      margin: 24px 0 16px;
      transition: background 0.2s;
    }
    .meet-btn:hover { background: #A84518; }
    .note {
      font-size: 13px !important;
      color: #888 !important;
      text-align: center;
    }
    .footer {
      text-align: center;
      padding: 20px 32px;
      border-top: 1px solid #f0f0f0;
      font-size: 12px;
      color: #aaa;
    }
    .cancelled .card-header { background: #666; }
    .pending .card-header { background: #D4A843; }
    .home-link {
      display: inline-block;
      margin-top: 8px;
      color: #C95520;
      text-decoration: none;
      font-weight: 500;
    }
    .home-link:hover { text-decoration: underline; }
  </style>
</head>
<body>
  ${body}
</body>
</html>`

  // No booking ID
  if (!bookingId) {
    return new Response(
      page("Invalid Link", `
        <div class="card">
          <div class="card-header"><div class="icon">⚠️</div><h1>Invalid Link</h1></div>
          <div class="card-body">
            <p>This link appears to be invalid. If you recently booked a consultation, please check your email for the confirmation details.</p>
            <p class="note"><a href="https://www.rfhinc.co.za" class="home-link">← Return to RFH Inc</a></p>
          </div>
          <div class="footer">RFH Inc Attorneys &middot; Reg: 2014/160647/21</div>
        </div>
      `),
      { status: 400, headers: { "Content-Type": "text/html; charset=utf-8" } }
    )
  }

  // Cancelled by user
  if (cancelled) {
    return new Response(
      page("Booking Cancelled", `
        <div class="card cancelled">
          <div class="card-header"><div class="icon">✕</div><h1>Payment Cancelled</h1></div>
          <div class="card-body">
            <p>Your payment was cancelled and you have not been charged. Your booking has not been confirmed.</p>
            <p>If you'd like to try again, you can return to the booking page and select a new time slot.</p>
            <p class="note"><a href="https://www.rfhinc.co.za" class="home-link">← Return to RFH Inc</a></p>
          </div>
          <div class="footer">RFH Inc Attorneys &middot; Reg: 2014/160647/21</div>
        </div>
      `),
      { headers: { "Content-Type": "text/html; charset=utf-8" } }
    )
  }

  // Look up the booking
  const booking = await getBooking(bookingId)

  if (!booking) {
    return new Response(
      page("Booking Not Found", `
        <div class="card">
          <div class="card-header"><div class="icon">🔍</div><h1>Booking Not Found</h1></div>
          <div class="card-body">
            <p>We couldn't find a booking with this reference. If you recently completed a payment, please allow a few moments for processing and check your email.</p>
            <p>If the issue persists, please contact us directly.</p>
            <div style="margin: 16px 0; font-size: 14px;">
              <strong>Raymond Hauptfleisch</strong><br>
              Phone/WhatsApp: +27 87 550 0932<br>
              Email: raymond@rfhinc.co.za
            </div>
            <p class="note"><a href="https://www.rfhinc.co.za" class="home-link">← Return to RFH Inc</a></p>
          </div>
          <div class="footer">RFH Inc Attorneys &middot; Reg: 2014/160647/21</div>
        </div>
      `),
      { status: 404, headers: { "Content-Type": "text/html; charset=utf-8" } }
    )
  }

  // Payment still processing (ITN hasn't fired yet)
  if (booking.status === "pending_payment") {
    const dateObj = new Date(`${booking.date}T${booking.time}:00+02:00`)
    const dateFormatted = dateObj.toLocaleDateString("en-ZA", {
      weekday: "long", day: "numeric", month: "long", year: "numeric",
    })

    return new Response(
      page("Processing Payment", `
        <div class="card pending">
          <div class="card-header"><div class="icon">⏳</div><h1>Processing Payment</h1></div>
          <div class="card-body">
            <p>Your payment is being processed. This usually takes just a few moments.</p>
            <div class="detail-box">
              <div class="detail-row">
                <span class="detail-label">Date</span>
                <span class="detail-value">${dateFormatted}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Time</span>
                <span class="detail-value">${booking.time} (SAST)</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">Amount</span>
                <span class="detail-value">R${booking.amount}</span>
              </div>
            </div>
            <p>Once confirmed, you'll receive an email with your Google Meet link. You can close this page — the confirmation email will arrive shortly.</p>
            <p class="note">
              <a href="https://www.rfhinc.co.za" class="home-link">← Return to RFH Inc</a>
            </p>
          </div>
          <div class="footer">RFH Inc Attorneys &middot; Reg: 2014/160647/21</div>
        </div>
      `),
      { headers: { "Content-Type": "text/html; charset=utf-8" } }
    )
  }

  // Booking confirmed (paid)
  const dateObj = new Date(`${booking.date}T${booking.time}:00+02:00`)
  const dateFormatted = dateObj.toLocaleDateString("en-ZA", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  })

  return new Response(
    page("Consultation Confirmed", `
      <div class="card">
        <div class="card-header"><div class="icon">✓</div><h1>Consultation Confirmed</h1></div>
        <div class="card-body">
          <p>Thank you, <strong>${booking.firstName}</strong>! Your payment of <strong>R${booking.amount}</strong> has been received and your consultation is confirmed.</p>

          <div class="detail-box">
            <div class="detail-row">
              <span class="detail-label">Date</span>
              <span class="detail-value">${dateFormatted}</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Time</span>
              <span class="detail-value">${booking.time} (SAST)</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Duration</span>
              <span class="detail-value">${booking.duration} minutes</span>
            </div>
            <div class="detail-row">
              <span class="detail-label">Matter</span>
              <span class="detail-value">${booking.matter}</span>
            </div>
          </div>

          ${booking.meetLink ? `
          <a href="${booking.meetLink}" class="meet-btn">Join Google Meet →</a>
          <p class="note">The Meet link will also be in your calendar invite and confirmation email.</p>
          ` : `
          <p>A calendar invite with the Google Meet link will be sent to <strong>${booking.email}</strong> shortly.</p>
          `}

          <p style="margin-top: 24px; font-size: 14px; color: #666;">
            If you need to reschedule or have questions before the consultation, contact:
          </p>
          <div style="margin: 12px 0; font-size: 14px;">
            <strong>Raymond Hauptfleisch</strong><br>
            Phone/WhatsApp: +27 87 550 0932<br>
            Email: raymond@rfhinc.co.za
          </div>

          <p class="note" style="margin-top: 24px;">
            <a href="https://www.rfhinc.co.za" class="home-link">← Return to RFH Inc</a>
          </p>
        </div>
        <div class="footer">RFH Inc Attorneys &middot; 36 Alcade Rd, Lynnwood Glen, Pretoria, 0081 &middot; Reg: 2014/160647/21</div>
      </div>
    `),
    { headers: { "Content-Type": "text/html; charset=utf-8" } }
  )
}
