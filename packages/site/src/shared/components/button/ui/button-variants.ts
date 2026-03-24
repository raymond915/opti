import { cva } from "class-variance-authority"

export const buttonVariants = cva(
	[
		"group",
		"flex",
		"font-medium",
		"items-center",
		"justify-center",
		"rounded-full",
		"w-fit",
		"cursor-pointer",
		"leading-none",
		"text-fluid-0",
	],
	{
		variants: {
			background: {
				green: [
					"bg-mint-5",
					"text-white",
				],
				white: [
					"bg-white",
					"text-mint-6",
				],
				muted: [
					"bg-muted-3",
					"text-mint-7",
				],
			},
			size: {
				lg: [],
				sm: [
					"bg-transparent",
				],
			},
		},
		compoundVariants: [],
		defaultVariants: {
			background: "green",
			size: "lg",
		},
	},
)
