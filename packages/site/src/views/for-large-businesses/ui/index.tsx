import { ContainedLayout } from "@shared/components/layout"
import {
	HighlightBlock,
	HighlightBlockBody,
	HighlightBlockButton,
	HighlightBlockTitle,
} from "@shared/components/layout/highlight-block"
import { PageBanner } from "@shared/components/page-banner"
import { SectionSubtitle } from "@shared/components/section-subtitle"
import { H2, P } from "@shared/components/typography"
import { ClientLogos } from "@widgets/client-logos/ui"
import { FaqSection } from "@widgets/faq-section/ui"
import { ServiceRoller } from "@widgets/service-roller/ui"
import type { NextPage } from "next"

const myths = [
	{
		myth: "Our HR department has everything covered.",
		reality: "Even the best HR teams can't cover every angle. The HR landscape is incredibly broad — compliance, unions, wellness, recruitment — and no team can specialise in everything.",
	},
	{
		myth: "If we follow our policies, we're safe.",
		reality: "Policies alone aren't enough — how they're applied matters. Inconsistency across sites or managers is what most often gets tested at the CCMA or Labour Court.",
	},
	{
		myth: "We'll deal with unions when problems come up.",
		reality: "Waiting until conflict arises is costly. Proactive engagement builds open channels so issues are handled constructively — not combatively.",
	},
	{
		myth: "If there hasn't been an issue yet, we must be fine.",
		reality: "Risks only surface when challenged. By then, the gaps in process or compliance are already exposed. Prevention is always cheaper than reaction.",
	},
	{
		myth: "External consultants won't understand our company.",
		reality: "Being external is a strength. OptiHR brings fresh perspective, cross-industry experience, and the ability to benchmark your practices against what works elsewhere.",
	},
]

