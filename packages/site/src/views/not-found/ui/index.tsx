import { AudienceDirectorPanel } from "@shared/components/audience-director-panel"
import { Badge } from "@shared/components/badge"
import { Button } from "@shared/components/button"
import Logo from "@shared/components/logo"
import { H1, P } from "@shared/components/typography"
import { Bug } from "lucide-react"
import type { NextPage } from "next"
import { useTranslations } from "next-intl"

export const NotFoundPage: NextPage = () => {
	const t = useTranslations("NotFound")

	return (
		<section className="contained-height nav-padding relative col-span-full grid w-full grid-cols-subgrid gap-gutter overflow-clip rounded-outer bg-mint-6">
			<div className="col-span-6 row-span-full flex flex-col justify-center gap-fluid-4 px-inner-padding pl-section-gap">
				<div className="flex flex-col gap-fluid-3">
					<Badge
						icon={<Bug />}
						label={t("badge")}
					/>
					<H1 className="text-white">{t("h1")}</H1>
					<P className="text-mint-1">{t("body")}</P>
				</div>
				<div className="flex items-center gap-fluid-3">
					<Button
						background="white"
						href="/services"
						size="lg"
					>
						{t("exploreServices")}
					</Button>
					<P className="w-fit text-mint-1">{t("separator")}</P>
					<Button href="/contact">{t("reachOut")}</Button>
				</div>
			</div>
			<AudienceDirectorPanel
				className="absolute right-inner-padding bottom-inner-padding z-20 h-2/5 w-1/4"
				heading={t("audienceHeading")}
			/>
			<Logo
				className="absolute top-[10vh] right-[5vw] w-[55vw] select-none opacity-[0.02]"
				logomark={true}
			/>
		</section>
	)
}

export default NotFoundPage
