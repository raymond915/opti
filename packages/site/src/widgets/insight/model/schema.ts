import { type } from "arktype"

export const InsightSchema = type({
	tags: "string",
	title: "string",
	description: "string",
	thumbnailUrl: "string",
	callToAction: "string",
	category: "string",
})
export type InsightType = typeof InsightSchema.infer
export interface InsightProps extends InsightType {}
