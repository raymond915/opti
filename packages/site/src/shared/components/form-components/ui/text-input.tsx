"use client"
import { Input } from "@base-ui/react"
import { cn } from "@shared/lib/utils"
import type { TextInputProps } from "../model/schema"

export const TextInput = ({
	className,
	value,
	placeholder,
	errorMessage,
	invalid,
	...props
}: TextInputProps & {
	invalid?: boolean
}) => {
	return (
		<Input
			className={cn(
				"flex h-20 w-full rounded-inner border border-input-border bg-input-background px-6 text-fluid-0 caret-mint-4 hover:border-input-border-hover hover:bg-input-background-hover focus:border-mint-4/50 focus:outline-2 focus:outline-mint-4/20 data-invalid:border-1.5 data-invalid:border-error data-invalid:outline-2 data-invalid:outline-error/20",
				className,
			)}
			placeholder={placeholder}
			value={value || ""}
			{...props}
			data-invalid={invalid ? "true" : undefined}
		/>
	)
}
