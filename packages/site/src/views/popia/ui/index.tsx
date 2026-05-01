import { ContainedLayout } from "@shared/components/layout/contained-layout"
import { PageBanner } from "@shared/components/page-banner"
import { SectionSubtitle } from "@shared/components/section-subtitle"
import { H2, H3, P } from "@shared/components/typography"
import { FaqSection } from "@widgets/faq-section"
import { ClientLogos } from "@widgets/client-logos"
import { useTranslations } from "next-intl"
import {
	HighlightBlock,
	HighlightBlockBody,
	HighlightBlockButton,
	HighlightBlockTitle,
} from "@shared/components/layout/highlight-block"

const faqIndexes = [1, 2, 3, 4, 5, 6] as const

export const PopiaPage = () => {
	const t = useTranslations("Popia")
	const risks = t.raw("intro.risks") as { label: string; detail: string }[]
	const services = t.raw("services.items") as { title: string; body: string }[]
	const audience = t.raw("audience.items") as string[]
	const legislation = t.raw("legislation.items") as { title: string; subtitle: string; body: string }[]

	return (
		<>
			<PageBanner
				anchorId="popia-services"
				anchorText={t("banner.anchorText")}
				body={t("banner.body")}
				title={t("banner.title")}
			/>

			{/* What is POPIA */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-muted-1">
				<div className="col-span-full grid grid-cols-1 gap-x-section-gap gap-y-fluid-4 lg:grid-cols-2">
					<div className="flex flex-col gap-fluid-2">
						<SectionSubtitle isDark title={t("intro.subtitle")} />
						<H2>{t("intro.h2")}</H2>
						<P className="text-mint-5/80">{t("intro.para1")}</P>
						<P className="text-mint-5/80">{t("intro.para2")}</P>
					</div>
					<div className="flex flex-col gap-fluid-2">
						<H3 className="text-mint-6">{t("intro.risksHeading")}</H3>
						<div className="flex flex-col gap-inner-padding">
							{risks.map((risk) => (
								<div
									className="flex flex-col gap-1 rounded-inner bg-white p-inner-padding"
									key={risk.label}
								>
									<P className="text-mint-6 font-semibold text-sm">{risk.label}</P>
									<P className="text-mint-5/80 text-sm">{risk.detail}</P>
								</div>
							))}
						</div>
					</div>
				</div>
			</ContainedLayout>

			{/* Our POPIA services */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-white" id="popia-services">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark title={t("services.subtitle")} />
					<H2 className="text-mint-6">{t("services.h2")}</H2>
				</div>
				<div className="col-span-full grid grid-cols-1 gap-inner-padding md:grid-cols-2 lg:grid-cols-3">
					{services.map((service) => (
						<div
							className="flex flex-col gap-fluid-2 rounded-inner bg-muted-1 p-inner-padding"
							key={service.title}
						>
							<H3 className="text-mint-6">{service.title}</H3>
							<P className="text-mint-5/80 text-sm grow">{service.body}</P>
						</div>
					))}
				</div>
			</ContainedLayout>

			{/* Who needs POPIA compliance */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-muted-1">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark title={t("audience.subtitle")} />
					<H2>{t("audience.h2")}</H2>
					<P className="text-mint-5/80 max-w-2xl">{t("audience.body")}</P>
				</div>
				<div className="col-span-full grid grid-cols-1 gap-x-inner-padding gap-y-fluid-2 md:grid-cols-2">
					{audience.map((item, i) => (
						<div className="flex items-start gap-3" key={i}>
							<span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint-4/20 text-mint-4">
								<svg viewBox="0 0 16 16" fill="none" className="h-3 w-3" aria-hidden="true">
									<path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
								</svg>
							</span>
							<P className="text-mint-5/90">{item}</P>
						</div>
					))}
				</div>
			</ContainedLayout>

			{/* Legislation */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-mint-6">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark={false} title={t("legislation.subtitle")} />
					<H2 className="text-white">{t("legislation.h2")}</H2>
				</div>
				<div className="col-span-full grid grid-cols-1 gap-inner-padding md:grid-cols-2">
					{legislation.map((item) => (
						<div
							className="flex flex-col gap-fluid-2 rounded-inner bg-white/10 p-inner-padding"
							key={item.title}
						>
							<div className="flex flex-col gap-fluid-1">
								<P className="text-mint-2 text-sm font-medium uppercase tracking-wider">{item.subtitle}</P>
								<H3 className="text-white">{item.title}</H3>
							</div>
							<P className="text-white/80 grow">{item.body}</P>
						</div>
					))}
				</div>
			</ContainedLayout>

			{/* FAQ */}
			<FaqSection
				data={{
					title: t("faq.title"),
					subtitle: t("faq.subtitle"),
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

			{/* CTA */}
			<HighlightBlock
				background="green"
				body={t("cta.body")}
				buttonHref="/contact"
				buttonText={t("cta.button")}
				media={{
					type: "image",
					imageProps: {
						alt: t("cta.alt"),
						src: "/optihr-illustration-compliance.svg",
					},
					containerClassnames: undefined,
				}}
				mediaPosition="right"
				title={t("cta.title")}
			>
				<HighlightBlockTitle />
				<HighlightBlockBody />
				<HighlightBlockButton />
			</HighlightBlock>

			<ClientLogos />
		</>
	)
}

export default PopiaPage
