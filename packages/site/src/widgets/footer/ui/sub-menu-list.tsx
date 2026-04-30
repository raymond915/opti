"use client"

import { subMenuItems } from "@widgets/navigation-menu/model/sub-menu-items"
import { motion } from "motion/react"
import { useTranslations } from "next-intl"
import { SubMenuItem } from "./sub-menu-item"

export const SubMenuList = ({ ...props }) => {
	const t = useTranslations("Nav")

	return (
		<motion.nav
			className="flex flex-col gap-2 overflow-clip py-fluid-5 outline-top outline-white"
			{...props}
		>
			{subMenuItems.map((item) => {
				return (
					<SubMenuItem
						href={item.href}
						key={`${item.labelKey}-${item.href}`}
						label={t(item.labelKey)}
						variants={props.itemVariants}
					/>
				)
			})}
		</motion.nav>
	)
}
