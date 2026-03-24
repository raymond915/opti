import { Subtitle } from "@shared/components/typography"
import type { BadgeProps } from "../model/schema"

export const Badge = ({ icon, label }: BadgeProps) => {
	return (
		<div className="flex w-fit items-center gap-3 rounded-full border border-white/5 p-2 pr-4">
			<div className="grid size-6 shrink-0 items-center justify-center rounded-full border border-mint-3 bg-mint-3/10 stroke-2 *:size-4 *:stroke-mint-3">
				{icon}
			</div>
			<Subtitle className="mt-0.5 text-fluid-n1 text-mint-1 leading-none">{label}</Subtitle>
		</div>
	)
}
