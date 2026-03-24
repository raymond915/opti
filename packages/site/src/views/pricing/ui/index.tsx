import { ContainedLayout } from "@shared/components/layout/contained-layout"
import { PageBanner } from "@shared/components/page-banner"
import { SectionSubtitle } from "@shared/components/section-subtitle"
import { H2, H3, H4, P } from "@shared/components/typography"
import { FaqSection } from "@widgets/faq-section"
import { ClientLogos } from "@widgets/client-logos"
import {
	HighlightBlock,
	HighlightBlockBody,
	HighlightBlockButton,
	HighlightBlockTitle,
} from "@shared/components/layout/highlight-block"

const pricingFactors = [
	{ label: "Complexity", detail: "A simple policy review costs less than a full retrenchment process with union negotiations." },
	{ label: "Time required", detail: "Quick compliance checks differ from multi-month Employment Equity plan development." },
	{ label: "Resources allocated", detail: "Some projects need one consultant; others require legal partners or multi-disciplinary support." },
	{ label: "Urgency", detail: "Standard timelines vs. emergency interventions, such as a CCMA case starting tomorrow." },
	{ label: "Organisation size", detail: "10 employees vs. 500 employees changes scope significantly." },
]

const packages = [
	{
		name: "OPTI-REMOTE",
		tagline: "Remote HR Advisory",
		price: "R7,500",
		period: "/month",
		note: "excl. VAT · 12-month SLA",
		onsiteWeekly: "Remote only",
		onsiteMonthly: "No on-site visits",
		hearings: "1 per annum",
		bestFor: "Small businesses (under 20 staff) needing professional HR advisory, document support, and legal-grade guidance — without on-site visits.",
		includes: [
			"Unlimited telephonic and email advisory support",
			"Video consultations by appointment",
			"Employment contract drafting and review",
			"HR document templates and letters",
			"Basic policy review and updating",
			"Disciplinary advisory — telephonic guidance while you chair",
			"CCMA preparation support (remote)",
			"Monthly HR compliance check-in",
			"1 disciplinary hearing or CCMA appearance per annum (prep, full-day attendance, drafting)",
		],
		highlight: false,
		isNew: true,
	},
	{
		name: "OPTI-ESSENTIALS",
		tagline: "Foundational On-Site HR Support",
		price: "R14,500",
		period: "/month",
		note: "excl. VAT · 12-month SLA",
		onsiteWeekly: "2 hours/week",
		onsiteMonthly: "~8 hours/month",
		hearings: "2 per annum",
		bestFor: "Businesses (20–50 staff) needing consistent, scheduled HR support with a practitioner on-site each week.",
		includes: [
			"Weekly on-site visit (2 hrs) at agreed day",
			"HR advisory and staff engagement support",
			"Performance management support (PIPs, reviews, goal-setting)",
			"Custom policy development for your organisation",
			"Review and updating of existing policies",
			"Proactive HR policy gap identification",
			"Access to OptiHR standard document templates",
			"Monthly HR summary report",
			"Email and telephonic support between visits",
			"2 disciplinary hearings or CCMA appearances per annum (prep, full-day attendance, drafting)",
		],
		highlight: false,
		isNew: false,
	},
	{
		name: "OPTI-ADVANTAGE",
		tagline: "Expanded HR Partnership",
		price: "R19,500",
		period: "/month",
		note: "excl. VAT · 12-month SLA",
		onsiteWeekly: "3 hours/week",
		onsiteMonthly: "~13 hours/month",
		hearings: "2 per annum",
		bestFor: "Growing organisations (50–100 staff) needing more hands-on weekly support, deeper policy work, and stronger compliance management.",
		includes: [
			"Everything in Essentials, plus:",
			"Weekly on-site visit (3 hrs) at agreed day",
			"Increased capacity for HR projects and document work",
			"More complex policy development and implementation",
			"Enhanced manager coaching and HR advisory",
			"2 disciplinary hearings or CCMA appearances per annum (prep, full-day attendance, drafting)",
		],
		highlight: true,
		isNew: false,
	},
	{
		name: "OPTI-PREMIER",
		tagline: "Comprehensive HR Management",
		price: "R24,500",
		period: "/month",
		note: "excl. VAT · 12-month SLA",
		onsiteWeekly: "4 hours/week",
		onsiteMonthly: "~18 hours/month",
		hearings: "2 per annum",
		bestFor: "Larger organisations (100–200 staff) needing significant weekly HR capacity, equity reporting, and proactive compliance management.",
		includes: [
			"Everything in Advantage, plus:",
			"Weekly on-site visit (4 hrs) at agreed day",
			"Priority scheduling and same-week turnaround on urgent matters",
			"Expanded policy development and HR project work",
			"Employment equity and skills development advisory",
			"Structured performance management frameworks and manager coaching",
			"Formal incapacity proceedings linked to poor performance",
			"Comprehensive HR policy audit and gap analysis with prioritised remediation plan",
			"2 disciplinary hearings or CCMA appearances per annum (prep, full-day attendance, drafting)",
		],
		highlight: false,
		isNew: false,
	},
	{
		name: "OPTI-PLATINUM",
		tagline: "Dedicated HR Executive Support",
		price: "R29,500",
		period: "/month",
		note: "excl. VAT · 12-month SLA",
		onsiteWeekly: "5 hours/week",
		onsiteMonthly: "~24 hours/month",
		hearings: "3 per annum",
		bestFor: "High-demand organisations (200+ staff), multi-site operations, or businesses requiring dedicated practitioner access and full-scope HR project management.",
		includes: [
			"Everything in Premier, plus:",
			"Weekly on-site visit (5 hrs) at agreed day",
			"Dedicated HR practitioner with priority access and escalation support",
			"Full-scope HR project management for complex or high-volume matters",
			"3 disciplinary hearings or CCMA appearances per annum (prep, full-day attendance, drafting)",
			"Preferential rates with RFH Inc. for Labour Court and employment litigation",
		],
		highlight: false,
		isNew: false,
	},
]

