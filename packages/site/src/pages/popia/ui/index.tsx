import { ContainedLayout } from "@shared/components/layout/contained-layout"
import { PageBanner } from "@shared/components/page-banner"
import { SectionSubtitle } from "@shared/components/section-subtitle"
import { H2, H3, P } from "@shared/components/typography"
import { FaqSection } from "@widgets/faq-section"
import { ClientLogos } from "@widgets/client-logos"
import {
	HighlightBlock,
	HighlightBlockBody,
	HighlightBlockButton,
	HighlightBlockTitle,
} from "@shared/components/layout/highlight-block"

const popiaServices = [
	{
		title: "POPIA Compliance Audit",
		body: "We assess how your business collects, stores, uses, and shares personal information — identifying gaps and non-compliant practices before they attract penalties.",
	},
	{
		title: "Information Officer Appointment",
		body: "POPIA requires every business to appoint an Information Officer. We handle the formal appointment and provide training so your officer understands their responsibilities.",
	},
	{
		title: "Privacy Policy Development",
		body: "We draft and implement POPIA-compliant privacy policies, consent forms, and data processing agreements tailored to your business operations.",
	},
	{
		title: "Consent Procedures",
		body: "We establish clear consent procedures for collecting and using personal information from employees, clients, and third parties — covering all lawful processing conditions.",
	},
	{
		title: "Data Breach Protocols",
		body: "We develop incident response plans and data breach notification procedures, ensuring you respond lawfully and promptly if a breach occurs.",
	},
	{
		title: "Ongoing POPIA Management",
		body: "For retainer clients, we provide ongoing POPIA compliance monitoring, policy updates as legislation evolves, and support for data subject access requests.",
	},
	{
		title: "Staff Training — Videos & Knowledge Tests",
		body: "We provide structured POPIA training for all staff through instructional videos and assessed knowledge tests — creating documented proof that employees understand their data protection obligations. Training records and pass certificates are maintained as evidence of your compliance programme.",
	},
]

const popiaRisks = [
	{ label: "Fines up to R10 million", detail: "Or imprisonment of up to 10 years for responsible parties, under section 107 of POPIA." },
	{ label: "Reputational damage", detail: "A data breach or compliance failure can permanently damage your relationship with clients and staff." },
	{ label: "Civil claims", detail: "Data subjects whose information is mishandled can pursue civil damages against your organisation." },
	{ label: "Regulatory investigations", detail: "The Information Regulator has the power to investigate, audit, and enforce against non-compliant organisations." },
]

const audienceItems = [
	"Any business that collects employee or customer data",
	"Organisations handling sensitive personal information (health, financial, or biometric data)",
	"Businesses using CCTV, access control, or monitoring systems",
	"Companies onboarding staff with background checks or credential verification",
	"Schools and educational institutions holding learner and parent records",
	"Healthcare providers, legal firms, and financial services organisations",
	"Any South African entity processing personal information",
]

const legislation = [
	{
		title: "Protection of Personal Information Act (POPIA)",
		subtitle: "Act 4 of 2013",
		body: "South Africa's primary data protection legislation. Regulates the collection, storage, use, and sharing of personal information. Became fully enforceable on 1 July 2021.",
	},
	{
		title: "Electronic Communications and Transactions Act (ECTA)",
		subtitle: "Act 25 of 2002",
		body: "Governs electronic communications and transactions, including requirements around data security and electronic records.",
	},
	{
		title: "Labour Relations Act (LRA)",
		subtitle: "Act 66 of 1995",
		body: "Intersects with POPIA in the context of employee monitoring, disciplinary records, and workplace surveillance.",
	},
	{
		title: "Basic Conditions of Employment Act (BCEA)",
		subtitle: "Act 75 of 1997",
		body: "Employee records retention requirements must be managed in compliance with both the BCEA and POPIA.",
	},
]

const faqData = [
	{
		question: "Does POPIA apply to my small business?",
		answer: "Yes. POPIA applies to any person or organisation that processes personal information in South Africa, regardless of size. If you collect employee names, contact details, or any other personal data, POPIA applies to you.",
	},
	{
		question: "What happens if we haven't appointed an Information Officer?",
		answer: "Failure to appoint and register an Information Officer with the Information Regulator is a contravention of POPIA. It can result in enforcement action, fines, and reputational harm. We can assist with this appointment process immediately.",
	},
	{
		question: "We already have a privacy policy from our website provider. Is that enough?",
		answer: "Usually not. Generic privacy policies often don't reflect how your business actually processes data, and they rarely cover employee data, HR processes, or supplier contracts. We review your full data landscape and create policies that genuinely reflect your operations.",
	},
	{
		question: "How does POPIA affect our HR processes?",
		answer: "Significantly. Recruitment, employee files, payroll, disciplinary records, CCTV footage, and performance data all involve personal information. Each must be handled lawfully, with proper consent, retention limits, and security measures in place.",
	},
	{
		question: "What is a data subject access request?",
		answer: "Under POPIA, any person whose data you hold (an employee, client, or supplier) has the right to request access to that information, ask for corrections, or request deletion. We help you establish a compliant process for handling these requests.",
	},
	{
		question: "How quickly can OptiHR get us compliant?",
		answer: "A basic POPIA compliance implementation — audit, Information Officer appointment, and core policies — typically takes 4 to 8 weeks depending on the size and complexity of your organisation. We can begin immediately.",
	},
]

