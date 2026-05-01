import { ContainedLayout } from "@shared/components/layout/contained-layout"
import { PageBanner } from "@shared/components/page-banner"
import { SectionSubtitle } from "@shared/components/section-subtitle"
import { H2, H3, P } from "@shared/components/typography"
import { ClientLogos } from "@widgets/client-logos"
import { FaqSection } from "@widgets/faq-section"
import { useTranslations } from "next-intl"
import { notFound } from "next/navigation"
import type { ServiceContent } from "../model/schema"

import companySecretaryServices from "../service-content/company-secretary-services.json"
import compliance from "../service-content/compliance.json"
import employmentEquity from "../service-content/employment-equity.json"
import hrPolicyDevelopment from "../service-content/hr-policy-development.json"
import hrSupportForIndependentSchools from "../service-content/hr-support-for-independent-schools.json"
import hrTraining from "../service-content/hr-training.json"
import industrialRelations from "../service-content/industrial-relations.json"
import jobEvaluation from "../service-content/job-evaluation.json"
import labourAudits from "../service-content/labour-audits.json"
import performanceManagement from "../service-content/performance-management.json"
import retrenchments from "../service-content/retrenchments.json"
import workplaceDiscipline from "../service-content/workplace-discipline.json"
import workplaceWellnessPrograms from "../service-content/workplace-wellness-programs.json"

type SectionItem = { type: string; text: string }
export type ExtendedServiceContent = ServiceContent & { sections?: SectionItem[] }

export const serviceMap: Record<string, unknown> = {
	"company-secretary-services": companySecretaryServices,
	"compliance": compliance,
	"employment-equity": employmentEquity,
	"hr-policy-development": hrPolicyDevelopment,
	"hr-support-for-independent-schools": hrSupportForIndependentSchools,
	"hr-training": hrTraining,
	"industrial-relations": industrialRelations,
	"job-evaluation": jobEvaluation,
	"labour-audits": labourAudits,
	"performance-management": performanceManagement,
	"retrenchments": retrenchments,
	"workplace-discipline": workplaceDiscipline,
	"workplace-wellness-programs": workplaceWellnessPrograms,
}

// Convert kebab-case slug to camelCase namespace key
const slugToCamel = (slug: string) =>
	slug.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase())

