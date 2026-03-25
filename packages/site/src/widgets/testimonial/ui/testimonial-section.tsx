"use client"
import { ContainedLayout } from "@shared/components/layout/contained-layout"
import { PaginationArrow } from "@shared/components/pagination-arrow"
import { SectionSubtitle } from "@shared/components/section-subtitle"
import { H2 } from "@shared/components/typography"
import { cn } from "@shared/lib/utils"
import useEmblaCarousel from "embla-carousel-react"
import type { TestimonialSectionProps } from "../model/schema"
import { TestimonialCard } from "./testimonial-card"

export const TestimonialSection = ({
	testimonials,
	sectionTitle,
	...props
}: TestimonialSectionProps & {
	sectionTitle?: string
}) => {
	const useCarousel = testimonials.length > 3
	const [emblaRef] = useEmblaCarousel({
		loop: false,
		dragThreshold: 0.1,
		dragFree: true,
	})
	return (
		<ContainedLayout className={cn("rounded-none p-0", props.className)}>
			<div className="col-span-full flex flex-col gap-y-pair-6">
				<div className="flex items-end justify-between">
					<div className="flex flex-col gap-fluid-3">
						<SectionSubtitle
							isDark={true}
							title={sectionTitle || "Testimonials"}
						/>
						<H2>{sectionTitle || "Client Success Stories"}</H2>
					</div>
					{useCarousel && (
						<div className="flex gap-4">
							<PaginationArrow swap={true} />
							<PaginationArrow />
						</div>
					)}
				</div>

				<div
					className={cn("col-span-full", useCarousel ? "select-none" : "")}
					ref={useCarousel ? emblaRef : undefined}
				>
					<div className={cn("flex", useCarousel ? "" : "flex-col md:flex-row")}>
						{testimonials.map((testimonial) => {
							return (
								<TestimonialCard
									key={testimonial._id}
									{...testimonial}
									className={cn("mr-inner-padding", useCarousel ? "min-w-[85%] sm:min-w-1/2 md:min-w-1/3" : "min-w-0 md:flex-1")}
								/>
							)
						})}
					</div>
				</div>
			</div>
		</ContainedLayout>
	)
}
