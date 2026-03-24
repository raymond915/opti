import type { SubMenuItemProps } from "@widgets/navigation-menu/model/schema"
import { easeOut, motion } from "motion/react"
import Link from "next/link"

export const SubMenuItemBase = ({ href, label, ...props }: SubMenuItemProps) => {
	return (
		<Link
			className="rounded-inner border border-mint-3/0 text-fluid-0 text-white transition-colours hover:border-mint-3/10 hover:bg-mint-3/5"
			href={href}
			key={label}
			{...props}
		>
			<motion.span
				className="relative flex w-full p-inner-padding"
				whileHover={{
					x: 4,
					transition: {
						duration: 0.3,
						ease: easeOut,
					},
				}}
			>
				{label}
			</motion.span>
		</Link>
	)
}
export const SubMenuItem = motion.create(SubMenuItemBase)
