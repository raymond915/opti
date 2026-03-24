import { Button } from "@shared/components/button"
import { ContainedLayout } from "@shared/components/layout/contained-layout"
import { SectionSubtitle } from "@shared/components/section-subtitle"
import { H2, P } from "@shared/components/typography"
import { cn } from "../lib/utils"
import type { LargeParagraphProps } from "../model/schema"

export const LargeParagraph = ({
	className,
	title,
	heading,
	description,
	ctaHref,
	ctaLabel,
}: LargeParagraphProps) => {
	return (
		<ContainedLayout className={cn("items-start", className)}>
			<SectionSubtitle
				className="col-span-6"
				title={title}
			/>
			<div className="col-span-6 col-start-7 flex flex-col gap-fluid-2">
				<H2 className="wrap-normal block [&>span]:shrink-0 [&>span]:text-mint-4">{heading}</H2>
				<P>{description}</P>
				<Button href={ctaHref}>{ctaLabel}</Button>
			</div>
		</ContainedLayout>
	)
}
