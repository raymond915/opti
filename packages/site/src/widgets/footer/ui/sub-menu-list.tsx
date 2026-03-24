import { subMenuItems } from "@widgets/navigation-menu/model/sub-menu-items"
import { motion } from "motion/react"
import { SubMenuItem } from "./sub-menu-item"

export const SubMenuList = ({ ...props }) => {
	return (
		<motion.nav
			className="flex flex-col gap-2 overflow-clip py-fluid-5 outline-top outline-white"
			{...props}
		>
			{subMenuItems.map((item) => {
				return (
					<SubMenuItem
						href={item.href}
						key={item.label}
						label={item.label}
						variants={props.itemVariants}
					/>
				)
			})}
		</motion.nav>
	)
}
