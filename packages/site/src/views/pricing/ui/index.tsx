import { ContainedLayout } from "@shared/components/layout/contained-layout"
import { PageBanner } from "@shared/components/page-banner"
import { SectionSubtitle } from "@shared/components/section-subtitle"
import { H2, H3, H4, P } from "@shared/components/typography"
import { FaqSection } from "@widgets/faq-section"
import { ClientLogos } from "@widgets/client-logos"
import { useTranslations } from "next-intl"
import {
	HighlightBlock,
	HighlightBlockBody,
	HighlightBlockButton,
	HighlightBlockTitle,
} from "@shared/components/layout/highlight-block"

const factorKeys = ["complexity", "time", "resources", "urgency", "size"] as const
const modelOptionKeys = ["option1", "option2", "option3"] as const
const modelNumbers: Record<(typeof modelOptionKeys)[number], string> = {
	option1: "01",
	option2: "02",
	option3: "03",
}

const prepaidPackageKeys = ["start", "flex", "build"] as const
const prepaidPackageMeta: Record<
	(typeof prepaidPackageKeys)[number],
	{ name: string; hours: number; valid: "valid3" | "valid6" | "valid12"; rate: string; total: string; highlight: boolean }
> = {
	start: { name: "OPTI-START", hours: 10, valid: "valid3", rate: "R1,400", total: "R14,000", highlight: false },
	flex: { name: "OPTI-FLEX", hours: 20, valid: "valid6", rate: "R1,350", total: "R27,000", highlight: true },
	build: { name: "OPTI-BUILD", hours: 40, valid: "valid12", rate: "R1,300", total: "R52,000", highlight: false },
}

const retainerPackageKeys = ["remote", "essentials", "advantage", "premier", "platinum"] as const
const retainerPackageMeta: Record<
	(typeof retainerPackageKeys)[number],
	{ name: string; price: string; highlight: boolean; isNew: boolean }
> = {
	remote: { name: "OPTI-REMOTE", price: "R7,500", highlight: false, isNew: true },
	essentials: { name: "OPTI-ESSENTIALS", price: "R14,500", highlight: false, isNew: false },
	advantage: { name: "OPTI-ADVANTAGE", price: "R19,500", highlight: true, isNew: false },
	premier: { name: "OPTI-PREMIER", price: "R24,500", highlight: false, isNew: false },
	platinum: { name: "OPTI-PLATINUM", price: "R29,500", highlight: false, isNew: false },
}

const popiaImplKeys = ["micro", "small", "medium"] as const
const popiaImplMeta: Record<
	(typeof popiaImplKeys)[number],
	{ price: string; highlight: boolean }
> = {
	micro: { price: "R9,500", highlight: false },
	small: { price: "R16,500", highlight: true },
	medium: { price: "R24,500", highlight: false },
}

const popiaRetainerKeys = ["essential", "business", "enterprise"] as const
const popiaRetainerMeta: Record<
	(typeof popiaRetainerKeys)[number],
	{ price: string }
> = {
	essential: { price: "R2,500" },
	business: { price: "R3,500" },
	enterprise: { price: "R4,500" },
}

const faqIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const

