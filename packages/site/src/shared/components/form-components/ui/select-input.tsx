"use client"
import { Select } from "@base-ui/react"
import { P } from "@shared/components/typography"
import { cn } from "@shared/lib/utils"
import { Check, ChevronDown } from "lucide-react"
import type { SelectInputProps, SelectItemType } from "../model/schema"
import { ScrollThumb } from "./scroll-thumb"

// Value is an object
export const SelectInput = ({
	value,
	placeholder,
	items,
	invalid,
	onBlur,
	...props
}: SelectInputProps & {
	invalid?: boolean
	onBlur?: () => void
}) => {
	return (
		<Select.Root
			{...props}
			items={items}
			onOpenChange={(open) => {
				if (!open && onBlur) {
					onBlur()
				}
			}}
			value={value}
		>
			<Select.Trigger
				className={cn(
					"flex h-20 w-full shrink-0 cursor-pointer items-center justify-between rounded-inner border border-input-border bg-input-background px-6 text-fluid-0 hover:border-input-border-hover hover:bg-input-background-hover focus:border-mint-4/50 focus:outline-2 focus:outline-mint-4/20 data-invalid:border-1.5 data-invalid:border-error data-popup-open:border-mint-4/50 data-invalid:outline-2 data-invalid:outline-error/20 data-popup-open:outline-2 data-popup-open:outline-mint-4/20",
				)}
				data-invalid={invalid ? "true" : undefined}
			>
				<Select.Value
					className={cn("data-placeholder:text-mint-7/50")}
					placeholder={placeholder}
				>
					{value?.value}
				</Select.Value>
				<Select.Icon>
					<ChevronDown className="size-4" />
				</Select.Icon>
			</Select.Trigger>
			<Select.Portal>
				<Select.Positioner
					align="end"
					alignItemWithTrigger={false}
					collisionAvoidance={{
						align: "flip",
					}}
					side="bottom"
					sideOffset={4}
				>
					<Select.Popup
						className={cn(
							"w-(--anchor-width) overflow-clip rounded-xl border border-mint-7/10 bg-input-background",
						)}
					>
						<ScrollThumb>
							<Select.List className={cn("flex h-full w-full flex-col gap-1 p-1")}>
								{items.map((item: SelectItemType) => (
									<Select.Item
										className={cn(
											"grid w-full grid-cols-[1rem_1fr] items-center gap-3 rounded-lg px-3 py-2 data-highlighted:bg-mint-7/4 data-selected:bg-mint-7/10",
										)}
										key={item.label}
										value={item}
									>
										<Select.ItemIndicator>
											<Check
												absoluteStrokeWidth={true}
												className={cn("size-4", "stroke-mint-4")}
												strokeWidth={2}
											/>
										</Select.ItemIndicator>
										<Select.ItemText className={"col-start-2 cursor-default"}>
											<P className={cn(item.value ? undefined : "opacity-50")}>{item.label}</P>
										</Select.ItemText>
									</Select.Item>
								))}
							</Select.List>
						</ScrollThumb>
					</Select.Popup>
				</Select.Positioner>
			</Select.Portal>
		</Select.Root>
	)
}
