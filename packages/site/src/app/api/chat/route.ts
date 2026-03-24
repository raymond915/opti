import type { NextRequest } from "next/server"
import { Resend } from "resend"

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

// ── System prompt ──────────────────────────────────────────────────────────────
const SYSTEM_PROMPT = `You are the virtual assistant for OptiHR and OptiAI, a South African HR and AI consultancy based in Pretoria. Your role is to warmly engage website visitors, help them understand how OptiHR and OptiAI can help their specific situation, and — naturally through conversation — gather their contact details so a consultant can follow up.

## About OptiHR
OptiHR is an HR consulting firm that helps businesses and schools get their people strategy right. Services include:
- **HR for Small Businesses**: Employment contracts, HR policies, onboarding, performance management, disciplinary procedures, CCMA representation. Many SMEs don't need a full-time HR manager — OptiHR provides that expertise on demand.
- **HR for Large Businesses**: Scalable HR frameworks, compliance audits, skills development, employment equity, HR process optimisation, CCMA and Labour Court representation.
- **HR for Independent Schools**: SACE compliance, governing body HR obligations, teacher contracts, disciplinary hearings, staff performance frameworks, union engagement.
- **Compliance & Legal**: POPIA compliance, employment law advice, employment equity reporting, disciplinary and grievance procedures.
- **Recruitment**: Finding and placing the right talent across sectors.

## About OptiAI (powered by OptiHR)
OptiAI is the AI consultancy arm of OptiHR. The mission is NOT to sell software — it is to provide personalised, niche AI interventions that optimise how a specific business operates.

**The core insight**: You no longer buy software and then learn to use it. With AI, the software learns from your enterprise — your workflows, terminology, and data. The business stays in control.

**The OptiAI approach**:
1. Assess — Spend time inside the business, observe workflows, identify where time is lost
2. Recommend — Map practical AI options with honest cost/benefit/training analysis
3. Implement — Manage rollout at the client's pace, train staff properly
4. Ongoing support — Structured SLA with regular consultant visits
5. Develop & evolve — AI capability grows over time

**Practical AI applications OptiAI can configure**:
- Email drafting, inbox management, communication automation
- Meeting transcription and CRM auto-update
- Management account generation and financial reporting
- Timesheet and HR admin automation
- Calendar management and scheduling assistants
- Custom dashboards and reporting without developers
- Industry-specific tools for schools, medical practices, legal firms, accounting firms

**Key message**: AI is not just ChatGPT. There are hundreds of purpose-built tools. OptiAI finds the right ones for each specific business.

## Contact Details
- Email: hello@optihr.co.za
- Office: 087 550 0932
- Raymond: raymond@optihr.co.za · 082 805 5050
- Rhodene: rhodene@optihr.co.za · 071 880 7971
- WhatsApp: +27 68 636 2218 (available via the WhatsApp button in the chat)
- Location: Pretoria, South Africa

## Your conversation style
- Warm, professional, and consultative — not salesy
- Ask open questions to understand the visitor's situation
- Tailor explanations to their specific business context (school, SME, large business, etc.)
- Use plain language — avoid unnecessary jargon
- Be honest: OptiAI does not push AI adoption. If AI isn't right for someone, say so.
- Keep responses concise — 2–4 short paragraphs maximum

## Lead capture
Your goal is to naturally gather the following during conversation:
1. Their first name (ask early — "Who am I speaking with?")
2. Their business type / size / sector
3. Their main challenge or reason for visiting
4. Their email address OR phone number (explain a consultant will follow up)

Do NOT make it feel like a form. Weave the questions naturally into the conversation. Once you have their name and at least one contact method (email or phone), signal this by appending the following block to the END of one of your responses. This block will be automatically removed before the user sees it — do not reference it or explain it:

[[LEAD_DATA]]{"name":"THEIR_NAME","email":"EMAIL_OR_EMPTY","phone":"PHONE_OR_EMPTY","summary":"ONE_SENTENCE_SUMMARY_OF_THEIR_ENQUIRY"}[[/LEAD_DATA]]

Only include this block once. Continue the conversation naturally after including it.

## Important
- Do not fabricate services, pricing, or case studies
- If asked about pricing, say it varies by engagement and suggest a free consultation to get an accurate picture
- Always encourage a free consultation as the natural next step
- South African context: mention POPIA, CCMA, Labour Court, SACE where relevant
`

// ── Types ───────────────────────────────────────────────────────────────────
type Message = {
	role: "user" | "assistant"
	content: string
}

type LeadData = {
	name: string
	email: string
	phone: string
	summary: string
}

// ── Helpers ─────────────────────────────────────────────────────────────────
const LEAD_PATTERN = /\[\[LEAD_DATA\]\]([\s\S]*?)\[\[\/LEAD_DATA\]\]/

