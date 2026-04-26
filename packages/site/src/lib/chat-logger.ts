import { EmailParams, MailerSend, Recipient, Sender } from "mailersend"

// ── Types ────────────────────────────────────────────────────────────────────
export type ChatMessage = {
	role: "user" | "assistant"
	content: string
	timestamp: string
}

export type ChatSessionMetadata = {
	ip?: string
	userAgent?: string
	leadCaptured?: boolean
	leadName?: string
	leadEmail?: string
	leadPhone?: string
	leadLocation?: string
	leadSummary?: string
}

export type ChatSession = {
	id: string
	site: "optihr" | "rfhinc"
	startedAt: string
	lastActivityAt: string
	messages: ChatMessage[]
	metadata: ChatSessionMetadata
}

// ── MailerSend client ───────────────────────────────────────────────────────
const mailer = process.env.MAILERSEND_API_TOKEN
	? new MailerSend({ apiKey: process.env.MAILERSEND_API_TOKEN })
	: null

// EMAIL_FROM defaults to a sensible fallback, but split into address + name
// because MailerSend wants them separate.
const FROM_ADDRESS = process.env.EMAIL_FROM_ADDRESS || "hello@optihr.co.za"
const FROM_NAME = process.env.EMAIL_FROM_NAME || "OptiHR"

const TRANSCRIPT_RECIPIENTS = {
	optihr: [{ email: "raymond@optihr.co.za", name: "Raymond Hauptfleisch" }],
	rfhinc: [{ email: "raymond@rfhinc.co.za", name: "Raymond Hauptfleisch" }],
} as const

// ── No-op (kept for backwards compatibility with api/chat/route.ts) ─────────
/**
 * Per-message logging is a no-op in the serverless deployment.
 * Lead emails fire from api/chat/route.ts via sendLeadEmail; full transcripts
 * fire from api/chat/end via sendTranscriptEmail when the session ends.
 */
export async function logConversation(_opts: {
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
}): Promise<void> {
	// Intentionally empty — see file header.
	return
}

// ── Transcript email (called from /api/chat/end) ─────────────────────────────
function escapeHtml(text: string): string {
	return text
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;")
}

function formatTranscriptHtml(session: ChatSession): string {
	const startedLocal = new Date(session.startedAt).toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" })
	const endedLocal = new Date(session.lastActivityAt).toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" })
	const durationMins = Math.round(
		(new Date(session.lastActivityAt).getTime() - new Date(session.startedAt).getTime()) / 60000,
	)

	const meta = session.metadata
	const leadBlock = meta.leadCaptured
		? `<div style="background:#e4f8ed;border-left:4px solid #053c43;padding:12px 16px;margin:0 0 16px;border-radius:6px;">
				<div style="font-weight:600;color:#053c43;margin-bottom:6px;">Lead captured</div>
				${meta.leadName ? `<div><strong>Name:</strong> ${escapeHtml(meta.leadName)}</div>` : ""}
				${meta.leadEmail ? `<div><strong>Email:</strong> ${escapeHtml(meta.leadEmail)}</div>` : ""}
				${meta.leadPhone ? `<div><strong>Phone:</strong> ${escapeHtml(meta.leadPhone)}</div>` : ""}
				${meta.leadLocation ? `<div><strong>Location:</strong> ${escapeHtml(meta.leadLocation)}</div>` : ""}
				${meta.leadSummary ? `<div style="margin-top:6px;"><strong>Summary:</strong> ${escapeHtml(meta.leadSummary)}</div>` : ""}
			</div>`
		: `<div style="background:#f5f5f5;border-left:4px solid #999;padding:12px 16px;margin:0 0 16px;border-radius:6px;color:#555;">
				No lead captured during this session.
			</div>`

	const messagesHtml = session.messages
		.map((m) => {
			const isUser = m.role === "user"
			const bg = isUser ? "#f3f6f8" : "#ffffff"
			const border = isUser ? "#cbd5d8" : "#e4f8ed"
			const label = isUser ? "Visitor" : "OptiHR Assistant"
			return `<div style="background:${bg};border:1px solid ${border};border-radius:6px;padding:10px 14px;margin-bottom:8px;">
				<div style="font-size:12px;font-weight:600;color:#053c43;margin-bottom:4px;">${label}</div>
				<div style="font-size:14px;color:#222;white-space:pre-wrap;">${escapeHtml(m.content)}</div>
			</div>`
		})
		.join("")

	return `<!doctype html><html><body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#222;background:#fafafa;padding:24px;">
		<div style="max-width:640px;margin:0 auto;background:#ffffff;padding:24px;border-radius:8px;border:1px solid #e5e7eb;">
			<h2 style="margin:0 0 4px;color:#053c43;">Chat transcript — ${session.site === "optihr" ? "OptiHR" : "RFH Inc"}</h2>
			<div style="font-size:13px;color:#666;margin-bottom:20px;">
				Session ${session.id}<br/>
				Started: ${startedLocal}<br/>
				Ended: ${endedLocal} (${durationMins} min)<br/>
				${meta.ip ? `IP: ${escapeHtml(meta.ip)}<br/>` : ""}
				${meta.userAgent ? `User-Agent: ${escapeHtml(meta.userAgent.slice(0, 120))}` : ""}
			</div>
			${leadBlock}
			<div>${messagesHtml}</div>
		</div>
	</body></html>`
}

