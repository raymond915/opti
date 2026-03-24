import type {
	FieldRootProps,
	InputProps,
	RadioGroupProps,
	RadioRootProps,
	SelectRootProps,
} from "@base-ui/react"
import type { AnyFieldApi } from "@tanstack/react-form"
import { type } from "arktype"
import type { ComponentProps } from "react"

//Single Radio Component
export const RadioInputSchema = type({
	className: "string?",
	label: "string",
	value: "string",
})
export type RadioItemType = typeof RadioInputSchema.infer
export interface RadioInputProps extends Omit<RadioRootProps, keyof RadioItemType>, RadioItemType {}

//Radio Group Component
export const RadioGroupInputSchema = type({
	className: "string?",
	items: RadioInputSchema.array(),
})
export type RadioGroupInputType = typeof RadioGroupInputSchema.infer
export interface RadioGroupInputProps
	extends Omit<RadioGroupProps, keyof RadioGroupInputType>,
		RadioGroupInputType {}

//Single Select Item Component
export const SelectItemSchema = type({
	label: "string",
	value: "string",
})
export type SelectItemType = typeof SelectItemSchema.infer

// Select Input Component
export const SelectInputSchema = type({
	value: SelectItemSchema.optional(),
	placeholder: "string?",
	items: SelectItemSchema.array(),
})
export type SelectInputType = typeof SelectInputSchema.infer
export interface SelectInputProps
	extends Omit<SelectRootProps<SelectItemType>, keyof SelectInputType>,
		SelectInputType {
	onBlur?: () => void
}

// Text Input Component
export const TextInputSchema = type({
	value: "string",
	placeholder: "string?",
	errorMessage: "string?",
})
export type TextInputType = typeof TextInputSchema.infer
export interface TextInputProps extends Omit<InputProps, keyof TextInputType>, TextInputType {}

// Text Area Component
export const TextAreaInputSchema = type({
	value: "string",
	placeholder: "string?",
	className: "string?",
})
export type TextAreaInputType = typeof TextAreaInputSchema.infer
export interface TextAreaInputProps
	extends Omit<ComponentProps<"textarea">, keyof TextAreaInputType>,
		TextAreaInputType {}

// Form Field HOC
export const FormFieldSchema = type({
	label: "string",
	className: "string?",
	isOptional: "boolean?",
})
export type FormFieldType = typeof FormFieldSchema.infer
export interface FormFieldProps
	extends Omit<FieldRootProps, keyof FormFieldType | "children">,
		FormFieldType {
	field: AnyFieldApi
	children: (props: { field: AnyFieldApi; isInvalid: boolean }) => React.ReactNode
}
