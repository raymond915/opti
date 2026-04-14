"use client"

import { useState, useEffect, useCallback } from "react"

type ChatMessage = {
  role: "user" | "assistant"
  content: string
  timestamp: string
}

type ChatSession = {
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

export default function ChatLogsAdmin() {
  const [token, setToken] = useState("")
  const [authenticated, setAuthenticated] = useState(false)
  const [sessions, setSessions] = useState<ChatSession[]>([])
  const [total, setTotal] = useState(0)
  const [selectedSession, setSelectedSession] = useState<ChatSession | null>(null)
  const [search, setSearch] = useState("")
  const [siteFilter, setSiteFilter] = useState<"" | "optihr" | "rfhinc">("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [page, setPage] = useState(0)
  const pageSize = 25

  const fetchSessions = useCallback(async () => {
    setLoading(true)
    setError("")
    try {
      const params = new URLSearchParams()
      if (siteFilter) params.set("site", siteFilter)
      if (search) params.set("search", search)
      params.set("limit", String(pageSize))
      params.set("offset", String(page * pageSize))

      const res = await fetch(`/api/chat/logs?${params}`, {
        headers: { Authorization: `Bearer ${token}` },
      })

      if (res.status === 401) {
        setAuthenticated(false)
        setError("Invalid token")
        return
      }

      const data = await res.json()
      setSessions(data.sessions || [])
      setTotal(data.total || 0)
    } catch {
      setError("Failed to fetch sessions")
    } finally {
      setLoading(false)
    }
  }, [token, siteFilter, search, page])

  useEffect(() => {
    if (authenticated) fetchSessions()
  }, [authenticated, fetchSessions])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (token.trim()) {
      setAuthenticated(true)
    }
  }

  const viewSession = async (id: string) => {
    try {
      const res = await fetch(`/api/chat/logs?id=${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      const data = await res.json()
      setSelectedSession(data.session || null)
    } catch {
      setError("Failed to load session")
    }
  }

  const formatDate = (iso: string) => {
    const d = new Date(iso)
    return d.toLocaleDateString("en-ZA", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  const totalPages = Math.ceil(total / pageSize)

  // ── Login screen ──────────────────────────────────────────────────────────
  if (!authenticated) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f5f7fa", fontFamily: "system-ui, sans-serif" }}>
        <form onSubmit={handleLogin} style={{ background: "#fff", padding: "2rem", borderRadius: "12px", boxShadow: "0 2px 12px rgba(0,0,0,0.08)", width: "100%", maxWidth: "380px" }}>
          <h1 style={{ margin: "0 0 0.5rem", fontSize: "1.4rem", color: "#053c43" }}>Chat Logs</h1>
          <p style={{ margin: "0 0 1.5rem", color: "#666", fontSize: "0.9rem" }}>Enter your admin token to continue.</p>
          {error && <p style={{ color: "#c33", fontSize: "0.85rem", margin: "0 0 1rem" }}>{error}</p>}
          <input
            type="password"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Admin token"
            style={{ width: "100%", padding: "0.65rem 0.8rem", border: "1px solid #ddd", borderRadius: "8px", fontSize: "0.95rem", marginBottom: "1rem", boxSizing: "border-box" }}
          />
          <button type="submit" style={{ width: "100%", padding: "0.65rem", background: "#053c43", color: "#fff", border: "none", borderRadius: "8px", fontSize: "0.95rem", cursor: "pointer" }}>
            Sign in
          </button>
        </form>
      </div>
    )
  }

  // ── Session detail view ───────────────────────────────────────────────────
  if (selectedSession) {
    const s = selectedSession
    return (
      <div style={{ minHeight: "100vh", background: "#f5f7fa", fontFamily: "system-ui, sans-serif", padding: "1.5rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <button onClick={() => setSelectedSession(null)} style={{ background: "none", border: "none", color: "#053c43", cursor: "pointer", fontSize: "0.9rem", marginBottom: "1rem", padding: 0 }}>
            ← Back to sessions
          </button>

          <div style={{ background: "#fff", borderRadius: "12px", padding: "1.5rem", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", marginBottom: "1.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem" }}>
              <div>
                <h2 style={{ margin: "0 0 0.25rem", fontSize: "1.1rem", color: "#053c43" }}>
                  {s.metadata.leadName || "Anonymous visitor"}
                </h2>
                <p style={{ margin: 0, color: "#888", fontSize: "0.82rem" }}>{s.id}</p>
              </div>
              <span style={{ background: s.site === "optihr" ? "#e4f8ed" : "#fff3e0", color: s.site === "optihr" ? "#0d937c" : "#c95520", padding: "0.2rem 0.6rem", borderRadius: "6px", fontSize: "0.8rem", fontWeight: 600 }}>
                {s.site}
              </span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "0.8rem", marginTop: "1rem", fontSize: "0.85rem" }}>
              <div><span style={{ color: "#888" }}>Started:</span> {formatDate(s.startedAt)}</div>
              <div><span style={{ color: "#888" }}>Last active:</span> {formatDate(s.lastActivityAt)}</div>
              <div><span style={{ color: "#888" }}>Messages:</span> {s.messages.length}</div>
              {s.metadata.leadEmail && <div><span style={{ color: "#888" }}>Email:</span> {s.metadata.leadEmail}</div>}
              {s.metadata.leadPhone && <div><span style={{ color: "#888" }}>Phone:</span> {s.metadata.leadPhone}</div>}
            </div>

            {s.metadata.leadSummary && (
              <div style={{ marginTop: "0.8rem", padding: "0.6rem 0.8rem", background: "#f0fdf4", borderRadius: "8px", fontSize: "0.85rem", color: "#053c43" }}>
                <strong>Enquiry:</strong> {s.metadata.leadSummary}
              </div>
            )}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
            {s.messages.map((m, i) => (
              <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
                <div style={{
                  maxWidth: "75%",
                  padding: "0.8rem 1rem",
                  borderRadius: "12px",
                  background: m.role === "user" ? "#053c43" : "#fff",
                  color: m.role === "user" ? "#fff" : "#333",
                  boxShadow: m.role === "assistant" ? "0 1px 4px rgba(0,0,0,0.06)" : "none",
                  fontSize: "0.9rem",
                  lineHeight: 1.5,
                }}>
                  <div style={{ whiteSpace: "pre-wrap" }}>{m.content}</div>
                  <div style={{ fontSize: "0.7rem", color: m.role === "user" ? "rgba(255,255,255,0.6)" : "#aaa", marginTop: "0.4rem", textAlign: "right" }}>
                    {new Date(m.timestamp).toLocaleTimeString("en-ZA", { hour: "2-digit", minute: "2-digit" })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // ── Session list ──────────────────────────────────────────────────────────
  return (
    <div style={{ minHeight: "100vh", background: "#f5f7fa", fontFamily: "system-ui, sans-serif", padding: "1.5rem" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
          <h1 style={{ margin: 0, fontSize: "1.4rem", color: "#053c43" }}>Chat Conversations</h1>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <a
              href={`/api/chat/logs?format=csv&token=${encodeURIComponent(token)}${siteFilter ? `&site=${siteFilter}` : ""}`}
              style={{ padding: "0.5rem 1rem", background: "#053c43", color: "#fff", borderRadius: "8px", textDecoration: "none", fontSize: "0.85rem" }}
            >
              Export CSV
            </a>
          </div>
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.25rem", flexWrap: "wrap" }}>
          <input
            type="text"
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(0) }}
            placeholder="Search by name, email, or message..."
            style={{ flex: 1, minWidth: "200px", padding: "0.55rem 0.8rem", border: "1px solid #ddd", borderRadius: "8px", fontSize: "0.9rem" }}
          />
          <select
            value={siteFilter}
            onChange={(e) => { setSiteFilter(e.target.value as "" | "optihr" | "rfhinc"); setPage(0) }}
            style={{ padding: "0.55rem 0.8rem", border: "1px solid #ddd", borderRadius: "8px", fontSize: "0.9rem", background: "#fff" }}
          >
            <option value="">All sites</option>
            <option value="optihr">OptiHR</option>
            <option value="rfhinc">RFH Inc</option>
          </select>
          <button onClick={fetchSessions} style={{ padding: "0.55rem 1rem", background: "#0d937c", color: "#fff", border: "none", borderRadius: "8px", fontSize: "0.9rem", cursor: "pointer" }}>
            {loading ? "Loading..." : "Refresh"}
          </button>
        </div>

        {error && <p style={{ color: "#c33", fontSize: "0.85rem" }}>{error}</p>}

        {/* Table */}
        <div style={{ background: "#fff", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", overflow: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.88rem" }}>
            <thead>
              <tr style={{ background: "#f8fafb", borderBottom: "1px solid #eee" }}>
                <th style={{ textAlign: "left", padding: "0.75rem 1rem", color: "#555", fontWeight: 600 }}>Visitor</th>
                <th style={{ textAlign: "left", padding: "0.75rem 1rem", color: "#555", fontWeight: 600 }}>Site</th>
                <th style={{ textAlign: "left", padding: "0.75rem 1rem", color: "#555", fontWeight: 600 }}>Date</th>
                <th style={{ textAlign: "center", padding: "0.75rem 1rem", color: "#555", fontWeight: 600 }}>Msgs</th>
                <th style={{ textAlign: "center", padding: "0.75rem 1rem", color: "#555", fontWeight: 600 }}>Lead</th>
              </tr>
            </thead>
            <tbody>
              {sessions.length === 0 && !loading && (
                <tr><td colSpan={5} style={{ padding: "2rem", textAlign: "center", color: "#999" }}>No conversations found</td></tr>
              )}
              {sessions.map((s) => (
                <tr
                  key={s.id}
                  onClick={() => viewSession(s.id)}
                  style={{ borderBottom: "1px solid #f0f0f0", cursor: "pointer" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#f8fafb")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "")}
                >
                  <td style={{ padding: "0.7rem 1rem" }}>
                    <div style={{ fontWeight: 500, color: "#053c43" }}>{s.metadata.leadName || "Anonymous"}</div>
                    {s.metadata.leadEmail && <div style={{ fontSize: "0.78rem", color: "#888" }}>{s.metadata.leadEmail}</div>}
                  </td>
                  <td style={{ padding: "0.7rem 1rem" }}>
                    <span style={{ background: s.site === "optihr" ? "#e4f8ed" : "#fff3e0", color: s.site === "optihr" ? "#0d937c" : "#c95520", padding: "0.15rem 0.5rem", borderRadius: "4px", fontSize: "0.78rem", fontWeight: 600 }}>
                      {s.site}
                    </span>
                  </td>
                  <td style={{ padding: "0.7rem 1rem", color: "#666" }}>{formatDate(s.lastActivityAt)}</td>
                  <td style={{ padding: "0.7rem 1rem", textAlign: "center", color: "#666" }}>{s.messages.length}</td>
                  <td style={{ padding: "0.7rem 1rem", textAlign: "center" }}>
                    {s.metadata.leadCaptured ? (
                      <span style={{ color: "#0d937c", fontWeight: 600 }}>Yes</span>
                    ) : (
                      <span style={{ color: "#ccc" }}>—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "1.25rem" }}>
            <button onClick={() => setPage(Math.max(0, page - 1))} disabled={page === 0} style={{ padding: "0.4rem 0.8rem", border: "1px solid #ddd", borderRadius: "6px", background: "#fff", cursor: page === 0 ? "default" : "pointer", color: page === 0 ? "#ccc" : "#333", fontSize: "0.85rem" }}>
              Previous
            </button>
            <span style={{ padding: "0.4rem 0.8rem", fontSize: "0.85rem", color: "#666" }}>
              Page {page + 1} of {totalPages} ({total} total)
            </span>
            <button onClick={() => setPage(Math.min(totalPages - 1, page + 1))} disabled={page >= totalPages - 1} style={{ padding: "0.4rem 0.8rem", border: "1px solid #ddd", borderRadius: "6px", background: "#fff", cursor: page >= totalPages - 1 ? "default" : "pointer", color: page >= totalPages - 1 ? "#ccc" : "#333", fontSize: "0.85rem" }}>
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
