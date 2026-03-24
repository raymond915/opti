"use client"
import { cn } from "@shared/lib/utils"
import type { ContainedLayoutInterface } from "../model/schema"

export const ContainedLayout = ({ id, children, ref, ...props }: ContainedLayoutInterface) => {
	return (
		<section
			ref={ref}
			{...props}
			className={cn(
				"grid",
				"grid-cols-12",
				"col-span-full",
				"gap-inner-padding",
				"h-fit",
				"p-inner-padding",
				"rounded-outer",
				props.className,
			)}
		>
			{children}
		</section>
	)
}
