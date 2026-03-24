import { type } from "arktype"
import type { HTMLAttributes } from "react"

export const StatSchema = type({
	value: "string",
	label: "string",
	className: "string?",
})

export type StatType = typeof StatSchema.infer

export interface StateProps extends Omit<HTMLAttributes<HTMLElement>, keyof StatType>, StatType {}
