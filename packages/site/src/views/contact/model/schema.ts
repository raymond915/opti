import { type } from "arktype"

export const ContactContentSchema = type({
	banner: {
		title: "string",
		body: "string",
	},
	contactDetails: type({
		type: "string",
		value: "string",
		href: "string",
	}).array(),
	formFields: type({
		name: "string",
		label: "string",
		type: "string",
		required: "boolean",
	}).array(),
	cta: {
		buttonText: "string",
		href: "string",
	},
})

export type ContactContent = typeof ContactContentSchema.infer

export const ContactPageSchema = type({
	content: ContactContentSchema,
})

export type ContactPageProps = typeof ContactPageSchema.infer
