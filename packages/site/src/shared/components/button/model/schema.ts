import { type } from "arktype"
import type { VariantProps } from "class-variance-authority"
import type { LinkProps } from "next/link"
import type { ButtonHTMLAttributes, PropsWithChildren } from "react"
import type { buttonVariants } from "../ui/button-variants"

export const ButtonSchema = type({
	children: "unknown",
	showTrim: type("boolean").optional(),
	className: type("string").optional(),
})

type ButtonSchemaType = typeof ButtonSchema.infer

export type ButtonVariants = VariantProps<typeof buttonVariants>

export type BaseButtonProps = ButtonSchemaType & ButtonVariants

export interface ButtonProps
	extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps>,
		BaseButtonProps {}

export interface LinkButtonProps
	extends Omit<PropsWithChildren<LinkProps>, keyof BaseButtonProps>,
		BaseButtonProps {}
