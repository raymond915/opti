import { promises as fs } from "fs"
import path from "path"
import crypto from "crypto"

// ── Types ────────────────────────────────────────────────────────────────────
export type BookingStatus = "pending_payment" | "paid" | "cancelled" | "expired"

export type Booking = {
  id: string
  status: BookingStatus
  createdAt: string
  paidAt?: string
  // Client details
  firstName: string
  lastName: string
  email: string
  phone: string
  matter: string
  // Slot details
  date: string        // YYYY-MM-DD
  time: string        // HH:MM
  duration: number    // minutes
  // Payment
  amount: number
  payfast_payment_id?: string
  // Calendar
  calendarEventId?: string
  meetLink?: string
}

type BookingStore = {
  bookings: Booking[]
}

// ── Config ───────────────────────────────────────────────────────────────────
const STORE_DIR = process.env.BOOKING_STORE_DIR || path.join(process.cwd(), "booking-data")
const STORE_FILE = path.join(STORE_DIR, "bookings.json")

// Consultation config
export const CONSULTATION = {
  durationMinutes: 30,
  amountZAR: 750,
  itemName: "Legal Consultation — RFH Inc Attorneys",
  // Available hours (SAST)
  hours: {
    morning: { start: 9, end: 12 },    // 09:00 – 12:00
    afternoon: { start: 14, end: 16 },  // 14:00 – 16:00
  },
  // Days: 1=Monday, 5=Friday
  workDays: [1, 2, 3, 4, 5],
  // How far ahead clients can book (days)
  maxAdvanceDays: 30,
  // Minimum notice (hours)
  minNoticeHours: 4,
}

// ── PayFast Config ───────────────────────────────────────────────────────────
export const PAYFAST = {
  merchantId: process.env.PAYFAST_MERCHANT_ID || "",
  merchantKey: process.env.PAYFAST_MERCHANT_KEY || "",
  passphrase: process.env.PAYFAST_PASSPHRASE || "",
  sandbox: process.env.PAYFAST_SANDBOX === "true",
  get processUrl() {
    return this.sandbox
      ? "https://sandbox.payfast.co.za/eng/process"
      : "https://www.payfast.co.za/eng/process"
  },
  get validateUrl() {
    return this.sandbox
      ? "https://sandbox.payfast.co.za/eng/query/validate"
      : "https://www.payfast.co.za/eng/query/validate"
  },
}

// ── Store helpers ────────────────────────────────────────────────────────────
async function ensureDir() {
  try { await fs.mkdir(STORE_DIR, { recursive: true }) } catch { /* exists */ }
}

async function readStore(): Promise<BookingStore> {
  try {
    const data = await fs.readFile(STORE_FILE, "utf-8")
    return JSON.parse(data) as BookingStore
  } catch {
    return { bookings: [] }
  }
}

async function writeStore(store: BookingStore) {
  await ensureDir()
  await fs.writeFile(STORE_FILE, JSON.stringify(store, null, 2), "utf-8")
}

// ── Booking CRUD ─────────────────────────────────────────────────────────────
export async function createBooking(data: Omit<Booking, "id" | "status" | "createdAt">): Promise<Booking> {
  const store = await readStore()
  const booking: Booking = {
    id: `rfh-${Date.now()}-${crypto.randomBytes(4).toString("hex")}`,
    status: "pending_payment",
    createdAt: new Date().toISOString(),
    ...data,
  }
  store.bookings.push(booking)
  await writeStore(store)
  return booking
}

export async function getBooking(id: string): Promise<Booking | null> {
  const store = await readStore()
  return store.bookings.find((b) => b.id === id) ?? null
}

export async function updateBooking(id: string, updates: Partial<Booking>): Promise<Booking | null> {
  const store = await readStore()
  const idx = store.bookings.findIndex((b) => b.id === id)
  if (idx === -1) return null
  store.bookings[idx] = { ...store.bookings[idx], ...updates }
  await writeStore(store)
  return store.bookings[idx]
}

export async function getBookingsForDate(date: string): Promise<Booking[]> {
  const store = await readStore()
  return store.bookings.filter(
    (b) => b.date === date && (b.status === "pending_payment" || b.status === "paid")
  )
}

