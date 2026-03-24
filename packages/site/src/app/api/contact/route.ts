import type { NextRequest } from "next/server"
import { Resend } from "resend"

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export const POST = async (request: NextRequest) => {
	if (!resend) return Response.json({ error: "Email service not configured" }, { status: 503 })
	try {
		const { data, error } = await resend.emails.send({
			from: "onboarding@resend.dev",
			to: [
				"delivered@resend.dev",
			],
			subject: "Hello World",
			html: "<strong>Hello World</strong>",
		})
		if (error) {
			return Response.json({
				...error,
			})
		}
		return Response.json({
			data,
		})
	} catch (error) {
		if (error instanceof Error) {
			return Response.json(
				{
					error: error.message,
				},
				{
					status: 500,
				},
			)
		} else {
			return Response.json(
				{
					error: "Unknown error",
				},
				{
					status: 500,
				},
			)
		}
	}
}
