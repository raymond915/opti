import { type } from "arktype"

export const NotFoundContentSchema = type({
	h1: "string",
	subtitle: "string",
	body: "string",
	cta: {
		text: "string",
		href: "string",
	},
})

export type NotFoundContent = typeof NotFoundContentSchema.infer

export const NotFoundSchema = type({
	content: NotFoundContentSchema,
})

export type NotFoundProps = typeof NotFoundSchema.infer
