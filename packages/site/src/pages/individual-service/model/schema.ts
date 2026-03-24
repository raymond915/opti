import { HighlightBlockSchema } from "@shared/components/layout/highlight-block/model/schema"
import { QuestionSchema } from "@shared/components/question"
import { type } from "arktype"

export const ServiceSchema = type({
	title: "string",
	description: "string",
	whyOptiHR: HighlightBlockSchema.array(),
	legalConsiderations: HighlightBlockSchema.array(),
	faq: QuestionSchema.array(),
	faqSubtitle: "string",
	faqBody: "string",
	faqCta: type({
		text: "string",
		navigateTo: "string",
	}),
	cta: "string",
})

export type ServiceContent = typeof ServiceSchema.infer

export const ServicesContentSchema = type({
	services: "object",
})

export type ServicesContent = typeof ServicesContentSchema.infer

export const schema = type({
	content: ServicesContentSchema,
})

export type Props = typeof schema.infer

export interface ServicePageProps extends Props {}

export const validateService = (content: unknown): ServiceContent => {
	const result = ServiceSchema(content)
	if (result instanceof type.errors) {
		console.error("Service content validation failed:", result)
		throw new Error("Invalid service content structure")
	}
	return result
}
