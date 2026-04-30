import { H3 } from "@shared/components/typography"
import { useTranslations } from "next-intl"
import type { FooterMenuColumn } from "../model/menu-items"
import { FooterItem } from "./footer-item"

export const FooterList = ({ column }: { column: FooterMenuColumn }) => {
	const tFooter = useTranslations("Footer")
	const tNav = useTranslations("Nav")

	// Resolve each item's label from translations or use its literal value.
	const resolveLabel = (item: FooterMenuColumn["items"][number]): string => {
		if (item.literal) return item.literal
		if (!item.labelKey) return ""
		return item.labelNamespace === "Footer"
			? tFooter(item.labelKey)
			: tNav(item.labelKey)
	}

	return (
		<div className="flex w-fit flex-col gap-fluid-2">
			<H3 className="font-medium text-fluid-n1 text-mint-2 leading-none">
				{tFooter(column.headingKey)}
			</H3>
			<nav className="flex flex-col gap-fluid-1">
				{column.items.map((item) => (
					<FooterItem
						href={item.href}
						key={item.href}
						label={resolveLabel(item)}
					/>
				))}
			</nav>
		</div>
	)
}
