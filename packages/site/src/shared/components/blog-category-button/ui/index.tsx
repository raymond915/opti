import { ActionButton } from "@shared/components/button"
import { cn } from "@shared/lib/utils"
import type { BlogCategoryButtonProps } from "../model/schema"

export function BlogCategoryButton({
	title,
	isActive = false,
	onClick,
	...props
}: BlogCategoryButtonProps) {
	return (
		<ActionButton
			className={cn(
				"group h-12 w-full justify-between rounded-inner bg-transparent outline-none hover:bg-mint-7/5",
				isActive && "bg-beige-1 font-semibold hover:bg-beige-1",
			)}
			onClick={onClick}
			showTrim={false}
			type="button"
			{...props}
		>
			<div className={cn("flex items-center gap-3 text-fluid-0 text-mint-7 normal-case")}>
				<div
					className={cn(
						"size-3 shrink-0 rounded-full bg-mint-4 opacity-0",
						isActive && "opacity-100",
					)}
				/>
				{title}
			</div>
		</ActionButton>
	)
}
