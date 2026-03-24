import { PortableText } from "@portabletext/react"
import { P } from "@shared/components/typography"
import { cn } from "@shared/lib/utils"
import type { TestimonialProps } from "../model/schema"

export const TestimonialCard = ({
	name,
	company,
	role,
	testimonial,
	...props
}: TestimonialProps) => {
	return (
		<div
			{...props}
			className={cn(
				"flex aspect-3/2 flex-col justify-between gap-inner-padding rounded-outer bg-muted-1 p-inner-padding text-fluid-1",
				props.className,
			)}
		>
			{testimonial ? (
				<PortableText
					components={{
						marks: {
							strong: ({ children }) => <strong className="font-bold">{children}</strong>,
						},
						block: {
							normal: ({ children }) => <p className="text-mint-5/80 leading-loose">{children}</p>,
						},
					}}
					value={testimonial}
				/>
			) : null}

			<P className="flex w-full flex-col gap-fluid-0 text-fluid-0 text-mint-6/80">
				<span className="font-medium text-mint-6 opacity-100">{name}</span>
				{`${role} @ ${company}`}
			</P>
		</div>
	)
}
