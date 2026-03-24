import imageUrlBuilder from "@opti/sanity"
import { sanityClient } from "@shared/sanity/client"
import { type ClassValue, clsx } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

const twMergeCustom = extendTailwindMerge({
	cacheSize: 0,
	extend: {
		classGroups: {
			"font-size": [
				"text-fluid-n1",
				"text-fluid-0",
				"text-fluid-1",
				"text-fluid-2",
				"text-fluid-3",
				"text-fluid-4",
			],
			leading: [
				"leading-fluid-none",
				"leading-fluid-tighter",
				"leading-fluid-tight",
				"leading-fluid-snug",
				"leading-fluid-normal",
				"leading-fluid-relaxed",
				"leading-fluid-loose",
			],
			p: [
				"p-inner-padding",
			],
			gap: [
				"gap-fluid-\\d+",
				"spacing-fluid-\\d+",
				"spacing-pair-\\d+",
				"spacing-section-gap",
				"spacing-gutter",
			],
		},
	},
})
export function cn(...inputs: ClassValue[]) {
	return twMergeCustom(clsx(inputs))
}

const builder = imageUrlBuilder(sanityClient)

export const urlFor = (id: string) => {
	return builder.image(id)
}

export const toCamelCase = (str: string): string => {
	return str
		.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
			return index === 0 ? word.toLowerCase() : word.toUpperCase()
		})
		.replace(/\s+/g, "")
}
