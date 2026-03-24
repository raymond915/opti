import { type } from "arktype"
import type { ReactNode } from "react"

export const TypographyProps = type({
	className: "string?",
	children: "unknown",
})

export type TypographyPropsInfer = typeof TypographyProps.infer