export const PricingPage = () => {
	const t = useTranslations("Pricing")

	return (
		<>
			<PageBanner
				anchorId="packages"
				anchorText={t("banner.anchorText")}
				body={t("banner.body")}
				title={t("banner.title")}
			/>

			{/* How we price */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-muted-1">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark title={t("approach.subtitle")} />
					<H2>{t("approach.h2")}</H2>
					<P className="text-mint-5/80 max-w-2xl">{t("approach.body")}</P>
				</div>
				<div className="col-span-full grid grid-cols-1 gap-inner-padding md:grid-cols-2 lg:grid-cols-3">
					{factorKeys.map((key) => (
						<div
							className="flex flex-col gap-fluid-1 rounded-inner bg-white p-inner-padding"
							key={key}
						>
							<div className="flex items-center gap-3">
								<span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint-4/20">
									<svg viewBox="0 0 16 16" fill="none" className="h-3 w-3 text-mint-4" aria-hidden="true">
										<path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
								</span>
								<H4 className="text-mint-6 font-semibold">{t(`approach.factors.${key}.label`)}</H4>
							</div>
							<P className="text-mint-5/80 text-sm">{t(`approach.factors.${key}.detail`)}</P>
						</div>
					))}
				</div>
			</ContainedLayout>

			{/* Engagement options intro */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-white">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark title={t("models.subtitle")} />
					<H2 className="text-mint-6">{t("models.h2")}</H2>
				</div>
				<div className="col-span-full grid grid-cols-1 gap-inner-padding sm:grid-cols-2 md:grid-cols-3">
					{modelOptionKeys.map((key) => (
						<div
							className="flex flex-col gap-fluid-2 rounded-inner border border-mint-2/30 p-inner-padding"
							key={key}
						>
							<P className="text-xs font-semibold uppercase tracking-widest text-mint-4">{modelNumbers[key]}</P>
							<H3 className="text-mint-6">{t(`models.options.${key}.title`)}</H3>
							<P className="text-mint-5/80 text-sm grow">{t(`models.options.${key}.desc`)}</P>
						</div>
					))}
				</div>
			</ContainedLayout>

			{/* Prepaid Hours Packages */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-muted-1">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark title={t("prepaid.subtitle")} />
					<H2>{t("prepaid.h2")}</H2>
					<P className="text-mint-5/80 max-w-2xl">{t("prepaid.body")}</P>
				</div>

				{/* Rate comparison strip */}
				<div className="col-span-full flex flex-wrap gap-4">
					{[
						{ key: "adHoc", rate: "R1,500/hr", dark: false },
						{ key: "prepaid", rate: "From R1,300/hr", dark: false },
						{ key: "retainerAddOn", rate: "R1,200/hr", dark: true },
					].map((r) => (
						<div
							key={r.key}
							className={`flex flex-col gap-1 rounded-inner p-inner-padding min-w-[180px] ${r.dark ? "bg-mint-6 text-white" : "bg-white"}`}
						>
							<P className={`text-xs font-semibold uppercase tracking-widest ${r.dark ? "text-mint-2" : "text-mint-4"}`}>{t(`prepaid.rates.${r.key}.label`)}</P>
							<span className={`text-2xl font-bold ${r.dark ? "text-white" : "text-mint-6"}`}>{r.rate}</span>
							<P className={`text-xs ${r.dark ? "text-mint-1/80" : "text-mint-5/60"}`}>{t(`prepaid.rates.${r.key}.sub`)}</P>
						</div>
					))}
				</div>

				{/* Prepaid package cards */}
				<div className="col-span-full grid grid-cols-1 gap-inner-padding sm:grid-cols-2 md:grid-cols-3">
					{prepaidPackageKeys.map((key) => {
						const meta = prepaidPackageMeta[key]
						const examples = t.raw(`prepaid.packages.${key}.examples`) as string[]
						return (
							<div
								key={key}
								className={`flex flex-col gap-fluid-3 rounded-inner p-inner-padding ${meta.highlight ? "bg-mint-6 text-white" : "bg-white"}`}
							>
								<div className="flex flex-col gap-2">
									<P className={`text-xs font-semibold uppercase tracking-widest ${meta.highlight ? "text-mint-2" : "text-mint-4"}`}>
										{meta.name}
									</P>
									<div className="flex items-end gap-2 flex-wrap">
										<span className={`text-3xl font-bold ${meta.highlight ? "text-white" : "text-mint-6"}`}>{meta.hours} {t("prepaid.hoursLabel")}</span>
										<span className={`text-sm pb-1 ${meta.highlight ? "text-mint-2" : "text-mint-4"}`}>{t("prepaid.validPrefix")} {t(`prepaid.${meta.valid}`)}</span>
									</div>
									<div className={`flex items-center gap-2 rounded-inner px-3 py-1.5 text-sm w-fit ${meta.highlight ? "bg-white/15" : "bg-muted-1"}`}>
										<P className={`text-sm font-medium ${meta.highlight ? "text-white" : "text-mint-6"}`}>
											{meta.rate}{t("prepaid.perHour")} · {meta.total} {t("prepaid.totalSeparator")}
										</P>
									</div>
									<P className={`text-sm mt-1 ${meta.highlight ? "text-mint-1/90" : "text-mint-5/70"}`}>{t(`prepaid.packages.${key}.bestFor`)}</P>
								</div>

								<div className="flex flex-col gap-2">
									<P className={`text-xs font-semibold uppercase tracking-widest ${meta.highlight ? "text-mint-2/80" : "text-mint-4/70"}`}>{t("prepaid.examplesLabel")}</P>
									<ul className="flex flex-col gap-2">
										{examples.map((ex, i) => (
											<li className="flex items-start gap-2" key={i}>
												<span className={`mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${meta.highlight ? "bg-white/20" : "bg-mint-4/15"}`}>
													<svg viewBox="0 0 16 16" fill="none" className={`h-2.5 w-2.5 ${meta.highlight ? "text-mint-1" : "text-mint-4"}`} aria-hidden="true">
														<path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
													</svg>
												</span>
												<P className={`text-sm ${meta.highlight ? "text-white/85" : "text-mint-5/80"}`}>{ex}</P>
											</li>
										))}
									</ul>
								</div>

								<div className={`mt-auto rounded-inner px-3 py-1.5 text-xs font-medium text-center ${meta.highlight ? "bg-white/20 text-white" : "bg-mint-4/10 text-mint-5"}`}>
									{t(`prepaid.packages.${key}.note`)}
								</div>

								<a
									href="/contact"
									className={`inline-block rounded-inner px-6 py-3 text-sm font-medium text-center transition-colors ${meta.highlight ? "bg-white text-mint-6 hover:bg-mint-1" : "bg-mint-6 text-white hover:bg-mint-5"}`}
								>
									{t("prepaid.enquireButton")}
								</a>
							</div>
						)
					})}
				</div>

				<div className="col-span-full rounded-inner border border-mint-4/25 bg-white p-inner-padding flex gap-3 items-start">
					<span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint-4/15">
						<svg viewBox="0 0 16 16" fill="none" className="h-3 w-3 text-mint-4" aria-hidden="true">
							<circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/>
							<path d="M8 5h.01M8 7.5v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
						</svg>
					</span>
					<div className="flex flex-col gap-1">
						<P className="text-xs font-semibold uppercase tracking-widest text-mint-4">{t("prepaid.timeframesHeading")}</P>
						<P className="text-mint-5/80 text-sm">{t("prepaid.timeframesBody")}</P>
					</div>
				</div>
			</ContainedLayout>

			{/* Retainer packages */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-white" id="packages">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark title={t("retainers.subtitle")} />
					<H2>{t("retainers.h2")}</H2>
					<P className="text-mint-5/80 max-w-2xl">{t("retainers.body")}</P>
				</div>
				<div className="col-span-full grid grid-cols-1 gap-inner-padding md:grid-cols-2 xl:grid-cols-3">
					{retainerPackageKeys.map((key) => {
						const meta = retainerPackageMeta[key]
						const includes = t.raw(`retainers.packages.${key}.includes`) as string[]
						return (
							<div
								className={`flex flex-col gap-fluid-3 rounded-inner p-inner-padding relative ${meta.highlight ? "bg-mint-6 text-white" : "bg-white border border-mint-2/20"} ${meta.isNew ? "ring-2 ring-mint-4/40" : ""}`}
								key={key}
							>
								{meta.isNew && (
									<div className="absolute -top-3 left-inner-padding">
										<span className="rounded-full bg-mint-4 px-3 py-1 text-xs font-semibold text-white uppercase tracking-widest">
											{t("retainers.newBadge")}
										</span>
									</div>
								)}

								<div className="flex flex-col gap-fluid-1">
									<div className="flex items-start justify-between gap-4 flex-wrap">
										<div>
											<P className={`text-xs font-semibold uppercase tracking-widest ${meta.highlight ? "text-mint-2" : "text-mint-4"}`}>
												{meta.name}
											</P>
											<H3 className={`mt-1 ${meta.highlight ? "text-white" : "text-mint-6"}`}>{t(`retainers.packages.${key}.tagline`)}</H3>
										</div>
										<div className="text-right shrink-0">
											<span className={`text-3xl font-bold ${meta.highlight ? "text-white" : "text-mint-6"}`}>{meta.price}</span>
											<span className={`text-sm ${meta.highlight ? "text-mint-2" : "text-mint-4"}`}>{t("retainers.period")}</span>
											<P className={`text-xs mt-1 ${meta.highlight ? "text-mint-2/80" : "text-mint-4/80"}`}>{t("retainers.note")}</P>
										</div>
									</div>

									{/* On-site hours callout */}
									<div className={`flex flex-wrap gap-3 rounded-inner p-3 ${meta.highlight ? "bg-white/10" : "bg-muted-1"}`}>
										<div className="flex flex-col gap-0.5">
											<P className={`text-xs font-semibold uppercase tracking-widest ${meta.highlight ? "text-mint-1/70" : "text-mint-4/70"}`}>{t("retainers.supportModel")}</P>
											<P className={`text-sm font-medium ${meta.highlight ? "text-white" : "text-mint-6"}`}>{t(`retainers.packages.${key}.onsiteWeekly`)}</P>
										</div>
										<div className={`w-px self-stretch ${meta.highlight ? "bg-white/20" : "bg-mint-2/30"}`} />
										<div className="flex flex-col gap-0.5">
											<P className={`text-xs font-semibold uppercase tracking-widest ${meta.highlight ? "text-mint-1/70" : "text-mint-4/70"}`}>{t("retainers.monthlyCapacity")}</P>
											<P className={`text-sm font-medium ${meta.highlight ? "text-white" : "text-mint-6"}`}>{t(`retainers.packages.${key}.onsiteMonthly`)}</P>
										</div>
										<div className={`w-px self-stretch ${meta.highlight ? "bg-white/20" : "bg-mint-2/30"}`} />
										<div className="flex flex-col gap-0.5">
											<P className={`text-xs font-semibold uppercase tracking-widest ${meta.highlight ? "text-mint-1/70" : "text-mint-4/70"}`}>{t("retainers.hearingsLabel")}</P>
											<P className={`text-sm font-medium ${meta.highlight ? "text-white" : "text-mint-6"}`}>{t(`retainers.packages.${key}.hearings`)}</P>
										</div>
									</div>

									<P className={`text-sm ${meta.highlight ? "text-mint-1/90" : "text-mint-5/70"}`}>
										<span className="font-medium">{t("retainers.bestForLabel")}</span>{t(`retainers.packages.${key}.bestFor`)}
									</P>
								</div>

								<ul className="flex flex-col gap-2">
									{includes.map((item, i) => (
										<li className="flex items-start gap-2" key={i}>
											<span className={`mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${meta.highlight ? "bg-white/20" : "bg-mint-4/20"}`}>
												<svg viewBox="0 0 16 16" fill="none" className={`h-2.5 w-2.5 ${meta.highlight ? "text-mint-1" : "text-mint-4"}`} aria-hidden="true">
													<path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
												</svg>
											</span>
											<P className={`text-sm ${meta.highlight ? "text-white/90" : "text-mint-5/80"}`}>{item}</P>
										</li>
									))}
								</ul>

								<a
									href="/contact"
									className={`mt-auto inline-block rounded-inner px-6 py-3 text-sm font-medium text-center transition-colors ${meta.highlight ? "bg-white text-mint-6 hover:bg-mint-1" : "bg-mint-6 text-white hover:bg-mint-5"}`}
								>
									{t("retainers.getProposal")}
								</a>
							</div>
						)
					})}
				</div>

				{/* Additional hours callout */}
				<div className="col-span-full rounded-inner bg-muted-1 p-inner-padding flex flex-col gap-3 md:flex-row md:items-center md:gap-8">
					<div className="flex flex-col gap-1 shrink-0">
						<P className="text-xs font-semibold uppercase tracking-widest text-mint-4">{t("retainers.addOn.subtitle")}</P>
						<H4 className="text-mint-6">{t("retainers.addOn.heading")}</H4>
					</div>
					<div className="w-px self-stretch bg-mint-2/30 hidden md:block" />
					<p
						className="text-mint-5/80 text-sm grow [&_strong]:font-semibold [&_strong]:text-mint-6"
						dangerouslySetInnerHTML={{ __html: t.raw("retainers.addOn.body") as string }}
					/>
				</div>
			</ContainedLayout>

			{/* Company Secretarial Services */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-mint-6">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark={false} title={t("companySecretarial.subtitle")} />
					<H2 className="text-white">{t("companySecretarial.h2")}</H2>
					<P className="text-mint-1/90 max-w-2xl">{t("companySecretarial.body")}</P>
				</div>

				<div className="col-span-full grid grid-cols-1 gap-inner-padding lg:grid-cols-2">
					{/* Pricing card */}
					<div className="flex flex-col gap-fluid-3 rounded-inner bg-white p-inner-padding">
						<div className="flex flex-col gap-2">
							<P className="text-xs font-semibold uppercase tracking-widest text-mint-4">{t("companySecretarial.code")}</P>
							<H3 className="text-mint-6">{t("companySecretarial.cardTitle")}</H3>
							<div className="flex items-end gap-2">
								<span className="text-4xl font-bold text-mint-6">{t("companySecretarial.price")}</span>
								<span className="text-sm text-mint-4 pb-1">{t("companySecretarial.perMonthSuffix")}</span>
							</div>
							<P className="text-xs text-mint-4/70">{t("companySecretarial.slaNote")}</P>
						</div>

						<div className="rounded-inner bg-muted-1 p-4 flex flex-col gap-1">
							<P className="text-xs font-semibold uppercase tracking-widest text-mint-4">{t("companySecretarial.bestForLabel")}</P>
							<P className="text-sm text-mint-5/80">{t("companySecretarial.bestFor")}</P>
						</div>

						<ul className="flex flex-col gap-2">
							{(t.raw("companySecretarial.includes") as string[]).map((item, i) => (
								<li className="flex items-start gap-2" key={i}>
									<span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-mint-4/20">
										<svg viewBox="0 0 16 16" fill="none" className="h-2.5 w-2.5 text-mint-4" aria-hidden="true">
											<path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>
									</span>
									<P className="text-sm text-mint-5/80">{item}</P>
								</li>
							))}
						</ul>

						<a
							href="/contact"
							className="mt-auto inline-block rounded-inner bg-mint-6 px-6 py-3 text-sm font-medium text-white text-center transition-colors hover:bg-mint-5"
						>
							{t("companySecretarial.button")}
						</a>
					</div>

					{/* Why it matters */}
					<div className="flex flex-col gap-fluid-3">
						{(t.raw("companySecretarial.cards") as { heading: string; body: string }[]).map((item) => (
							<div key={item.heading} className="flex flex-col gap-2 rounded-inner bg-white/10 p-inner-padding">
								<H4 className="text-white">{item.heading}</H4>
								<P className="text-mint-1/80 text-sm">{item.body}</P>
							</div>
						))}
					</div>
				</div>

				<div className="col-span-full rounded-inner bg-white/10 p-inner-padding flex gap-3 items-start">
					<span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20">
						<svg viewBox="0 0 16 16" fill="none" className="h-3 w-3 text-mint-1" aria-hidden="true">
							<circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/>
							<path d="M8 5h.01M8 7.5v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
						</svg>
					</span>
					<P className="text-mint-1/80 text-sm">{t("companySecretarial.footnote")}</P>
				</div>
			</ContainedLayout>

			{/* POPIA Compliance Pricing */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-white">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark title={t("popia.subtitle")} />
					<H2 className="text-mint-6">{t("popia.h2")}</H2>
					<P className="text-mint-5/80 max-w-2xl">{t("popia.body")}</P>
				</div>

				{/* Once-off implementation */}
				<div className="col-span-full flex flex-col gap-fluid-2">
					<div className="flex flex-col gap-2">
						<P className="text-xs font-semibold uppercase tracking-widest text-mint-4">{t("popia.phase1.subtitle")}</P>
						<H3 className="text-mint-6">{t("popia.phase1.heading")}</H3>
						<P className="text-mint-5/80 text-sm max-w-2xl">{t("popia.phase1.body")}</P>
					</div>

					<div className="grid grid-cols-1 gap-inner-padding sm:grid-cols-2 md:grid-cols-3">
						{popiaImplKeys.map((key) => {
							const meta = popiaImplMeta[key]
							const includes = t.raw(`popia.phase1.tiers.${key}.includes`) as string[]
							return (
								<div
									key={key}
									className={`flex flex-col gap-fluid-3 rounded-inner p-inner-padding ${meta.highlight ? "bg-mint-6 text-white" : "bg-muted-1 border border-mint-2/20"}`}
								>
									<div className="flex flex-col gap-2">
										<P className={`text-xs font-semibold uppercase tracking-widest ${meta.highlight ? "text-mint-2" : "text-mint-4"}`}>
											{t(`popia.phase1.tiers.${key}.label`)}
										</P>
										<P className={`text-sm font-medium ${meta.highlight ? "text-mint-1/80" : "text-mint-5/70"}`}>{t(`popia.phase1.tiers.${key}.size`)}</P>
										<div className="flex items-end gap-2">
											<span className={`text-3xl font-bold ${meta.highlight ? "text-white" : "text-mint-6"}`}>{meta.price}</span>
										</div>
										<P className={`text-xs ${meta.highlight ? "text-mint-2/70" : "text-mint-4/70"}`}>{t("popia.phase1.note")}</P>
									</div>

									<ul className="flex flex-col gap-2 grow">
										{includes.map((item, i) => (
											<li className="flex items-start gap-2" key={i}>
												<span className={`mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${meta.highlight ? "bg-white/20" : "bg-mint-4/15"}`}>
													<svg viewBox="0 0 16 16" fill="none" className={`h-2.5 w-2.5 ${meta.highlight ? "text-mint-1" : "text-mint-4"}`} aria-hidden="true">
														<path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
													</svg>
												</span>
												<P className={`text-sm ${meta.highlight ? "text-white/90" : "text-mint-5/80"}`}>{item}</P>
											</li>
										))}
									</ul>

									<a
										href="/contact"
										className={`inline-block rounded-inner px-6 py-3 text-sm font-medium text-center transition-colors ${meta.highlight ? "bg-white text-mint-6 hover:bg-mint-1" : "bg-mint-6 text-white hover:bg-mint-5"}`}
									>
										{t("popia.phase1.button")}
									</a>
								</div>
							)
						})}
					</div>

					<div className="rounded-inner border border-mint-4/25 bg-muted-1 p-inner-padding flex gap-3 items-start">
						<span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint-4/15">
							<svg viewBox="0 0 16 16" fill="none" className="h-3 w-3 text-mint-4" aria-hidden="true">
								<circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/>
								<path d="M8 5h.01M8 7.5v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
							</svg>
						</span>
						<P className="text-mint-5/80 text-sm">{t("popia.phase1.footnote")}</P>
					</div>
				</div>

				{/* Ongoing retainer */}
				<div className="col-span-full flex flex-col gap-fluid-2">
					<div className="flex flex-col gap-2">
						<P className="text-xs font-semibold uppercase tracking-widest text-mint-4">{t("popia.phase2.subtitle")}</P>
						<H3 className="text-mint-6">{t("popia.phase2.heading")}</H3>
						<P className="text-mint-5/80 text-sm max-w-2xl">{t("popia.phase2.body")}</P>
					</div>

					<div className="grid grid-cols-1 gap-inner-padding sm:grid-cols-2 md:grid-cols-3">
						{popiaRetainerKeys.map((key, idx) => {
							const meta = popiaRetainerMeta[key]
							const isHighlight = idx === 1
							const includes = t.raw(`popia.phase2.tiers.${key}.includes`) as string[]
							return (
								<div
									key={key}
									className={`flex flex-col gap-fluid-3 rounded-inner p-inner-padding ${isHighlight ? "bg-mint-6 text-white" : "bg-muted-1 border border-mint-2/20"}`}
								>
									<div className="flex flex-col gap-2">
										<P className={`text-xs font-semibold uppercase tracking-widest ${isHighlight ? "text-mint-2" : "text-mint-4"}`}>
											{t(`popia.phase2.tiers.${key}.name`)}
										</P>
										<P className={`text-sm font-medium ${isHighlight ? "text-mint-1/80" : "text-mint-5/70"}`}>{t(`popia.phase2.tiers.${key}.size`)}</P>
										<div className="flex items-end gap-2">
											<span className={`text-3xl font-bold ${isHighlight ? "text-white" : "text-mint-6"}`}>{meta.price}</span>
											<span className={`text-sm pb-1 ${isHighlight ? "text-mint-2" : "text-mint-4"}`}>{t("popia.phase2.period")}</span>
										</div>
										<P className={`text-xs ${isHighlight ? "text-mint-2/70" : "text-mint-4/70"}`}>{t("popia.phase2.note")}</P>
									</div>

									<ul className="flex flex-col gap-2 grow">
										{includes.map((item, i) => (
											<li className="flex items-start gap-2" key={i}>
												<span className={`mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${isHighlight ? "bg-white/20" : "bg-mint-4/15"}`}>
													<svg viewBox="0 0 16 16" fill="none" className={`h-2.5 w-2.5 ${isHighlight ? "text-mint-1" : "text-mint-4"}`} aria-hidden="true">
														<path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
													</svg>
												</span>
												<P className={`text-sm ${isHighlight ? "text-white/90" : "text-mint-5/80"}`}>{item}</P>
											</li>
										))}
									</ul>

									<a
										href="/contact"
										className={`inline-block rounded-inner px-6 py-3 text-sm font-medium text-center transition-colors ${isHighlight ? "bg-white text-mint-6 hover:bg-mint-1" : "bg-mint-6 text-white hover:bg-mint-5"}`}
									>
										{t("popia.phase2.button")}
									</a>
								</div>
							)
						})}
					</div>
				</div>

				{/* Standalone training add-on */}
				<div className="col-span-full rounded-inner bg-mint-6 p-inner-padding flex flex-col gap-3 md:flex-row md:items-start md:gap-8">
					<div className="flex flex-col gap-2 shrink-0 md:max-w-xs">
						<P className="text-xs font-semibold uppercase tracking-widest text-mint-2">{t("popia.training.label")}</P>
						<H4 className="text-white">{t("popia.training.heading")}</H4>
						<div className="flex items-end gap-1">
							<span className="text-2xl font-bold text-white">{t("popia.training.price")}</span>
							<span className="text-sm text-mint-2 pb-1">{t("popia.training.priceSuffix")}</span>
						</div>
						<P className="text-xs text-mint-2/70">{t("popia.training.perUser")}</P>
					</div>
					<div className="w-px self-stretch bg-white/20 hidden md:block" />
					<P className="text-mint-1/85 text-sm grow">{t("popia.training.body")}</P>
				</div>
			</ContainedLayout>

			{/* RFH Inc. benefit */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-muted-1">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark title={t("rfh.subtitle")} />
					<H2 className="text-mint-6">{t("rfh.h2")}</H2>
					<P className="text-mint-5/80 max-w-2xl">{t("rfh.body")}</P>
				</div>
				<div className="col-span-full grid grid-cols-1 gap-inner-padding sm:grid-cols-2 lg:grid-cols-3">
					{(t.raw("rfh.cards") as { label: string; detail: string }[]).map((item) => (
						<div
							className="flex flex-col gap-2 rounded-inner bg-white border border-mint-2/20 p-inner-padding"
							key={item.label}
						>
							<H4 className="text-mint-6">{item.label}</H4>
							<P className="text-mint-5/80 text-sm">{item.detail}</P>
						</div>
					))}
				</div>
				<P className="col-span-full text-mint-4/70 text-xs">{t("rfh.footnote")}</P>
			</ContainedLayout>

			{/* Why retainers */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-white">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark title={t("whyRetainers.subtitle")} />
					<H2 className="text-mint-6">{t("whyRetainers.h2")}</H2>
				</div>
				<div className="col-span-full grid grid-cols-1 gap-inner-padding sm:grid-cols-2 lg:grid-cols-3">
					{(t.raw("whyRetainers.benefits") as { label: string; detail: string }[]).map((benefit) => (
						<div
							className="flex flex-col gap-fluid-1 rounded-inner bg-muted-1 p-inner-padding"
							key={benefit.label}
						>
							<H4 className="text-mint-6 font-semibold">{benefit.label}</H4>
							<P className="text-mint-5/80 text-sm">{benefit.detail}</P>
						</div>
					))}
				</div>
			</ContainedLayout>

			{/* Not included */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-muted-1">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark title={t("notIncluded.subtitle")} />
					<H2 className="text-mint-6">{t("notIncluded.h2")}</H2>
					<P className="text-mint-5/80 max-w-2xl">{t("notIncluded.body")}</P>
				</div>
				<div className="col-span-full grid grid-cols-1 gap-inner-padding md:grid-cols-2">
					{(t.raw("notIncluded.items") as string[]).map((item, i) => (
						<div
							className="flex items-start gap-3 rounded-inner bg-white p-inner-padding"
							key={i}
						>
							<span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint-4/15 text-mint-4 text-xs font-bold">✕</span>
							<P className="text-mint-5/80 text-sm">{item}</P>
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
						alt: t("cta.imageAlt"),
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

export default PricingPage
