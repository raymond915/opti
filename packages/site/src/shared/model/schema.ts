import { type } from "arktype"
import type { ReactNode } from "react"

export const LargeParagraphSchema = type({
	title: "string",
	description: "string",
	ctaHref: "string",
	ctaLabel: "string",
	className: "string?",
})

export type LargeParagraphProps = typeof LargeParagraphSchema.infer & {
	heading: ReactNode
}
