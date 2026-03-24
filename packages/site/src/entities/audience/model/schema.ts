import { type } from "arktype"
import type { ImageProps } from "next/image"

export const AudienceCardSchema = type({
	title: "string",
	body: "string",
	callToAction: "string",
	href: "string.url",
})

export type AudienceSchemaType = typeof AudienceCardSchema.infer

export interface AudienceCardProps extends AudienceSchemaType {
	imageProps: ImageProps
}
