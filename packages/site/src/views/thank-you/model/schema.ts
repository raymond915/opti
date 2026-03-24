import { type } from "arktype"

export const ThankYouContentSchema = type({
	title: "string",
	subtitle: "string",
	body: "string",
	cta: {
		text: "string",
		href: "string",
	},
})

export type ThankYouContent = typeof ThankYouContentSchema.infer

export const ThankYouPageSchema = type({
	content: ThankYouContentSchema,
})

export type ThankYouPageProps = typeof ThankYouPageSchema.infer