// ── Availability ─────────────────────────────────────────────────────────────
export function generateSlots(date: string): string[] {
  const slots: string[] = []
  const { morning, afternoon } = CONSULTATION.hours
  const step = CONSULTATION.durationMinutes

  // Morning slots
  for (let h = morning.start; h < morning.end; h++) {
    for (let m = 0; m < 60; m += step) {
      if (h === morning.end - 1 && m + step > 60) continue
      const hour = String(h).padStart(2, "0")
      const min = String(m).padStart(2, "0")
      slots.push(`${hour}:${min}`)
    }
  }

  // Afternoon slots
  for (let h = afternoon.start; h < afternoon.end; h++) {
    for (let m = 0; m < 60; m += step) {
      if (h === afternoon.end - 1 && m + step > 60) continue
      const hour = String(h).padStart(2, "0")
      const min = String(m).padStart(2, "0")
      slots.push(`${hour}:${min}`)
    }
  }

  return slots
}

export async function getAvailableSlots(
  date: string,
  googleBusyTimes?: { start: string; end: string }[]
): Promise<string[]> {
  const allSlots = generateSlots(date)
  const bookedSlots = await getBookingsForDate(date)

  // Filter out already-booked slots
  const bookedTimes = new Set(bookedSlots.map((b) => b.time))

  let available = allSlots.filter((slot) => !bookedTimes.has(slot))

  // Filter out Google Calendar busy times
  if (googleBusyTimes) {
    available = available.filter((slot) => {
      const slotStart = new Date(`${date}T${slot}:00+02:00`) // SAST = UTC+2
      const slotEnd = new Date(slotStart.getTime() + CONSULTATION.durationMinutes * 60000)

      return !googleBusyTimes.some((busy) => {
        const busyStart = new Date(busy.start)
        const busyEnd = new Date(busy.end)
        return slotStart < busyEnd && slotEnd > busyStart
      })
    })
  }

  // Filter out past times if date is today
  const now = new Date()
  const todayStr = now.toISOString().slice(0, 10)
  if (date === todayStr) {
    const minNotice = new Date(now.getTime() + CONSULTATION.minNoticeHours * 3600000)
    available = available.filter((slot) => {
      const slotTime = new Date(`${date}T${slot}:00+02:00`)
      return slotTime > minNotice
    })
  }

  return available
}

// ── PayFast signature ────────────────────────────────────────────────────────
export function generatePayFastSignature(data: Record<string, string>, passphrase?: string): string {
  // Build parameter string in order
  let paramString = Object.entries(data)
    .filter(([, v]) => v !== "")
    .map(([k, v]) => `${k}=${encodeURIComponent(v.trim()).replace(/%20/g, "+")}`)
    .join("&")

  if (passphrase) {
    paramString += `&passphrase=${encodeURIComponent(passphrase.trim()).replace(/%20/g, "+")}`
  }

  return crypto.createHash("md5").update(paramString).digest("hex")
}

export function buildPayFastForm(booking: Booking): { url: string; data: Record<string, string> } {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.optihr.co.za"

  const data: Record<string, string> = {
    merchant_id: PAYFAST.merchantId,
    merchant_key: PAYFAST.merchantKey,
    return_url: `${baseUrl}/api/booking/confirm?booking_id=${booking.id}`,
    cancel_url: `${baseUrl}/api/booking/confirm?booking_id=${booking.id}&cancelled=true`,
    notify_url: `${baseUrl}/api/booking/notify`,
    name_first: booking.firstName,
    name_last: booking.lastName,
    email_address: booking.email,
    m_payment_id: booking.id,
    amount: booking.amount.toFixed(2),
    item_name: CONSULTATION.itemName,
    item_description: `${CONSULTATION.durationMinutes}-minute consultation on ${booking.date} at ${booking.time}`,
  }

  const signature = generatePayFastSignature(data, PAYFAST.passphrase)
  data.signature = signature

  return { url: PAYFAST.processUrl, data }
}

