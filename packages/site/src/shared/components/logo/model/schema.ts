import { type } from "arktype"
import type { SVGProps } from "react"

export const LogoSchema = type({
	logomark: "boolean?",
})

export type LogoType = typeof LogoSchema.infer

export interface LogoProps extends Omit<SVGProps<SVGSVGElement>, keyof LogoType>, LogoType {}
