import { decode } from "decode-formdata"
import { Resend } from "resend"
import type { ContactFormSchema } from "../model"

if (!process.env.RESEND_API_KEY) {
	throw new Error("RESEND_API_KEY environment variable is missing")
}
const resend = new Resend(process.env.RESEND_API_KEY)

export const sendContactEmail = async (value: FormData) => {
	const { ContactEmailTemplate } = await import("@opti/transactional/emails/contact-email-template")
	const values: typeof ContactFormSchema.infer = decode(value)
	const from = "enquiries@contact.optihr.co.za"
	const to = "hello@optihr.co.za"
	const businessType = values.stepOne.businessType
	const subject = `New OptiHR Enquiry — ${businessType}`

	const { data, error } = await resend.emails.send({
		from: from as string,
		to: [
			to,
		],
		subject,
		react: ContactEmailTemplate(values),
	})

	if (error) {
		console.error("Resend API error:", error)
		return {
			success: false,
			error: error.message,
		}
	}

	return {
		success: true,
		id: data?.id,
	}
}