export const ForLargeBusinessesPage: NextPage = () => {
	return (
		<>
			<PageBanner
				anchorId="how-we-help"
				anchorText="How we help"
				body="Even strong HR teams can't do it all. OptiHR partners with your HR department as a trusted extension of your team — shouldering the compliance burden, reducing legal risk, and giving your practitioners the breathing room to focus on strategy."
				title="Specialist HR & IR Support for Large Businesses in South Africa"
			/>
			<ContainedLayout className="grid grid-cols-1 gap-section-gap md:grid-cols-2">
				<H2>We don't replace your HR team — we strengthen it.</H2>
				<P className="text-mint-5/80 text-lg leading-relaxed">
					Large businesses face complex labour relations, bargaining councils, unions, and high-stakes disputes where the margin for error is small. OptiHR adds specialist depth where it's needed most — from compliance and case law to union negotiations and CCMA representation.
				</P>
			</ContainedLayout>
			<ContainedLayout className="grid grid-rows-1 bg-muted-1 p-0 md:p-0">
				{(() => {
					const blocks = [
						{
							title: "Specialist support for high-risk HR and IR areas",
							body: "OptiHR handles complex industrial relations, union negotiations, compliance, and legal risks — letting in-house HR focus on their strengths while staying protected from costly disputes and reputational damage.",
							buttonHref: "/contact",
							buttonText: "Contact us",
							media: {
								type: "component" as const,
								mediaNode: (
									<div className="relative h-full w-full bg-mint-1">
										{/* eslint-disable-next-line @next/next/no-img-element */}
										<img src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Diverse HR team working together" className="absolute inset-0 h-full w-full object-cover" />
									</div>
								),
							},
							mediaPosition: "right" as const,
						},
						{
							title: "Proactive legislative and compliance management",
							body: "Constant monitoring of South African labour law and case law ensures businesses stay up-to-date, with practical guidance and systems designed to meet evolving legal requirements and avoid HR process missteps.",
							buttonHref: "/contact",
							buttonText: "Contact us",
							media: {
								type: "component" as const,
								mediaNode: (
									<div className="relative h-full w-full bg-mint-1">
										{/* eslint-disable-next-line @next/next/no-img-element */}
										<img src="https://images.pexels.com/photos/6457488/pexels-photo-6457488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Proactive legislative and compliance management" className="absolute inset-0 h-full w-full object-cover" />
									</div>
								),
							},
							mediaPosition: "left" as const,
						},
						{
							title: "Objective, external perspective and holistic employee care",
							body: "By offering impartial HR expertise and designing frameworks for wellness, engagement, and hybrid work, OptiHR prevents issues that internal teams might miss, keeping both the workforce and business reputation strong.",
							buttonHref: "/contact",
							buttonText: "Contact us",
							media: {
								type: "component" as const,
								mediaNode: (
									<div className="relative h-full w-full bg-mint-1">
										{/* eslint-disable-next-line @next/next/no-img-element */}
										<img src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Workforce strategy and employee wellbeing" className="absolute inset-0 h-full w-full object-cover" />
									</div>
								),
							},
							mediaPosition: "right" as const,
						},
					]
					return blocks.map((block) => (
						<HighlightBlock
							background="white"
							body={block.body}
							buttonHref={block.buttonHref}
							buttonText={block.buttonText}
							key={block.title}
							media={block.media as any}
							mediaPosition={block.mediaPosition as any}
							title={block.title}
						>
							<HighlightBlockTitle />
							<HighlightBlockBody />
							<HighlightBlockButton />
						</HighlightBlock>
					))
				})()}
			</ContainedLayout>

			{/* Myth vs Reality */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-white">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark title="Myth vs. Reality" />
					<H2 className="text-mint-6">What large businesses assume about HR — and what's actually true</H2>
					<P className="text-mint-5/70 max-w-2xl">
						These are the assumptions most common at leadership level. They're also the ones that lead to the most expensive HR failures.
					</P>
				</div>
				<div className="col-span-full grid grid-cols-1 gap-inner-padding md:grid-cols-2 lg:grid-cols-3">
					{myths.map((item, i) => (
						<div
							className="flex flex-col gap-4 rounded-inner border border-mint-2/20 bg-muted-1 p-inner-padding"
							key={i}
						>
							<div className="flex flex-col gap-2">
								<P className="text-xs font-semibold uppercase tracking-widest text-mint-4/70">Myth</P>
								<P className="text-mint-5/60 italic text-sm line-through decoration-mint-4/40">
									"{item.myth}"
								</P>
							</div>
							<div className="h-px bg-mint-2/30" />
							<div className="flex flex-col gap-2">
								<P className="text-xs font-semibold uppercase tracking-widest text-mint-4">Reality</P>
								<P className="text-mint-5/90 text-sm">{item.reality}</P>
							</div>
						</div>
					))}
				</div>
			</ContainedLayout>

			{/*Need to alter the service roller to allow for a bit of copy above and also localise the services to the audience type. ↓*/}
			<ServiceRoller />

			{/* Case Study */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-mint-6">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark={false} title="Case Study" />
					<H2 className="text-white">National retail chain — 800 staff across multiple branches</H2>
				</div>
				<div className="col-span-full grid grid-cols-1 gap-section-gap lg:grid-cols-2">
					<div className="flex flex-col gap-fluid-3">
						<P className="text-white/80">
							A large retail company with multiple branches had a capable HR department, but struggled with consistency across sites. Disciplinary and grievance procedures were applied differently in each branch, and an employee dismissal in one region was challenged at the CCMA. Without standardised processes, the company was exposed to costly awards and reputational damage.
						</P>
						<P className="text-white/80">
							OptiHR was engaged to work alongside the HR team. We conducted a compliance review across all branches, identified gaps, and facilitated workshops with HR practitioners and line managers. Together, we standardised disciplinary processes, introduced clear policies, and trained managers to apply them consistently.
						</P>
						<div className="flex flex-col gap-2">
							<div className="flex items-center gap-3">
								<span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20">
									<svg viewBox="0 0 16 16" fill="none" className="h-3 w-3 text-mint-2" aria-hidden="true">
										<path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
								</span>
								<P className="text-white/80 text-sm">CCMA matter resolved in the company's favour</P>
							</div>
							<div className="flex items-center gap-3">
								<span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20">
									<svg viewBox="0 0 16 16" fill="none" className="h-3 w-3 text-mint-2" aria-hidden="true">
										<path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
								</span>
								<P className="text-white/80 text-sm">Consistent HR processes rolled out across all branches</P>
							</div>
							<div className="flex items-center gap-3">
								<span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20">
									<svg viewBox="0 0 16 16" fill="none" className="h-3 w-3 text-mint-2" aria-hidden="true">
										<path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
								</span>
								<P className="text-white/80 text-sm">Reduced inter-branch conflict and stronger compliance confidence</P>
							</div>
						</div>
					</div>
					<div className="flex flex-col justify-center">
						<blockquote className="rounded-inner bg-white/10 p-inner-padding">
							<P className="text-white text-lg leading-relaxed italic">
								"OptiHR helped us bring consistency across the business. Their training and policy frameworks gave our managers the tools to handle issues the right way, every time."
							</P>
							<footer className="mt-4">
								<P className="text-mint-2 text-sm font-medium">Group HR Director, National Retail Company</P>
							</footer>
						</blockquote>
						<div className="mt-fluid-3">
							<a
								href="/contact"
								className="inline-block rounded-inner bg-white px-6 py-3 text-sm font-medium text-mint-6 transition-colors hover:bg-mint-1"
							>
								Book a free consultation
							</a>
						</div>
					</div>
				</div>
			</ContainedLayout>

			<HighlightBlock
				background="green"
				body="Don't wait for a CCMA case, bargaining council dispute, or union conflict to test your HR processes. Partner with OptiHR now to strengthen compliance, reduce risk, and give your HR team the support they need."
				buttonHref="/contact"
				buttonText="Book your free consultation"
				className="h-[80dvh]"
				media={{
					type: "component",
					mediaNode: (
						<div className="relative h-full w-full">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="https://images.pexels.com/photos/3860937/pexels-photo-3860937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Professional HR consultation" className="absolute inset-0 h-full w-full object-cover object-top" />
						</div>
					),
				}}
				mediaPosition="right"
				title="Let OptiHR focus on labour law. Your team focuses on everything else."
			>
				<HighlightBlockTitle />
				<HighlightBlockBody />
				<HighlightBlockButton />
			</HighlightBlock>
			<FaqSection
				data={{
					title: "Questions from large business HR teams",
					subtitle: "Large business HR questions answered",
					body: "Common questions we hear from HR directors and business leaders at scale.",
					cta: {
						text: "View all FAQs",
						navigateTo: "/faq",
					},
					questions: [
						{
							question: "Our HR team is overstretched. How can OptiHR help?",
							answer:
								"From recruitment to exit interviews, HR is covering everything. OptiHR takes on complex IR and compliance matters so your team can focus where they add the most value — culture, engagement, and strategy.",
						},
						{
							question: "It's impossible to keep up with legislation and case law. What's the solution?",
							answer:
								"The labour landscape changes constantly. OptiHR monitors legislation, case law, and precedent — then translates it into practical steps for your business, keeping you current without burdening your internal team.",
						},
						{
							question: "We're confident in HR generally, but not when it comes to unions or bargaining councils.",
							answer:
								"Collective bargaining and union engagement are high-stakes areas that require specialist expertise. We bring the experience to negotiate, represent, and resolve — while keeping your business protected.",
						},
						{
							question: "Can external HR consultants really understand our company?",
							answer:
								"Being external is a strength. OptiHR brings a fresh perspective, experience across industries, and the ability to benchmark your practices against what works elsewhere. We expose risks that internal teams, who are too close to the situation, might miss.",
						},
						{
							question: "A single HR misstep could end up at the CCMA or Labour Court. How do we stay safe?",
							answer:
								"Even with strong HR, one mistake in process can escalate. We ensure your systems and responses are legally sound so you're prepared if matters reach those forums. Our CCMA success rate is over 95%.",
						},
					],
				}}
			/>
			<ClientLogos />
		</>
	)
}

export default ForLargeBusinessesPage
