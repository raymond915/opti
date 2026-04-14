import { promises as fs } from "fs"
import path from "path"

// ── Types ────────────────────────────────────────────────────────────────────
export type ChatMessage = {
  role: "user" | "assistant"
  content: string
  timestamp: string
}

export type ChatSession = {
  id: string
  site: "optihr" | "rfhinc"
  startedAt: string
  lastActivityAt: string
  messages: ChatMessage[]
  metadata: {
    ip?: string
    userAgent?: string
    leadCaptured?: boolean
    leadName?: string
    leadEmail?: string
    leadPhone?: string
    leadSummary?: string
  }
}

type LogStore = {
  sessions: ChatSession[]
}

// ── Config ───────────────────────────────────────────────────────────────────
const LOG_DIR = process.env.CHAT_LOG_DIR || path.join(process.cwd(), "chat-logs")
const LOG_FILE = path.join(LOG_DIR, "conversations.json")

// ── Helpers ──────────────────────────────────────────────────────────────────
async function ensureLogDir() {
  try {
    await fs.mkdir(LOG_DIR, { recursive: true })
  } catch {
    // directory exists
  }
}

async function readStore(): Promise<LogStore> {
  try {
    const data = await fs.readFile(LOG_FILE, "utf-8")
    return JSON.parse(data) as LogStore
  } catch {
    return { sessions: [] }
  }
}

async function writeStore(store: LogStore) {
  await ensureLogDir()
  await fs.writeFile(LOG_FILE, JSON.stringify(store, null, 2), "utf-8")
}

// ── Public API ───────────────────────────────────────────────────────────────

/**
 * Log a full conversation exchange (user message + assistant response).
 * Creates a new session if the sessionId doesn't exist yet.
 */
export async function logConversation(opts: {
  sessionId: string
  site: "optihr" | "rfhinc"
  userMessage: string
  assistantMessage: string
  ip?: string
  userAgent?: string
  leadCaptured?: boolean
  leadName?: string
  leadEmail?: string
  leadPhone?: string
  leadSummary?: string
}) {
  const store = await readStore()
  const now = new Date().toISOString()

  let session = store.sessions.find((s) => s.id === opts.sessionId)

  if (!session) {
    session = {
      id: opts.sessionId,
      site: opts.site,
      startedAt: now,
      lastActivityAt: now,
      messages: [],
      metadata: {
        ip: opts.ip,
        userAgent: opts.userAgent,
      },
    }
    store.sessions.push(session)
  }

  session.lastActivityAt = now

  session.messages.push({
    role: "user",
    content: opts.userMessage,
    timestamp: now,
  })

  session.messages.push({
    role: "assistant",
    content: opts.assistantMessage,
    timestamp: now,
  })

  // Update lead info if captured
  if (opts.leadCaptured) {
    session.metadata.leadCaptured = true
    if (opts.leadName) session.metadata.leadName = opts.leadName
    if (opts.leadEmail) session.metadata.leadEmail = opts.leadEmail
    if (opts.leadPhone) session.metadata.leadPhone = opts.leadPhone
    if (opts.leadSummary) session.metadata.leadSummary = opts.leadSummary
  }

  await writeStore(store)
}

/**
 * Get all sessions, optionally filtered by site.
 * Returns newest first, with pagination.
 */
export async function getSessions(opts?: {
  site?: "optihr" | "rfhinc"
  limit?: number
  offset?: number
  search?: string
}): Promise<{ sessions: ChatSession[]; total: number }> {
  const store = await readStore()
  let sessions = store.sessions

  // Filter by site
  if (opts?.site) {
    sessions = sessions.filter((s) => s.site === opts.site)
  }

  // Search in messages or lead name
  if (opts?.search) {
    const q = opts.search.toLowerCase()
    sessions = sessions.filter(
      (s) =>
        s.metadata.leadName?.toLowerCase().includes(q) ||
        s.metadata.leadEmail?.toLowerCase().includes(q) ||
        s.messages.some((m) => m.content.toLowerCase().includes(q))
    )
  }

  // Sort newest first
  sessions.sort(
    (a, b) => new Date(b.lastActivityAt).getTime() - new Date(a.lastActivityAt).getTime()
  )

  const total = sessions.length
  const limit = opts?.limit ?? 50
  const offset = opts?.offset ?? 0

  return {
    sessions: sessions.slice(offset, offset + limit),
    total,
  }
}

/**
 * Get a single session by ID.
 */
export async function getSession(sessionId: string): Promise<ChatSession | null> {
  const store = await readStore()
  return store.sessions.find((s) => s.id === sessionId) ?? null
}

/**
 * Delete a session by ID.
 */
export async function deleteSession(sessionId: string): Promise<boolean> {
  const store = await readStore()
  const idx = store.sessions.findIndex((s) => s.id === sessionId)
  if (idx === -1) return false
  store.sessions.splice(idx, 1)
  await writeStore(store)
  return true
}

/**
 * Export all sessions as CSV.
 */
export async function exportSessionsCSV(site?: "optihr" | "rfhinc"): Promise<string> {
  const { sessions } = await getSessions({ site, limit: 10000 })

  const rows = [
    [
      "Session ID",
      "Site",
      "Started",
      "Last Activity",
      "Messages",
      "Lead Name",
      "Lead Email",
      "Lead Phone",
      "Lead Summary",
    ].join(","),
  ]

  for (const s of sessions) {
    rows.push(
      [
        s.id,
        s.site,
        s.startedAt,
        s.lastActivityAt,
        s.messages.length,
        `"${(s.metadata.leadName || "").replace(/"/g, '""')}"`,
        `"${(s.metadata.leadEmail || "").replace(/"/g, '""')}"`,
        `"${(s.metadata.leadPhone || "").replace(/"/g, '""')}"`,
        `"${(s.metadata.leadSummary || "").replace(/"/g, '""')}"`,
      ].join(",")
    )
  }

  return rows.join("\n")
}
