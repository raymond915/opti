import type { NextRequest } from "next/server"
import { Resend } from "resend"
import { logConversation } from "@/lib/chat-logger"

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

// ── System prompts ────────────────────────────────────────────────────────────
const RFH_SYSTEM_PROMPT = `You are the virtual assistant for RFH Inc Attorneys, a South African law firm based in Pretoria. Your role is to warmly engage website visitors, help them understand how RFH Inc can help with their legal matter, and — naturally through conversation — gather their contact details so Raymond Hauptfleisch (Director) can follow up.

## About RFH Inc
RFH Inc is a Pretoria-based law firm directed by Raymond Hauptfleisch. The firm provides the following legal services:

- **Divorce & Family Law**: Contested and uncontested divorces, maintenance, parenting plans, forfeiture of benefits, and protection orders.
- **Labour & Employment**: Unfair dismissal, CCMA representation, retrenchments, disciplinary hearings, and employment contracts.
- **Civil Litigation**: Debt collection, interdicts, declaratory orders, judicial reviews, and urgent applications.
- **Contracts**: Drafting and reviewing all commercial agreements. Core principle: if it's not in the contract, it's very difficult to rely on it later.
- **Deceased Estates**: Estate administration, will drafting, estate planning, and inter vivos trusts. Executor's fee: 3.5% of gross estate value.
- **Liquidation & Sequestration**: Sequestration (individuals) and liquidation (companies/CCs), including director and CC member personal liability.
- **Corporate Law**: Company registration, MOIs, shareholders' agreements, directors' duties, and CIPC compliance.
- **Commercial Law**: Share sales, business acquisitions, loan agreements, T&Cs, supply contracts, and CPA/NCA compliance.
- **Education Law**: Advising SGBs and school boards on governance, staff employment, discipline, and SASA compliance.

## Key Facts
- Consultation fee: R750 for approximately 30 minutes — real legal advice, not a sales call.
- Raymond is a SACE-registered teacher with experience in public and independent schools.
- Raymond has personal experience of the sequestration process.
- The firm is registered with the FIC (AI/140818/00029) and compliant with FICA.

## Contact Details
- Phone / WhatsApp: +27 87 550 0932
- Email: raymond@rfhinc.co.za
- Address: 36 Alcade Rd, Lynnwood Glen, Pretoria, 0081

## Your conversation style
- Warm, professional, and direct — like speaking to a knowledgeable colleague
- Ask open questions to understand the visitor's legal situation
- Tailor explanations to their specific matter
- Use plain language — avoid unnecessary legal jargon
- Be honest: if something is outside RFH Inc's scope, say so
- Keep responses concise — 2–4 short paragraphs maximum
- South African context: reference relevant SA legislation (Companies Act, Labour Relations Act, CCMA, etc.)

## Lead capture
Your goal is to naturally gather the following during conversation:
1. Their first name (ask early — "Who am I speaking with?")
2. The nature of their legal matter
3. Their email address OR phone number (explain Raymond will follow up)

Do NOT make it feel like a form. Weave the questions naturally into the conversation. Once you have their name and at least one contact method (email or phone), signal this by appending the following block to the END of one of your responses. This block will be automatically removed before the user sees it — do not reference it or explain it:

[[LEAD_DATA]]{"name":"THEIR_NAME","email":"EMAIL_OR_EMPTY","phone":"PHONE_OR_EMPTY","summary":"ONE_SENTENCE_SUMMARY_OF_THEIR_ENQUIRY"}[[/LEAD_DATA]]

Only include this block once. Continue the conversation naturally after including it.

## Important
- Do not fabricate case outcomes, success rates, or pricing beyond the consultation fee
- Always encourage a consultation as the natural next step
- If a matter sounds urgent (e.g. upcoming court date, emergency), emphasise calling Raymond directly
`

