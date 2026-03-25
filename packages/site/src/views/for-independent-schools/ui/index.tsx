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
		myth: "Our constitution has stood us in good stead for years — it will continue to do so.",
		reality: "Times have changed. Many constitutions are outdated and boards often aren't agile enough to deal with today's HR and IR challenges. Constitutions need regular review to remain effective.",
	},
	{
		myth: "Our HR practitioner can handle everything.",
		reality: "School HR is unusually broad — from educators to coaches, from parents to unions. Even strong HR practitioners need specialist support with compliance, governance, and disputes.",
	},
	{
		myth: "If we've never had a CCMA case, we must be fine.",
		reality: "A CCMA case isn't just costly — it can damage your school's reputation with parents, learners, and staff. By the time a case arrives, your governance gaps are already on display.",
	},
	{
		myth: "SACE is just a formality.",
		reality: "SACE compliance is serious. Missteps with registration, conduct, or reporting can damage both your school's reputation and its legal standing.",
	},
	{
		myth: "Parents won't get involved in staff issues.",
		reality: "Independent schools answer to parents and boards who expect transparency and fairness. Without robust governance, disputes quickly become reputational crises.",
	},
	{
		myth: "Unions aren't really a factor for us.",
		reality: "Even where membership is limited, unions and collective agreements can impact your school. Early, constructive engagement prevents conflict and keeps relationships manageable.",
	},
]