export const ServicePage = ({ slug }: { slug: string }) => {
	const t = useTranslations("Services")
	const tShared = useTranslations("IndividualServiceShared")

	if (!slug) {
		notFound()
	}

	const raw = serviceMap[slug]
	if (!raw) {
		notFound()
	}
	const data = raw as ExtendedServiceContent

	const detailKey = slugToCamel(slug)
	const title = t(`details.${detailKey}.title`)
	const description = t(`details.${detailKey}.description`)

	const sections = data.sections ?? []
	const itemSections = sections.filter((s) => s.type === "item")
	const benefitSections = sections.filter((s) => s.type === "benefit")
	const audienceSections = sections.filter((s) => s.type === "audience")
	const warningSections = sections.filter((s) => s.type === "warning")

	return (
		<>
			<PageBanner
				anchorId="services"
				anchorText={tShared("anchorText")}
				body={description}
				title={title}
			/>

			{data.whyOptiHR && data.whyOptiHR.length > 0 && (
				<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-muted-1">
					<div className="col-span-full flex flex-col gap-fluid-1">
						<SectionSubtitle isDark title={tShared("whyOptiHRSubtitle")} />
						<H2>{tShared("whyOptiHRTitle")}</H2>
					</div>
					<div className="col-span-full grid grid-cols-1 gap-inner-padding md:grid-cols-3">
						{data.whyOptiHR.map((item) => (
							<div
								className="flex flex-col gap-fluid-2 rounded-inner bg-white p-inner-padding"
								key={item.title}
							>
								<div className="flex flex-col gap-fluid-1">
									<P className="text-mint-4 text-sm font-medium uppercase tracking-wider">
										{item.subtitle}
									</P>
									<H3 className="text-mint-6">{item.title}</H3>
								</div>
								<P className="text-mint-5/90 grow">{item.body}</P>
							</div>
						))}
					</div>
				</ContainedLayout>
			)}

			{itemSections.length > 0 && (
				<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-white">
					<div className="col-span-full flex flex-col gap-fluid-1">
						<SectionSubtitle isDark title={tShared("processSubtitle")} />
						<H2 className="text-mint-6">{tShared("processTitle")}</H2>
					</div>
					<div className="col-span-full grid grid-cols-1 gap-x-inner-padding gap-y-fluid-2 md:grid-cols-2">
						{itemSections.map((item, i) => (
							<div className="flex items-start gap-3" key={i}>
								<span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint-4/20 text-mint-4">
									<svg viewBox="0 0 16 16" fill="none" className="h-3 w-3" aria-hidden="true">
										<path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
								</span>
								<P className="text-mint-5/90">{item.text}</P>
							</div>
						))}
					</div>
				</ContainedLayout>
			)}

			{benefitSections.length > 0 && (
				<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-muted-1">
					<div className="col-span-full flex flex-col gap-fluid-1">
						<SectionSubtitle isDark title={tShared("deliverablesSubtitle")} />
						<H2>{tShared("deliverablesTitle")}</H2>
					</div>
					<div className="col-span-full grid grid-cols-1 gap-x-inner-padding gap-y-fluid-2 md:grid-cols-2">
						{benefitSections.map((item, i) => (
							<div className="flex items-start gap-3" key={i}>
								<span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint-6/20 text-mint-6">
									<svg viewBox="0 0 16 16" fill="none" className="h-3 w-3" aria-hidden="true">
										<path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
								</span>
								<P className="text-mint-5/90">{item.text}</P>
							</div>
						))}
					</div>
				</ContainedLayout>
			)}

			{audienceSections.length > 0 && (
				<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-white">
					<div className="col-span-full flex flex-col gap-fluid-1">
						<SectionSubtitle isDark title={tShared("audienceSubtitle")} />
						<H2 className="text-mint-6">{tShared("audienceTitle")}</H2>
					</div>
					<div className="col-span-full grid grid-cols-1 gap-inner-padding sm:grid-cols-2 lg:grid-cols-3">
						{audienceSections.map((item, i) => (
							<div
								className="rounded-inner border border-mint-2/30 bg-muted-1 p-inner-padding"
								key={i}
							>
								<P className="text-mint-5/90 text-sm">{item.text}</P>
							</div>
						))}
					</div>
				</ContainedLayout>
			)}

			{warningSections.length > 0 && (
				<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-mint-1/30">
					<div className="col-span-full flex flex-col gap-fluid-1">
						<SectionSubtitle isDark title={tShared("advantageSubtitle")} />
						<H2 className="text-mint-6">{tShared("advantageTitle")}</H2>
					</div>
					<div className="col-span-full grid grid-cols-1 gap-inner-padding md:grid-cols-2">
						{warningSections.map((item, i) => (
							<div
								className="flex flex-col gap-fluid-1 rounded-inner bg-white p-inner-padding shadow-sm"
								key={i}
							>
								<P className="text-mint-5/90">{item.text}</P>
							</div>
						))}
					</div>
				</ContainedLayout>
			)}

			{data.legalConsiderations && data.legalConsiderations.length > 0 && (
				<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-mint-6">
					<div className="col-span-full flex flex-col gap-fluid-1">
						<SectionSubtitle isDark={false} title={tShared("legalSubtitle")} />
						<H2 className="text-white">{tShared("legalTitle")}</H2>
					</div>
					<div className="col-span-full grid grid-cols-1 gap-inner-padding md:grid-cols-2">
						{data.legalConsiderations.map((item) => (
							<div
								className="flex flex-col gap-fluid-2 rounded-inner bg-white/10 p-inner-padding"
								key={item.title}
							>
								<div className="flex flex-col gap-fluid-1">
									<P className="text-mint-2 text-sm font-medium uppercase tracking-wider">
										{item.subtitle}
									</P>
									<H3 className="text-white">{item.title}</H3>
								</div>
								<P className="text-white/80 grow">{item.body}</P>
							</div>
						))}
					</div>
				</ContainedLayout>
			)}

			<FaqSection
				data={{
					title: tShared("faqTitle"),
					subtitle: data.faqSubtitle,
					body: data.faqBody,
					cta: data.faqCta,
					questions: data.faq,
				}}
			/>
			<ClientLogos />
		</>
	)
}
