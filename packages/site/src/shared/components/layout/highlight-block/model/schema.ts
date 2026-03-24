import { type } from "arktype"
import type { ImageProps } from "next/image"
import type { PropsWithChildren, ReactElement } from "react"

export const HighlightBlockSchema = type({
	subtitle: type("string").optional(),
	title: type("string").optional(),
	body: type("string|string[]").optional(),
	buttonText: type("string").optional(),
	buttonHref: type("string.url").optional(),
	className: type("string | string[]").optional(),
	mediaPosition: ' "left" | "right" ',
	background: type('"green"|"white"|"muted"').optional(),
}).configure({
	description: "You can customise the background colour tailwind classes in className",
})

export type HighlightBlockType = typeof HighlightBlockSchema.infer

export interface HighlightBlockProps extends HighlightBlockType, PropsWithChildren {
	media:
		| {
				type: "image"
				imageProps: ImageProps
				containerClassnames?: string
		  }
		| {
				type: "component"
				mediaNode: ReactElement
		  }
}
