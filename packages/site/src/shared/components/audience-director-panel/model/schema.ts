import { type } from "arktype"
import type { HTMLAttributes } from "react"

export const audienceItems: AudienceType[] = [
	{
		label: "For Small Businesses",
		href: "/for-small-businesses",
	},
	{
		label: "For Large Businesses",
		href: "/for-large-businesses",
	},
	{
		label: "For Independent Schools",
		href: "/for-independent-schools",
	},
	{
		label: "AI in the Workplace",
		href: "/ai-in-the-workplace",
	},
]

const AudienceSchema = type({
	label: "string",
	href: "string",
})

export type AudienceType = typeof AudienceSchema.infer

export interface AudienceProps
	extends Omit<HTMLAttributes<HTMLButtonElement>, keyof AudienceType>,
		AudienceType {}

export const AudienceDirectorSchema = type({
	heading: "string",
})

export type AudienceDirectorType = typeof AudienceDirectorSchema.infer

export interface AudienceDirectorProps
	extends Omit<HTMLAttributes<HTMLElement>, keyof AudienceDirectorType>,
		AudienceDirectorType {}
