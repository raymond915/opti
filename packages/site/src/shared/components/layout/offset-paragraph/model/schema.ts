import { type } from "arktype"
import type { HTMLAttributes } from "react"

const OffsetParagraphSchema = type({
	subtitle: "string",
	paragraph: "string",
	hasButton: "boolean?",
	buttonLabel: "string?",
	buttonHref: "string?",
})
type OffsetParagraphType = typeof OffsetParagraphSchema.infer
export interface OffsetParagraphProps
	extends Omit<HTMLAttributes<HTMLElement>, keyof OffsetParagraphType>,
		OffsetParagraphType {}
