import { type } from "arktype"

export const AboutContentSchema = type({
	pageBanner: {
		title: "string",
		body: "string",
	},
	missionSection: {
		title: "string",
		body: "string",
		button: {
			text: "string",
			href: "string",
		},
	},
	founderSection: {
		title: "string",
		subtitle: "string",
		body: "string",
		button: {
			text: "string",
			href: "string",
		},
		bullets: "string[]",
	},
	consultationCta: "object",
	testimonials: "string[]",
})

export type AboutContent = typeof AboutContentSchema.infer

export const AboutPageSchema = type({
	content: AboutContentSchema,
})

export type AboutPageProps = typeof AboutPageSchema.infer

