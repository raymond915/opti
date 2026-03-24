/** biome-ignore-all lint/a11y/noLabelWithoutControl: <There is a label> */
// biome-ignore-all lint/a11y/noNoninteractiveTabindex: label interactive via control/handlers
"use client"
import { Radio, RadioGroup } from "@base-ui/react"
import { P } from "@shared/components/typography"
import { cn } from "@shared/lib/utils"
import type { RadioGroupInputProps } from "../model/schema"

export const RadioGroupInput = ({
	className,
	value,
	items,
	invalid,
	...props
}: RadioGroupInputProps & {
	invalid?: boolean
}) => {
	return (
		<RadioGroup
			className={cn("flex w-full flex-col gap-fluid-1", className)}
			{...props}
			data-invalid={invalid ? "true" : undefined}
			value={value ?? null}
		>
			{items.map((item) => {
				return (
					<label
						className={cn(
							"flex h-20 w-full shrink-0 cursor-pointer items-center gap-4 rounded-inner border border-input-border bg-input-background px-6 outline-mint-4/50 hover:border-input-border-hover hover:bg-input-background-hover focus-visible:outline-2 focus-visible:outline-mint-4/50 focus-visible:outline-offset-2 has-checked:bg-mint-4/10 has-checked:outline hover:has-checked:bg-mint-4/10 data-invalid:border-1.5 data-invalid:border-error data-invalid:outline-2 data-invalid:outline-error/20",
						)}
						key={item.value}
						tabIndex={0}
					>
						<Radio.Root
							className={cn(
								"grid size-4 shrink-0 rounded-full p-0 outline outline-mint-7 data-checked:outline-mint-4",
							)}
							tabIndex={-1}
							value={item.value}
						>
							<Radio.Indicator
								className={cn("flex size-2 place-self-center rounded-full bg-mint-4")}
							/>
						</Radio.Root>
						<P className={cn()}>{item.label}</P>
					</label>
				)
			})}
		</RadioGroup>
	)
}
