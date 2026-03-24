import { cn } from "@shared/lib/utils"
import { motion } from "motion/react"
import Link from "next/link"
import type { FeaturedItemInterface } from "../model/schema"

export const FeaturedItemBase = ({
	href,
	children,
	ref,
	className,
	...props
}: FeaturedItemInterface) => {
	return (
		<Link
			{...props}
			className={cn(
				"text-white",
				"text-fluid-n1",
				"font-medium",
				"px-inner-padding",
				"h-10",
				"items-center",
				"flex",
				"hover:bg-mint-3/10",
				"rounded-inner",
				"shrink-0",
				className,
			)}
			href={href}
			ref={ref}
		>
			{children}
		</Link>
	)
}

export const FeaturedItem = motion.create(FeaturedItemBase)
