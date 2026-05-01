import { ContainedLayout } from "@shared/components/layout"
import {
	HighlightBlock,
	HighlightBlockBody,
	HighlightBlockButton,
	HighlightBlockTitle,
} from "@shared/components/layout/highlight-block"
import { PageBanner } from "@shared/components/page-banner"
import { SectionSubtitle } from "@shared/components/section-subtitle"
import { H2, P } from "@shared/components/typography"
import { ClientLogos } from "@widgets/client-logos/ui"
import { FaqSection } from "@widgets/faq-section/ui"
import { ServiceRoller } from "@widgets/service-roller/ui"
import type { NextPage } from "next"
import { useTranslations } from "next-intl"

const blockMeta = [
	{ key: "block1", img: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", mediaPosition: "right" as const },
	{ key: "block2", img: "https://images.pexels.com/photos/6457488/pexels-photo-6457488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", mediaPosition: "left" as const },
	{ key: "block3", img: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", mediaPosition: "right" as const },
] as const

const faqIndexes = [1, 2, 3, 4, 5] as const

export const ForLargeBusinessesPage: NextPage = () => {
	const t = useTranslations("ForLargeBusinesses")
	const tShared = useTranslations("AudienceShared")
	const myths = t.raw("myths.items") as { myth: string; reality: string }[]
	const outcomes = t.raw("caseStudy.outcomes") as string[]

	return (
		<>
			<PageBanner
				anchorId="how-we-help"
				anchorText={t("banner.anchorText")}
				body={t("banner.body")}
				title={t("banner.title")}
			/>
			<ContainedLayout className="grid grid-cols-1 gap-section-gap md:grid-cols-2">
				<H2>{t("intro.h2")}</H2>
				<P className="text-mint-5/80 text-lg leading-relaxed">{t("intro.body")}</P>
			</ContainedLayout>
			<ContainedLayout className="grid grid-rows-1 bg-muted-1 p-0 md:p-0">
				{blockMeta.map((meta) => (
					<HighlightBlock
						background="white"
						body={t(`highlights.${meta.key}.body`)}
						buttonHref="/contact"
						buttonText={tShared("contactButton")}
						key={meta.key}
						media={{
							type: "component",
							mediaNode: (
								<div className="relative h-full w-full bg-mint-1">
									{/* eslint-disable-next-line @next/next/no-img-element */}
									<img src={meta.img} alt={t(`highlights.${meta.key}.alt`)} className="absolute inset-0 h-full w-full object-cover" />
								</div>
							),
						}}
						mediaPosition={meta.mediaPosition}
						title={t(`highlights.${meta.key}.title`)}
					>
						<HighlightBlockTitle />
						<HighlightBlockBody />
						<HighlightBlockButton />
					</HighlightBlock>
				))}
			</ContainedLayout>

			{/* Myth vs Reality */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-white">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark title={t("myths.subtitle")} />
					<H2 className="text-mint-6">{t("myths.h2")}</H2>
					<P className="text-mint-5/70 max-w-2xl">{t("myths.body")}</P>
				</div>
				<div className="col-span-full grid grid-cols-1 gap-inner-padding md:grid-cols-2 lg:grid-cols-3">
					{myths.map((item, i) => (
						<div
							className="flex flex-col gap-4 rounded-inner border border-mint-2/20 bg-muted-1 p-inner-padding"
							key={i}
						>
							<div className="flex flex-col gap-2">
								<P className="text-xs font-semibold uppercase tracking-widest text-mint-4/70">{tShared("mythLabel")}</P>
								<P className="text-mint-5/60 italic text-sm line-through decoration-mint-4/40">
									&ldquo;{item.myth}&rdquo;
								</P>
							</div>
							<div className="h-px bg-mint-2/30" />
							<div className="flex flex-col gap-2">
								<P className="text-xs font-semibold uppercase tracking-widest text-mint-4">{tShared("realityLabel")}</P>
								<P className="text-mint-5/90 text-sm">{item.reality}</P>
							</div>
						</div>
					))}
				</div>
			</ContainedLayout>

			<ServiceRoller />

			{/* Case Study */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-mint-6">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark={false} title={tShared("caseStudyLabel")} />
					<H2 className="text-white">{t("caseStudy.h2")}</H2>
				</div>
				<div className="col-span-full grid grid-cols-1 gap-section-gap lg:grid-cols-2">
					<div className="flex flex-col gap-fluid-3">
						<P className="text-white/80">{t("caseStudy.para1")}</P>
						<P className="text-white/80">{t("caseStudy.para2")}</P>
						<div className="flex flex-col gap-2">
							{outcomes.map((outcome) => (
								<div className="flex items-center gap-3" key={outcome}>
									<span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20">
										<svg viewBox="0 0 16 16" fill="none" className="h-3 w-3 text-mint-2" aria-hidden="true">
											<path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>
									</span>
									<P className="text-white/80 text-sm">{outcome}</P>
								</div>
							))}
						</div>
					</div>
					<div className="flex flex-col justify-center">
						<blockquote className="rounded-inner bg-white/10 p-inner-padding">
							<P className="text-white text-lg leading-relaxed italic">
								&ldquo;{t("caseStudy.quote")}&rdquo;
							</P>
							<footer className="mt-4">
								<P className="text-mint-2 text-sm font-medium">{t("caseStudy.attribution")}</P>
							</footer>
						</blockquote>
						<div className="mt-fluid-3">
							<a
								href="/contact"
								className="inline-block rounded-inner bg-white px-6 py-3 text-sm font-medium text-mint-6 transition-colors hover:bg-mint-1"
							>
								{tShared("bookConsultation")}
							</a>
						</div>
					</div>
				</div>
			</ContainedLayout>

			<HighlightBlock
				background="green"
				body={t("cta.body")}
				buttonHref="/contact"
				buttonText={tShared("finalButton")}
				className="h-[80dvh]"
				media={{
					type: "component",
					mediaNode: (
						<div className="relative h-full w-full">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="https://images.pexels.com/photos/3860937/pexels-photo-3860937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt={t("cta.alt")} className="absolute inset-0 h-full w-full object-cover object-top" />
						</div>
					),
				}}
				mediaPosition="right"
				title={t("cta.title")}
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
						text: tShared("viewAllFaqs"),
						navigateTo: "/faq",
					},
					questions: faqIndexes.map((i) => ({
						question: t(`faq.q${i}Question`),
						answer: t(`faq.q${i}Answer`),
					})),
				}}
			/>
			<ClientLogos />
		</>
	)
}

export default ForLargeBusinessesPage
