import { cn } from "@shared/lib/utils"
import type { StateProps } from "../model/schema"

export const Stat = ({ value, label, className }: StateProps) => {
	return (
		<div className={cn("flex w-fit flex-col gap-fluid-1", className)}>
			<span className="font-semibold text-fluid-4 text-mint-1">{value}</span>
			<div className="w-full text-fluid-n1 text-white/80">{label}</div>
		</div>
	)
}
