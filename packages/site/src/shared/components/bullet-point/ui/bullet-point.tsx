import Logo from "@shared/components/logo"
import { cn } from "@shared/lib/utils"
import { type } from "arktype"
import type { HTMLAttributes } from "react"
import type { BulletPointProps } from "../model/schema"

export const BulletPoint = ({ ...props }: BulletPointProps) => {
	return (
		<li className={cn("flex gap-3 text-pretty text-fluid-0 leading-8", props.className)}>
			<Logo
				className={cn("size-6", props.onDark ? "text-mint-3" : "text-mint-4")}
				logomark={true}
			/>
			<span className={cn("w-full", props.onDark ? "text-white" : "text-mint-6")}>
				{props.content}
			</span>
		</li>
	)
}
