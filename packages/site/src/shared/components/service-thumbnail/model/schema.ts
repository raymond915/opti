import { type } from "arktype"
import type { HTMLAttributes } from "react"

export const ServiceThumbnailSchema = type({
	title: "string",
	body: "string",
	buttonHref: "string.url",
})

export type ServiceThumbnailType = typeof ServiceThumbnailSchema.infer

export interface ServiceThumbnailProps
	extends Omit<HTMLAttributes<HTMLElement>, keyof ServiceThumbnailType>,
		ServiceThumbnailType {}
