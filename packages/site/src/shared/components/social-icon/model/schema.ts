import { type } from "arktype"
import type { HTMLAttributes } from "react"

export const IconSchema = type(
	"'whatsapp' | 'facebook' | 'instagram' | 'linkedin' | 'twitter' | 'youtube'",
)

export const SocialIconSchema = type({
	icon: type(IconSchema),
	href: "string.url",
})

export type SocialIconType = typeof SocialIconSchema.infer

export interface SocialIconProps
	extends Omit<HTMLAttributes<HTMLButtonElement>, keyof SocialIconType>,
		SocialIconType {}
