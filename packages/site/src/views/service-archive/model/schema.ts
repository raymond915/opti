import { type } from "arktype"

export const IntroSchema = type({
	title: "string",
	body: "string",
})

export const ServiceSchema = type({
	title: "string",
	description: "string",
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

export const ServiceArchiveContentSchema = type({
	title: "string",
	intro: IntroSchema,
	services: ServiceSchema.array(),
	cta: CtaSchema,
})

export type ServiceArchiveContent = typeof ServiceArchiveContentSchema.infer

export const ServiceArchiveSchema = type({
	content: ServiceArchiveContentSchema,
})

export type ServiceArchiveProps = typeof ServiceArchiveSchema.infer
