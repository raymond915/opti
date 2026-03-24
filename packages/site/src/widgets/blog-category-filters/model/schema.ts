import { BlogCategoryButtonSchema } from "@shared/components/blog-category-button"
import { type } from "arktype"
import type { HTMLAttributes } from "react"

export const BlogCategoryFiltersSchema = type({
	categories: BlogCategoryButtonSchema.array(),
	className: "string?",
})

export type BlogCategoryFiltersType = typeof BlogCategoryFiltersSchema.infer

export interface BlogCategoryFiltersProps
	extends Omit<HTMLAttributes<HTMLDivElement>, keyof BlogCategoryFiltersType>,
		BlogCategoryFiltersType {}
