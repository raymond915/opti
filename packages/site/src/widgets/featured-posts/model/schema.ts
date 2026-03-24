import { FeaturedPostSchema } from "@entities/insight/model/schema"
import { type } from "arktype"
import type { HTMLAttributes } from "react"

const FeaturedPostsSchema = type({
	posts: FeaturedPostSchema.array(),
})
type FeaturedPostsType = typeof FeaturedPostsSchema.infer
export interface FeaturedPostsProps
	extends Omit<HTMLAttributes<HTMLElement>, keyof FeaturedPostsType>,
		FeaturedPostsType {}