const OPTIHR_SYSTEM_PROMPT = `You are the virtual assistant for OptiHR and OptiAI, a South African HR and AI consultancy with on-site teams in Gauteng and Cape Town, plus remote support nationwide. Your role is to warmly engage website visitors, help them understand how OptiHR and OptiAI can help their specific situation, and — naturally through conversation — gather their contact details so a consultant can follow up.

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
- Office: 087 551 1622
- Raymond: raymond@optihr.co.za · 082 805 5050
- Rhodene: rhodene@optihr.co.za · 071 880 7971
- WhatsApp: +27 68 636 2218 (available via the WhatsApp button in the chat)
- Locations: On-site in Gauteng and Cape Town. Remote support across South Africa, or in-person elsewhere by agreement.

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
3. Their location (city or province — helps us know if on-site visits in Gauteng or Cape Town are practical, or if we should plan a remote engagement)
4. Their main challenge or reason for visiting
5. Their email address OR phone number (explain a consultant will follow up)

Do NOT make it feel like a form. Weave the questions naturally into the conversation. Once you have their name and at least one contact method (email or phone), signal this by appending the following block to the END of one of your responses. This block will be automatically removed before the user sees it — do not reference it or explain it:

[[LEAD_DATA]]{"name":"THEIR_NAME","email":"EMAIL_OR_EMPTY","phone":"PHONE_OR_EMPTY","location":"CITY_OR_PROVINCE_OR_EMPTY","summary":"ONE_SENTENCE_SUMMARY_OF_THEIR_ENQUIRY"}[[/LEAD_DATA]]

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
	location?: string
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

async function sendLeadEmail(lead: LeadData, site: "optihr" | "rfhinc" = "optihr") {
	if (!resend) {
		console.warn("RESEND_API_KEY not set — skipping lead email")
		return
	}

	const isRFH = site === "rfhinc"
	const recipients = isRFH
		? ["raymond@rfhinc.co.za"]
		: ["raymond@optihr.co.za"]
	const brandName = isRFH ? "RFH Inc Attorneys" : "OptiHR"
	const brandColor = isRFH ? "#C95520" : "#053c43"
	const accentColor = isRFH ? "#fff5f0" : "#e4f8ed"

	try {
		await resend.emails.send({
			from: process.env.EMAIL_FROM || "OptiHR <hello@optihr.co.za>",
			to: recipients,
			subject: `New ${brandName} website lead: ${lead.name}`,
			html: `
				<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
					<h2 style="color: ${brandColor}; border-bottom: 2px solid ${accentColor}; padding-bottom: 8px;">
						New Lead from ${brandName} Chat Widget
					</h2>
					<table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
						<tr>
							<td style="padding: 8px 12px; background: ${accentColor}; font-weight: 600; width: 140px; color: ${brandColor};">Name</td>
							<td style="padding: 8px 12px; border-bottom: 1px solid ${accentColor};">${lead.name || "—"}</td>
						</tr>
						<tr>
							<td style="padding: 8px 12px; background: ${accentColor}; font-weight: 600; color: ${brandColor};">Email</td>
							<td style="padding: 8px 12px; border-bottom: 1px solid ${accentColor};">${lead.email || "—"}</td>
						</tr>
						<tr>
							<td style="padding: 8px 12px; background: ${accentColor}; font-weight: 600; color: ${brandColor};">Phone</td>
							<td style="padding: 8px 12px; border-bottom: 1px solid ${accentColor};">${lead.phone || "—"}</td>
						</tr>
						<tr>
							<td style="padding: 8px 12px; background: ${accentColor}; font-weight: 600; color: ${brandColor};">Location</td>
							<td style="padding: 8px 12px; border-bottom: 1px solid ${accentColor};">${lead.location || "—"}</td>
						</tr>
						<tr>
							<td style="padding: 8px 12px; background: ${accentColor}; font-weight: 600; color: ${brandColor};">Enquiry</td>
							<td style="padding: 8px 12px;">${lead.summary || "—"}</td>
						</tr>
					</table>
					<p style="margin-top: 24px; color: ${brandColor}; font-size: 13px;">
						This lead was captured via the ${brandName} website chat widget.
					</p>
				</div>
			`,
		})
	} catch (err) {
		console.error("Failed to send lead email:", err)
	}
}

// ── CORS (allows RFH Inc static site to call this API) ─────────────────────
const ALLOWED_ORIGINS = [
	"https://www.rfhinc.co.za",
	"https://rfhinc.co.za",
	"http://localhost:3000",
	"http://127.0.0.1:5500",
]

function corsHeaders(origin: string | null) {
	const headers: Record<string, string> = {
		"Access-Control-Allow-Methods": "POST, OPTIONS",
		"Access-Control-Allow-Headers": "Content-Type",
		"Access-Control-Max-Age": "86400",
	}
	if (origin && ALLOWED_ORIGINS.some((o) => origin.startsWith(o))) {
		headers["Access-Control-Allow-Origin"] = origin
	}
	return headers
}

export const OPTIONS = async (request: NextRequest) => {
	const origin = request.headers.get("origin")
	return new Response(null, { status: 204, headers: corsHeaders(origin) })
}

// ── Handler ─────────────────────────────────────────────────────────────────
export const POST = async (request: NextRequest) => {
	const origin = request.headers.get("origin")
	const cors = corsHeaders(origin)

	try {
		const { messages, sessionId, site } = (await request.json()) as {
			messages: Message[]
			sessionId?: string
			site?: "optihr" | "rfhinc"
		}

		const activeSite = site === "rfhinc" ? "rfhinc" : "optihr"

		if (!process.env.ANTHROPIC_API_KEY) {
			return Response.json({ error: "ANTHROPIC_API_KEY not configured" }, { status: 500, headers: cors })
		}

		// Resolve session ID — use client-provided or generate one
		const chatSessionId = sessionId || `${activeSite}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`

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
				system: activeSite === "rfhinc" ? RFH_SYSTEM_PROMPT : OPTIHR_SYSTEM_PROMPT,
				messages: messages.map((m) => ({ role: m.role, content: m.content })),
			}),
		})

		if (!anthropicResponse.ok) {
			const err = await anthropicResponse.json()
			console.error("Anthropic API error:", err)
			return Response.json({ error: "AI service error" }, { status: 502, headers: cors })
		}

		const anthropicData = await anthropicResponse.json()
		const rawText: string = anthropicData.content?.[0]?.text ?? ""

		const { clean: message, lead } = extractLead(rawText)

		let leadCaptured = false
		if (lead) {
			leadCaptured = true
			await sendLeadEmail(lead, activeSite)
		}

		// Get the latest user message for logging
		const latestUserMessage = messages[messages.length - 1]?.content ?? ""

		// Log conversation (non-blocking — don't fail the response if logging errors)
		const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || undefined
		const userAgent = request.headers.get("user-agent") || undefined

		logConversation({
			sessionId: chatSessionId,
			site: activeSite,
			userMessage: latestUserMessage,
			assistantMessage: message,
			ip: ip || undefined,
			userAgent: userAgent || undefined,
			leadCaptured,
			leadName: lead?.name,
			leadEmail: lead?.email,
			leadPhone: lead?.phone,
			leadSummary: lead?.summary,
		}).catch((err) => console.error("Chat logging error:", err))

		return Response.json({
			message,
			sessionId: chatSessionId,
			leadCaptured,
			lead: leadCaptured ? lead : null,
		}, { headers: cors })
	} catch (error) {
		console.error("Chat route error:", error)
		return Response.json({ error: "Internal server error" }, { status: 500, headers: cors })
	}
}
