import { type } from "arktype"

export const ForSmallBusinessesContentSchema = type({
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

export type ForSmallBusinessesContent = typeof ForSmallBusinessesContentSchema.infer

export const ForSmallBusinessesPageSchema = type({
	content: ForSmallBusinessesContentSchema,
})

export type ForSmallBusinessesProps = typeof ForSmallBusinessesPageSchema.infer
