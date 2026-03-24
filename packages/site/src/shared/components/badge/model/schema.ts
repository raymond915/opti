import { type } from "arktype"
import type { ReactNode } from "react"

export const BadgeSchema = type({
	label: "string",
})

export type BadgeType = typeof BadgeSchema.infer

export interface BadgeProps extends BadgeType {
	icon: ReactNode
}