// ── Google Calendar ──────────────────────────────────────────────────────────
export async function getGoogleAccessToken(): Promise<string | null> {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_KEY?.replace(/\\n/g, "\n")
  const calendarId = process.env.GOOGLE_CALENDAR_ID

  if (!clientEmail || !privateKey || !calendarId) {
    console.warn("Google Calendar credentials not configured")
    return null
  }

  const now = Math.floor(Date.now() / 1000)
  const header = Buffer.from(JSON.stringify({ alg: "RS256", typ: "JWT" })).toString("base64url")
  const payload = Buffer.from(JSON.stringify({
    iss: clientEmail,
    scope: "https://www.googleapis.com/auth/calendar",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  })).toString("base64url")

  const signInput = `${header}.${payload}`
  const sign = crypto.createSign("RSA-SHA256")
  sign.update(signInput)
  const signature = sign.sign(privateKey, "base64url")
  const jwt = `${signInput}.${signature}`

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  })

  if (!res.ok) {
    console.error("Google OAuth error:", await res.text())
    return null
  }

  const tokenData = await res.json()
  return tokenData.access_token
}

export async function getGoogleBusyTimes(date: string): Promise<{ start: string; end: string }[]> {
  const token = await getGoogleAccessToken()
  if (!token) return []

  const calendarId = process.env.GOOGLE_CALENDAR_ID
  const timeMin = `${date}T00:00:00+02:00`
  const timeMax = `${date}T23:59:59+02:00`

  const res = await fetch("https://www.googleapis.com/calendar/v3/freeBusy", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      timeMin,
      timeMax,
      items: [{ id: calendarId }],
    }),
  })

  if (!res.ok) {
    console.error("Google FreeBusy error:", await res.text())
    return []
  }

  const data = await res.json()
  return data.calendars?.[calendarId!]?.busy || []
}

export async function createCalendarEvent(booking: Booking): Promise<{ eventId: string; meetLink: string } | null> {
  const token = await getGoogleAccessToken()
  if (!token) return null

  const calendarId = process.env.GOOGLE_CALENDAR_ID
  const startDateTime = `${booking.date}T${booking.time}:00+02:00`
  const endMs = new Date(startDateTime).getTime() + booking.duration * 60000
  const endDateTime = new Date(endMs).toISOString()

  const event = {
    summary: `Legal Consultation — ${booking.firstName} ${booking.lastName}`,
    description: [
      `Client: ${booking.firstName} ${booking.lastName}`,
      `Email: ${booking.email}`,
      `Phone: ${booking.phone}`,
      `Matter: ${booking.matter}`,
      ``,
      `Paid: R${booking.amount} via PayFast`,
      `Booking ID: ${booking.id}`,
    ].join("\n"),
    start: { dateTime: startDateTime, timeZone: "Africa/Johannesburg" },
    end: { dateTime: endDateTime, timeZone: "Africa/Johannesburg" },
    attendees: [
      { email: booking.email, displayName: `${booking.firstName} ${booking.lastName}` },
    ],
    conferenceData: {
      createRequest: {
        requestId: booking.id,
        conferenceSolutionKey: { type: "hangoutsMeet" },
      },
    },
    reminders: {
      useDefault: false,
      overrides: [
        { method: "email", minutes: 60 },
        { method: "popup", minutes: 15 },
      ],
    },
  }

  const res = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(calendarId!)}/events?conferenceDataVersion=1&sendUpdates=all`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event),
    }
  )

  if (!res.ok) {
    console.error("Google Calendar create event error:", await res.text())
    return null
  }

  const created = await res.json()
  return {
    eventId: created.id,
    meetLink: created.hangoutLink || created.conferenceData?.entryPoints?.[0]?.uri || "",
  }
}

// ── Confirmation email ───────────────────────────────────────────────────────
export function buildConfirmationEmailHTML(booking: Booking): string {
  const dateObj = new Date(`${booking.date}T${booking.time}:00+02:00`)
  const dateFormatted = dateObj.toLocaleDateString("en-ZA", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  })
  const timeFormatted = booking.time

  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #2A2A38;">
      <div style="background: #C95520; padding: 24px; border-radius: 12px 12px 0 0; text-align: center;">
        <h1 style="color: #fff; margin: 0; font-size: 22px;">Consultation Confirmed</h1>
      </div>
      <div style="background: #fff; padding: 28px; border: 1px solid #eee; border-top: none; border-radius: 0 0 12px 12px;">
        <p style="font-size: 15px; line-height: 1.6;">
          Dear ${booking.firstName},
        </p>
        <p style="font-size: 15px; line-height: 1.6;">
          Thank you for booking a consultation with <strong>RFH Inc Attorneys</strong>. Your payment of <strong>R${booking.amount}</strong> has been received.
        </p>

        <div style="background: #FFF5F0; border: 1px solid #F0C9B8; border-radius: 10px; padding: 20px; margin: 24px 0;">
          <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
            <tr>
              <td style="padding: 6px 0; color: #888; width: 100px;">Date</td>
              <td style="padding: 6px 0; font-weight: 600;">${dateFormatted}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #888;">Time</td>
              <td style="padding: 6px 0; font-weight: 600;">${timeFormatted} (SAST)</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #888;">Duration</td>
              <td style="padding: 6px 0; font-weight: 600;">${booking.duration} minutes</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #888;">Matter</td>
              <td style="padding: 6px 0; font-weight: 600;">${booking.matter}</td>
            </tr>
            ${booking.meetLink ? `
            <tr>
              <td style="padding: 6px 0; color: #888;">Meeting</td>
              <td style="padding: 6px 0;">
                <a href="${booking.meetLink}" style="color: #C95520; font-weight: 600; text-decoration: none;">
                  Join Google Meet →
                </a>
              </td>
            </tr>
            ` : ""}
          </table>
        </div>

        ${booking.meetLink ? `
        <div style="text-align: center; margin: 24px 0;">
          <a href="${booking.meetLink}" style="display: inline-block; background: #C95520; color: #fff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 15px;">
            Join Google Meet
          </a>
        </div>
        ` : ""}

        <p style="font-size: 14px; line-height: 1.6; color: #666;">
          A calendar invite has been sent to your email. If you need to reschedule or have any questions before the consultation, please contact us:
        </p>

        <div style="margin: 16px 0; font-size: 14px;">
          <strong>Raymond Hauptfleisch</strong><br>
          Phone/WhatsApp: +27 87 550 0932<br>
          Email: raymond@rfhinc.co.za
        </div>

        <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;">
        <p style="font-size: 12px; color: #999; margin: 0;">
          RFH Inc Attorneys &middot; 36 Alcade Rd, Lynnwood Glen, Pretoria, 0081<br>
          Reg: 2014/160647/21 &middot; FIC: AI/140818/00029
        </p>
      </div>
    </div>
  `
}

