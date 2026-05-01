import { ContainedLayout } from "@shared/components/layout"
import {
	HighlightBlock,
	HighlightBlockBody,
	HighlightBlockButton,
	HighlightBlockTitle,
} from "@shared/components/layout/highlight-block"
import { PageBanner } from "@shared/components/page-banner"
import { SectionSubtitle } from "@shared/components/section-subtitle"
import { H2, H3, P } from "@shared/components/typography"
import { ClientLogos } from "@widgets/client-logos/ui"
import { FaqSection } from "@widgets/faq-section/ui"
import { ServiceRoller } from "@widgets/service-roller/ui"
import type { NextPage } from "next"
import { useTranslations } from "next-intl"

const highlightMeta = [
	{ key: "block1", img: "https://images.pexels.com/photos/6457575/pexels-photo-6457575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", mediaPosition: "right" as const },
	{ key: "block2", img: "https://images.pexels.com/photos/8547344/pexels-photo-8547344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", mediaPosition: "left" as const },
	{ key: "block3", img: "https://images.pexels.com/photos/7988504/pexels-photo-7988504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", mediaPosition: "right" as const },
] as const

const faqIndexes = [1, 2, 3, 4, 5] as const

export const AiInTheWorkplacePage: NextPage = () => {
	const t = useTranslations("AiInTheWorkplace")
	const tShared = useTranslations("AudienceShared")
	const approachSteps = t.raw("approach.steps") as { step: string; title: string; description: string }[]
	const oldSteps = t.raw("paradigm.oldSteps") as string[]
	const newSteps = t.raw("paradigm.newSteps") as string[]
	const useCaseCategories = t.raw("useCases.categories") as { icon: string; title: string; items: string[] }[]
	const examples = t.raw("examples.items") as { sector: string; challenge: string; solution: string; result: string }[]
	const benefits = t.raw("benefits.items") as { title: string; description: string }[]
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

			{/* Intro */}
			<ContainedLayout className="grid grid-cols-1 gap-section-gap md:grid-cols-2">
				<H2>{t("intro.h2")}</H2>
				<div className="flex flex-col gap-fluid-2">
					<P className="text-mint-5/80 text-lg leading-relaxed">{t("intro.para1")}</P>
					<P className="text-mint-5/80 text-lg leading-relaxed">{t("intro.para2")}</P>
					<P className="text-mint-5/80 text-lg leading-relaxed">{t("intro.para3")}</P>
				</div>
			</ContainedLayout>

			{/* Paradigm Shift */}
			<ContainedLayout className="max-h-none bg-mint-1 py-section-gap">
				<div className="col-span-full grid grid-cols-1 gap-section-gap lg:grid-cols-2 items-center">
					<div className="flex flex-col gap-fluid-2">
						<SectionSubtitle isDark title={t("paradigm.subtitle")} />
						<H2 className="text-mint-6">{t("paradigm.h2")}</H2>
						<P className="text-mint-5/80 text-lg leading-relaxed">{t("paradigm.para1")}</P>
						<P className="text-mint-5/80 text-lg leading-relaxed">{t("paradigm.para2")}</P>
						<P className="text-mint-5/80 text-lg leading-relaxed">{t("paradigm.para3")}</P>
					</div>
					<div className="flex flex-col gap-6">
						{[
							{ label: t("paradigm.oldLabel"), steps: oldSteps, colour: "border-red-200 bg-red-50", headingColour: "text-red-500" },
							{ label: t("paradigm.newLabel"), steps: newSteps, colour: "border-mint-3 bg-mint-1/60", headingColour: "text-mint-5" },
						].map((model) => (
							<div
								className={`flex flex-col gap-3 rounded-inner border p-inner-padding ${model.colour}`}
								key={model.label}
							>
								<P className={`text-xs font-semibold uppercase tracking-widest ${model.headingColour}`}>{model.label}</P>
								<ul className="flex flex-col gap-2">
									{model.steps.map((step, i) => (
										<li className="flex items-start gap-2" key={i}>
											<P className="text-mint-5/80 text-sm">{step}</P>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</ContainedLayout>

			{/* OptiAI Approach */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-mint-6">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark={false} title={t("approach.subtitle")} />
					<H2 className="text-white">{t("approach.h2")}</H2>
					<P className="text-white/80 max-w-2xl">{t("approach.body")}</P>
				</div>
				<div className="col-span-full grid grid-cols-1 gap-inner-padding sm:grid-cols-2 lg:grid-cols-3">
					{approachSteps.map((item) => (
						<div
							className="flex flex-col gap-3 rounded-inner bg-white/10 p-inner-padding"
							key={item.step}
						>
							<P className="text-xs font-semibold uppercase tracking-widest text-mint-2">{item.step}</P>
							<H3 className="text-white">{item.title}</H3>
							<P className="text-white/70 text-sm">{item.description}</P>
						</div>
					))}
				</div>
			</ContainedLayout>

			{/* Highlight Blocks */}
			<ContainedLayout className="grid grid-rows-1 bg-muted-1 p-0 md:p-0">
				{highlightMeta.map((meta) => (
					<HighlightBlock
						background="white"
						body={t(`highlights.${meta.key}.body`)}
						buttonHref="/contact"
						buttonText={t(`highlights.${meta.key}.button`)}
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

			{/* Practical Use Cases */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-muted-1">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark title={t("useCases.subtitle")} />
					<H2 className="text-mint-6">{t("useCases.h2")}</H2>
					<P className="text-mint-5/70 max-w-2xl">{t("useCases.body")}</P>
				</div>
				<div className="col-span-full grid grid-cols-1 gap-inner-padding sm:grid-cols-2 lg:grid-cols-3">
					{useCaseCategories.map((category, i) => (
						<div
							className="flex flex-col gap-4 rounded-inner bg-white border border-mint-2/20 p-inner-padding"
							key={i}
						>
							<div className="flex items-center gap-3">
								<span className="text-2xl" aria-hidden="true">{category.icon}</span>
								<H3 className="text-mint-6 text-base">{category.title}</H3>
							</div>
							<ul className="flex flex-col gap-2">
								{category.items.map((item, j) => (
									<li className="flex items-start gap-2" key={j}>
										<span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-mint-2/30">
											<svg viewBox="0 0 16 16" fill="none" className="h-2.5 w-2.5 text-mint-5" aria-hidden="true">
												<path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</span>
										<P className="text-mint-5/80 text-sm">{item}</P>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</ContainedLayout>

			{/* Real-World Examples */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-white">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark title={t("examples.subtitle")} />
					<H2 className="text-mint-6">{t("examples.h2")}</H2>
					<P className="text-mint-5/70 max-w-2xl">{t("examples.body")}</P>
				</div>
				<div className="col-span-full flex flex-col gap-inner-padding">
					{examples.map((example, i) => (
						<div
							className="grid grid-cols-1 gap-0 rounded-inner border border-mint-2/20 overflow-hidden lg:grid-cols-3"
							key={i}
						>
							<div className="bg-mint-6 p-inner-padding flex flex-col gap-2 justify-center">
								<P className="text-xs font-semibold uppercase tracking-widest text-mint-2">{t("examples.exampleLabel")}</P>
								<H3 className="text-white">{example.sector}</H3>
							</div>
							<div className="bg-muted-1 p-inner-padding flex flex-col gap-3">
								<P className="text-xs font-semibold uppercase tracking-widest text-mint-4/70">{t("examples.situationLabel")}</P>
								<P className="text-mint-5/80 text-sm">{example.challenge}</P>
								<div className="h-px bg-mint-2/20" />
								<P className="text-xs font-semibold uppercase tracking-widest text-mint-4/70">{t("examples.actionLabel")}</P>
								<P className="text-mint-5/80 text-sm">{example.solution}</P>
							</div>
							<div className="bg-mint-2/20 p-inner-padding flex flex-col gap-2 justify-center">
								<P className="text-xs font-semibold uppercase tracking-widest text-mint-5">{t("examples.resultLabel")}</P>
								<P className="text-mint-6 font-medium text-sm">{example.result}</P>
							</div>
						</div>
					))}
				</div>
			</ContainedLayout>

			{/* Employee Benefits */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-white">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark title={t("benefits.subtitle")} />
					<H2 className="text-mint-6">{t("benefits.h2")}</H2>
					<P className="text-mint-5/70 max-w-2xl">{t("benefits.body")}</P>
				</div>
				<div className="col-span-full grid grid-cols-1 gap-inner-padding sm:grid-cols-2 lg:grid-cols-3">
					{benefits.map((benefit, i) => (
						<div
							className="flex flex-col gap-3 rounded-inner border border-mint-2/20 bg-muted-1 p-inner-padding"
							key={i}
						>
							<H3 className="text-mint-6 text-base">{benefit.title}</H3>
							<P className="text-mint-5/80 text-sm">{benefit.description}</P>
						</div>
					))}
				</div>
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
						<P className="text-white/80">{t("caseStudy.para3")}</P>
						<div className="flex flex-col gap-2">
							{outcomes.map((outcome) => (
								<div className="flex items-center gap-3" key={outcome}>
									<span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20">
										<svg viewBox="0 0 16 16" fill="none" className="h-3 w-3 text-mint-2" aria-hidden="true">
											<path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
								<P className="text-mint-2 text-sm font-medium">
									{t("caseStudy.attribution")}{" "}
									<span className="text-white/50 font-normal">{t("caseStudy.attributionNote")}</span>
								</P>
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

			{/* Final CTA */}
			<HighlightBlock
				background="green"
				body={t("cta.body")}
				buttonHref="/contact"
				buttonText={tShared("finalButton")}
				className={"h-[80dvh]"}
				media={{
					type: "image",
					imageProps: {
						alt: t("cta.alt"),
						src: "/Optihr-Rhodene-Duncan-Portrait.jpg",
					},
					containerClassnames: undefined,
				}}
				mediaPosition={"right"}
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

export default AiInTheWorkplacePage
