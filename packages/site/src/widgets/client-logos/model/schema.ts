import { type } from "arktype"
import type { HTMLAttributes, SVGProps } from "react"

export const ClientLogoSchema = type({})

export type ClientLogoType = typeof ClientLogoSchema.infer

export interface ClientLogoProps
	extends Omit<SVGProps<SVGSVGElement>, keyof ClientLogoType>,
		ClientLogoType {}

export const ClientLogosSchema = type({})

export type ClientLogosInfer = typeof ClientLogosSchema.infer
export type HtmlProps = Omit<HTMLAttributes<HTMLDivElement>, keyof ClientLogosInfer>
export interface ClientLogosProps extends ClientLogosInfer, HtmlProps {}