export function buildNotificationEmailHTML(booking: Booking): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #C95520; border-bottom: 2px solid #FFF5F0; padding-bottom: 8px;">
        New Consultation Booking
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 14px;">
        <tr>
          <td style="padding: 8px 12px; background: #FFF5F0; font-weight: 600; width: 120px; color: #C95520;">Client</td>
          <td style="padding: 8px 12px;">${booking.firstName} ${booking.lastName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; background: #FFF5F0; font-weight: 600; color: #C95520;">Email</td>
          <td style="padding: 8px 12px;">${booking.email}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; background: #FFF5F0; font-weight: 600; color: #C95520;">Phone</td>
          <td style="padding: 8px 12px;">${booking.phone}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; background: #FFF5F0; font-weight: 600; color: #C95520;">Date</td>
          <td style="padding: 8px 12px;">${booking.date} at ${booking.time}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; background: #FFF5F0; font-weight: 600; color: #C95520;">Matter</td>
          <td style="padding: 8px 12px;">${booking.matter}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; background: #FFF5F0; font-weight: 600; color: #C95520;">Amount</td>
          <td style="padding: 8px 12px;">R${booking.amount} (paid via PayFast)</td>
        </tr>
        ${booking.meetLink ? `
        <tr>
          <td style="padding: 8px 12px; background: #FFF5F0; font-weight: 600; color: #C95520;">Meet Link</td>
          <td style="padding: 8px 12px;"><a href="${booking.meetLink}">${booking.meetLink}</a></td>
        </tr>
        ` : ""}
      </table>
      <p style="margin-top: 16px; color: #666; font-size: 13px;">
        Booking ID: ${booking.id}
      </p>
    </div>
  `
}
