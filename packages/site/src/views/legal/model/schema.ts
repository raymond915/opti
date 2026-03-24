import { type } from "arktype"

export const LegalSchema = type({
	content: type({
		title: "string",
		disclaimer: {
			title: "string",
			body: "string",
		},
		termsOfService: {
			title: "string",
			body: "string",
		},
		privacyPolicy: {
			title: "string",
			body: "string",
		},
		contact: {
			title: "string",
			body: "string",
		},
	}),
})

export type LegalProps = typeof LegalSchema.infer
