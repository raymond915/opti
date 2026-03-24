import { type } from "arktype"
import type { HTMLAttributes } from "react"

export const BulletPointSchema = type({
	content: "string",
	className: "string?",
	onDark: "boolean?",
})

export type BulletPointType = typeof BulletPointSchema.infer

export interface BulletPointProps
	extends Omit<HTMLAttributes<HTMLLIElement>, keyof BulletPointType>,
		BulletPointType {}
