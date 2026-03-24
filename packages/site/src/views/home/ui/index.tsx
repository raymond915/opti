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
import { HeroBanner } from "./hero-banner"

export const HomePage: NextPage = () => {
	return (
		<>
			<HeroBanner />
			<LargeParagraph
				ctaHref="/services"
				ctaLabel="Explore our services"
				description="Founded by Raymond Hauptfleisch — an admitted attorney, qualified HR practitioner, and former educator — OptiHR exists to remove the risk from HR. We don't just give advice on paper; we implement practical, legally sound solutions that protect your business, build trust, and free you to focus on growth. And through OptiAI, our AI consulting arm, we help businesses harness intelligent automation tailored to how they actually work — putting the right technology to work for their people."
				heading={
					<>
						You run your business.
						<br />
						Let OptiHR perfect your <span>HR solutions</span>, <span>compliance</span>, and <span>AI strategy</span>.
					</>
				}
				title="Who we are"
			/>
			<ServiceRoller />
			<HighlightBlock
				background="green"
				body="Don't wait for a CCMA case, a bargaining council dispute, or a compliance failure to show you where things went wrong. Book a free consultation with OptiHR and put proper HR in place before issues escalate."
				buttonHref="/contact"
				buttonText="Book your free consultation"
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
				subtitle="Ready to get started?"
				title="Book a Free Consultation"
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
						title: "What to Do When You Receive a CCMA Notice",
						excerpt: "Received a CCMA referral form? Here is exactly what to do, what not to do, and how to protect your business.",
						featureImage: "",
						slug: "what-to-do-when-you-receive-a-ccma-notice",
						category: "CCMA",
					},
					{
						_id: "2",
						title: "How to Conduct a Fair Disciplinary Hearing in South Africa",
						excerpt: "A step-by-step guide on running a fair disciplinary hearing — and avoiding costly CCMA claims.",
						featureImage: "",
						slug: "how-to-conduct-a-fair-disciplinary-hearing-south-africa",
						category: "Compliance",
					},
					{
						_id: "3",
						title: "How AI Can Save Your Business Hours Every Week",
						excerpt: "From drafting documents to summarising meetings — here are the everyday tasks where AI delivers real time savings for South African SMEs right now.",
						featureImage: "",
						slug: "how-ai-saves-your-business-hours-every-week",
						category: "AI in the Workplace",
					},
				]}
			/>
			<AudienceDirectorSection />
			<FaqSection
				data={{
					title: "Frequently Asked Questions",
					subtitle: "Common HR questions answered",
					body: "Get quick answers to the most common HR compliance and labour law questions.",
					cta: {
						text: "View all FAQs",
						navigateTo: "/faq",
					},
					questions: [
						{
							question: "Do labour laws apply to small businesses?",
							answer:
								"Yes — labour law applies to every business, no matter its size. Even one staff dispute handled incorrectly can end up at the CCMA and cost you dearly. The BCEA, LRA, and EEA apply from the moment you employ someone.",
						},
						{
							question: "What happens if we're found non-compliant?",
							answer:
								"Non-compliance can lead to CCMA disputes, Department of Labour fines, reputational damage, and costly awards. OptiHR helps you prevent this by closing compliance gaps proactively — before they become liabilities.",
						},
						{
							question: "We already have an HR manager. Why do we need OptiHR?",
							answer:
								"Even strong HR teams can't cover everything. The labour landscape is broad — from unions and bargaining councils to CCMA representation and legislative updates. OptiHR partners alongside your team, adding specialist depth where it's needed most.",
						},
						{
							question: "What is the CCMA and how can OptiHR help?",
							answer:
								"The CCMA (Commission for Conciliation, Mediation and Arbitration) handles workplace disputes in South Africa. OptiHR has a 95%+ success rate in CCMA matters, combining preparation, expert representation, and strategic settlement expertise.",
						},
					],
				}}
			/>
			<TestimonialSection
				sectionTitle="What Our Clients Say"
				testimonials={
					[
						{
							_id: "1",
							name: "Owner",
							role: "Accounting Firm",
							company: "Gauteng",
							testimonial: [
								{
									_type: "block",
									children: [
										{
											_type: "span",
											text: "OptiHR saved us from what could've been a huge loss. They gave us structure, and now I know we're protected.",
										},
									],
								},
							],
						},
						{
							_id: "2",
							name: "Group HR Director",
							role: "Retail Company",
							company: "National",
							testimonial: [
								{
									_type: "block",
									children: [
										{
											_type: "span",
											text: "OptiHR helped us bring consistency across the business. Their training and policy frameworks gave our managers the tools to handle issues the right way, every time.",
										},
									],
								},
							],
						},
						{
							_id: "3",
							name: "Principal",
							role: "Independent School",
							company: "South Africa",
							testimonial: [
								{
									_type: "block",
									children: [
										{
											_type: "span",
											text: "OptiHR gave us the clarity we needed. They helped us modernise our governance, resolve a sensitive issue, and put the right systems in place. We now feel protected and supported.",
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
