import { type } from "arktype"

export const IntroSchema = type({
	title: "string",
	body: "string",
})

export const FeaturedInsightSchema = type({
	title: "string",
	excerpt: "string",
	href: "string",
})

export const CtaButtonSchema = type({
	text: "string",
	href: "string",
})

export const CtaSchema = type({
	title: "string",
	body: "string",
	button: CtaButtonSchema,
})

export const InsightArchiveContentSchema = type({
	title: "string",
	intro: IntroSchema,
	featuredInsights: FeaturedInsightSchema.array(),
	cta: CtaSchema,
})

export type InsightArchiveContent = typeof InsightArchiveContentSchema.infer

export const InsightArchiveSchema = type({
	content: InsightArchiveContentSchema,
})

export type InsightArchiveProps = typeof InsightArchiveSchema.infer
