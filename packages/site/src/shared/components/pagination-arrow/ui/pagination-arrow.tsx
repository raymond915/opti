import { cn } from "@shared/lib/utils"
import { ArrowRight } from "lucide-react"
import type { PaginationArrowProps } from "../model/schema"

export const PaginationArrow = ({ swap }: PaginationArrowProps) => {
	return (
		<div className={cn("grid size-12 rounded-full bg-mint-6", swap && "rotate-180")}>
			<ArrowRight className="size-6 place-self-center text-mint-1" />
		</div>
	)
}
