import React, { forwardRef, type JSX } from "react"
import { cn } from "../../../lib/utils"
import type { TypographyPropsInfer } from "../model/schema"

// Generic component factory to avoid repetitive code
const createComponent = <T extends HTMLElement>(
	tag: keyof JSX.IntrinsicElements,
	defaultClassName: string | string[],
	displayName: string,
) => {
	const Component = forwardRef<T, TypographyPropsInfer & React.HTMLAttributes<T>>((props, ref) => {
		return React.createElement(
			tag,
			{
				...props,
				ref,
				className: cn(
					"leading-fluid",
					"text-mint-6",
					"w-full",
					"text-pretty",
					"flex",
					defaultClassName,
					props.className,
				),
			},
			props.children,
		)
	})
	Component.displayName = displayName
	return Component
}

export const H1 = createComponent<HTMLHeadingElement>(
	"h1",
	[
		"scroll-m-20",
		"text-fluid-4",
		"font-normal",
	],
	"H1",
)

export const H2 = createComponent<HTMLHeadingElement>(
	"h2",
	[
		"scroll-m-20",
		"text-fluid-3",
		"font-medium",
	],
	"H2",
)

export const H3 = createComponent<HTMLHeadingElement>(
	"h3",
	[
		"scroll-m-20",
		"text-fluid-2",
		"font-medium",
	],
	"H3",
)

export const H4 = createComponent<HTMLHeadingElement>(
	"h4",
	[
		"scroll-m-20",
		"text-fluid-1",
		"font-semibold",
	],
	"H4",
)

export const H5 = createComponent<HTMLHeadingElement>(
	"h5",
	[
		"scroll-m-20",
		"text-fluid-0",
		"font-semibold",
	],
	"H5",
)

export const H6 = createComponent<HTMLHeadingElement>(
	"h6",
	[
		"scroll-m-20",
		"text-fluid-0",
		"font-semibold",
	],
	"H6",
)

export const P = createComponent<HTMLParagraphElement>(
	"p",
	[
		"text-fluid-0",
		"opacity-90",
		"leading-fluid-loose",
	],
	"P",
)

export const Large = createComponent<HTMLDivElement>(
	"p",
	[
		"text-fluid-2",
		"leading-pair-6",
	],
	"Large",
)

export const Small = createComponent<HTMLParagraphElement>(
	"p",
	[
		"text-fluid-n1",
		"opacity-80",
	],
	"Small",
)

export const Subtitle = createComponent<HTMLSpanElement>(
	"h2",
	[
		"text-fluid-n1",
		"leading-none",
		"py-px",
		"uppercase",
		"font-semibold",
	],
	"Subtitle",
)

// TODO: Create a span comonent?
