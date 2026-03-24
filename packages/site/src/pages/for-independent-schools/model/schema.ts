import { type } from "arktype"

export const ForIndependentSchoolsPageSchema = type({
	content: type({
		pageBanner: "object",
		introSection: {
			title: "string",
			body: "string",
		},
		highlightBlocks: "unknown[]",
		faqSection: {
			subtitle: "string",
			items: "unknown[]",
		},
		cta: {
			body: "string",
			buttonHref: "string",
			imageAlt: "string",
		},
	}),
})

export type ForIndependentSchoolsProps = typeof ForIndependentSchoolsPageSchema.infer
