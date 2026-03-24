"use server"
import { createServerValidate, ServerValidateError } from "@tanstack/react-form-nextjs"
import { ArkErrors } from "arktype"
import { decode } from "decode-formdata"
import { formOpts } from "../config"
import { ContactFormSchema } from "../model/schema"

const serverValidate = createServerValidate({
	...formOpts,
	onServerValidate: async ({ value }) => {
		console.log("1. Server value keys:", Object.keys(value))
		const result = ContactFormSchema(value)
		if ("problems" in result) {
			const errors = (result as any).problems
				.map((error: any) => `${error.path.join(".")}: ${error.message}`)
				.join("; ")
			console.log("2. Errors:", errors)
			return `Validation failed: ${errors}`
		}
		console.log("2. Valid")
		return undefined
	},
})

export const submitContactForm = async (_prev: unknown, value: FormData) => {
	const values = decode(value)
	console.log("4. After Decode:", values)
	try {
		const validatedData = await serverValidate(value)
		console.log("5. Validated data:", validatedData)
		const { sendContactEmail } = await import("../api/submit-contact-form")
		const emailResult = await sendContactEmail(value)
		console.log("6. Email result:", emailResult)
		if (!emailResult?.success) {
			const errorMsg = emailResult?.error || "Unknown email error"
			console.error("Email send failed:", errorMsg)
			throw new Error(errorMsg)
		}
		return validatedData
	} catch (error) {
		console.error("Server action error:", error)
		if (error instanceof ServerValidateError) {
			return error.formState
		}
		throw error
	}
}
