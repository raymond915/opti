import { ServiceCard } from "@entities/service"
import { ContainedLayout } from "@shared/components/layout"
import {
	HighlightBlock,
	HighlightBlockBody,
	HighlightBlockButton,
	HighlightBlockTitle,
} from "@shared/components/layout/highlight-block"
import { PageBanner } from "@shared/components/page-banner"
import { FaqSection } from "@widgets/faq-section/ui"
import type { NextPage } from "next"
import { useTranslations } from "next-intl"

type ServiceCardData = {
	key: string
	title: string
	body: string
	callToAction: string
	pageUrl: string
}

const faqIndexes = [1, 2, 3, 4] as const

export const ServicesPage: NextPage = () => {
	const t = useTranslations("Services")
	const cards = t.raw("cards") as ServiceCardData[]

	return (
		<>
			<PageBanner
				anchorId="service-list"
				anchorText={t("banner.anchorText")}
				body={t("banner.body")}
				title={t("banner.title")}
			/>
			<ContainedLayout className="max-h-none grid-cols-1 gap-inner-padding sm:grid-cols-2 lg:grid-cols-3">
				{cards.map((service) => (
					<ServiceCard
						callToAction={service.callToAction}
						description={service.body}
						hasIcon={true}
						href={service.pageUrl}
						key={service.key}
						title={service.title}
					/>
				))}
			</ContainedLayout>
			<HighlightBlock
				background="green"
				body={t("aiHighlight.body")}
				buttonHref="/ai-in-the-workplace"
				buttonText={t("aiHighlight.button")}
				media={{
					type: "component",
					mediaNode: (
						<div className="relative h-full w-full bg-mint-6">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="https://images.pexels.com/photos/7988685/pexels-photo-7988685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt={t("aiHighlight.alt")} className="absolute inset-0 h-full w-full object-cover" />
						</div>
					),
				}}
				mediaPosition="right"
				subtitle={t("aiHighlight.subtitle")}
				title={t("aiHighlight.title")}
			>
				<HighlightBlockTitle />
				<HighlightBlockBody />
				<HighlightBlockButton />
			</HighlightBlock>
			<FaqSection
				data={{
					subtitle: t("faq.subtitle"),
					title: t("faq.title"),
					body: t("faq.body"),
					cta: {
						text: t("faq.cta"),
						navigateTo: "/contact",
					},
					questions: faqIndexes.map((i) => ({
						question: t(`faq.q${i}Question`),
						answer: t(`faq.q${i}Answer`),
					})),
				}}
			/>
		</>
	)
}

export default ServicesPage
