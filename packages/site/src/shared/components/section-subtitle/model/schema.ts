import { type } from "arktype"

export const SectionSubtitleSchema = type({
	title: "string",
	className: "string?",
	isDark: "boolean?",
})

export type SectionSubtitleProps = typeof SectionSubtitleSchema.infer
