import type { NextRequest } from "next/server"
import { type ChatSession, sendTranscriptEmail } from "@/lib/chat-logger"

// CORS — same allowlist as the main chat route
const ALLOWED_ORIGINS = new Set([
	"https://optihr.co.za",
	"https://www.optihr.co.za",
	"http://localhost:3000",
	"http://localhost:5500",
])

function corsHeaders(origin: string | null): Record<string, string> {
	const allow = origin && ALLOWED_ORIGINS.has(origin) ? origin : "https://optihr.co.za"
	return {
		"Access-Control-Allow-Origin": allow,
		"Access-Control-Allow-Methods": "POST, OPTIONS",
		"Access-Control-Allow-Headers": "Content-Type",
	}
}

export async function OPTIONS(request: NextRequest) {
	return new Response(null, { status: 204, headers: corsHeaders(request.headers.get("origin")) })
}

/**
 * Receives a final ChatSession payload from the chat widget when it unloads.
 * Sends a transcript email via Resend (lib/chat-logger.sendTranscriptEmail).
 *
 * The widget calls this via navigator.sendBeacon, so we accept JSON and reply
 * fast and small. We never block the widget — any error is logged server-side.
 */
export async function POST(request: NextRequest) {
	const cors = corsHeaders(request.headers.get("origin"))

	let session: ChatSession
	try {
		session = (await request.json()) as ChatSession
	} catch {
		return Response.json({ ok: false, reason: "invalid_json" }, { status: 400, headers: cors })
	}

	if (!session?.id || !Array.isArray(session.messages)) {
		return Response.json({ ok: false, reason: "invalid_session" }, { status: 400, headers: cors })
	}

	const result = await sendTranscriptEmail(session)
	return Response.json(result, { headers: cors })
}
