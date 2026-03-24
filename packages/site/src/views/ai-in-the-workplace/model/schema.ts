import { type } from "arktype"

export const AiInTheWorkplaceContentSchema = type({
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

export type AiInTheWorkplaceContent = typeof AiInTheWorkplaceContentSchema.infer

export const AiInTheWorkplacePageSchema = type({
	content: AiInTheWorkplaceContentSchema,
})

export type AiInTheWorkplaceProps = typeof AiInTheWorkplacePageSchema.infer
