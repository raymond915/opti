import { cn } from "@shared/lib/utils"
import type { TextAreaInputProps } from "../model/schema"

export const TextAreaInput = ({
	placeholder,
	value,
	className,
	invalid,
	...props
}: TextAreaInputProps & {
	invalid?: boolean
}) => {
	return (
		<textarea
			{...props}
			className={cn(
				"field-sizing-content flex max-h-80 min-h-40 w-full rounded-inner border border-input-border bg-input-background px-6 py-4 caret-mint-4 hover:border-input-border-hover hover:bg-input-background-hover focus:border-mint-4/50 focus:outline-2 focus:outline-mint-4/20 data-invalid:border-1.5 data-invalid:border-error data-invalid:outline-2 data-invalid:outline-error/20",
				className,
			)}
			data-invalid={invalid ? "true" : undefined}
			maxLength={props.maxLength}
			placeholder={placeholder}
			value={value || ""}
		/>
	)
}
