import { type } from "arktype"
import type { HTMLAttributes } from "react"

/**
 * Audience director items — labelKey references "AudienceDirector.{key}"
 * in messages/{locale}.json. The rendering panel looks up labels via
 * useTranslations.
 */
export const audienceItems = [
	{ labelKey: "forSmallBusinesses", href: "/for-small-businesses" },
	{ labelKey: "forLargeBusinesses", href: "/for-large-businesses" },
	{ labelKey: "forIndependentSchools", href: "/for-independent-schools" },
	{ labelKey: "aiInTheWorkplace", href: "/ai-in-the-workplace" },
] as const

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
