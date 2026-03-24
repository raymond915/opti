import { type } from "arktype"
import type { LinkProps } from "next/link"
import type { HTMLAttributes, ReactNode, Ref } from "react"

const FeaturedItemSchema = type({
	label: "string?",
	href: "string.url",
	className: "string?",
})

export type FeaturedItemType = typeof FeaturedItemSchema.infer

export interface FeaturedItemInterface
	extends Omit<LinkProps, keyof FeaturedItemType>,
		FeaturedItemType {
	children: ReactNode
	ref: Ref<HTMLAnchorElement>
}

export const SubMenuItemSchema = type({
	label: "string?",
	href: "string.url",
})

export type SubMenuItemType = typeof SubMenuItemSchema.infer

export interface SubMenuItemProps extends Omit<LinkProps, keyof SubMenuItemType>, SubMenuItemType {}

export const MenuButtonSchema = type({
	isMenuOpen: "boolean?",
	className: "string?",
})

export type MenuButtonType = typeof MenuButtonSchema.infer

export interface MenuButtonProps
	extends Omit<HTMLAttributes<HTMLButtonElement>, keyof MenuButtonType>,
		MenuButtonType {}

export const NavigationMenuSchema = type({})
export type NavigationMenuInfer = typeof NavigationMenuSchema.infer
export type NavigationMenuHtmlProps = Omit<
	HTMLAttributes<HTMLDivElement>,
	keyof NavigationMenuInfer
>
export interface NavigationMenuProps extends NavigationMenuInfer, NavigationMenuHtmlProps {}
