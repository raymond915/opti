import { type } from "arktype"
import type { HTMLAttributes } from "react"

export const BlogCategoryButtonSchema = type({
	title: "string",
	isActive: "boolean?",
})

export type BlogCategoryButtonType = typeof BlogCategoryButtonSchema.infer

export interface BlogCategoryButtonProps
	extends Omit<HTMLAttributes<HTMLElement>, keyof BlogCategoryButtonType>,
		BlogCategoryButtonType {}
