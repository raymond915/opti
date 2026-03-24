"use client"
import { cn } from "@shared/lib/utils"
import { type MotionNodeOptions, motion } from "motion/react"
import type { ContactFormLayoutProps } from "../model"

const ContactFormLayoutBase = ({
	className,
	children,
	...props
}: ContactFormLayoutProps & MotionNodeOptions) => {
	return (
		<motion.section
			className={cn("flex w-full origin-top flex-col justify-start gap-fluid-4", className)}
			{...props}
		>
			{children}
		</motion.section>
	)
}

export const ContactFormLayout = motion.create(ContactFormLayoutBase)
