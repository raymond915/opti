import { ContainedLayout } from "@shared/components/layout/contained-layout"
import Logo from "@shared/components/logo"
import { SocialIcon } from "@shared/components/social-icon"
import { H2 } from "@shared/components/typography"
import { useTranslations } from "next-intl"
import { menuItems, socialIcons } from "../model/menu-items"
import { Copyright } from "./footer-copyright"
import { FooterCta } from "./footer-cta"
import { FooterList } from "./footer-list"

export const Footer = () => {
	const t = useTranslations("Footer")

	return (
		<div className="mt-section-gap p-inner-padding pt-none">
			<ContainedLayout className="u-grid grid grid-cols-1 gap-section-gap bg-mint-7">
				<FooterCta />
				<div className="grid grid-cols-1 gap-y-section-gap">
					<footer className="u-grid grid grid-cols-1 px-inner-padding *:col-span-1 md:grid-cols-2">
						<div className="flex flex-col items-start gap-fluid-2">
							<Logo className="h-12" />
							<H2 className="font-normal text-fluid-n1 text-mint-1">
								{t("taglineLine1")}
							</H2>
							<p className="text-fluid-n1 font-medium text-mint-2">
								{t("taglineLine2")}
							</p>
							{/*SOCIAL ICON*/}
							<div className="mt-fluid-1 grid grid-cols-2 gap-4">
								{socialIcons.map((icon) => {
									return (
										<SocialIcon
											href={icon.href}
											icon={icon.icon}
											key={icon.icon}
										/>
									)
								})}
							</div>
						</div>
						{/*FOOTER COLUMNS*/}
						<nav className="u-grid md:col-start-2 mt-8 mb-fluid-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
							{menuItems.map((column) => {
								return (
									<FooterList
										column={column}
										key={column.headingKey}
									/>
								)
							})}
						</nav>
					</footer>
					<Copyright />
				</div>
			</ContainedLayout>
		</div>
	)
}
