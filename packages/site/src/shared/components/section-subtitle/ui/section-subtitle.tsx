import { Subtitle } from "@shared/components/typography"
import { cn } from "../../../lib/utils"
import type { SectionSubtitleProps } from "../model/schema"

export const SectionSubtitle = ({ className, title, isDark = true }: SectionSubtitleProps) => {
	return (
		<div className={cn("flex", "h-auto", "gap-2", "items-center", className)}>
			<div className="aspect-square size-4 rounded-full bg-mint-4" />
			<Subtitle className={isDark ? "" : "h-4 w-fit align-baseline text-white leading-none"}>
				{title}
			</Subtitle>
		</div>
	)
}
