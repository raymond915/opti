import { type } from "arktype"

export const HeroSchema = type({
	badge: "string",
	title: "string",
	subtitle: "string",
	cta: type({
		text: "string",
		href: "string",
	}),
})

export const StatSchema = type({
	label: "string",
	value: "string",
})

export const FeaturedPostSchema = type({
	_id: "string",
	title: "string",
	excerpt: "string",
	href: "string",
	featureImage: "string",
})

export const AboutSchema = type({
	title: "string",
	subtitle: "string",
	body: "string",
	cta: type({
		text: "string",
		href: "string",
	}),
})

export const AudienceItemSchema = type({
	title: "string",
	body: "string",
})

export const AudienceContentSchema = type({
	title: "string",
	subtitle: "string",
	body: "string",
	imageUrl: "string",
	buttonText: "string",
	buttonHref: "string",
	items: AudienceItemSchema.array(),
})

export const FaqQuestionSchema = type({
	question: "string",
	answer: "string",
})

export const FaqSchema = type({
	title: "string",
	subtitle: "string",
	body: "string",
	cta: type({
		text: "string",
		navigateTo: "string",
	}),
	questions: FaqQuestionSchema.array(),
})

export const ConsultationCtaSchema = type({
	subtitle: "string",
	title: "string",
	body: "string",
	callToAction: "string",
	media: "string",
})

export const TestimonialChildSchema = type({
	_type: "string",
	text: "string",
})

export const TestimonialItemSchema = type({
	_type: "string",
	children: TestimonialChildSchema.array(),
})

export const TestimonialSchema = type({
	_id: "string",
	name: "string",
	role: "string",
	company: "string",
	testimonial: TestimonialItemSchema.array(),
})

export const TestimonialsSchema = type({
	title: "string",
	items: TestimonialSchema.array(),
})

export const HomeContentSchema = type({
	hero: HeroSchema,
	stats: StatSchema.array(),
	featuredPosts: FeaturedPostSchema.array(),
	about: AboutSchema,
	audienceContent: AudienceContentSchema,
	faq: FaqSchema,
	consultationCta: ConsultationCtaSchema,
	testimonials: TestimonialsSchema,
})

export type HomeContent = typeof HomeContentSchema.infer

export const HomeSchema = type({
	content: HomeContentSchema,
})

export type HomeProps = typeof HomeSchema.infer
