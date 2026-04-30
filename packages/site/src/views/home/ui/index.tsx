import type { Testimonial } from "@opti/sanity"
import { LargeParagraph } from "@shared/components/large-paragraph"
import {
	HighlightBlock,
	HighlightBlockBody,
	HighlightBlockButton,
	HighlightBlockSubtitle,
	HighlightBlockTitle,
} from "@shared/components/layout/highlight-block"
import { AudienceDirectorSection } from "@widgets/audience-feature-section"
import { ClientLogos } from "@widgets/client-logos/ui"
import { FaqSection } from "@widgets/faq-section/ui"
import { FeaturedPosts } from "@widgets/featured-posts/ui"
import { ServiceRoller } from "@widgets/service-roller/ui"
import { TestimonialSection } from "@widgets/testimonial/ui/testimonial-section"
import type { NextPage } from "next"
import { useTranslations } from "next-intl"
import { HeroBanner } from "./hero-banner"

export const HomePage: NextPage = () => {
	const t = useTranslations("Home")
	const tButtons = useTranslations("Buttons")

	return (
		<>
			<HeroBanner />
			<LargeParagraph
				ctaHref="/services"
				ctaLabel={tButtons("exploreOurServices")}
				description={t("whoWeAre.body")}
				heading={
					<>
						{t("whoWeAre.headingPrefix")}
						<br />
						{t("whoWeAre.headingMain")}{" "}
						<span>{t("whoWeAre.headingSpan1")}</span>
						{t("whoWeAre.headingSeparator1")}{" "}
						<span>{t("whoWeAre.headingSpan2")}</span>
						{t("whoWeAre.headingSeparator2")}{" "}
						<span>{t("whoWeAre.headingSpan3")}</span>
						{t("whoWeAre.headingSuffix")}
					</>
				}
				title={t("whoWeAre.subtitle")}
			/>
			<ServiceRoller />
			<HighlightBlock
				background="green"
				body={t("highlightConsultation.body")}
				buttonHref="/contact"
				buttonText={tButtons("bookFreeConsultation")}
				media={{
					type: "component",
					mediaNode: (
						<div className="relative h-full w-full">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="https://images.pexels.com/photos/7647989/pexels-photo-7647989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="HR consultation — OptiHR" className="absolute inset-0 h-full w-full object-cover" />
						</div>
					),
				}}
				mediaPosition={"right"}
				subtitle={t("highlightConsultation.subtitle")}
				title={t("highlightConsultation.title")}
			>
				<HighlightBlockSubtitle />
				<HighlightBlockTitle />
				<HighlightBlockBody />
				<HighlightBlockButton />
			</HighlightBlock>
			<FeaturedPosts
				posts={[
					{
						_id: "1",
						title: t("featuredPosts.post1Title"),
						excerpt: t("featuredPosts.post1Excerpt"),
						featureImage: "",
						slug: "what-to-do-when-you-receive-a-ccma-notice",
						category: t("featuredPosts.post1Category"),
					},
					{
						_id: "2",
						title: t("featuredPosts.post2Title"),
						excerpt: t("featuredPosts.post2Excerpt"),
						featureImage: "",
						slug: "how-to-conduct-a-fair-disciplinary-hearing-south-africa",
						category: t("featuredPosts.post2Category"),
					},
					{
						_id: "3",
						title: t("featuredPosts.post3Title"),
						excerpt: t("featuredPosts.post3Excerpt"),
						featureImage: "",
						slug: "how-ai-saves-your-business-hours-every-week",
						category: t("featuredPosts.post3Category"),
					},
				]}
			/>
			<AudienceDirectorSection />
			<FaqSection
				data={{
					title: t("faq.title"),
					subtitle: t("faq.subtitle"),
					body: t("faq.body"),
					cta: {
						text: tButtons("viewAllFaqs"),
						navigateTo: "/faq",
					},
					questions: [
						{
							question: t("faq.q1Question"),
							answer: t("faq.q1Answer"),
						},
						{
							question: t("faq.q2Question"),
							answer: t("faq.q2Answer"),
						},
						{
							question: t("faq.q3Question"),
							answer: t("faq.q3Answer"),
						},
						{
							question: t("faq.q4Question"),
							answer: t("faq.q4Answer"),
						},
					],
				}}
			/>
			<TestimonialSection
				sectionTitle={t("testimonials.sectionTitle")}
				testimonials={
					[
						{
							_id: "1",
							name: t("testimonials.t1Name"),
							role: t("testimonials.t1Role"),
							company: t("testimonials.t1Company"),
							testimonial: [
								{
									_type: "block",
									children: [
										{
											_type: "span",
											text: t("testimonials.t1Quote"),
										},
									],
								},
							],
						},
						{
							_id: "2",
							name: t("testimonials.t2Name"),
							role: t("testimonials.t2Role"),
							company: t("testimonials.t2Company"),
							testimonial: [
								{
									_type: "block",
									children: [
										{
											_type: "span",
											text: t("testimonials.t2Quote"),
										},
									],
								},
							],
						},
						{
							_id: "3",
							name: t("testimonials.t3Name"),
							role: t("testimonials.t3Role"),
							company: t("testimonials.t3Company"),
							testimonial: [
								{
									_type: "block",
									children: [
										{
											_type: "span",
											text: t("testimonials.t3Quote"),
										},
									],
								},
							],
						},
					] as Testimonial[]
				}
			/>
			<ClientLogos />
		</>
	)
}

export default HomePage
