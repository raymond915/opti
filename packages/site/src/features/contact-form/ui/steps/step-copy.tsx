"use client"

import { SectionSubtitle } from "@shared/components/section-subtitle"
import { H2, P } from "@shared/components/typography"
import { type StepCopyType, stepCopy } from "../../model/step-copy"

interface Props {
	step: 1 | 2 | 3
}

export const StepCopy = ({ step }: Props) => {
	const current = stepCopy[`step${step}` as keyof StepCopyType]
	return (
		<div className="space-y-4">
			<SectionSubtitle title={`Step ${step} of 3`} />
			<H2>{current.heading}</H2>
			<P>{current.body}</P>
		</div>
	)
}
