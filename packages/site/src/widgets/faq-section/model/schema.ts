import type { ContainedLayoutInterface } from "@shared/components/layout/contained-layout/model/schema"
import { QuestionSchema } from "@shared/components/question"
import { type } from "arktype"

const CtaSchema = type({
	text: "string",
	navigateTo: "string",
})

export const FaqSectionSchema = type({
	title: "string",
	subtitle: "string",
	body: "string",
	cta: CtaSchema,
	questions: QuestionSchema.array(),
})

export type FaqSectionType = typeof FaqSectionSchema.infer

export interface FaqSectionProps
	extends Omit<ContainedLayoutInterface, keyof FaqSectionType>,
		FaqSectionType {}
