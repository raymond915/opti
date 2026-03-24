import { Button } from "@shared/components/button"
import { ContainedLayout } from "@shared/components/layout/contained-layout"
import { SectionSubtitle } from "@shared/components/section-subtitle"
import { P } from "@shared/components/typography"
import type { HTMLAttributes } from "react"
import type { OffsetParagraphProps } from "../model/schema"

export const OffsetParagraph = ({ ...props }: OffsetParagraphProps) => {
	return (
		<ContainedLayout
			className="grid-cols-subgrid"
			{...props}
		>
			<div className="col-span-6">
				<SectionSubtitle
					isDark={true}
					title={props.subtitle}
				/>
			</div>
			<div className="col-span-6 flex flex-col gap-gutter">
				<P className="text-fluid-4 leading-relaxed">{props.paragraph}</P>
				{props.hasButton ? (
					<Button href={props.buttonHref as string}>{props.buttonLabel}</Button>
				) : null}
			</div>
		</ContainedLayout>
	)
}
