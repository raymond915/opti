"use client"
import { AudienceDirectorPanel } from "@shared/components/audience-director-panel"
import { ContainedLayout } from "@shared/components/layout"
import { SectionSubtitle } from "@shared/components/section-subtitle"
import { H2, H3, P } from "@shared/components/typography"
import Image from "next/image"
import Link from "next/link"
import type { AudienceDirectorSectionProps } from "../model/schema"

const OptiHRLogoMark = ({ index }: { index: number }) => {
	const faceId = `logo-face-${index}`
	const highlightId = `logo-highlight-${index}`
	const circleGrad = `logo-circle-${index}`
	const iconPaths = {
		circle:
			"M225.85 0.101974C268.713 2.27742 302.806 37.7191 302.806 81.1261C302.806 124.544 268.713 159.986 225.85 162.15L221.68 162.264C176.868 162.264 140.543 125.938 140.543 81.1261C140.543 36.3255 176.868 0 221.68 0L225.85 0.101974ZM221.68 40.0645C198.997 40.0645 180.619 58.4538 180.607 81.1261C180.607 103.81 198.997 122.199 221.68 122.199L223.788 122.142C245.486 121.043 262.742 103.096 262.742 81.1261L262.685 79.0186C261.62 58.0233 244.783 41.1862 223.788 40.1212L221.68 40.0645Z",
		body: "M32.3825 162.785C88.219 165.844 140.271 189.536 179.44 229.828L183.474 234.099C199.246 251.208 212.072 270.425 221.669 291.08C232.082 268.702 246.268 248.002 263.909 229.839L267.739 225.998C307.701 186.783 360.286 164.303 416.372 162.57L416.406 162.559L418.207 162.593C427.158 163.136 434.84 169.402 437.004 178.263L438.489 184.755C441.707 199.96 443.35 215.528 443.35 231.108L443.27 236.558C441.967 290.865 421.165 342.135 384.261 381.996L380.522 385.95C341.851 425.765 290.57 449.367 235.458 452.879H235.379L235.311 452.89C224.694 453.344 218.644 453.332 208.016 452.845L207.937 452.834H207.869C152.927 449.231 101.43 425.675 62.8161 385.95C23.5787 345.557 1.41631 292.678 0.0679828 236.546L0 231.097C0 213.296 2.13013 195.496 6.33373 178.251L6.34506 178.24L6.8436 176.506C9.7442 167.986 17.9248 162.309 26.9438 162.547H26.9665L32.3825 162.785ZM43.0557 205.07C41.8094 213.67 41.1749 222.383 41.1749 231.097L41.2315 235.527C42.3306 281.256 60.3913 324.312 92.3546 357.239L95.2325 360.15C123.695 388.182 159.986 405.722 199.212 410.673C200.255 403.433 200.878 396.125 201.048 388.783L201.082 384.67C201.082 338.77 184.029 295.306 152.973 261.757L149.913 258.539C121.043 228.808 83.6188 210.203 43.0557 205.07ZM400.282 205.07C361.079 210.022 324.765 227.595 296.303 255.627L293.425 258.539C260.408 292.508 242.257 337.286 242.257 384.67L242.302 388.783C242.461 396.125 243.084 403.433 244.126 410.673C284.678 405.552 322.114 386.947 350.995 357.239L354.043 354.021C384.114 321.548 401.053 279.806 402.107 235.538L402.163 231.097C402.163 222.372 401.529 213.67 400.282 205.07Z",
	}
	return (
		<div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-gradient-to-br from-mint-7 via-mint-6 to-mint-5">
			<svg
				className="relative z-10 w-[52%]"
				fill="none"
				viewBox="0 0 443 454"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<linearGradient gradientUnits="userSpaceOnUse" id={faceId} x1="100" x2="343" y1="0" y2="454">
						<stop offset="0%" stopColor="#e8f8f6" />
						<stop offset="45%" stopColor="#9dd9d4" />
						<stop offset="100%" stopColor="#5aaea8" />
					</linearGradient>
					<linearGradient gradientUnits="userSpaceOnUse" id={circleGrad} x1="140" x2="303" y1="0" y2="162">
						<stop offset="0%" stopColor="#f0fbfa" />
						<stop offset="100%" stopColor="#7dccc7" />
					</linearGradient>
					<linearGradient gradientUnits="userSpaceOnUse" id={highlightId} x1="0" x2="220" y1="0" y2="230">
						<stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
						<stop offset="60%" stopColor="#ffffff" stopOpacity="0.05" />
						<stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
					</linearGradient>
				</defs>
				{/* Main face — gradient fill */}
				<path clipRule="evenodd" d={iconPaths.circle} fill={`url(#${circleGrad})`} fillRule="evenodd" />
				<path d={iconPaths.body} fill={`url(#${faceId})`} />
				{/* Highlight sheen — top-left catch light */}
				<g fill={`url(#${highlightId})`} opacity="0.9">
					<path clipRule="evenodd" d={iconPaths.circle} fillRule="evenodd" />
					<path d={iconPaths.body} />
				</g>
			</svg>
		</div>
	)
}

