"use client"

import { SectionSubtitle } from "@shared/components/section-subtitle"
import { H2, P } from "@shared/components/typography"
import { useTranslations } from "next-intl"

interface Props {
	step: 1 | 2 | 3
}

export const StepCopy = ({ step }: Props) => {
	const t = useTranslations("ContactForm")
	return (
		<div className="space-y-4">
			<SectionSubtitle title={t("stepIndicator", { step })} />
			<H2>{t(`steps.step${step}.heading`)}</H2>
			<P>{t(`steps.step${step}.body`)}</P>
		</div>
	)
}
