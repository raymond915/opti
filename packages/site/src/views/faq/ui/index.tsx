import { PageBanner } from "@shared/components/page-banner"
import { FaqSection } from "@widgets/faq-section"
import type { NextPage } from "next"
import { useTranslations } from "next-intl"

export const FaqPage: NextPage = () => {
	const t = useTranslations("Faq")

	const sections = [
		{
			key: "about",
			ctaText: t("sectionCta.contactUs"),
			ctaHref: "/contact",
			questionCount: 3,
		},
		{
			key: "labourLaw",
			ctaText: t("sectionCta.viewCompliance"),
			ctaHref: "/services/compliance",
			questionCount: 4,
		},
		{
			key: "ccma",
			ctaText: t("sectionCta.viewIR"),
			ctaHref: "/services/industrial-relations",
			questionCount: 4,
		},
		{
			key: "policies",
			ctaText: t("sectionCta.viewPolicy"),
			ctaHref: "/services/hr-policy-development",
			questionCount: 4,
		},
		{
			key: "retrenchments",
			ctaText: t("sectionCta.viewRetrenchment"),
			ctaHref: "/services/retrenchments",
			questionCount: 3,
		},
		{
			key: "schools",
			ctaText: t("sectionCta.viewSchools"),
			ctaHref: "/services/hr-support-for-independent-schools",
			questionCount: 3,
		},
	] as const

	return (
		<>
			<PageBanner
				anchorId="faq-list"
				anchorText={t("banner.anchorText")}
				body={t("banner.body")}
				title={t("banner.title")}
			/>
			<div
				className="col-span-full flex flex-col gap-section-gap"
				id="faq-list"
			>
				{sections.map((section) => (
					<FaqSection
						data={{
							title: t(`${section.key}.title`),
							subtitle: t(`${section.key}.subtitle`),
							body: "",
							cta: { text: section.ctaText, navigateTo: section.ctaHref },
							questions: Array.from({ length: section.questionCount }, (_, i) => ({
								question: t(`${section.key}.q${i + 1}Question`),
								answer: t(`${section.key}.q${i + 1}Answer`),
							})),
						}}
						key={section.key}
					/>
				))}
			</div>
		</>
	)
}

export default FaqPage