const audiences = [
	{
		label: "Small Businesses",
		href: "/for-small-businesses",
		tagline: "Professional HR without the full-time cost",
		description:
			"Running a small business is demanding — HR compliance shouldn't add to that burden. OptiHR gives you qualified, practical HR support only when you need it, at a fraction of the cost of a permanent hire.",
		highlights: ["Labour audits & compliance", "Disciplinary & grievance handling", "CCMA representation"],
	},
	{
		label: "Large Businesses",
		href: "/for-large-businesses",
		tagline: "Specialist depth for complex HR environments",
		description:
			"Even strong HR teams can't cover every angle. We partner with your HR department as a trusted extension — handling unions, bargaining councils, and high-stakes disputes so your team can focus on strategy.",
		highlights: [
			"Collective bargaining & union engagement",
			"Policy development & compliance frameworks",
			"Training & facilitation for HR teams",
		],
	},
	{
		label: "Independent Schools",
		href: "/for-independent-schools",
		tagline: "We understand both the classroom and the courtroom",
		description:
			"Independent schools face unique HR challenges that traditional consultants rarely understand. Our founder is an admitted attorney, qualified HR practitioner, and former educator — giving schools a partner built for their world.",
		highlights: ["SACE compliance & governance reviews", "Staff contracts & employment frameworks", "Dispute resolution & board support"],
	},
	{
		label: "AI in the Workplace",
		href: "/ai-in-the-workplace",
		tagline: "Strategy, governance, and people support for AI adoption",
		description:
			"Introducing AI into your organisation is as much a people challenge as a technology one. OptiHR helps businesses and schools build AI roadmaps, update HR frameworks, and lead their workforce through the transition with confidence.",
		highlights: ["AI readiness assessments & roadmapping", "HR policy, contracts & POPIA compliance", "Workforce reskilling & change management"],
	},
]

export const AudienceDirectorSection = ({ ...props }: AudienceDirectorSectionProps) => {
	return (
		<ContainedLayout
			{...props}
			className="max-h-none flex flex-col gap-fluid-4 bg-muted-1"
		>
			{/* Section header */}
			<div className="flex flex-col gap-fluid-1">
				<SectionSubtitle isDark title="Who we serve" />
				<H2 className="text-mint-6">Expert HR support for every type of organisation</H2>
				<P className="text-mint-5/70 max-w-2xl">
					Whether you're a growing business, a large enterprise, or an independent school, OptiHR has the expertise to protect your people, your compliance, and your reputation.
				</P>
			</div>

			{/* Audience cards */}
			<div className="grid grid-cols-1 gap-fluid-2 sm:grid-cols-2 lg:grid-cols-4">
				{audiences.map((audience, index) => (
					<Link
						className="group flex flex-col gap-fluid-2 rounded-inner bg-white p-inner-padding shadow-sm ring-1 ring-mint-2/20 transition-all hover:ring-mint-4/40 hover:shadow-md"
						href={audience.href}
						key={audience.href}
					>
						{/* Logo area */}
						<div className="relative aspect-4/3 w-full overflow-clip rounded-inner transition-transform duration-300 group-hover:scale-[1.02]">
							<OptiHRLogoMark index={index} />
						</div>

						{/* Content */}
						<div className="flex flex-col gap-3 flex-1">
							<div className="flex flex-col gap-1">
								<P className="text-xs font-semibold uppercase tracking-widest text-mint-4">
									{audience.label}
								</P>
								<H3 className="text-mint-6">{audience.tagline}</H3>
							</div>
							<P className="text-mint-5/70 text-sm leading-relaxed">{audience.description}</P>

							{/* Highlights */}
							<ul className="flex flex-col gap-1.5 mt-auto">
								{audience.highlights.map((highlight) => (
									<li className="flex items-start gap-2" key={highlight}>
										<span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-mint-6/10">
											<svg
												aria-hidden="true"
												className="h-2.5 w-2.5 text-mint-6"
												fill="none"
												viewBox="0 0 16 16"
											>
												<path
													d="M3 8l3.5 3.5L13 4.5"
													stroke="currentColor"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
												/>
											</svg>
										</span>
										<P className="text-mint-5/80 text-sm">{highlight}</P>
									</li>
								))}
							</ul>

							{/* CTA */}
							<div className="mt-fluid-1 flex items-center gap-2 text-sm font-medium text-mint-6 group-hover:gap-3 transition-all">
								<span>Find out how we help</span>
								<svg
									aria-hidden="true"
									className="h-4 w-4 transition-transform group-hover:translate-x-1"
									fill="none"
									viewBox="0 0 16 16"
								>
									<path
										d="M3 8h10M9 4l4 4-4 4"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="1.5"
									/>
								</svg>
							</div>
						</div>
					</Link>
				))}
			</div>

			{/* Bottom panel strip with quick links */}
			<div>
				<div className="relative overflow-clip rounded-inner aspect-[21/6] w-full">
					<Image
						alt="OptiHR serves small businesses, large organisations, and independent schools across South Africa"
						className="object-cover object-center"
						fill={true}
						src={"/opti-1.png"}
					/>
					<div className="absolute inset-0 bg-mint-6/70" />
					<div className="absolute inset-0 flex items-center justify-center px-inner-padding">
						<AudienceDirectorPanel heading="Find your solution">
						</AudienceDirectorPanel>
					</div>
				</div>
			</div>
		</ContainedLayout>
	)
}
