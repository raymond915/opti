import { type } from "arktype"

export const ForIndependentSchoolsPageSchema = type({
	content: type({
		pageBanner: "object",
		introSection: {
			title: "string",
			body: "string",
		},
		// @ts-expect-error\n		highlightBlocks: "array",
		faqSection: {
			subtitle: "string",
			// @ts-expect-error\n			items: "array",
		},
		cta: {
			body: "string",
			buttonHref: "string",
			imageAlt: "string",
		},
	}),
})

export type ForIndependentSchoolsProps = typeof ForIndependentSchoolsPageSchema.infer
