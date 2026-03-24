import { type } from "arktype"

export const FooterItemSchema = type({
	label: "string",
	href: "string.url",
})

export type FooterItemProps = typeof FooterItemSchema.infer

export const FooterListSchema = type({
	heading: "string",
	items: FooterItemSchema.array(),
})

export type FooterListProps = typeof FooterListSchema.infer

export const FooterSchema = type({
	columns: FooterListSchema.array(),
})
export interface FooterProps
	extends Omit<React.HTMLAttributes<HTMLElement>, keyof typeof FooterSchema> {}
