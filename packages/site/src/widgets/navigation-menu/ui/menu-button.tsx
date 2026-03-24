import { cn } from "@shared/lib/utils"
import { motion } from "motion/react"
import type { MenuButtonProps } from "../model/schema"
export const MenuButtonBase = ({ isMenuOpen, ...props }: MenuButtonProps) => {
	return (
		<button
			{...props}
			className={cn(
				"group flex h-10 cursor-pointer flex-col items-center justify-center rounded-full border border-white bg-white px-7 outline-2 outline-mint-6/20 transition-all hover:outline-2 hover:outline-mint-6/30",
				props.className,
			)}
			type="button"
		>
			<div className="-translate-y-0.5 group-hover:-translate-y-px h-0.5 w-10 bg-mint-7 transition" />
			<div className="h-0.5 w-10 translate-y-0.5 bg-mint-7 transition duration-300 group-hover:translate-y-px" />
		</button>
	)
}

export const MenuButton = motion.create(MenuButtonBase)
