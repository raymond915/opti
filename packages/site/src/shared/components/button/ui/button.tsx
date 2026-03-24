import { cn } from "@shared/lib/utils"
import Link from "next/link"
import type { ButtonProps, LinkButtonProps } from "../model/schema"
import { ButtonTrim } from "./button-trim"
import { buttonVariants } from "./button-variants"

const ButtonText = ({
	hasTrim = true,
	children,
	size = "lg",
}: {
	hasTrim: boolean
	children: React.ReactNode
	size?: string
}) => {
	return <div className={hasTrim ? "pl-6" : "px-6"}>{children}</div>
}

export const Button = ({
	children,
	showTrim = true,
	className,
	background,
	size,
	...props
}: LinkButtonProps) => {
	return (
		<Link
			{...props}
			className={cn(
				buttonVariants({
					background,
					size,
				}),
				className,
				!showTrim && "min-h-16",
			)}
		>
			<ButtonText
				hasTrim={showTrim}
				size={size || "lg"}
			>
				{children as React.ReactNode}
			</ButtonText>
			{showTrim && (
				<ButtonTrim
					background={background}
					className={size === "lg" ? "ml-3.5" : "ml-2"}
					size={size || "lg"}
				/>
			)}
		</Link>
	)
}

export const ActionButton = ({
	children,
	showTrim = true,
	className,
	background,
	size,
	...props
}: ButtonProps) => {
	return (
		<button
			{...props}
			className={cn(
				buttonVariants({
					background,
					size,
				}),
				className,
				!showTrim && "min-h-16",
			)}
		>
			<ButtonText
				hasTrim={showTrim}
				size={size || "lg"}
			>
				{children as React.ReactNode}
			</ButtonText>
			{showTrim && (
				<ButtonTrim
					background={background}
					className={size === "lg" ? "ml-3.5" : "ml-2"}
					size={size || "lg"}
				/>
			)}
		</button>
	)
}
