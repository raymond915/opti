import { BulletPoint } from "@shared/components/bullet-point"
import { LargeParagraph } from "@shared/components/large-paragraph"
import { ContainedLayout } from "@shared/components/layout"
import {
	HighlightBlock,
	HighlightBlockBody,
	HighlightBlockButton,
	HighlightBlockSubtitle,
	HighlightBlockTitle,
} from "@shared/components/layout/highlight-block"
import { PageBanner } from "@shared/components/page-banner"
import { SectionSubtitle } from "@shared/components/section-subtitle"
import { H2, P } from "@shared/components/typography"
import { AudienceColumnSection } from "@widgets/audience-column-section"
import { ClientLogos } from "@widgets/client-logos/ui"
import { ComparisonSection } from "@widgets/comparison-section/ui"
import { TestimonialSection } from "@widgets/testimonial/ui/testimonial-section"
import type { NextPage } from "next"
import Image from "next/image"

export const AboutPage: NextPage = () => {
	return (
		<>
			<PageBanner
				anchorId="/contact"
				anchorText="Book Free Consultation"
				body="OptiHR was founded by Raymond Hauptfleisch — admitted attorney, qualified HR practitioner, and former educator. A rare combination of legal authority, HR expertise, and sector insight, built to help South African businesses and independent schools handle HR with confidence."
				title="About OptiHR — Specialist HR & Labour Law for South Africa"
			/>
			<LargeParagraph
				ctaHref="/contact"
				ctaLabel="Schedule Consultation"
				description="OptiHR partners with businesses and schools to handle HR compliance and industrial relations proactively. We prevent CCMA disputes and compliance issues, letting you focus on what you do best."
				heading="Partnering for Proactive HR Compliance"
				title="Our Mission"
			/>
			<HighlightBlock
				background="white"
				body="Meet the founder bringing legal, HR, and educational insights to SA businesses."
				buttonHref="/contact"
				buttonText="Consult Now"
				media={{
					type: "component",
					mediaNode: (
						<div className="relative w-full">
							<div className="absolute inset-0 z-10 bg-radial-[at_50%_35%] from-0% from-mint-1/0 via-60% via-mint-1/50 to-100% to-mint-1 opacity-70" />
							<div className="absolute inset-0 z-10 bg-mint-2 opacity-40 mix-blend-darken" />
							<div className="relative h-full w-full">
								<Image
									alt={"Raymond Hauptfleisch, Founder of OptiHR"}
									className="object-cover"
									fill={true}
									src="/Optihr-Raymond-Hauptfleisch-Portrait.jpg"
								/>
							</div>
						</div>
					),
				}}
				mediaPosition={"left"}
				subtitle="Unique Expertise Blend"
				title="Raymond Hauptfleisch, Founder"
			>
				<HighlightBlockSubtitle />
				<HighlightBlockTitle />
				<HighlightBlockBody />
				<ul className="mt-fluid-3 flex flex-col gap-fluid-3">
					{[
						"Admitted attorney specialising in Labour Court and CCMA representation",

						"Former owner of specialist labour law firm with 200+ dispute resolutions",

						"Qualified HR practitioner with hands-on experience",

						"SACE-registered educator, understanding school-specific challenges",
					].map((bullet) => (
						<BulletPoint
							content={bullet}
							key={bullet}
						/>
					))}
				</ul>
				<HighlightBlockButton />
			</HighlightBlock>
			<HighlightBlock
				background="white"
				body="Rhodene Duncan brings deep Cape Town-based HR expertise to OptiHR's growing national footprint."
				buttonHref="/contact"
				buttonText="Connect with Rhodene"
				media={{
					type: "component",
					mediaNode: (
						<div className="relative h-full w-full">
							<Image
								alt={"Rhodene Duncan, Cape Town Director at OptiHR"}
								className="object-cover object-top"
								fill={true}
								src="/Optihr-Rhodene-Duncan-Portrait.jpg"
							/>
							<div className="absolute inset-0 bg-mint-2/40 mix-blend-darken" />
							<div className="absolute inset-0 bg-radial-[at_50%_35%] from-0% from-mint-1/0 via-60% via-mint-1/50 to-100% to-mint-1 opacity-70" />
						</div>
					),
				}}
				mediaPosition={"right"}
				subtitle="OptiHR Cape Town"
				title="Rhodene Duncan — Cape Town Director"
			>
				<HighlightBlockSubtitle />
				<HighlightBlockTitle />
				<HighlightBlockBody />
				<ul className="mt-fluid-3 flex flex-col gap-fluid-3">
					{[
						"Based in Cape Town — serving the Western Cape and surrounding regions",
						"Specialist HR practitioner with extensive experience across multiple industries",
						"Expert in employment equity, disciplinary processes, and labour compliance",
						"Trusted by Cape Town businesses to deliver practical, legally sound HR solutions",
					].map((bullet) => (
						<BulletPoint
							content={bullet}
							key={bullet}
						/>
					))}
				</ul>
				<HighlightBlockButton />
			</HighlightBlock>
			<ComparisonSection />

			{/* Why Choose OptiHR */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-muted-1">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark title="Why Choose OptiHR" />
					<H2 className="text-mint-6">The rare combination you won't find anywhere else</H2>
					<P className="text-mint-5/70 max-w-2xl">
						Most HR consultants know HR. Most labour attorneys know law. OptiHR brings both together — along with deep insight into the education sector — to give your organisation a level of protection most businesses never access.
					</P>
				</div>
				<div className="col-span-full grid grid-cols-1 gap-inner-padding md:grid-cols-2 lg:grid-cols-3">
					{[
						{
							icon: "⚖️",
							title: "Legal Authority",
							body: "Raymond is an admitted attorney with the right of appearance in the Labour Court and Labour Appeal Court — meaning every recommendation is backed by full legal authority, not just best-practice opinion.",
						},
						{
							icon: "🏆",
							title: "95%+ CCMA Success Rate",
							body: "Our track record speaks for itself. With over 200 dispute resolutions handled and a CCMA success rate exceeding 95%, OptiHR consistently delivers results where it matters most.",
						},
						{
							icon: "🎓",
							title: "Education Sector Expertise",
							body: "As a SACE-registered former educator, Raymond understands independent schools from the inside — SACE compliance, governance, and the unique pressures of the teaching profession.",
						},
						{
							icon: "🛡️",
							title: "Proactive Risk Management",
							body: "We don't wait for disputes to land at the CCMA. By building sound policies, governance systems, and compliance frameworks upfront, we prevent costly problems before they arise.",
						},
						{
							icon: "🔍",
							title: "Fresh, External Perspective",
							body: "Being external is a strength. We benchmark your practices across industries, exposing vulnerabilities that internal teams — too close to the situation — often miss.",
						},
						{
							icon: "🤝",
							title: "Integrated HR & Legal Under One Roof",
							body: "No referrals, no handoffs. With HR, labour law, and IR expertise in one place, you get faster, more coherent support — and advice that accounts for the full picture.",
						},
					].map((item) => (
						<div
							className="flex flex-col gap-4 rounded-inner border border-mint-2/20 bg-white p-inner-padding"
							key={item.title}
						>
							<div className="flex items-center gap-3">
								<span className="text-2xl" aria-hidden="true">{item.icon}</span>
								<P className="font-semibold text-mint-6">{item.title}</P>
							</div>
							<div className="h-px bg-mint-2/30" />
							<P className="text-mint-5/80 text-sm leading-relaxed">{item.body}</P>
						</div>
					))}
				</div>
			</ContainedLayout>

			<HighlightBlock
				background="green"
				body="Free consultation to assess your labour compliance needs and build a custom plan."
				buttonHref="/contact"
				buttonText="Schedule Now"
				media={{
					type: "image",
					imageProps: {
						alt: "OptiHR — Strengthen your HR today",
						src: "/Optihr-Raymond-Hauptfleisch-Portrait.jpg",
					},
					containerClassnames: undefined,
				}}
				mediaPosition={"right"}
				title="Strengthen Your HR Today"
			>
				<HighlightBlockSubtitle />
				<HighlightBlockTitle />
				<HighlightBlockBody />
				<HighlightBlockButton />
			</HighlightBlock>
			<AudienceColumnSection />
			<TestimonialSection
				testimonials={[
					{
						_id: "testimonial-1",
						_type: "testimonial",
						_createdAt: "",
						_updatedAt: "",
						_rev: "",
						name: "Business Owner",
						role: "Owner",
						company: "Accounting Firm, Cape Town",
						testimonial: [
							{
								_type: "block",
								_key: "t1-block",
								style: "normal",
								children: [
									{
										_type: "span",
										_key: "t1-span",
										text: "We were hit with a CCMA unfair dismissal claim and had no idea what to do. OptiHR stepped in immediately, handled everything professionally, and we won. The relief was indescribable.",
									},
								],
							},
						],
					},
					{
						_id: "testimonial-2",
						_type: "testimonial",
						_createdAt: "",
						_updatedAt: "",
						_rev: "",
						name: "Group HR Director",
						role: "HR Director",
						company: "Retail Chain, Johannesburg",
						testimonial: [
							{
								_type: "block",
								_key: "t2-block",
								style: "normal",
								children: [
									{
										_type: "span",
										_key: "t2-span",
										text: "OptiHR overhauled our disciplinary process and trained our managers in three months. Our grievances dropped significantly and our HR team finally has the confidence to handle issues correctly.",
									},
								],
							},
						],
					},
					{
						_id: "testimonial-3",
						_type: "testimonial",
						_createdAt: "",
						_updatedAt: "",
						_rev: "",
						name: "School Principal",
						role: "Principal",
						company: "Independent School, Pretoria",
						testimonial: [
							{
								_type: "block",
								_key: "t3-block",
								style: "normal",
								children: [
									{
										_type: "span",
										_key: "t3-span",
										text: "Raymond understands schools in a way no other HR consultant does. He helped us navigate a union dispute that had been festering for years — without damaging our staff culture. We finally feel protected.",
									},
								],
							},
						],
					},
				]}
			/>
			<ClientLogos />
		</>
	)
}

export default AboutPage