export const PopiaPage = () => {
	return (
		<>
			<PageBanner
				anchorId="popia-services"
				anchorText="Our POPIA services"
				body="The Protection of Personal Information Act is South African law. Non-compliance carries fines of up to R10 million. OptiHR helps your business achieve and maintain full POPIA compliance."
				title="POPIA Compliance for South African Businesses"
			/>

			{/* What is POPIA */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-muted-1">
				<div className="col-span-full grid grid-cols-1 gap-x-section-gap gap-y-fluid-4 lg:grid-cols-2">
					<div className="flex flex-col gap-fluid-2">
						<SectionSubtitle isDark title="What is POPIA?" />
						<H2>South Africa's data protection law</H2>
						<P className="text-mint-5/80">
							The Protection of Personal Information Act (POPIA), Act 4 of 2013, became fully enforceable on 1 July 2021. It regulates how organisations collect, store, use, share, and destroy personal information — covering both employee data and customer data.
						</P>
						<P className="text-mint-5/80">
							Every South African business that processes personal information must comply. POPIA isn't optional — and the consequences of non-compliance include fines up to R10 million, imprisonment, civil claims, and serious reputational damage.
						</P>
					</div>
					<div className="flex flex-col gap-fluid-2">
						<H3 className="text-mint-6">The risks of non-compliance</H3>
						<div className="flex flex-col gap-inner-padding">
							{popiaRisks.map((risk) => (
								<div
									className="flex flex-col gap-1 rounded-inner bg-white p-inner-padding"
									key={risk.label}
								>
									<P className="text-mint-6 font-semibold text-sm">{risk.label}</P>
									<P className="text-mint-5/80 text-sm">{risk.detail}</P>
								</div>
							))}
						</div>
					</div>
				</div>
			</ContainedLayout>

			{/* Our POPIA services */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-white" id="popia-services">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark title="What we do" />
					<H2 className="text-mint-6">Our POPIA compliance services</H2>
				</div>
				<div className="col-span-full grid grid-cols-1 gap-inner-padding md:grid-cols-2 lg:grid-cols-3">
					{popiaServices.map((service) => (
						<div
							className="flex flex-col gap-fluid-2 rounded-inner bg-muted-1 p-inner-padding"
							key={service.title}
						>
							<H3 className="text-mint-6">{service.title}</H3>
							<P className="text-mint-5/80 text-sm grow">{service.body}</P>
						</div>
					))}
				</div>
			</ContainedLayout>

			{/* Who needs POPIA compliance */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-muted-1">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark title="Who This Affects" />
					<H2>Does POPIA apply to your business?</H2>
					<P className="text-mint-5/80 max-w-2xl">
						POPIA applies to any organisation operating in South Africa that processes personal information. If any of the following apply, you need to be compliant.
					</P>
				</div>
				<div className="col-span-full grid grid-cols-1 gap-x-inner-padding gap-y-fluid-2 md:grid-cols-2">
					{audienceItems.map((item, i) => (
						<div className="flex items-start gap-3" key={i}>
							<span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint-4/20 text-mint-4">
								<svg viewBox="0 0 16 16" fill="none" className="h-3 w-3" aria-hidden="true">
									<path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
								</svg>
							</span>
							<P className="text-mint-5/90">{item}</P>
						</div>
					))}
				</div>
			</ContainedLayout>

			{/* Legislation */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-mint-6">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark={false} title="Legal Framework" />
					<H2 className="text-white">Legislation that applies</H2>
				</div>
				<div className="col-span-full grid grid-cols-1 gap-inner-padding md:grid-cols-2">
					{legislation.map((item) => (
						<div
							className="flex flex-col gap-fluid-2 rounded-inner bg-white/10 p-inner-padding"
							key={item.title}
						>
							<div className="flex flex-col gap-fluid-1">
								<P className="text-mint-2 text-sm font-medium uppercase tracking-wider">{item.subtitle}</P>
								<H3 className="text-white">{item.title}</H3>
							</div>
							<P className="text-white/80 grow">{item.body}</P>
						</div>
					))}
				</div>
			</ContainedLayout>

			{/* FAQ */}
			<FaqSection
				data={{
					title: "POPIA FAQs",
					subtitle: "Common questions about POPIA compliance",
					body: "Clear answers to help you understand your obligations under South African data protection law.",
					cta: {
						text: "Book a POPIA compliance consultation",
						navigateTo: "/contact",
					},
					questions: faqData,
				}}
			/>

			{/* CTA */}
			<HighlightBlock
				background="green"
				body="POPIA compliance is not a once-off exercise — it's an ongoing obligation. OptiHR provides pragmatic, business-friendly POPIA compliance support that protects your organisation without disrupting your operations."
				buttonHref="/contact"
				buttonText="Book your POPIA compliance consultation"
				media={{
					type: "component",
					mediaNode: <div />,
				}}
				mediaPosition="right"
				title="Get POPIA compliant — before the Regulator comes knocking."
			>
				<HighlightBlockTitle />
				<HighlightBlockBody />
				<HighlightBlockButton />
			</HighlightBlock>

			<ClientLogos />
		</>
	)
}

export default PopiaPage
