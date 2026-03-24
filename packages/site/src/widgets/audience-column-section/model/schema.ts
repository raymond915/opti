import { type } from "arktype"
import type { ImageProps } from "next/image"
import type { HTMLAttributes } from "react"

const AudienceCardSchema = type({
	imageProps: "unknown", // ImageProps is complex, use unknown or define
	title: type({
		label: "string",
	}),
	body: "string",
	callToAction: "string",
	href: "string.url",
})

export const AudienceColumnSectionSchema = type({
	audiences: AudienceCardSchema.array(),
})

export type AudienceColumnSectionInfer = typeof AudienceColumnSectionSchema.infer
export type HtmlProps = Omit<HTMLAttributes<HTMLDivElement>, keyof AudienceColumnSectionInfer>
export interface AudienceColumnSectionProps extends AudienceColumnSectionInfer, HtmlProps {}
