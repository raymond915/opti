import type { Testimonial } from "@opti/sanity"
import type { HTMLAttributes } from "react"

export interface TestimonialProps
	extends Omit<HTMLAttributes<HTMLDivElement>, keyof Testimonial>,
		Testimonial {}

export interface TestimonialSectionProps extends HTMLAttributes<HTMLDivElement> {
	testimonials: Testimonial[]
}