function extractLead(text: string): { clean: string; lead: LeadData | null } {
	const match = LEAD_PATTERN.exec(text)
	if (!match) return { clean: text, lead: null }

	let lead: LeadData | null = null
	try {
		lead = JSON.parse(match[1]!.trim())
	} catch {
		// malformed JSON — ignore
	}

	const clean = text.replace(LEAD_PATTERN, "").trim()
	return { clean, lead }
}

async function sendLeadEmail(lead: LeadData) {
	if (!resend) {
		console.warn("RESEND_API_KEY not set — skipping lead email")
		return
	}
	try {
		await resend.emails.send({
			from: "onboarding@resend.dev",
			to: ["raymond@optihr.co.za", "rhodene@optihr.co.za"],
			subject: `New website lead: ${lead.name}`,
			html: `
				<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
					<h2 style="color: #053c43; border-bottom: 2px solid #adeacb; padding-bottom: 8px;">
						New Lead from OptiHR Chat Widget
					</h2>
					<table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
						<tr>
							<td style="padding: 8px 12px; background: #e4f8ed; font-weight: 600; width: 140px; color: #1e5056;">Name</td>
							<td style="padding: 8px 12px; border-bottom: 1px solid #e4f8ed;">${lead.name || "—"}</td>
						</tr>
						<tr>
							<td style="padding: 8px 12px; background: #e4f8ed; font-weight: 600; color: #1e5056;">Email</td>
							<td style="padding: 8px 12px; border-bottom: 1px solid #e4f8ed;">${lead.email || "—"}</td>
						</tr>
						<tr>
							<td style="padding: 8px 12px; background: #e4f8ed; font-weight: 600; color: #1e5056;">Phone</td>
							<td style="padding: 8px 12px; border-bottom: 1px solid #e4f8ed;">${lead.phone || "—"}</td>
						</tr>
						<tr>
							<td style="padding: 8px 12px; background: #e4f8ed; font-weight: 600; color: #1e5056;">Enquiry</td>
							<td style="padding: 8px 12px;">${lead.summary || "—"}</td>
						</tr>
					</table>
					<p style="margin-top: 24px; color: #1e5056; font-size: 13px;">
						This lead was captured via the OptiHR website chat widget.
					</p>
					<hr style="border: none; border-top: 1px solid #e4f8ed; margin: 24px 0;" />
					<table style="font-size: 12px; color: #555; border-collapse: collapse;">
						<tr><td style="padding: 2px 0; font-weight: 600; color: #1e5056; padding-right: 12px;">OptiHR</td><td></td></tr>
						<tr><td style="padding: 2px 0; padding-right: 12px;">Raymond Hauptfleisch</td><td>raymond@optihr.co.za &nbsp;·&nbsp; 082 805 5050</td></tr>
						<tr><td style="padding: 2px 0; padding-right: 12px;">Rhodene Duncan</td><td>rhodene@optihr.co.za &nbsp;·&nbsp; 071 880 7971</td></tr>
						<tr><td style="padding: 2px 0; padding-right: 12px;">Office</td><td>087 550 0932 &nbsp;·&nbsp; hello@optihr.co.za</td></tr>
						<tr><td colspan="2" style="padding-top: 4px;"><a href="https://www.optihr.co.za" style="color: #0d937c; text-decoration: none;">www.optihr.co.za</a></td></tr>
					</table>
				</div>
			`,
		})
	} catch (err) {
		console.error("Failed to send lead email:", err)
	}
}

// ── Handler ─────────────────────────────────────────────────────────────────
export const POST = async (request: NextRequest) => {
	try {
		const { messages } = (await request.json()) as { messages: Message[] }

		if (!process.env.ANTHROPIC_API_KEY) {
			return Response.json({ error: "ANTHROPIC_API_KEY not configured" }, { status: 500 })
		}

		const anthropicResponse = await fetch("https://api.anthropic.com/v1/messages", {
			method: "POST",
			headers: {
				"x-api-key": process.env.ANTHROPIC_API_KEY,
				"anthropic-version": "2023-06-01",
				"content-type": "application/json",
			},
			body: JSON.stringify({
				model: "claude-haiku-4-5-20251001",
				max_tokens: 1024,
				system: SYSTEM_PROMPT,
				messages: messages.map((m) => ({ role: m.role, content: m.content })),
			}),
		})

		if (!anthropicResponse.ok) {
			const err = await anthropicResponse.json()
			console.error("Anthropic API error:", err)
			return Response.json({ error: "AI service error" }, { status: 502 })
		}

		const anthropicData = await anthropicResponse.json()
		const rawText: string = anthropicData.content?.[0]?.text ?? ""

		const { clean: message, lead } = extractLead(rawText)

		let leadCaptured = false
		if (lead) {
			leadCaptured = true
			await sendLeadEmail(lead)
		}

		return Response.json({ message, leadCaptured, lead: leadCaptured ? lead : null })
	} catch (error) {
		console.error("Chat route error:", error)
		return Response.json({ error: "Internal server error" }, { status: 500 })
	}
}
