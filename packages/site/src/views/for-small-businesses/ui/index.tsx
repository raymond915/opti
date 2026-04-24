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
		myth: "We're small, so HR doesn't really apply to us.",
		reality: "Labour law applies to every business, no matter its size. Even one staff dispute handled incorrectly can end up at the CCMA and cost you dearly.",
	},
	{
		myth: "Our office manager can handle HR.",
		reality: "Without HR training, they're exposed — and so is your business. HR decisions are legal decisions, and one mistake can undo years of hard work.",
	},
	{
		myth: "If there are no issues right now, we must be fine.",
		reality: "Problems only surface when things go wrong — and by then it's often too late. Proper HR keeps you safe and prevents costly surprises.",
	},
	{
		myth: "HR support is too expensive for a small business.",
		reality: "You don't need a full-time HR manager. With OptiHR, you get expert support only when you need it — at a fraction of the cost.",
	},
	{
		myth: "HR is just paperwork.",
		reality: "Done properly, HR builds trust, boosts morale, and keeps staff loyal — while protecting you from legal and financial risk.",
	},
]

export const ForSmallBusinessesPage: NextPage = () => {
	return (
		<>
			<PageBanner
				anchorId="how-we-help"
				anchorText="How we help"
				body="Running a small business is already demanding — HR compliance shouldn't be another weight on your shoulders. OptiHR gives you professional HR support without the cost of a full-time hire."
				title="HR & Compliance Support for Small Businesses in South Africa"
			/>
			<ContainedLayout className="grid grid-cols-2 gap-section-gap">
				<H2>Every business deserves proper HR — no matter its size.</H2>
				<P className="text-mint-5/80 text-lg leading-relaxed">
					Too often, businesses hand HR to someone unqualified and only discover the risk when they're hit with a costly CCMA award. OptiHR exists to remove that risk. We don't stop at compliance — competent HR builds trust, lifts morale, and strengthens loyalty among your staff.
				</P>
			</ContainedLayout>
			<ContainedLayout className="grid grid-rows-1 bg-muted-1 p-0 md:p-0">
				<HighlightBlock
					background="white"
					body="We do the heavy lifting — not just advice on paper, but implementation that works in your day-to-day. From contracts and policies to disciplinary processes, we handle it so you don't have to."
					buttonHref="/contact"
					buttonText="Contact us"
					media={{
						type: "image",
						imageProps: {
							alt: "OptiHR practical HR support for small businesses",
							src: "/optihr-small-business-worker.jpeg",
						},
						containerClassnames: "aspect-4/3",
					}}
					mediaPosition={"right"}
					title="Practical, hands-on support"
				>
					<HighlightBlockTitle />
					<HighlightBlockBody />
					<HighlightBlockButton />
				</HighlightBlock>
				<HighlightBlock
					background="white"
					body="Every contract, policy, and procedure is checked against South African labour law to keep you protected. We spot risks early and address issues before they escalate into CCMA cases or toxic workplaces."
					buttonHref="/contact"
					buttonText="Contact us"
					media={{
						type: "component",
						mediaNode: (
							<div className="relative h-full w-full bg-mint-1">
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img src="https://images.pexels.com/photos/6457495/pexels-photo-6457495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Labour law compliance and legal protection" className="absolute inset-0 h-full w-full object-cover" />
							</div>
						),
					}}
					mediaPosition={"left"}
					title="Risk-proof legal compliance"
				>
					<HighlightBlockTitle />
					<HighlightBlockBody />
					<HighlightBlockButton />
				</HighlightBlock>
				<HighlightBlock
					background="white"
					body="No copy-paste templates. Our solutions fit your people, your sector, and your challenges. Qualified HR professionals available when you need them — without the cost of a permanent hire."
					buttonHref="/contact"
					buttonText="Contact us"
					media={{
						type: "component",
						mediaNode: (
							<div className="relative h-full w-full bg-mint-1">
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img src="https://images.pexels.com/photos/4623080/pexels-photo-4623080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Tailored HR solutions for small businesses" className="absolute inset-0 h-full w-full object-cover" />
							</div>
						),
					}}
					mediaPosition={"right"}
					title="Tailored to your size"
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
					<H2 className="text-mint-6">What small business owners get wrong about HR</H2>
					<P className="text-mint-5/70 max-w-2xl">
						These assumptions leave businesses exposed. Here's what the law actually says.
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
					<H2 className="text-white">Small accounting firm — 10 employees</H2>
				</div>
				<div className="col-span-full grid grid-cols-1 gap-section-gap lg:grid-cols-2">
					<div className="flex flex-col gap-fluid-3">
						<P className="text-white/80">
							A small accounting firm in Gauteng had no formal HR setup. The owner asked his receptionist to "handle HR" alongside her admin tasks. Things seemed fine — until an employee challenged a dismissal, claiming unfair treatment.
						</P>
						<P className="text-white/80">
							The business suddenly faced the threat of CCMA action, and the owner realised their processes were non-existent. OptiHR stepped in quickly: we reviewed contracts, fixed compliance gaps, and guided the disciplinary process step by step.
						</P>
						<P className="text-white/80">
							The case was resolved internally, avoiding CCMA escalation entirely. Staff saw that processes were now clear and consistent, which improved trust in management.
						</P>
						<div className="flex flex-col gap-2">
							<div className="flex items-center gap-3">
								<span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20">
									<svg viewBox="0 0 16 16" fill="none" className="h-3 w-3 text-mint-2" aria-hidden="true">
										<path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
								</span>
								<P className="text-white/80 text-sm">CCMA escalation avoided</P>
							</div>
							<div className="flex items-center gap-3">
								<span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20">
									<svg viewBox="0 0 16 16" fill="none" className="h-3 w-3 text-mint-2" aria-hidden="true">
										<path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
								</span>
								<P className="text-white/80 text-sm">Compliance gaps closed within weeks</P>
							</div>
							<div className="flex items-center gap-3">
								<span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20">
									<svg viewBox="0 0 16 16" fill="none" className="h-3 w-3 text-mint-2" aria-hidden="true">
										<path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
									</svg>
								</span>
								<P className="text-white/80 text-sm">Staff trust in management restored</P>
							</div>
						</div>
					</div>
					<div className="flex flex-col justify-center">
						<blockquote className="rounded-inner bg-white/10 p-inner-padding">
							<P className="text-white text-lg leading-relaxed italic">
								"OptiHR saved us from what could've been a huge loss. They gave us structure, and now I know we're protected."
							</P>
							<footer className="mt-4">
								<P className="text-mint-2 text-sm font-medium">Accounting Firm Owner, Gauteng</P>
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
				body="Don't wait for the CCMA, a bargaining council, or a trade union to show you where things went wrong. Get ahead of the risk. Book a free compliance consultation with OptiHR today and put proper HR in place before issues escalate."
				buttonHref="/contact"
				buttonText="Book your free consultation"
				className={"h-[80dvh]"}
				media={{
					type: "component",
					mediaNode: (
						<div className="relative h-full w-full">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src="https://images.pexels.com/photos/5673489/pexels-photo-5673489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="HR consultation — OptiHR" className="absolute inset-0 h-full w-full object-cover object-top" />
						</div>
					),
				}}
				mediaPosition={"right"}
				title="Focus on growing your business. We'll handle the HR."
			>
				<HighlightBlockTitle />
				<HighlightBlockBody />
				<HighlightBlockButton />
			</HighlightBlock>
			<FaqSection
				data={{
					subtitle: "Small business HR questions answered",
					title: "Common questions from small business owners",
					body: "We hear these questions all the time. Here are straight answers.",
					cta: {
						text: "View all FAQs",
						navigateTo: "/faq",
					},
					questions: [
						{
							question: "We don't know if we're compliant. Where do we start?",
							answer:
								"Labour law applies no matter your size. We close the gaps with audits, policies, and contracts so you don't get caught out. A free compliance consultation is the best first step — we'll tell you exactly where you stand.",
						},
						{
							question: "HR was given to someone without HR training. Is that a problem?",
							answer:
								"'I thought they knew what they were doing' is something we hear all the time. Businesses often think they're fine while there are no issues. The real problem comes when conflict arises. We step in with qualified expertise to back every decision with law and best practice.",
						},
						{
							question: "We can't afford a full-time HR manager. What are our options?",
							answer:
								"You don't need one. With OptiHR, you get professional HR support only when you need it — at a fraction of the cost of a permanent hire. We offer flexible support models tailored to your budget and team size.",
						},
						{
							question: "We're nervous about the CCMA. What should we know?",
							answer:
								"Rightly so. Too often, policies exist only in the owner's head. We put proper systems in writing and represent you when needed, keeping costly awards off your books. Our CCMA success rate is over 95%.",
						},
						{
							question: "A staff issue is getting out of hand. Can you help right now?",
							answer:
								"Yes. Whether it's a dismissal, a grievance, or a performance issue, we give you clear, lawful processes to handle problems confidently. We also step in to manage the process directly if needed.",
						},
					],
				}}
			/>
			<ClientLogos />
		</>
	)
}

export default ForSmallBusinessesPage
