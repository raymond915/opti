"use client"
import { ServiceCard } from "@entities/service"
import { ContainedLayout } from "@shared/components/layout/contained-layout"
import useEmblaCarousel from "embla-carousel-react"
import { services } from "../model/content"

export const ServiceRoller = () => {
	// ANALYTICS: Use the click rate as a driver for position
	const [emblaRef] = useEmblaCarousel({
		loop: false,
		dragThreshold: 0.1,
		dragFree: true,
	})
	return (
		<ContainedLayout
			className="rounded-none p-0 overflow-hidden"
			ref={emblaRef}
		>
			<div className="embla__container col-span-full flex gap-inner-padding p-0">
				{services.map((service) => {
					return (
						<ServiceCard
							callToAction={service.callToAction}
							className="embla__slide aspect-square w-[calc((100%-var(--spacing-inner-padding)*3)/4)] shrink-0"
							description={service.description}
							hasIcon={true}
							href={service.href}
							key={service.title}
							title={service.title}
						/>
					)
				})}
			</div>
		</ContainedLayout>
	)
}
