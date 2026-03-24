import Link from "next/link"
import type { FooterItemProps } from "../model/schema"

export const FooterItem = ({ label, href }: FooterItemProps) => {
	return (
		<li className="list-none">
			<Link
				className="font-normal text-fluid-n1 text-mint-1 leading-none"
				href={href}
			>
				{label}
			</Link>
		</li>
	)
}
