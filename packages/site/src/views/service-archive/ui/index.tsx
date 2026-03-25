import { ServiceCard } from "@entities/service"
import { ContainedLayout } from "@shared/components/layout"
import {
	HighlightBlock,
	HighlightBlockBody,
	HighlightBlockButton,
	HighlightBlockTitle,
} from "@shared/components/layout/highlight-block"
import { PageBanner } from "@shared/components/page-banner"
import { FaqSection } from "@widgets/faq-section/ui"
import type { NextPage } from "next"

const Services = [
	{
		title: "AI in the Workplace — OptiAI",
		body: "Tailored AI interventions that work the way your business does. We assess your needs, recommend the right tools, implement them properly, and evolve them over time. The software learns from your enterprise — not the other way around.",
		callToAction: "Explore OptiAI",
		pageUrl: "/ai-in-the-workplace",
	},
	{
		title: "Company Secretary Services",
		body: "Professional governance support for private companies — CIPC filings, statutory record-keeping, board resolutions, and compliance with the Companies Act.",
		callToAction: "Request Free Audit",
		pageUrl: "/services/company-secretary-services",
	},
	{
		title: "Compliance",
		body: "Comprehensive support ensuring statutory, CIPC, and regulatory compliance for your business — keeping you protected from fines, disputes, and reputational damage.",
		callToAction: "Stay Compliant Now",
		pageUrl: "/services/compliance",
	},
	{
		title: "Employment Equity",
		body: "Policies, plans, and support for achieving workplace equity and compliance with the Employment Equity Act — from workforce analysis to DOL reporting.",
		callToAction: "Boost Equity Efforts",
		pageUrl: "/services/employment-equity",
	},
	{
		title: "HR Policy Development",
		body: "Custom HR policies designed to strengthen your business processes and ensure full legal compliance — no copy-paste templates, only solutions built for your context.",
		callToAction: "Update Your Policies",
		pageUrl: "/services/hr-policy-development",
	},
	{
		title: "HR Training",
		body: "Practical, hands-on HR skills and compliance training for managers and employees — covering disciplinary hearings, grievance handling, performance management, and more.",
		callToAction: "Book a Session",
		pageUrl: "/services/hr-training",
	},
	{
		title: "Industrial Relations",
		body: "Expert mediation, dispute resolution, and union engagement support — protecting your business in CCMA matters, bargaining councils, and collective negotiations.",
		callToAction: "Resolve Disputes Fast",
		pageUrl: "/services/industrial-relations",
	},
	{
		title: "Job Evaluation",
		body: "Objective job evaluation using recognised methodologies to optimise role clarity, career progression, and compensation structures across your organisation.",
		callToAction: "Request Evaluation",
		pageUrl: "/services/job-evaluation",
	},
	{
		title: "Labour Audits",
		body: "Thorough audits to identify labour risks in contracts, policies, payroll, and practices — ensuring you're compliant and ready for Department of Labour inspections.",
		callToAction: "Schedule Audit Today",
		pageUrl: "/services/labour-audits",
	},
	{
		title: "Performance Management",
		body: "Strategies and systems for enhancing employee performance — from practical KPI frameworks and performance improvement plans to accountability structures that work.",
		callToAction: "Improve Performance",
		pageUrl: "/services/performance-management",
	},
	{
		title: "Retrenchments",
		body: "Guidance and support for compliant, fair, and strategically managed retrenchment processes — including Section 189 consultations and CCMA representation.",
		callToAction: "Get Retrenchment Help",
		pageUrl: "/services/retrenchments",
	},
	{
		title: "Workplace Discipline",
		body: "Clear policies, fair hearings, and practical training for managing discipline in the workplace — ensuring every process is legally sound and defensible.",
		callToAction: "Enforce Discipline",
		pageUrl: "/services/workplace-discipline",
	},
	{
		title: "Workplace Wellness Programs",
		body: "Tailored wellness initiatives and employee assistance programmes designed to boost productivity, reduce burnout, and build a healthier, more loyal workforce.",
		callToAction: "Launch Wellness Program",
		pageUrl: "/services/workplace-wellness-programs",
	},
	{
		title: "HR Support for Independent Schools",
		body: "Specialist HR for independent schools — contracts for educators and support staff, SACE compliance, governance reviews, union engagement, and CCMA representation.",
		callToAction: "Support Your School",
		pageUrl: "/services/hr-support-for-independent-schools",
	},
]
export const ServicesPage: NextPage = () => {
	const content = {
		title: "Our Services",
	}

	return (
		<>
			<PageBanner
				anchorId="service-list"
				anchorText="View services"
				body="From compliance and dispute resolution to training and wellness — OptiHR covers every dimension of modern HR for South African businesses and independent schools. And through OptiAI, we help you put AI to work in ways that make your people more capable and your processes more efficient."
				title={content.title}
			/>
			<ContainedLayout className="max-h-none grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-inner-padding">
				{Services.map((service) => (
					<ServiceCard
						callToAction={service.callToAction}
						description={service.body}
						hasIcon={true}
						href={service.pageUrl}
						key={service.title}
						title={service.title}
					/>
				))}
			</ContainedLayout>
			<HighlightBlock
				background="green"
				body="AI isn't about replacing your people — it's about making them better at what they do. OptiAI works alongside your existing HR and business processes, identifying where intelligent automation adds real value and implementing it at your pace."
				buttonHref="/ai-in-the-workplace"
				buttonText="Discover OptiAI"
				media={{
					type: "component",
					mediaNode: (
						<div className="relative h-full w-full bg-mint-6">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="https://images.pexels.com/photos/7988685/pexels-photo-7988685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="OptiAI — AI in the workplace" className="absolute inset-0 h-full w-full object-cover" />
						</div>
					),
				}}
				mediaPosition="right"
				subtitle="Now introducing OptiAI"
				title="HR meets AI — on your terms"
			>
				<HighlightBlockTitle />
				<HighlightBlockBody />
				<HighlightBlockButton />
			</HighlightBlock>
			<FaqSection
				data={{
					subtitle: "Frequently Asked Questions",
					title: "Have questions about our services?",
					body: "Find answers to common questions about our HR consulting services and how we can help optimize your business.",
					cta: {
						text: "Contact Us",
						navigateTo: "/contact",
					},
					questions: [
						{
							question: "What services do you offer?",
							answer:
								"We offer a comprehensive range of HR consulting services including labour audits, job evaluation, performance management, workplace discipline, retrenchments, HR policy development, training, wellness programs, AI in the workplace through OptiAI, and specialised support for independent schools.",
						},
						{
							question: "How long does a typical consultation take?",
							answer:
								"The duration varies depending on the service and complexity of your needs. Initial consultations are usually 1-2 hours, while comprehensive audits or implementations can take several weeks to months.",
						},
						{
							question: "What is OptiAI?",
							answer:
								"OptiAI is our AI consulting service. Rather than selling off-the-shelf software, we assess your business, recommend AI interventions that fit how you actually work, implement them, and provide ongoing support. The goal is technology that adapts to your enterprise — not the other way around.",
						},
						{
							question: "Do you work with businesses of all sizes?",
							answer:
								"Yes, we provide tailored HR and AI solutions for small businesses, large corporations, and independent schools. Our approach is customised to meet the specific needs and scale of each client.",
						},
					],
				}}
			/>
		</>
	)
}

export default ServicesPage