export const ForIndependentSchoolsPage: NextPage = () => {
	return (
		<>
			<PageBanner
				anchorId="how-we-help"
				anchorText="How we help"
				body="Unlike public schools, independent schools must manage everything themselves: educators, support staff, policies, governance, and accountability to parents and boards. OptiHR is uniquely positioned to help — our founder is an admitted attorney, qualified HR practitioner, and former educator."
				title="HR & Labour Compliance for Independent Schools in South Africa"
			/>
			<ContainedLayout className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-section-gap">
				<H2>We understand both the classroom and the courtroom.</H2>
				<P className="text-mint-5/80 text-lg leading-relaxed">
					Independent schools face unique HR challenges that traditional HR support rarely covers — SACE requirements, staff unions, CCMA disputes, and governance obligations. OptiHR brings a rare combination of legal, HR, and educational expertise to protect your school and your reputation.
				</P>
			</ContainedLayout>
			<ContainedLayout className="grid grid-rows-1 bg-muted-1 p-0 md:p-0">
				<HighlightBlock
					background="white"
					body="Schools face unique obligations that general HR practitioners aren't equipped for: SACE registration and compliance, union or CCMA disputes involving educators, and collective agreements. We ensure these are managed lawfully and consistently, protecting the school from risk and reputational damage."
					buttonHref="/contact"
					buttonText="Contact us"
					key="0"
					media={{
						type: "component",
						mediaNode: (
							<div className="relative h-full w-full bg-mint-1">
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img src="https://images.pexels.com/photos/5905484/pexels-photo-5905484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="SACE and HR compliance for independent schools" className="absolute inset-0 h-full w-full object-cover" />
							</div>
						),
					}}
					mediaPosition="right"
					title="SACE & union expertise"
				>
					<HighlightBlockTitle />
					<HighlightBlockBody />
					<HighlightBlockButton />
				</HighlightBlock>

				<HighlightBlock
					background="white"
					body="Many independent schools operate under constitutions that no longer reflect today's labour and governance realities. We help review and modernise governance frameworks, develop policies for staff, learners, and parents, and ensure boards can act fairly, effectively, and in line with best practice."
					buttonHref="/contact"
					buttonText="Contact us"
					key="1"
					media={{
						type: "component",
						mediaNode: (
							<div className="relative h-full w-full bg-mint-1">
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img src="https://images.pexels.com/photos/12899112/pexels-photo-12899112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Governance and policy support for independent schools" className="absolute inset-0 h-full w-full object-cover" />
							</div>
						),
					}}
					mediaPosition="left"
					title="Governance & policy support"
				>
					<HighlightBlockTitle />
					<HighlightBlockBody />
					<HighlightBlockButton />
				</HighlightBlock>

				<HighlightBlock
					background="white"
					body="The pressures of teaching, parent expectations, and governance demands can drain staff morale. We help schools design HR practices that support well-being, reduce turnover, and build loyalty — recognising the unique pressures of the teaching profession. We also draft and review contracts for educators, support staff, and extra-mural coaches."
					buttonHref="/contact"
					buttonText="Contact us"
					key="2"
					media={{
						type: "component",
						mediaNode: (
							<div className="relative h-full w-full bg-mint-1">
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img src="https://images.pexels.com/photos/5324960/pexels-photo-5324960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Staff engagement and workforce strategy for schools" className="absolute inset-0 h-full w-full object-cover" />
							</div>
						),
					}}
					mediaPosition="right"
					title="Staff morale & employment frameworks"
				>
					<HighlightBlockTitle />
					<HighlightBlockBody />
					<HighlightBlockButton />
				</HighlightBlock>

				<HighlightBlock
					background="white"
					body="A CCMA case isn't just costly — it can damage your school's reputation with parents, learners, and staff. By the time a case lands at the CCMA, the gaps in your governance and processes are already on display. We provide specialist representation and build the systems that prevent disputes before they escalate."
					buttonHref="/contact"
					buttonText="Contact us"
					key="3"
					media={{
						type: "component",
						mediaNode: (
							<div className="relative h-full w-full bg-mint-1">
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img src="https://images.pexels.com/photos/5324969/pexels-photo-5324969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Legal protection and HR advice for schools" className="absolute inset-0 h-full w-full object-cover" />
							</div>
						),
					}}
					mediaPosition="left"
					title="Dispute resolution & legal protection"
				>
					<HighlightBlockTitle />
					<HighlightBlockBody />
					<HighlightBlockButton />
				</HighlightBlock>
			</ContainedLayout>

			{/* Myth vs Reality */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-white">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark title="Myth vs. Reality" />
					<H2 className="text-mint-6">What independent schools get wrong about HR and governance</H2>
					<P className="text-mint-5/70 max-w-2xl">
						These beliefs are widespread among school leadership. They're also the beliefs that leave schools most exposed.
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
					<H2 className="text-white">Well-regarded independent school — 60 staff members</H2>
				</div>
				<div className="col-span-full grid grid-cols-1 gap-section-gap lg:grid-cols-2">
					<div className="flex flex-col gap-fluid-3">
						<P className="text-white/80">
							A well-regarded independent school faced difficulties when a staff grievance over workload was escalated directly to the board. The constitution was outdated, policies were inconsistent, and the HR practitioner was unsure how to proceed without risking reputational damage or a CCMA referral.
						</P>
						<P className="text-white/80">
							OptiHR supported both the HR team and the board. We reviewed the constitution and governance processes, updated staff policies, and guided the grievance process step by step. At the same time, we drafted compliant contracts for the school's extra-mural coaches — closing another gap that could have caused problems later.
						</P>
						<P className="text-white/80">
							The grievance was resolved fairly and lawfully, without escalating to the CCMA. Staff morale improved and trust in the board's processes was restored.
						</P>
						<div className="flex flex-col gap-2">
							<div className="flex items-center gap-3">
								<span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20">
									<svg viewBox="0 0 16 16" fill="none" className="h-3 w-3 text-mint-2" aria-hidden="true">
										<path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
								</span>
								<P className="text-white/80 text-sm">Grievance resolved — no CCMA referral</P>
							</div>
							<div className="flex items-center gap-3">
								<span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20">
									<svg viewBox="0 0 16 16" fill="none" className="h-3 w-3 text-mint-2" aria-hidden="true">
										<path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
								</span>
								<P className="text-white/80 text-sm">Governance and constitution modernised</P>
							</div>
							<div className="flex items-center gap-3">
								<span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20">
									<svg viewBox="0 0 16 16" fill="none" className="h-3 w-3 text-mint-2" aria-hidden="true">
										<path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
								</span>
								<P className="text-white/80 text-sm">HR practitioner confidence significantly increased</P>
							</div>
						</div>
					</div>
					<div className="flex flex-col justify-center">
						<blockquote className="rounded-inner bg-white/10 p-inner-padding">
							<P className="text-white text-lg leading-relaxed italic">
								"OptiHR gave us the clarity we needed. They helped us modernise our governance, resolve a sensitive issue, and put the right systems in place. We now feel protected and supported."
							</P>
							<footer className="mt-4">
								<P className="text-mint-2 text-sm font-medium">Principal, Independent School</P>
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
				body="Let OptiHR focus on what we do best — labour law, compliance, governance, and staff support — so you can focus on what matters most: education. Together, we'll create a fair, compliant, and supportive environment for staff, learners, and parents."
				buttonHref="/contact"
				buttonText="Book your free consultation"
				media={{
					type: "component",
					mediaNode: (
						<div className="relative h-full w-full">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="https://images.pexels.com/photos/7652188/pexels-photo-7652188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="HR consultation — OptiHR" className="absolute inset-0 h-full w-full object-cover object-center" />
						</div>
					),
				}}
				mediaPosition="left"
				title="Ready to safeguard your school?"
			>
				<HighlightBlockTitle />
				<HighlightBlockBody />
				<HighlightBlockButton />
			</HighlightBlock>
			<FaqSection
				data={{
					title: "Independent school HR questions answered",
					subtitle: "Common questions from school principals and HR practitioners",
					body: "Questions we hear regularly from independent school leadership.",
					cta: {
						text: "View all FAQs",
						navigateTo: "/faq",
					},
					questions: [
						{
							question: "Our constitution is outdated. Can OptiHR help us modernise it?",
							answer:
								"Yes. Many independent schools still operate under constitutions that no longer reflect today's labour and governance realities. We review and update governance frameworks so boards can act fairly, effectively, and in line with current standards.",
						},
						{
							question: "How do you handle educator contracts and extra-mural staff?",
							answer:
								"We draft and review employment contracts for all school staff categories — permanent teachers, fixed-term appointments, support staff, part-time coaches, and extra-mural facilitators — ensuring each contract is labour law compliant and SACE-aligned.",
						},
						{
							question: "We're unsure how to deal with unions or collective agreements.",
							answer:
								"Negotiating with unions and applying collective agreements can be complex and high-stakes. We bring the legal and IR expertise to manage these relationships constructively, interpreting and implementing collective agreements while protecting the school's interests.",
						},
						{
							question: "SACE, CCMA, and compliance requirements feel overwhelming. Where do we start?",
							answer:
								"Start with a free consultation. We assess your current compliance position, identify gaps in contracts, policies, and governance, and give you a clear, prioritised action plan to get fully protected.",
						},
						{
							question: "What makes OptiHR different from other HR consultants for schools?",
							answer:
								"Our founder is an admitted attorney, qualified HR practitioner, and SACE-registered former educator. This rare combination means we understand both the classroom and the courtroom — bringing insight into the teaching profession and the legal frameworks that govern it.",
						},
					],
				}}
			/>
			<ClientLogos />
		</>
	)
}

export default ForIndependentSchoolsPage
