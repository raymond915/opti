import { type } from "arktype"
import type { LinkProps } from "next/link"
import type { HTMLAttributes } from "react"

export const ServiceCardSchema = type({
	title: "string",
	description: "string",
	callToAction: "string",
	href: "string.url",
	hasIcon: "boolean",
})

export type ServiceCardType = typeof ServiceCardSchema.infer

export interface ServiceCardProps
	extends Omit<HTMLAttributes<HTMLElement>, keyof ServiceCardType | keyof LinkProps>,
		Omit<LinkProps, keyof ServiceCardType>,
		ServiceCardType {}
