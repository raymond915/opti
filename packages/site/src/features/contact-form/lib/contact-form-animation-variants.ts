import type { Variants } from "motion/react"

export const contactFormVariants: Record<string, Variants> = {
	container: {
		in: {
			translateY: "0",
			opacity: 1,
		},
		out: {
			translateY: "-100%",
			opacity: 0,
		},
	},
}