function formatTranscriptText(session: ChatSession): string {
	const lines = [
		`Chat transcript — ${session.site === "optihr" ? "OptiHR" : "RFH Inc"}`,
		`Session: ${session.id}`,
		`Started: ${session.startedAt}`,
		`Ended: ${session.lastActivityAt}`,
		"",
	]
	const meta = session.metadata
	if (meta.leadCaptured) {
		lines.push("LEAD CAPTURED:")
		if (meta.leadName) lines.push(`  Name: ${meta.leadName}`)
		if (meta.leadEmail) lines.push(`  Email: ${meta.leadEmail}`)
		if (meta.leadPhone) lines.push(`  Phone: ${meta.leadPhone}`)
		if (meta.leadLocation) lines.push(`  Location: ${meta.leadLocation}`)
		if (meta.leadSummary) lines.push(`  Summary: ${meta.leadSummary}`)
		lines.push("")
	}
	for (const m of session.messages) {
		lines.push(m.role === "user" ? "── Visitor ──" : "── Assistant ──")
		lines.push(m.content)
		lines.push("")
	}
	return lines.join("\n")
}

/**
 * Email a full chat transcript when a session ends.
 * Called from /api/chat/end (which the chat widget pings on unload).
 */
export async function sendTranscriptEmail(session: ChatSession): Promise<{ ok: boolean; reason?: string }> {
	if (!mailer) {
		console.warn("MAILERSEND_API_TOKEN not set — skipping transcript email")
		return { ok: false, reason: "no_mailersend_token" }
	}

	// Skip empty sessions (e.g. widget opened but no message exchanged).
	if (!session.messages || session.messages.length === 0) {
		return { ok: false, reason: "empty_session" }
	}

	const recipients = TRANSCRIPT_RECIPIENTS[session.site] ?? TRANSCRIPT_RECIPIENTS.optihr
	const subjectPrefix = session.metadata.leadCaptured ? "🟢 Chat transcript" : "Chat transcript"
	const subject = session.metadata.leadCaptured && session.metadata.leadName
		? `${subjectPrefix} — ${session.metadata.leadName}`
		: `${subjectPrefix} — anonymous visitor (${session.messages.length} msgs)`

	const params = new EmailParams()
		.setFrom(new Sender(FROM_ADDRESS, FROM_NAME))
		.setTo(recipients.map((r) => new Recipient(r.email, r.name)))
		.setSubject(subject)
		.setHtml(formatTranscriptHtml(session))
		.setText(formatTranscriptText(session))

	try {
		await mailer.email.send(params)
		return { ok: true }
	} catch (err) {
		console.error("Transcript email error:", err)
		return { ok: false, reason: (err as Error).message }
	}
}
