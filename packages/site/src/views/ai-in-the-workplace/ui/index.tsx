import { ContainedLayout } from "@shared/components/layout"
import {
	HighlightBlock,
	HighlightBlockBody,
	HighlightBlockButton,
	HighlightBlockTitle,
} from "@shared/components/layout/highlight-block"
import { PageBanner } from "@shared/components/page-banner"
import { SectionSubtitle } from "@shared/components/section-subtitle"
import { H2, H3, P } from "@shared/components/typography"
import { ClientLogos } from "@widgets/client-logos/ui"
import { FaqSection } from "@widgets/faq-section/ui"
import { ServiceRoller } from "@widgets/service-roller/ui"
import type { NextPage } from "next"

const myths = [
	{
		myth: "AI just means ChatGPT — it's basically Google with better writing.",
		reality:
			"ChatGPT is one application built on one AI model. The AI landscape now spans hundreds of tools covering document automation, data analysis, scheduling, customer service, compliance monitoring, and much more — with new capabilities emerging every month. Most of the practical value for businesses comes not from ChatGPT itself, but from purpose-built tools that slot into specific workflows and solve specific problems.",
	},
	{
		myth: "AI will replace most of our workforce.",
		reality:
			"AI typically augments roles rather than replacing them. The organisations seeing the biggest gains are those that redesigned workflows to pair AI capability with human judgment — not those that tried to eliminate headcount. Employees who learn to work with AI become more valuable, not less.",
	},
	{
		myth: "You need to be a tech company to benefit from AI.",
		reality:
			"AI tools are increasingly accessible to any organisation. Schools, professional services firms, and small businesses are finding practical applications in administration, communication, scheduling, and compliance — without needing a tech team.",
	},
	{
		myth: "We can sort out the policies later.",
		reality:
			"Governance gaps catch up with organisations quickly. POPIA, employment law, and fairness obligations apply from the moment you start using AI in people-related decisions. Getting the framework right early is far cheaper than fixing a CCMA dispute or regulatory breach later.",
	},
	{
		myth: "Our staff will figure it out on their own.",
		reality:
			"Unstructured AI adoption creates inconsistency, errors, and security risks. Organisations that invest in structured onboarding, clear usage guidelines, and role-specific training see measurably better outcomes — and fewer costly mistakes.",
	},
	{
		myth: "AI adoption is a once-off project.",
		reality:
			"AI is an ongoing capability, not a one-time implementation. The organisations that stay ahead are those with a continuous learning culture, regular policy reviews, and an internal champion structure that keeps AI use evolving alongside the tools.",
	},
]

const employeeBenefits = [
	{
		title: "Less admin grind",
		description:
			"Drafting routine documents, summarising meetings, formatting reports, responding to standard queries — AI handles the repetitive tasks that drain time and energy, freeing employees to focus on work that actually requires their expertise.",
	},
	{
		title: "Faster, better research",
		description:
			"Instead of spending hours searching, reading, and synthesising information, employees can use AI tools to surface relevant insights in minutes. The time saved goes back into thinking, advising, and deciding.",
	},
	{
		title: "Higher quality output",
		description:
			"AI helps employees produce better written work — clearer emails, more structured proposals, sharper presentations — without needing to be skilled writers. The result is a more professional output with less effort.",
	},
	{
		title: "Fewer mistakes on routine tasks",
		description:
			"Repetitive processes are where human error creeps in. AI tools apply consistent logic to calculations, data entry, scheduling, and compliance checks — reducing costly errors and the stress that comes with catching them.",
	},
	{
		title: "Confidence to do more",
		description:
			"When employees have tools that support their work, they take on more. AI lowers the barrier to tasks that felt out of reach — from data analysis to client-facing content — expanding what individuals can deliver.",
	},
	{
		title: "More time for meaningful work",
		description:
			"The best outcome of AI adoption isn't just efficiency — it's reallocation. When the grind shrinks, employees spend more time on the parts of their job that are genuinely engaging, creative, and worth doing well.",
	},
]

