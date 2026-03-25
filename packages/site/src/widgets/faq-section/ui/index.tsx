"use client"
import { Button } from "@shared/components/button"
import { ContainedLayout } from "@shared/components/layout/contained-layout"
import type { QuestionProps } from "@shared/components/question"
import { Question } from "@shared/components/question"
import { SectionSubtitle } from "@shared/components/section-subtitle"
import { H2, P } from "@shared/components/typography"
import { motion } from "motion/react"
import { useState } from "react"
import type { FaqSectionProps } from "../model/schema"

export const FaqSection = ({ data }: { data: FaqSectionProps }) => {
	const { title, subtitle, body, cta, questions } = data
	const [openIndex, setOpenIndex] = useState<number | null>(null)
	return (
		<ContainedLayout className="w-full grid-cols-1 lg:grid-cols-2 bg-beige-1">
			<div className="col-span-full lg:col-span-1 flex max-w-full lg:max-w-3/4 flex-col gap-fluid-1 px-inner-padding py-inner-padding">
				<SectionSubtitle
					isDark={true}
					title={subtitle}
				/>
				<H2>{title}</H2>
				<P>{body}</P>
				<Button
					className="mt-pair-4"
					href={cta.navigateTo}
				>
					{cta.text}
				</Button>
			</div>
			<motion.div
				className="col-span-full lg:col-start-2 flex flex-col gap-inner-padding"
				layout={true}
			>
				{questions.map((q: QuestionProps, index: number) => (
					<Question
						answer={q.answer}
						isOpen={openIndex === index}
						key={q.question}
						onToggle={() => setOpenIndex(openIndex === index ? null : index)}
						question={q.question}
					/>
				))}
			</motion.div>
		</ContainedLayout>
	)
}
