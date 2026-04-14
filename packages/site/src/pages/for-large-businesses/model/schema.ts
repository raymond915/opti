import { type } from "arktype"

export const ForLargeBusinessesContentSchema = type({
	pageBanner: {
		title: "string",
		subtitle: "string",
	},
	introSection: {
		title: "string",
		body: "string",
	},
	highlightBlocks: type({
		title: "string",
		body: "string",
	}).array(),
	faqSection: {
		title: "string",
		faqs: type({
			question: "string",
			answer: "string",
		}).array(),
	},
})

export type ForLargeBusinessesContent = typeof ForLargeBusinessesContentSchema.infer

export const ForLargeBusinessesPageSchema = type({
	content: ForLargeBusinessesContentSchema,
})

export type ForLargeBusinessesProps = typeof ForLargeBusinessesPageSchema.infer
