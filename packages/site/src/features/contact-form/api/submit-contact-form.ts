import { decode } from "decode-formdata"
import { EmailParams, MailerSend, Recipient, Sender } from "mailersend"
import { render } from "@react-email/components"
import type { ContactFormSchema } from "../model"

const mailer = process.env.MAILERSEND_API_TOKEN
	? new MailerSend({ apiKey: process.env.MAILERSEND_API_TOKEN })
	: null

const FROM_ADDRESS = process.env.EMAIL_FROM_ADDRESS || "hello@optihr.co.za"
const FROM_NAME = process.env.EMAIL_FROM_NAME || "OptiHR"

export const sendContactEmail = async (value: FormData) => {
	if (!mailer) {
		console.warn("MAILERSEND_API_TOKEN not set — skipping contact email")
		return { success: false, error: "Email service not configured" }
	}
	const { ContactEmailTemplate } = await import("@opti/transactional/emails/contact-email-template")
	const values: typeof ContactFormSchema.infer = decode(value)
	const businessType = values.stepOne.businessType
	const subject = `New OptiHR Enquiry — ${businessType}`

	// MailerSend wants HTML, not React. Render the template once.
	const html = await render(ContactEmailTemplate(values))
	const text = await render(ContactEmailTemplate(values), { plainText: true })

	const params = new EmailParams()
		.setFrom(new Sender(FROM_ADDRESS, FROM_NAME))
		.setTo([new Recipient("hello@optihr.co.za", "OptiHR")])
		.setSubject(subject)
		.setHtml(html)
		.setText(text)

	try {
		const response = await mailer.email.send(params)
		return {
			success: true,
			id: response.headers["x-message-id"],
		}
	} catch (err) {
		console.error("MailerSend API error:", err)
		return {
			success: false,
			error: err instanceof Error ? err.message : "Unknown error",
		}
	}
}
