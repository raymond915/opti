import { cn } from "@shared/lib/utils"
import { ArrowRight, ChevronRight } from "lucide-react"
import type { HTMLAttributes } from "react"
import type { ButtonVariants } from "../model/schema"

interface ButtonTrimProps extends HTMLAttributes<HTMLElement>, ButtonVariants {
	chevron?: boolean
}

const buttonSizeSwitch = (size: string | null) => {
	switch (size) {
		case "lg":
			return "size-12 **:size-6"
		case "sm":
			return "size-8 **:size-4 **:stroke-3"
		default:
			return null
	}
}

export const ButtonTrim = ({
	size = "lg",
	background = "green",
	className,
	chevron = false,
	...props
}: ButtonTrimProps) => {
	return (
		<div className="shrink-0 p-2">
			<div
				{...props}
				className={cn(
					"bg-mint-3",
					"rounded-full",
					"grid grid-cols-1 grid-rows-1",
					buttonSizeSwitch(size),
					background === "muted" && size !== "sm" && "bg-white",
					className,
				)}
			>
				{chevron ? (
					<ChevronRight
						className={cn("place-self-center text-mint-6")}
						size={24}
					/>
				) : (
					<ArrowRight
						className={cn("place-self-center text-mint-6")}
						size={24}
					/>
				)}
			</div>
		</div>
	)
}

export default ButtonTrim