const prepaidPackages = [
	{
		name: "OPTI-START",
		hours: 10,
		validMonths: 3,
		validLabel: "3 months",
		rate: "R1,400",
		total: "R14,000",
		bestFor: "Ad hoc projects or trying OptiHR before committing to a retainer.",
		examples: [
			"Employment contract review and redraft",
			"1 disciplinary hearing (prep + attendance)",
			"HR compliance health check",
			"Staff handbook or policy review",
		],
		note: "Ideal for once-off projects",
	},
	{
		name: "OPTI-FLEX",
		hours: 20,
		validMonths: 6,
		validLabel: "6 months",
		rate: "R1,350",
		total: "R27,000",
		bestFor: "Businesses with intermittent needs — use support when you need it, pause when you don't.",
		examples: [
			"Policy development project (3–4 bespoke policies)",
			"2 disciplinary hearings across 6 months",
			"Performance management framework setup",
			"HR advisory across 6 months (~2–3 hrs/month)",
		],
		note: "Best value for project-based needs",
		highlight: true,
	},
	{
		name: "OPTI-BUILD",
		hours: 40,
		validMonths: 12,
		validLabel: "12 months",
		rate: "R1,300",
		total: "R52,000",
		bestFor: "Organisations that want regular support without a fixed retainer — flexible hours across a full year.",
		examples: [
			"Ongoing HR advisory (~3 hrs/month for a year)",
			"Full policy framework audit and overhaul",
			"3–4 disciplinary hearings or CCMA appearances",
			"Employment Equity plan development",
		],
		note: "Maximum flexibility over 12 months",
	},
]

const additionalHoursInfo = {
	retainerRate: "R1,200",
	adHocRate: "R1,500",
	maxPerMonth: 8,
}

const companySecretarialIncludes = [
	"Annual return preparation and submission to CIPC — deadlines managed on your behalf",
	"Director appointment, resignation, and change notifications to CIPC",
	"Share allotment, transfer, and buyback registrations",
	"MOI amendments, special resolutions, and business name changes",
	"Beneficial ownership disclosures and CIPC compliance monitoring",
	"Maintenance of register of directors and prescribed officers",
	"Maintenance of register of shareholders and securities holders",
	"Maintenance of register of beneficial owners",
	"Share certificates and transfer documentation",
	"Drafting of board resolutions for all company decisions",
	"Board meeting notices, agendas, and minute-taking",
	"Shareholder meeting support — notices, resolutions, and minutes",
	"Proxy appointments and voting management",
	"Corporate governance advisory — fiduciary duties, Companies Act compliance",
	"MOI and shareholder agreement review for governance gaps",
	"Director service agreements and powers of attorney",
	"Proactive regulatory deadline tracking (CIPC, relevant filings)",
]

const popiaImplementationTiers = [
	{
		label: "Micro",
		size: "Up to 10 staff",
		price: "R9,500",
		note: "excl. VAT · once-off",
		highlight: false,
		includes: [
			"POPIA compliance audit",
			"Information Officer formal appointment and registration on the Information Regulator's eServices portal",
			"POPIA compliance manual — written documentation for employees and the designated Information Officer",
			"Core privacy policy and employee data processing notice",
			"Website review and amendments — privacy policy page, cookie notice, and online data collection forms updated for compliance",
			"Consent procedures and data processing register",
			"Data breach response protocol",
			"Staff training — instructional videos and scored knowledge tests (up to 10 users)",
			"Training pass certificates maintained as documented compliance evidence",
		],
	},
	{
		label: "Small Business",
		size: "10–50 staff",
		price: "R16,500",
		note: "excl. VAT · once-off",
		highlight: true,
		includes: [
			"Everything in Micro, plus:",
			"Extended audit covering HR, IT, marketing, and supplier data flows",
			"Supplier and vendor data processing agreements",
			"Staff training — instructional videos and scored knowledge tests (up to 50 users)",
			"Data subject access request (DSAR) procedure and templates",
			"PAIA manual (section 51 manual) drafted and published",
		],
	},
	{
		label: "Medium Business",
		size: "50–200 staff",
		price: "R24,500",
		note: "excl. VAT · once-off",
		highlight: false,
		includes: [
			"Everything in Small Business, plus:",
			"Full data mapping and information asset register",
			"Departmental-level policy rollout and sign-off tracking",
			"Staff training — instructional videos and scored knowledge tests (up to 200 users)",
			"CCTV and monitoring policy where applicable",
			"Biometric data or health data handling policies (if applicable)",
			"Custom DSAR and breach notification workflow",
		],
	},
]

const popiaRetainerTiers = [
	{
		name: "POPIA Essential",
		size: "Up to 20 staff",
		price: "R2,500",
		period: "/month",
		note: "excl. VAT · 12-month SLA",
		includes: [
			"Ongoing compliance monitoring and policy updates",
			"Data subject access request (DSAR) handling",
			"Breach notification support if an incident occurs",
			"Annual policy review and update",
			"Access to updated training videos as legislation changes",
			"Regulatory updates and guidance as POPIA evolves",
		],
	},
	{
		name: "POPIA Business",
		size: "20–100 staff",
		price: "R3,500",
		period: "/month",
		note: "excl. VAT · 12-month SLA",
		includes: [
			"Everything in Essential, plus:",
			"Quarterly compliance health checks",
			"Vendor and supplier DPA reviews (up to 4/year)",
			"New employee onboarding — POPIA training access",
			"Priority support for urgent breaches or regulator correspondence",
		],
	},
	{
		name: "POPIA Enterprise",
		size: "100+ staff",
		price: "R4,500",
		period: "/month",
		note: "excl. VAT · 12-month SLA",
		includes: [
			"Everything in Business, plus:",
			"Monthly compliance reporting to management",
			"Unlimited vendor DPA reviews",
			"Full-scope DSAR management and correspondence",
			"Information Regulator liaison if required",
			"Annual full compliance re-audit",
		],
	},
]