const caseStudyOutcomes = [
	"Employment contracts and IT use policies updated for AI",
	"Staff engagement sessions reduced resistance significantly",
	"Phased rollout completed on time with no formal grievances",
]

export const AiInTheWorkplacePage: NextPage = () => {
	return (
		<>
			<PageBanner
				anchorId="how-we-help"
				anchorText="How we help"
				body="Most organisations hear AI and think ChatGPT. OptiAI, powered by OptiHR, helps businesses and schools understand what AI can realistically do for them — and then makes it happen. No software sales. No one-size-fits-all rollouts. Just personalised, consultant-led interventions that fit your people, your processes, and your budget."
				title="AI in the Workplace"
			/>

			{/* Intro */}
			<ContainedLayout className="grid grid-cols-2 gap-section-gap">
				<H2>AI isn't a threat to your people. Used well, it makes them better at everything they do.</H2>
				<div className="flex flex-col gap-fluid-2">
					<P className="text-mint-5/80 text-lg leading-relaxed">
						When most people hear "AI," they picture ChatGPT — a smarter search engine, a tool that writes things for you. It's a reasonable starting point, but it barely scratches the surface. AI now covers hundreds of purpose-built tools that automate admin, accelerate research, reduce errors, and free your people to spend more time on work that actually matters.
					</P>
					<P className="text-mint-5/80 text-lg leading-relaxed">
						Employees often fear AI because they think it's coming for their jobs. The reality is different: organisations that implement AI thoughtfully find that their people become more productive, more confident, and more valuable — not redundant. The goal isn't to replace your workforce. It's to make them better at what they do, and make your business more efficient and more profitable in the process.
					</P>
					<P className="text-mint-5/80 text-lg leading-relaxed">
						And here is the shift that changes everything: you no longer buy software and then learn how to use it. With AI, the software learns from your enterprise — your terminology, your workflows, your data, your way of doing things. The business stays in control. The software adapts to you.
					</P>
				</div>
			</ContainedLayout>

			{/* Paradigm Shift */}
			<ContainedLayout className="max-h-none bg-mint-1 py-section-gap">
				<div className="col-span-full grid grid-cols-1 gap-section-gap lg:grid-cols-2 items-center">
					<div className="flex flex-col gap-fluid-2">
						<SectionSubtitle isDark title="A new relationship with software" />
						<H2 className="text-mint-6">The software learns from your business. Not the other way around.</H2>
						<P className="text-mint-5/80 text-lg leading-relaxed">
							For decades, adopting technology meant buying a system and then spending months — sometimes years — learning it, training staff to use it, and reshaping your processes to fit its limitations. The business bent to the software.
						</P>
						<P className="text-mint-5/80 text-lg leading-relaxed">
							AI inverts this completely. A well-configured AI solution is built around how your organisation actually operates — your terminology, your workflows, your decision patterns, your data. It learns your business. Over time, it becomes a tool that feels like it was made specifically for you — because it was.
						</P>
						<P className="text-mint-5/80 text-lg leading-relaxed">
							This is why OptiAI doesn't arrive with a preferred product. Every engagement starts with understanding your enterprise first — so that whatever is recommended, configured, and implemented is shaped entirely around you.
						</P>
					</div>
					<div className="flex flex-col gap-6">
						{[
							{
								label: "The old model",
								colour: "border-red-200 bg-red-50",
								headingColour: "text-red-500",
								steps: [
									"Buy off-the-shelf software",
									"Spend months learning how to use it",
									"Retrain staff to fit the system",
									"Adapt your processes around the software's limitations",
									"Hope it still fits your business in two years",
								],
							},
							{
								label: "The AI model",
								colour: "border-mint-3 bg-mint-1/60",
								headingColour: "text-mint-5",
								steps: [
									"Start with how your business actually works",
									"Configure AI around your workflows and language",
									"Staff engage with tools that feel familiar, not foreign",
									"The system learns and improves from your data over time",
									"Software that evolves as your business evolves",
								],
							},
						].map((model) => (
							<div
								className={`flex flex-col gap-3 rounded-inner border p-inner-padding ${model.colour}`}
								key={model.label}
							>
								<P className={`text-xs font-semibold uppercase tracking-widest ${model.headingColour}`}>{model.label}</P>
								<ul className="flex flex-col gap-2">
									{model.steps.map((step, i) => (
										<li className="flex items-start gap-2" key={i}>
											<P className="text-mint-5/80 text-sm">{step}</P>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</ContainedLayout>

			{/* OptiAI Approach */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-mint-6">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark={false} title="The OptiAI approach" />
					<H2 className="text-white">Niche. Personalised. Built around your business.</H2>
					<P className="text-white/80 max-w-2xl">
						OptiAI, powered by OptiHR, doesn't sell AI products. We don't arrive with a preferred platform or a pre-packaged solution. Every engagement starts with understanding your enterprise — your people, your workflows, your terminology, your pain points. Then and only then do we identify where AI can make a genuine, measurable difference.
					</P>
				</div>
				<div className="col-span-full grid grid-cols-1 gap-inner-padding sm:grid-cols-2 lg:grid-cols-3">
					{[
						{
							step: "01",
							title: "Assess",
							description:
								"We spend time inside your business — observing workflows, interviewing staff, and identifying where time is being lost, where errors creep in, and where the real opportunities are. No assumptions.",
						},
						{
							step: "02",
							title: "Recommend",
							description:
								"We map practical AI options to your specific challenges. Each recommendation comes with an honest view of what it will cost, what training is involved, what the implementation looks like, and what the realistic return is.",
						},
						{
							step: "03",
							title: "Implement",
							description:
								"We manage the rollout at a pace that suits your team. Staff are trained properly — not just shown a tool and left to figure it out. We stay involved until adoption is solid and the gains are measurable.",
						},
						{
							step: "04",
							title: "Ongoing support",
							description:
								"AI doesn't stand still, and neither do we. Under a structured SLA, your consultant visits regularly — addressing concerns, answering new questions, reviewing what's working, and introducing new capabilities as your needs evolve.",
						},
						{
							step: "05",
							title: "Develop & evolve",
							description:
								"Over time, your AI capability grows. What starts as one or two targeted tools can expand into a broader digital ecosystem — always at the right pace, always in your interest, never pushed beyond what makes sense for your organisation.",
						},
						{
							step: "06",
							title: "Never one size fits all",
							description:
								"A small accounting firm, a primary school, and a logistics company all have different needs. We treat them that way. The tools, the approach, the timeline, and the investment are all calibrated to your specific context.",
						},
					].map((item) => (
						<div
							className="flex flex-col gap-3 rounded-inner bg-white/10 p-inner-padding"
							key={item.step}
						>
							<P className="text-xs font-semibold uppercase tracking-widest text-mint-2">{item.step}</P>
							<H3 className="text-white">{item.title}</H3>
							<P className="text-white/70 text-sm">{item.description}</P>
						</div>
					))}
				</div>
			</ContainedLayout>

			{/* Highlight Blocks */}
			<ContainedLayout className="grid grid-rows-1 bg-muted-1 p-0 md:p-0">
				<HighlightBlock
					background="white"
					body="Before investing in AI tools, you need an honest assessment of your organisation's readiness — systems, skills, culture, and risk. OptiAI conducts structured readiness reviews, maps your current people processes, and identifies automation opportunities that fit your size, budget, and risk appetite. We look at tools across the market, weigh up the real costs of training and implementation, and give you an honest picture of what AI can realistically do for your organisation — with no vendor agenda and nothing to sell."
					buttonHref="/contact"
					buttonText="Start your assessment"
					media={{
						type: "component",
						mediaNode: (
							<div className="relative h-full w-full bg-mint-1">
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img src="https://images.pexels.com/photos/6457575/pexels-photo-6457575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="AI readiness assessment and roadmapping for organisations" className="absolute inset-0 h-full w-full object-cover" />
							</div>
						),
					}}
					mediaPosition={"right"}
					title="Know where you are before you decide where you're going"
				>
					<HighlightBlockTitle />
					<HighlightBlockBody />
					<HighlightBlockButton />
				</HighlightBlock>

				<HighlightBlock
					background="white"
					body="Using AI in hiring, performance management, monitoring, or decision-making creates legal and governance risks that most organisations haven't addressed. OptiAI audits your existing employment contracts, HR policies, and data governance frameworks, then updates them to reflect AI use — covering transparency obligations, employee consent, algorithmic fairness, and POPIA compliance. We make sure your AI adoption is not only smart, but legally defensible."
					buttonHref="/contact"
					buttonText="Review my policies"
					media={{
						type: "component",
						mediaNode: (
							<div className="relative h-full w-full bg-mint-1">
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img src="https://images.pexels.com/photos/8547344/pexels-photo-8547344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="HR policy and governance frameworks for the AI era" className="absolute inset-0 h-full w-full object-cover" />
							</div>
						),
					}}
					mediaPosition={"left"}
					title="Your contracts and policies weren't written for the AI era"
				>
					<HighlightBlockTitle />
					<HighlightBlockBody />
					<HighlightBlockButton />
				</HighlightBlock>

				<HighlightBlock
					background="white"
					body="The difference between AI resistance and AI enthusiasm comes down to one thing: whether employees feel like AI is happening to them or for them. OptiAI designs implementation programmes that start with employee benefit — showing people how AI removes the admin they dislike, speeds up the repetitive tasks that drain their energy, and gives them tools that make their work genuinely better. When staff see AI as their advantage, not management's efficiency exercise, adoption follows naturally."
					buttonHref="/contact"
					buttonText="Help my team see the upside"
					media={{
						type: "component",
						mediaNode: (
							<div className="relative h-full w-full bg-mint-1">
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img src="https://images.pexels.com/photos/7988504/pexels-photo-7988504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Workforce reskilling and change management" className="absolute inset-0 h-full w-full object-cover" />
							</div>
						),
					}}
					mediaPosition={"right"}
					title="When AI is introduced well, employees don't just accept it — they ask for more."
				>
					<HighlightBlockTitle />
					<HighlightBlockBody />
					<HighlightBlockButton />
				</HighlightBlock>
			</ContainedLayout>

			{/* Practical Use Cases */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-muted-1">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark title="Where AI makes a difference" />
					<H2 className="text-mint-6">Practical AI applications your business can use today</H2>
					<P className="text-mint-5/70 max-w-2xl">
						AI isn't a futuristic concept — it's already embedded in tools most businesses use daily. The question is whether you're getting value from it, or just scratching the surface. Here's what's available right now across common business functions.
					</P>
				</div>
				<div className="col-span-full grid grid-cols-1 gap-inner-padding sm:grid-cols-2 lg:grid-cols-3">
					{[
						{
							icon: "✉️",
							title: "Email & communication",
							items: [
								"Draft, refine and personalise emails in seconds",
								"Auto-categorise and prioritise your inbox",
								"Suggest replies based on email context",
								"Summarise long email threads instantly",
							],
						},
						{
							icon: "📅",
							title: "Calendars & scheduling",
							items: [
								"AI scheduling assistants that find meeting times automatically",
								"Auto-block focus time and protect deep work",
								"Prepare meeting briefs and agendas from your diary",
								"Transcribe and summarise meetings in real time",
							],
						},
						{
							icon: "📊",
							title: "Dashboards & reporting",
							items: [
								"Auto-generate weekly and monthly reports from your data",
								"Natural language queries — ask your data a question",
								"Anomaly detection and trend alerts",
								"Real-time KPI dashboards without a developer",
							],
						},
						{
							icon: "💰",
							title: "Management accounts & finance",
							items: [
								"Automate bookkeeping entries and reconciliation",
								"Generate management account narratives from figures",
								"Flag unusual transactions and cash flow risks early",
								"Produce board-ready financial summaries automatically",
							],
						},
						{
							icon: "⏱️",
							title: "Timesheets & HR admin",
							items: [
								"AI-assisted timesheet completion and approval",
								"Automated leave tracking and conflict detection",
								"Draft employment documents, policies, and contracts",
								"Streamline onboarding with automated checklists",
							],
						},
						{
							icon: "🔧",
							title: "Niche & industry software",
							items: [
								"AI integrations for practice management, legal, and medical platforms",
								"School administration and timetabling tools",
								"CRM enrichment and sales pipeline automation",
								"Custom AI workflows built around your specific processes",
							],
						},
					].map((category, i) => (
						<div
							className="flex flex-col gap-4 rounded-inner bg-white border border-mint-2/20 p-inner-padding"
							key={i}
						>
							<div className="flex items-center gap-3">
								<span className="text-2xl" aria-hidden="true">{category.icon}</span>
								<H3 className="text-mint-6 text-base">{category.title}</H3>
							</div>
							<ul className="flex flex-col gap-2">
								{category.items.map((item, j) => (
									<li className="flex items-start gap-2" key={j}>
										<span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-mint-2/30">
											<svg viewBox="0 0 16 16" fill="none" className="h-2.5 w-2.5 text-mint-5" aria-hidden="true">
												<path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</span>
										<P className="text-mint-5/80 text-sm">{item}</P>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</ContainedLayout>

			{/* Real-World Examples */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-white">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark title="In practice" />
					<H2 className="text-mint-6">What this actually looks like in a real business</H2>
					<P className="text-mint-5/70 max-w-2xl">
						These aren't hypothetical scenarios. They're the kinds of situations OptiAI consultants encounter every week — and the practical difference AI makes when it's configured for a specific business.
					</P>
				</div>
				<div className="col-span-full flex flex-col gap-inner-padding">
					{[
						{
							sector: "Professional services firm",
							challenge: "A small accounting firm was spending 3–4 hours every month-end compiling management reports from their accounting system. Each report required pulling figures into a spreadsheet, writing a narrative, and formatting it for the client.",
							solution: "OptiAI configured an AI workflow connected directly to their accounting platform. Each month-end, the system automatically generates a formatted management report — including a plain-language narrative that explains variances and flags risks. The partner reviews and sends. Total time: under 20 minutes.",
							result: "3+ hours saved per client per month. Applied across 12 clients, that's more than a full working day returned every month.",
						},
						{
							sector: "Independent school",
							challenge: "The school's admin team was manually processing leave requests, chasing outstanding timesheets, and drafting routine staff correspondence — consuming around 6 hours per week of a senior administrator's time.",
							solution: "OptiAI introduced AI-assisted HR admin tools configured around the school's existing policies and staff structure. Leave requests are now processed automatically, timesheet reminders are sent without manual follow-up, and routine letters are drafted from templates the school already uses.",
							result: "The administrator recovered nearly a full day per week — time now spent on governance support, parent communication, and strategic planning.",
						},
						{
							sector: "Sales-led SME",
							challenge: "A sales team of five was spending significant time after each client call writing up notes, updating the CRM, and drafting follow-up emails — often not doing it at all, leading to lost context and missed opportunities.",
							solution: "OptiAI configured an AI meeting assistant that joins calls, produces a structured summary, updates the CRM automatically, and drafts a personalised follow-up email in the company's tone — ready for the salesperson to review and send within minutes.",
							result: "CRM accuracy improved dramatically. Follow-up response times dropped from days to hours. The team reported spending more time selling and less time on admin.",
						},
						{
							sector: "Medical practice",
							challenge: "Reception staff were manually handling appointment confirmations, cancellation follow-ups, and routine patient queries — a high volume of repetitive communication that left less time for in-practice support.",
							solution: "OptiAI configured an AI communication layer that handles appointment reminders, rescheduling prompts, and FAQ responses automatically — using the practice's own language, policies, and tone. Anything requiring human judgment is flagged immediately.",
							result: "Reception time spent on routine communication dropped by more than half. Staff reported feeling less overwhelmed — and patients received faster, more consistent responses.",
						},
					].map((example, i) => (
						<div
							className="grid grid-cols-1 gap-0 rounded-inner border border-mint-2/20 overflow-hidden lg:grid-cols-3"
							key={i}
						>
							<div className="bg-mint-6 p-inner-padding flex flex-col gap-2 justify-center">
								<P className="text-xs font-semibold uppercase tracking-widest text-mint-2">Example</P>
								<H3 className="text-white">{example.sector}</H3>
							</div>
							<div className="bg-muted-1 p-inner-padding flex flex-col gap-3">
								<P className="text-xs font-semibold uppercase tracking-widest text-mint-4/70">The situation</P>
								<P className="text-mint-5/80 text-sm">{example.challenge}</P>
								<div className="h-px bg-mint-2/20" />
								<P className="text-xs font-semibold uppercase tracking-widest text-mint-4/70">What OptiAI did</P>
								<P className="text-mint-5/80 text-sm">{example.solution}</P>
							</div>
							<div className="bg-mint-2/20 p-inner-padding flex flex-col gap-2 justify-center">
								<P className="text-xs font-semibold uppercase tracking-widest text-mint-5">The result</P>
								<P className="text-mint-6 font-medium text-sm">{example.result}</P>
							</div>
						</div>
					))}
				</div>
			</ContainedLayout>

			{/* Employee Benefits */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-white">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark title="For your people" />
					<H2 className="text-mint-6">What AI actually does for employees</H2>
					<P className="text-mint-5/70 max-w-2xl">
						A well-implemented AI tool doesn't take work away from your team — it takes the grind away. Here's what employees typically gain when AI is introduced thoughtfully.
					</P>
				</div>
				<div className="col-span-full grid grid-cols-1 gap-inner-padding sm:grid-cols-2 lg:grid-cols-3">
					{employeeBenefits.map((benefit, i) => (
						<div
							className="flex flex-col gap-3 rounded-inner border border-mint-2/20 bg-muted-1 p-inner-padding"
							key={i}
						>
							<H3 className="text-mint-6 text-base">{benefit.title}</H3>
							<P className="text-mint-5/80 text-sm">{benefit.description}</P>
						</div>
					))}
				</div>
			</ContainedLayout>

			{/* Myth vs Reality */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-white">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark title="Myth vs. Reality" />
					<H2 className="text-mint-6">What organisations get wrong about AI adoption</H2>
					<P className="text-mint-5/70 max-w-2xl">
						These misconceptions slow organisations down — and sometimes leave them exposed. Here's what the evidence actually shows.
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

			<ServiceRoller />

			{/* Case Study */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-mint-6">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark={false} title="Case Study" />
					<H2 className="text-white">Independent school — Pretoria</H2>
				</div>
				<div className="col-span-full grid grid-cols-1 gap-section-gap lg:grid-cols-2">
					<div className="flex flex-col gap-fluid-3">
						<P className="text-white/80">
							When Ashford Academy's governing body decided to explore AI tools for administration and staff management, they quickly realised the decision extended far beyond software. Employment contracts made no mention of digital monitoring, HR policies hadn't been reviewed in six years, and two senior staff members were deeply uncomfortable with the proposed changes.
						</P>
						<P className="text-white/80">
							OptiHR was brought in to lead the transition. We conducted a full readiness assessment, updated employment contracts and IT use policies to reflect AI tool use and POPIA obligations, and ran two structured staff engagement sessions designed to surface and address concerns openly.
						</P>
						<P className="text-white/80">
							The phased rollout gave staff agency over how AI tools entered their workflow. By the end of the first term, adoption was ahead of schedule and no formal grievances had been raised.
						</P>
						<div className="flex flex-col gap-2">
							{caseStudyOutcomes.map((outcome) => (
								<div className="flex items-center gap-3" key={outcome}>
									<span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20">
										<svg viewBox="0 0 16 16" fill="none" className="h-3 w-3 text-mint-2" aria-hidden="true">
											<path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
										</svg>
									</span>
									<P className="text-white/80 text-sm">{outcome}</P>
								</div>
							))}
						</div>
					</div>
					<div className="flex flex-col justify-center">
						<blockquote className="rounded-inner bg-white/10 p-inner-padding">
							<P className="text-white text-lg leading-relaxed italic">
								"We thought we were buying software. OptiHR helped us realise we were redesigning how we work — and they made sure we did it in a way our team could actually get behind."
							</P>
							<footer className="mt-4">
								<P className="text-mint-2 text-sm font-medium">
									Head of Operations, Ashford Academy{" "}
									<span className="text-white/50 font-normal">(name changed for confidentiality)</span>
								</P>
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

			{/* Final CTA */}
			<HighlightBlock
				background="green"
				body="Whether you're just beginning to explore AI or managing an adoption already underway, OptiAI — powered by OptiHR — gives you the strategy, frameworks, and people expertise to move forward with confidence. Book a free consultation and find out exactly where your organisation stands."
				buttonHref="/contact"
				buttonText="Book your free consultation"
				className={"h-[80dvh]"}
				media={{
					type: "image",
					imageProps: {
						alt: "Rhodene Duncan — OptiHR AI and HR strategy consultant",
						src: "/Optihr-Rhodene-Duncan-Portrait.jpg",
					},
					containerClassnames: undefined,
				}}
				mediaPosition={"right"}
				title="Ready to lead your AI transformation?"
			>
				<HighlightBlockTitle />
				<HighlightBlockBody />
				<HighlightBlockButton />
			</HighlightBlock>

			<FaqSection
				data={{
					subtitle: "AI in the workplace — your questions answered",
					title: "Common questions about AI adoption",
					body: "Practical answers to the questions we hear most often from organisations exploring or implementing AI.",
					cta: {
						text: "View all FAQs",
						navigateTo: "/faq",
					},
					questions: [
						{
							question: "Do you help us choose which AI tools to use?",
							answer:
								"Yes — as part of our roadmapping service, we evaluate AI tools relevant to your sector and use case, assess their compatibility with your existing systems, and provide vendor-neutral recommendations. We don't sell software, so our guidance is always in your interest.",
						},
						{
							question: "How do our employment contracts need to change if we start using AI?",
							answer:
								"Several areas need updating: digital monitoring and surveillance clauses, data processing consent, performance management language (if AI tools are used in appraisals), and intellectual property provisions around AI-generated work. OptiHR audits your existing documents and prepares the necessary amendments.",
						},
						{
							question: "What's POPIA's relevance to AI adoption?",
							answer:
								"POPIA regulates how you process personal information — including data used to train or operate AI systems. If your AI tools process employee or student data, you need a lawful basis, data subject notifications, and a data processing agreement with the vendor. Non-compliance carries significant penalties and reputational risk.",
						},
						{
							question: "How do we handle staff who refuse to use new AI tools?",
							answer:
								"This is a common scenario and rarely as confrontational as it sounds. OptiHR helps you navigate it through structured engagement, clear change communication, reasonable accommodation, and — where necessary — updated performance frameworks that reflect new role expectations. Disciplinary action is almost never the right first step.",
						},
						{
							question: "Can schools specifically benefit from AI adoption support?",
							answer:
								"Absolutely. Schools face a unique intersection of challenges: SACE obligations, governing body accountability, POPIA compliance for learner data, staff union sensitivities, and an often under-resourced administration function. OptiHR has specific experience supporting independent schools through AI adoption with all of these factors in mind.",
						},
					],
				}}
			/>

			<ClientLogos />
		</>
	)
}

export default AiInTheWorkplacePage
