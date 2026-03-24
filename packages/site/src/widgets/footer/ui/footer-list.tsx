import { H3 } from "@shared/components/typography"
import type { FooterListProps } from "../model/schema"
import { FooterItem } from "./footer-item"

export const FooterList = ({ heading, items }: FooterListProps) => {
	return (
		<div className="flex w-fit flex-col gap-fluid-2">
			<H3 className="font-medium text-fluid-n1 text-mint-2 leading-none">{heading}</H3>
			<nav className="flex flex-col gap-fluid-1">
				{items.map((item) => (
					<FooterItem
						href={item.href}
						key={item.label}
						label={item.label}
					/>
				))}
			</nav>
		</div>
	)
}