const retainerBenefits = [
	{ label: "Predictable budgeting", detail: "Fixed monthly fees, no surprise invoices." },
	{ label: "Proactive support", detail: "We prevent problems before they become CCMA cases." },
	{ label: "Relationship building", detail: "We learn your business, culture, and people over time." },
	{ label: "Priority access", detail: "Retainer clients get first access during busy periods." },
	{ label: "Cost savings vs. in-house", detail: "An in-house HR manager costs R25,000–R45,000/month in salary alone — before benefits, office space, or legal expertise. Our retainers start at R7,500." },
	{ label: "RFH Inc. preferential rates", detail: "Retainer clients receive discounted legal fees with RFH Inc. for Labour Court and employment litigation matters." },
]

const notIncluded = [
	"External legal representation — Labour Court litigation coordinated through our attorney network (attorney fees separate; preferential rates available to retainer clients via RFH Inc.)",
	"Travel beyond 50 km radius of Johannesburg — travel costs billable at cost for out-of-area visits",
	"Hearings / CCMA appearances beyond the included annual allocation — quoted separately; half-day appearances billed at 50% of full-day rate",
	"Extensive forensic investigations — fraud, theft, or complex misconduct requiring forensic accountants",
	"Psychometric testing — third-party assessments for recruitment or development",
	"Background checks — criminal, credit, and qualification verification services",
]

const faqData = [
	{
		question: "What exactly does 'on-site hours per week' mean?",
		answer: "Each on-site retainer includes a set number of hours every week — for example, OptiEssentials includes 2 hours per week (roughly 8 hours per month). These are scheduled visits at agreed days and times when your HR practitioner is physically present at your premises handling HR work, staff matters, policy development, and manager support. The OPTI-REMOTE package operates entirely via phone, email, and video — no physical visits.",
	},
	{
		question: "How do the prepaid hours timeframes work?",
		answer: "When you purchase a prepaid hours package, all hours must be used within the validity period from purchase date. For example, the OPTI-FLEX package gives you 20 hours to use over 6 months — 5 hours in month one for a policy project, 3 hours in month three for a disciplinary hearing, and so on. We recommend agreeing a rough schedule upfront to get full value. Unused hours at the end of the validity period are forfeited.",
	},
	{
		question: "What can prepaid hours be used for?",
		answer: "Prepaid hours can be applied to almost any OptiHR service — on-site visits, disciplinary hearing preparation and attendance, policy development, HR advisory calls, compliance reviews, employment contract drafting, or CCMA representation. We agree the scope of each engagement before hours are drawn down.",
	},
	{
		question: "What if I need more hours than my retainer includes?",
		answer: "Retainer clients can purchase additional on-site hours at a preferential rate of R1,200/hour (excl. VAT), compared to the standard ad hoc rate of R1,500/hour. Additional hours must be agreed in writing before the visit and are capped at 8 extra hours per month by default. This lets you scale temporarily — during a retrenchment or policy overhaul — without upgrading your full package.",
	},
	{
		question: "Can we start with prepaid hours and move to a retainer?",
		answer: "Yes, and many clients do exactly this. Prepaid hours are a great way to experience OptiHR support before committing to a 12-month retainer. Any unused prepaid hours at the time of switching can be credited towards your first retainer invoice.",
	},
	{
		question: "Is the OPTI-REMOTE package suitable if we already have an HR person?",
		answer: "Yes — it's designed for exactly this. Many businesses have an office manager or admin person handling day-to-day HR, but no one with labour law expertise for the difficult situations. OPTI-REMOTE gives your team a qualified HR practitioner and admitted attorney to call on without the cost of weekly site visits.",
	},
	{
		question: "When are retainer payments due?",
		answer: "Monthly retainer fees are payable in advance on the 1st of each month. All amounts exclude VAT (15%), which will be added on invoice where applicable.",
	},
	{
		question: "What's the difference between hearings included 'per annum' in retainers?",
		answer: "Retainer packages include a set number of full disciplinary hearings or CCMA appearances per year. Each included hearing covers pre-hearing preparation and evidence gathering, full-day attendance, and post-hearing drafting. Additional hearings beyond the annual allocation are quoted separately — half-day appearances (under 4 hours) are billed at 50% of the full-day rate.",
	},
	{
		question: "What are the RFH Inc. preferential rates?",
		answer: "All active OptiHR retainer clients receive discounted professional fees from RFH Inc. (Raymond Francois Hauptfleisch Attorneys Inc.) for legal matters beyond HR advisory scope — including Labour Court representation, employment litigation, and related proceedings. OptiHR facilitates the introduction at no charge. Specific rates are confirmed directly with RFH Inc. upon request.",
	},
	{
		question: "Can we upgrade or downgrade packages?",
		answer: "Yes. Packages run on 12-month SLAs, but you can upgrade at any time mid-term if needs grow. Downgrades take effect at the next annual renewal. We recommend a review conversation at the 10-month mark to assess the right fit for the coming year.",
	},
]

