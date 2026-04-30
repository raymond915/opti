"use client"

import { Button } from "@shared/components/button"
import { H2, P } from "@shared/components/typography"
import { useTranslations } from "next-intl"
import { usePathname } from "next/navigation"

// Hidden on /contact and /thank-you — visitors already on those pages don't
// need another "go to contact" CTA.
//
// pathname includes the locale prefix when active (e.g. /af/contact), so we
// match the trailing segment via .endsWith().
const HIDE_ON_PATHS = ["/contact", "/thank-you"]

export const FooterCta = () => {
	const pathname = usePathname()
	const t = useTranslations("FooterCta")

	if (HIDE_ON_PATHS.some((p) => pathname === p || pathname.endsWith(p))) {
		return null
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4 sm:gap-x-gutter rounded-inner bg-mint-1/10 p-inner-padding">
			<div className="flex flex-col gap-1 *:text-white">
				<H2 className="font-medium text-fluid-1">{t("heading")}</H2>
				<P className="text-fluid-0">{t("body")}</P>
			</div>
			<Button
				background="white"
				className="justify-self-end"
				href="/contact"
				size="lg"
			>
				{t("button")}
			</Button>
			<div />
		</div>
	)
}
