import { FeaturedPost } from "@entities/insight"
import { Badge } from "@shared/components/badge"
import { Button } from "@shared/components/button"
import Logo from "@shared/components/logo"
import { H1, P } from "@shared/components/typography"
import { Heart } from "lucide-react"
import type { NextPage } from "next"
import { useTranslations } from "next-intl"

export const ThankYouPage: NextPage = () => {
	const t = useTranslations("ThankYou")

	return (
		<section className="contained-height nav-padding relative col-span-full grid w-full grid-cols-1 gap-gutter overflow-clip rounded-outer bg-mint-6 md:grid-cols-subgrid">
			<div className="col-span-full row-span-full flex flex-col justify-center gap-fluid-4 px-inner-padding md:col-span-6 md:pl-section-gap">
				<div className="flex flex-col gap-fluid-3">
					<Badge
						icon={<Heart />}
						label={t("badge")}
					/>
					<H1 className="text-white">{t("h1")}</H1>
					<P className="text-mint-1">{t("body")}</P>
				</div>
				<div className="flex flex-wrap items-center gap-fluid-3">
					<Button
						href="/insights"
						size="lg"
					>
						{t("discoverInsights")}
					</Button>
					<P className="w-fit text-mint-1">{t("subtitle")}</P>
					<Button href="/services">{t("viewServices")}</Button>
				</div>
			</div>
			<FeaturedPost
				_id="thank-you-featured"
				className="hidden md:absolute md:right-inner-padding md:bottom-inner-padding md:block md:h-2/5 md:w-1/4"
				excerpt={t("featuredExcerpt")}
				title={t("h1")}
			/>
			<Logo
				className="pointer-events-none absolute top-[10vh] right-[5vw] hidden w-[55vw] select-none opacity-5 md:block"
				logomark={true}
			/>
		</section>
	)
}

export default ThankYouPage