export const PricingPage = () => {
	return (
		<>
			<PageBanner
				anchorId="packages"
				anchorText="View packages"
				body="OptiHR offers flexible pricing tailored to your business — whether you need a once-off project, prepaid hours with a fixed timeframe, or dedicated weekly HR support."
				title="Transparent Pricing. Flexible Options. No Surprises."
			/>

			{/* How we price */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-muted-1">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark title="Our Approach" />
					<H2>How we price our services</H2>
					<P className="text-mint-5/80 max-w-2xl">
						Every business is different. Our fees are based on the value we deliver and the work required — not inflated overheads or one-size-fits-all packages.
					</P>
				</div>
				<div className="col-span-full grid grid-cols-1 gap-inner-padding md:grid-cols-2 lg:grid-cols-3">
					{pricingFactors.map((factor) => (
						<div
							className="flex flex-col gap-fluid-1 rounded-inner bg-white p-inner-padding"
							key={factor.label}
						>
							<div className="flex items-center gap-3">
								<span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint-4/20">
									<svg viewBox="0 0 16 16" fill="none" className="h-3 w-3 text-mint-4" aria-hidden="true">
										<path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
								</span>
								<H4 className="text-mint-6 font-semibold">{factor.label}</H4>
							</div>
							<P className="text-mint-5/80 text-sm">{factor.detail}</P>
						</div>
					))}
				</div>
			</ContainedLayout>

			{/* Engagement options intro */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-white">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark title="Engagement Models" />
					<H2 className="text-mint-6">Three ways to work with us</H2>
				</div>
				<div className="col-span-full grid grid-cols-1 gap-inner-padding md:grid-cols-3">
					{[
						{
							num: "01",
							title: "Ad Hoc / Project-Based",
							desc: "Pay for specific projects as you need them — no ongoing commitment. Ideal for once-off needs like labour audits, retrenchment support, or policy development. Billed at R1,500/hour (excl. VAT).",
						},
						{
							num: "02",
							title: "Prepaid Hours Packages",
							desc: "Purchase a block of consulting hours upfront at discounted rates. Hours are tied to a validity window (3, 6, or 12 months) so you plan ahead and draw down support as needs arise — advisory, hearing attendance, policy work, and more.",
						},
						{
							num: "03",
							title: "Fixed Monthly Retainers",
							desc: "From R7,500/month. Choose remote advisory support or a dedicated practitioner on-site every week, under a 12-month SLA. Predictable fees and proactive HR management.",
						},
					].map((opt) => (
						<div
							className="flex flex-col gap-fluid-2 rounded-inner border border-mint-2/30 p-inner-padding"
							key={opt.title}
						>
							<P className="text-xs font-semibold uppercase tracking-widest text-mint-4">{opt.num}</P>
							<H3 className="text-mint-6">{opt.title}</H3>
							<P className="text-mint-5/80 text-sm grow">{opt.desc}</P>
						</div>
					))}
				</div>
			</ContainedLayout>

			{/* Prepaid Hours Packages */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-muted-1">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark title="Prepaid Hours" />
					<H2>Buy hours. Use them when you need them.</H2>
					<P className="text-mint-5/80 max-w-2xl">
						Prepaid hour packages give you consulting capacity at a discounted rate, linked to a fixed timeframe. Choose the bundle that fits your planning horizon and draw down hours for any OptiHR service within the validity period.
					</P>
				</div>

				{/* Rate comparison strip */}
				<div className="col-span-full flex flex-wrap gap-4">
					{[
						{ label: "Ad hoc rate", rate: "R1,500/hr", sub: "No commitment required", dark: false },
						{ label: "Prepaid rate", rate: "From R1,300/hr", sub: "Save up to 13% vs ad hoc", dark: false },
						{ label: "Retainer add-on rate", rate: "R1,200/hr", sub: "Retainer clients only", dark: true },
					].map((r) => (
						<div
							key={r.label}
							className={`flex flex-col gap-1 rounded-inner p-inner-padding min-w-[180px] ${r.dark ? "bg-mint-6 text-white" : "bg-white"}`}
						>
							<P className={`text-xs font-semibold uppercase tracking-widest ${r.dark ? "text-mint-2" : "text-mint-4"}`}>{r.label}</P>
							<span className={`text-2xl font-bold ${r.dark ? "text-white" : "text-mint-6"}`}>{r.rate}</span>
							<P className={`text-xs ${r.dark ? "text-mint-1/80" : "text-mint-5/60"}`}>{r.sub}</P>
						</div>
					))}
				</div>

				{/* Prepaid package cards */}
				<div className="col-span-full grid grid-cols-1 gap-inner-padding md:grid-cols-3">
					{prepaidPackages.map((pkg) => (
						<div
							key={pkg.name}
							className={`flex flex-col gap-fluid-3 rounded-inner p-inner-padding ${pkg.highlight ? "bg-mint-6 text-white" : "bg-white"}`}
						>
							<div className="flex flex-col gap-2">
								<P className={`text-xs font-semibold uppercase tracking-widest ${pkg.highlight ? "text-mint-2" : "text-mint-4"}`}>
									{pkg.name}
								</P>
								<div className="flex items-end gap-2 flex-wrap">
									<span className={`text-3xl font-bold ${pkg.highlight ? "text-white" : "text-mint-6"}`}>{pkg.hours} hours</span>
									<span className={`text-sm pb-1 ${pkg.highlight ? "text-mint-2" : "text-mint-4"}`}>valid {pkg.validLabel}</span>
								</div>
								<div className={`flex items-center gap-2 rounded-inner px-3 py-1.5 text-sm w-fit ${pkg.highlight ? "bg-white/15" : "bg-muted-1"}`}>
									<P className={`text-sm font-medium ${pkg.highlight ? "text-white" : "text-mint-6"}`}>
										{pkg.rate}/hr · {pkg.total} total
									</P>
								</div>
								<P className={`text-sm mt-1 ${pkg.highlight ? "text-mint-1/90" : "text-mint-5/70"}`}>{pkg.bestFor}</P>
							</div>

							<div className="flex flex-col gap-2">
								<P className={`text-xs font-semibold uppercase tracking-widest ${pkg.highlight ? "text-mint-2/80" : "text-mint-4/70"}`}>Example uses</P>
								<ul className="flex flex-col gap-2">
									{pkg.examples.map((ex, i) => (
										<li className="flex items-start gap-2" key={i}>
											<span className={`mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${pkg.highlight ? "bg-white/20" : "bg-mint-4/15"}`}>
												<svg viewBox="0 0 16 16" fill="none" className={`h-2.5 w-2.5 ${pkg.highlight ? "text-mint-1" : "text-mint-4"}`} aria-hidden="true">
													<path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
												</svg>
											</span>
											<P className={`text-sm ${pkg.highlight ? "text-white/85" : "text-mint-5/80"}`}>{ex}</P>
										</li>
									))}
								</ul>
							</div>

							<div className={`mt-auto rounded-inner px-3 py-1.5 text-xs font-medium text-center ${pkg.highlight ? "bg-white/20 text-white" : "bg-mint-4/10 text-mint-5"}`}>
								{pkg.note}
							</div>

							<a
								href="/contact"
								className={`inline-block rounded-inner px-6 py-3 text-sm font-medium text-center transition-colors ${pkg.highlight ? "bg-white text-mint-6 hover:bg-mint-1" : "bg-mint-6 text-white hover:bg-mint-5"}`}
							>
								Enquire about this package
							</a>
						</div>
					))}
				</div>

				<div className="col-span-full rounded-inner border border-mint-4/25 bg-white p-inner-padding flex gap-3 items-start">
					<span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint-4/15">
						<svg viewBox="0 0 16 16" fill="none" className="h-3 w-3 text-mint-4" aria-hidden="true">
							<circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/>
							<path d="M8 5h.01M8 7.5v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
						</svg>
					</span>
					<div className="flex flex-col gap-1">
						<P className="text-xs font-semibold uppercase tracking-widest text-mint-4">How timeframes work</P>
						<P className="text-mint-5/80 text-sm">Hours are valid from the date of purchase. You plan when to use them — for example, 3 hours in month one for a policy review, 5 hours in month two for a disciplinary hearing. Hours not used within the validity window expire. We recommend agreeing a rough schedule upfront to get full value from your package.</P>
					</div>
				</div>
			</ContainedLayout>

			{/* Retainer packages */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-white" id="packages">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark title="Monthly Retainers" />
					<H2>Fixed support. Predictable monthly fees.</H2>
					<P className="text-mint-5/80 max-w-2xl">
						All packages are subject to a 12-month SLA. Monthly retainer is payable in advance on the 1st of each month. All amounts exclude VAT (15%).
					</P>
				</div>
				<div className="col-span-full grid grid-cols-1 gap-inner-padding lg:grid-cols-2 xl:grid-cols-3">
					{packages.map((pkg) => (
						<div
							className={`flex flex-col gap-fluid-3 rounded-inner p-inner-padding relative ${pkg.highlight ? "bg-mint-6 text-white" : "bg-white border border-mint-2/20"} ${pkg.isNew ? "ring-2 ring-mint-4/40" : ""}`}
							key={pkg.name}
						>
							{pkg.isNew && (
								<div className="absolute -top-3 left-inner-padding">
									<span className="rounded-full bg-mint-4 px-3 py-1 text-xs font-semibold text-white uppercase tracking-widest">
										New
									</span>
								</div>
							)}

							<div className="flex flex-col gap-fluid-1">
								<div className="flex items-start justify-between gap-4 flex-wrap">
									<div>
										<P className={`text-xs font-semibold uppercase tracking-widest ${pkg.highlight ? "text-mint-2" : "text-mint-4"}`}>
											{pkg.name}
										</P>
										<H3 className={`mt-1 ${pkg.highlight ? "text-white" : "text-mint-6"}`}>{pkg.tagline}</H3>
									</div>
									<div className="text-right shrink-0">
										<span className={`text-3xl font-bold ${pkg.highlight ? "text-white" : "text-mint-6"}`}>{pkg.price}</span>
										<span className={`text-sm ${pkg.highlight ? "text-mint-2" : "text-mint-4"}`}>{pkg.period}</span>
										<P className={`text-xs mt-1 ${pkg.highlight ? "text-mint-2/80" : "text-mint-4/80"}`}>{pkg.note}</P>
									</div>
								</div>

								{/* On-site hours callout */}
								<div className={`flex flex-wrap gap-3 rounded-inner p-3 ${pkg.highlight ? "bg-white/10" : "bg-muted-1"}`}>
									<div className="flex flex-col gap-0.5">
										<P className={`text-xs font-semibold uppercase tracking-widest ${pkg.highlight ? "text-mint-1/70" : "text-mint-4/70"}`}>Support model</P>
										<P className={`text-sm font-medium ${pkg.highlight ? "text-white" : "text-mint-6"}`}>{pkg.onsiteWeekly}</P>
									</div>
									<div className={`w-px self-stretch ${pkg.highlight ? "bg-white/20" : "bg-mint-2/30"}`} />
									<div className="flex flex-col gap-0.5">
										<P className={`text-xs font-semibold uppercase tracking-widest ${pkg.highlight ? "text-mint-1/70" : "text-mint-4/70"}`}>Monthly capacity</P>
										<P className={`text-sm font-medium ${pkg.highlight ? "text-white" : "text-mint-6"}`}>{pkg.onsiteMonthly}</P>
									</div>
									<div className={`w-px self-stretch ${pkg.highlight ? "bg-white/20" : "bg-mint-2/30"}`} />
									<div className="flex flex-col gap-0.5">
										<P className={`text-xs font-semibold uppercase tracking-widest ${pkg.highlight ? "text-mint-1/70" : "text-mint-4/70"}`}>Hearings / CCMA</P>
										<P className={`text-sm font-medium ${pkg.highlight ? "text-white" : "text-mint-6"}`}>{pkg.hearings}</P>
									</div>
								</div>

								<P className={`text-sm ${pkg.highlight ? "text-mint-1/90" : "text-mint-5/70"}`}>
									<span className="font-medium">Best for: </span>{pkg.bestFor}
								</P>
							</div>

							<ul className="flex flex-col gap-2">
								{pkg.includes.map((item, i) => (
									<li className="flex items-start gap-2" key={i}>
										<span className={`mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${pkg.highlight ? "bg-white/20" : "bg-mint-4/20"}`}>
											<svg viewBox="0 0 16 16" fill="none" className={`h-2.5 w-2.5 ${pkg.highlight ? "text-mint-1" : "text-mint-4"}`} aria-hidden="true">
												<path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
											</svg>
										</span>
										<P className={`text-sm ${pkg.highlight ? "text-white/90" : "text-mint-5/80"}`}>{item}</P>
									</li>
								))}
							</ul>

							<a
								href="/contact"
								className={`mt-auto inline-block rounded-inner px-6 py-3 text-sm font-medium text-center transition-colors ${pkg.highlight ? "bg-white text-mint-6 hover:bg-mint-1" : "bg-mint-6 text-white hover:bg-mint-5"}`}
							>
								Get a proposal
							</a>
						</div>
					))}
				</div>

				{/* Additional hours callout */}
				<div className="col-span-full rounded-inner bg-muted-1 p-inner-padding flex flex-col gap-3 md:flex-row md:items-center md:gap-8">
					<div className="flex flex-col gap-1 shrink-0">
						<P className="text-xs font-semibold uppercase tracking-widest text-mint-4">Retainer add-on</P>
						<H4 className="text-mint-6">Need extra hours?</H4>
					</div>
					<div className="w-px self-stretch bg-mint-2/30 hidden md:block" />
					<P className="text-mint-5/80 text-sm grow">
						Retainer clients can purchase additional on-site hours at <span className="font-semibold text-mint-6">R1,200/hour (excl. VAT)</span> — compared to the standard ad hoc rate of R1,500/hour. Capped at {additionalHoursInfo.maxPerMonth} extra hours per month by default, with written agreement required in advance. Useful for retrenchments, policy overhauls, or peak periods without needing to move to a higher package tier.
					</P>
				</div>
			</ContainedLayout>

			{/* Company Secretarial Services */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-mint-6">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark={false} title="Standalone Service" />
					<H2 className="text-white">Company Secretarial Services</H2>
					<P className="text-mint-1/90 max-w-2xl">
						Private companies in South Africa are not legally required to appoint a company secretary — but the governance obligations are real. Missed CIPC filings, missing board resolutions, and poorly maintained statutory registers create legal, financial, and commercial risk. OptiHR's company secretarial retainer handles it all, with legal-grade precision.
					</P>
				</div>

				<div className="col-span-full grid grid-cols-1 gap-inner-padding lg:grid-cols-2">
					{/* Pricing card */}
					<div className="flex flex-col gap-fluid-3 rounded-inner bg-white p-inner-padding">
						<div className="flex flex-col gap-2">
							<P className="text-xs font-semibold uppercase tracking-widest text-mint-4">OPTI-SECRETARIAL</P>
							<H3 className="text-mint-6">Company Secretarial Retainer</H3>
							<div className="flex items-end gap-2">
								<span className="text-4xl font-bold text-mint-6">R22,500</span>
								<span className="text-sm text-mint-4 pb-1">/month excl. VAT</span>
							</div>
							<P className="text-xs text-mint-4/70">12-month SLA · payable monthly in advance</P>
						</div>

						<div className="rounded-inner bg-muted-1 p-4 flex flex-col gap-1">
							<P className="text-xs font-semibold uppercase tracking-widest text-mint-4">Best for</P>
							<P className="text-sm text-mint-5/80">
								Private companies wanting professional governance without a full-time appointment — from owner-managed businesses to investor-backed companies that need audit-ready records and zero missed CIPC deadlines.
							</P>
						</div>

						<ul className="flex flex-col gap-2">
							{companySecretarialIncludes.map((item, i) => (
								<li className="flex items-start gap-2" key={i}>
									<span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-mint-4/20">
										<svg viewBox="0 0 16 16" fill="none" className="h-2.5 w-2.5 text-mint-4" aria-hidden="true">
											<path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
										</svg>
									</span>
									<P className="text-sm text-mint-5/80">{item}</P>
								</li>
							))}
						</ul>

						<a
							href="/contact"
							className="mt-auto inline-block rounded-inner bg-mint-6 px-6 py-3 text-sm font-medium text-white text-center transition-colors hover:bg-mint-5"
						>
							Enquire about this service
						</a>
					</div>

					{/* Why it matters */}
					<div className="flex flex-col gap-fluid-3">
						{[
							{
								heading: "CIPC penalties add up fast",
								body: "Annual returns must be filed within 30 business days of your company's anniversary. Late filings attract escalating penalties and can ultimately trigger deregistration — which means you cannot legally trade, open bank accounts, or enter contracts.",
							},
							{
								heading: "Board resolutions are your legal proof",
								body: "Every significant company decision — appointing a director, issuing shares, approving a major contract — requires a properly drafted and signed board resolution. WhatsApp messages and verbal agreements have no legal standing. Proper resolutions protect directors personally.",
							},
							{
								heading: "Statutory registers are not optional",
								body: "Your registers of directors, shareholders, and beneficial owners must be accurate, current, and available for inspection. Missing or incorrect registers expose directors to personal liability — and cause expensive delays when investors, lenders, or auditors ask for them.",
							},
							{
								heading: "Governance becomes commercially critical",
								body: "When you raise investment, apply for significant bank finance, or sell the business, your governance records will be scrutinised. Poor records delay deals, reduce valuations, and sometimes kill transactions entirely.",
							},
							{
								heading: "Legal expertise built in",
								body: "OptiHR's founder is an admitted attorney with direct knowledge of the Companies Act, corporate law, and governance requirements. This is not form-filing — it is legal-grade governance support at a fraction of the cost of a full-time appointment.",
							},
						].map((item) => (
							<div key={item.heading} className="flex flex-col gap-2 rounded-inner bg-white/10 p-inner-padding">
								<H4 className="text-white">{item.heading}</H4>
								<P className="text-mint-1/80 text-sm">{item.body}</P>
							</div>
						))}
					</div>
				</div>

				<div className="col-span-full rounded-inner bg-white/10 p-inner-padding flex gap-3 items-start">
					<span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20">
						<svg viewBox="0 0 16 16" fill="none" className="h-3 w-3 text-mint-1" aria-hidden="true">
							<circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/>
							<path d="M8 5h.01M8 7.5v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
						</svg>
					</span>
					<P className="text-mint-1/80 text-sm">
						Company secretarial services can be taken as a standalone retainer or combined with an OptiHR HR retainer. Clients holding both services receive integrated governance and HR compliance support with a single point of accountability.
					</P>
				</div>
			</ContainedLayout>

			{/* POPIA Compliance Pricing */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-white">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark title="Standalone Service" />
					<H2 className="text-mint-6">POPIA Compliance Packages</H2>
					<P className="text-mint-5/80 max-w-2xl">
						POPIA compliance is not a once-off tick-box exercise — it requires implementation, staff training, and ongoing monitoring. OptiHR offers a structured two-phase approach: a once-off implementation to get you compliant, followed by an optional retainer to keep you that way.
					</P>
				</div>

				{/* Once-off implementation */}
				<div className="col-span-full flex flex-col gap-fluid-2">
					<div className="flex flex-col gap-2">
						<P className="text-xs font-semibold uppercase tracking-widest text-mint-4">Phase 1 — Once-off Implementation</P>
						<H3 className="text-mint-6">Get fully compliant from the ground up</H3>
						<P className="text-mint-5/80 text-sm max-w-2xl">
							A complete POPIA implementation covering audit, Information Officer appointment, policies, consent procedures, breach protocols, and staff training — sized to your organisation.
						</P>
					</div>

					<div className="grid grid-cols-1 gap-inner-padding md:grid-cols-3">
						{popiaImplementationTiers.map((tier) => (
							<div
								key={tier.label}
								className={`flex flex-col gap-fluid-3 rounded-inner p-inner-padding ${tier.highlight ? "bg-mint-6 text-white" : "bg-muted-1 border border-mint-2/20"}`}
							>
								<div className="flex flex-col gap-2">
									<P className={`text-xs font-semibold uppercase tracking-widest ${tier.highlight ? "text-mint-2" : "text-mint-4"}`}>
										{tier.label}
									</P>
									<P className={`text-sm font-medium ${tier.highlight ? "text-mint-1/80" : "text-mint-5/70"}`}>{tier.size}</P>
									<div className="flex items-end gap-2">
										<span className={`text-3xl font-bold ${tier.highlight ? "text-white" : "text-mint-6"}`}>{tier.price}</span>
									</div>
									<P className={`text-xs ${tier.highlight ? "text-mint-2/70" : "text-mint-4/70"}`}>{tier.note}</P>
								</div>

								<ul className="flex flex-col gap-2 grow">
									{tier.includes.map((item, i) => (
										<li className="flex items-start gap-2" key={i}>
											<span className={`mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${tier.highlight ? "bg-white/20" : "bg-mint-4/15"}`}>
												<svg viewBox="0 0 16 16" fill="none" className={`h-2.5 w-2.5 ${tier.highlight ? "text-mint-1" : "text-mint-4"}`} aria-hidden="true">
													<path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
												</svg>
											</span>
											<P className={`text-sm ${tier.highlight ? "text-white/90" : "text-mint-5/80"}`}>{item}</P>
										</li>
									))}
								</ul>

								<a
									href="/contact"
									className={`inline-block rounded-inner px-6 py-3 text-sm font-medium text-center transition-colors ${tier.highlight ? "bg-white text-mint-6 hover:bg-mint-1" : "bg-mint-6 text-white hover:bg-mint-5"}`}
								>
									Get a proposal
								</a>
							</div>
						))}
					</div>

					<div className="rounded-inner border border-mint-4/25 bg-muted-1 p-inner-padding flex gap-3 items-start">
						<span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint-4/15">
							<svg viewBox="0 0 16 16" fill="none" className="h-3 w-3 text-mint-4" aria-hidden="true">
								<circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5"/>
								<path d="M8 5h.01M8 7.5v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
							</svg>
						</span>
						<P className="text-mint-5/80 text-sm">
							Organisations with 200+ staff, multiple entities, or complex data environments are quoted individually. Businesses in healthcare, financial services, or education (handling sensitive or learner data) may require additional scope — contact us for a tailored assessment.
						</P>
					</div>
				</div>

				{/* Ongoing retainer */}
				<div className="col-span-full flex flex-col gap-fluid-2">
					<div className="flex flex-col gap-2">
						<P className="text-xs font-semibold uppercase tracking-widest text-mint-4">Phase 2 — Ongoing Retainer</P>
						<H3 className="text-mint-6">Stay compliant as your business evolves</H3>
						<P className="text-mint-5/80 text-sm max-w-2xl">
							POPIA is not a set-and-forget exercise. As your data landscape changes, staff turn over, and the Information Regulator issues new guidance, your compliance needs ongoing attention. Our POPIA retainer keeps you ahead of the obligation.
						</P>
					</div>

					<div className="grid grid-cols-1 gap-inner-padding md:grid-cols-3">
						{popiaRetainerTiers.map((tier, idx) => (
							<div
								key={tier.name}
								className={`flex flex-col gap-fluid-3 rounded-inner p-inner-padding ${idx === 1 ? "bg-mint-6 text-white" : "bg-muted-1 border border-mint-2/20"}`}
							>
								<div className="flex flex-col gap-2">
									<P className={`text-xs font-semibold uppercase tracking-widest ${idx === 1 ? "text-mint-2" : "text-mint-4"}`}>
										{tier.name}
									</P>
									<P className={`text-sm font-medium ${idx === 1 ? "text-mint-1/80" : "text-mint-5/70"}`}>{tier.size}</P>
									<div className="flex items-end gap-2">
										<span className={`text-3xl font-bold ${idx === 1 ? "text-white" : "text-mint-6"}`}>{tier.price}</span>
										<span className={`text-sm pb-1 ${idx === 1 ? "text-mint-2" : "text-mint-4"}`}>{tier.period}</span>
									</div>
									<P className={`text-xs ${idx === 1 ? "text-mint-2/70" : "text-mint-4/70"}`}>{tier.note}</P>
								</div>

								<ul className="flex flex-col gap-2 grow">
									{tier.includes.map((item, i) => (
										<li className="flex items-start gap-2" key={i}>
											<span className={`mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${idx === 1 ? "bg-white/20" : "bg-mint-4/15"}`}>
												<svg viewBox="0 0 16 16" fill="none" className={`h-2.5 w-2.5 ${idx === 1 ? "text-mint-1" : "text-mint-4"}`} aria-hidden="true">
													<path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
												</svg>
											</span>
											<P className={`text-sm ${idx === 1 ? "text-white/90" : "text-mint-5/80"}`}>{item}</P>
										</li>
									))}
								</ul>

								<a
									href="/contact"
									className={`inline-block rounded-inner px-6 py-3 text-sm font-medium text-center transition-colors ${idx === 1 ? "bg-white text-mint-6 hover:bg-mint-1" : "bg-mint-6 text-white hover:bg-mint-5"}`}
								>
									Enquire about this plan
								</a>
							</div>
						))}
					</div>
				</div>

				{/* Standalone training add-on */}
				<div className="col-span-full rounded-inner bg-mint-6 p-inner-padding flex flex-col gap-3 md:flex-row md:items-start md:gap-8">
					<div className="flex flex-col gap-2 shrink-0 md:max-w-xs">
						<P className="text-xs font-semibold uppercase tracking-widest text-mint-2">Training Add-On</P>
						<H4 className="text-white">Staff Training Pack — standalone</H4>
						<div className="flex items-end gap-1">
							<span className="text-2xl font-bold text-white">R3,500</span>
							<span className="text-sm text-mint-2 pb-1">excl. VAT · once-off</span>
						</div>
						<P className="text-xs text-mint-2/70">Up to 20 users · R150/user thereafter</P>
					</div>
					<div className="w-px self-stretch bg-white/20 hidden md:block" />
					<P className="text-mint-1/85 text-sm grow">
						If you already have your POPIA framework in place and simply need to train and assess your staff, this standalone training pack gives all employees access to structured instructional videos and scored knowledge tests — with pass certificates stored as evidence of your compliance programme. Suitable for annual compliance refreshers or onboarding new staff into an existing POPIA framework.
					</P>
				</div>
			</ContainedLayout>

			{/* RFH Inc. benefit */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-muted-1">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark title="Exclusive to Retainer Clients" />
					<H2 className="text-mint-6">Preferential legal rates with RFH Inc.</H2>
					<P className="text-mint-5/80 max-w-2xl">
						All active OptiHR retainer clients receive preferential professional fees at RFH Inc. (Raymond Francois Hauptfleisch Attorneys Inc.), Raymond's specialist labour law firm. When an HR matter escalates beyond advisory scope, you already have a direct connection to legal representation — no separate onboarding, no referral fees.
					</P>
				</div>
				<div className="col-span-full grid grid-cols-1 gap-inner-padding sm:grid-cols-2 lg:grid-cols-3">
					{[
						{ label: "Labour Court", detail: "Representation in the Labour Court and Labour Appeal Court at preferential rates." },
						{ label: "CCMA Arbitrations", detail: "Legal representation for complex arbitration matters that require an attorney of record." },
						{ label: "Unfair Dismissal Claims", detail: "Defence against unfair dismissal and automatically unfair dismissal claims." },
						{ label: "Discrimination Disputes", detail: "Representation in equality court and CCMA unfair discrimination matters." },
						{ label: "Retrenchment Disputes", detail: "Section 189 retrenchment disputes and related procedural and substantive challenges." },
						{ label: "Business Transfers", detail: "Section 197 transfer of business proceedings and employment continuity disputes." },
					].map((item) => (
						<div
							className="flex flex-col gap-2 rounded-inner bg-white border border-mint-2/20 p-inner-padding"
							key={item.label}
						>
							<H4 className="text-mint-6">{item.label}</H4>
							<P className="text-mint-5/80 text-sm">{item.detail}</P>
						</div>
					))}
				</div>
				<P className="col-span-full text-mint-4/70 text-xs">
					Rates are confirmed directly with RFH Inc. upon request. Available exclusively to clients holding an active OptiHR retainer. OptiHR facilitates the introduction at no charge.
				</P>
			</ContainedLayout>

			{/* Why retainers */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-white">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark title="Why Commit" />
					<H2 className="text-mint-6">Why choose a retainer?</H2>
				</div>
				<div className="col-span-full grid grid-cols-1 gap-inner-padding sm:grid-cols-2 lg:grid-cols-3">
					{retainerBenefits.map((benefit) => (
						<div
							className="flex flex-col gap-fluid-1 rounded-inner bg-muted-1 p-inner-padding"
							key={benefit.label}
						>
							<H4 className="text-mint-6 font-semibold">{benefit.label}</H4>
							<P className="text-mint-5/80 text-sm">{benefit.detail}</P>
						</div>
					))}
				</div>
			</ContainedLayout>

			{/* Not included */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-muted-1">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark title="Full Transparency" />
					<H2 className="text-mint-6">What's not included in any package</H2>
					<P className="text-mint-5/80 max-w-2xl">
						To maintain transparency, here's what typically requires additional fees even in retainer packages.
					</P>
				</div>
				<div className="col-span-full grid grid-cols-1 gap-inner-padding md:grid-cols-2">
					{notIncluded.map((item, i) => (
						<div
							className="flex items-start gap-3 rounded-inner bg-white p-inner-padding"
							key={i}
						>
							<span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint-4/15 text-mint-4 text-xs font-bold">✕</span>
							<P className="text-mint-5/80 text-sm">{item}</P>
						</div>
					))}
				</div>
			</ContainedLayout>

			{/* FAQ */}
			<FaqSection
				data={{
					title: "Pricing FAQs",
					subtitle: "Common questions about pricing and engagement",
					body: "Everything you need to know before choosing your engagement model.",
					cta: {
						text: "Book a free consultation",
						navigateTo: "/contact",
					},
					questions: faqData,
				}}
			/>

			{/* CTA */}
			<HighlightBlock
				background="green"
				body="Stop guessing what HR support costs. Book a free consultation and get a customised proposal showing exactly what you'll pay and what you'll get — no surprises, no hidden fees."
				buttonHref="/contact"
				buttonText="Request your free pricing consultation"
				media={{
					type: "component",
					mediaNode: <div />,
				}}
				mediaPosition="right"
				title="Transparent pricing for professional HR support"
			>
				<HighlightBlockTitle />
				<HighlightBlockBody />
				<HighlightBlockButton />
			</HighlightBlock>

			<ClientLogos />
		</>
	)
}

export default PricingPage
