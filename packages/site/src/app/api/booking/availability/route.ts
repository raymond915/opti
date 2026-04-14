import type { NextRequest } from "next/server"
import { getAvailableSlots, getGoogleBusyTimes, CONSULTATION } from "@/lib/booking"

// CORS for RFH Inc static site
const ALLOWED_ORIGINS = [
  "https://www.rfhinc.co.za", "https://rfhinc.co.za",
  "http://localhost:3000", "http://localhost:5500", "http://127.0.0.1:5500",
]

function cors(origin: string | null) {
  const h: Record<string, string> = {
    "Access-Control-Allow-Methods": "GET, OPTIONS",
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
 * GET /api/booking/availability?date=2026-04-20
 * Returns available 30-minute slots for a given date.
 * Also returns available dates for the next 30 days if no date param.
 */
export async function GET(request: NextRequest) {
  const origin = request.headers.get("origin")
  const headers = cors(origin)
  const url = new URL(request.url)
  const date = url.searchParams.get("date")

  // If no date, return the available dates for the next N days
  if (!date) {
    const now = new Date()
    const dates: string[] = []

    for (let i = 0; i < CONSULTATION.maxAdvanceDays; i++) {
      const d = new Date(now)
      d.setDate(d.getDate() + i)
      const dayOfWeek = d.getDay() === 0 ? 7 : d.getDay() // Convert to ISO (1=Mon, 7=Sun)
      if (CONSULTATION.workDays.includes(dayOfWeek)) {
        dates.push(d.toISOString().slice(0, 10))
      }
    }

    return Response.json({ dates, consultation: { duration: CONSULTATION.durationMinutes, amount: CONSULTATION.amountZAR } }, { headers })
  }

  // Validate date format
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return Response.json({ error: "Invalid date format. Use YYYY-MM-DD." }, { status: 400, headers })
  }

  // Check date is a work day
  const dateObj = new Date(date + "T12:00:00+02:00")
  const dayOfWeek = dateObj.getDay() === 0 ? 7 : dateObj.getDay()
  if (!CONSULTATION.workDays.includes(dayOfWeek)) {
    return Response.json({ slots: [], message: "Not a business day" }, { headers })
  }

  // Check date is not in the past
  const today = new Date().toISOString().slice(0, 10)
  if (date < today) {
    return Response.json({ slots: [], message: "Date is in the past" }, { headers })
  }

  // Get busy times from Google Calendar (graceful fallback if not configured)
  let busyTimes: { start: string; end: string }[] = []
  try {
    busyTimes = await getGoogleBusyTimes(date)
  } catch (err) {
    console.error("Google Calendar busy times error:", err)
  }

  const slots = await getAvailableSlots(date, busyTimes)

  return Response.json({
    date,
    slots,
    consultation: {
      duration: CONSULTATION.durationMinutes,
      amount: CONSULTATION.amountZAR,
    },
  }, { headers })
}
