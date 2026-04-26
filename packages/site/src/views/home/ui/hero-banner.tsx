import { AudienceDirectorPanel } from "@shared/components/audience-director-panel"
import { Badge } from "@shared/components/badge"
import { Button } from "@shared/components/button"
import Logo from "@shared/components/logo"
import { Stat } from "@shared/components/stat"
import type { StatType } from "@shared/components/stat/model/schema"
import { H1, P } from "@shared/components/typography"
import { CircleCheck } from "lucide-react"
import { stats } from "../model/hero-stats"

export const HeroBanner = () => {
	return (
		<section className="contained-height nav-padding relative grid w-full grid-cols-1 gap-inner-padding overflow-clip rounded-outer bg-mint-6 p-4 md:grid-cols-12 md:p-inner-padding">
			{/*Main Content*/}
			<div className="col-span-full grid grid-cols-1 items-stretch gap-fluid-4 p-2 md:col-span-7 md:grid-cols-subgrid md:p-inner-padding">
				<div className="z-10 col-span-full flex flex-col justify-center gap-fluid-4 md:col-span-6">
					<div className="flex flex-col gap-fluid-3">
						<Badge
							icon={<CircleCheck />}
							label={"SASLAW & AHI Member"}
						/>
						<H1 className="text-white xl:text-fluid-7">
							Expert Labour Law Compliance for South African Businesses
						</H1>
						<P className="max-w-full text-pretty text-white/90 lg:max-w-3/4">
							Navigate CCMA disputes and HR compliance with confidence. OptiHR strengthens your team
							with practical, preventative support — without the cost of a full-time hire.
						</P>
					</div>
					<Button
						background="white"
						href={"/contact"}
						size="lg"
					>
						Book your free consultation
					</Button>
				</div>
				{/*Stats — stacked on mobile (3 rows), inline on tablet+ */}
				<div className="col-span-full grid grid-cols-3 items-end gap-4 text-white md:col-span-7 md:flex md:gap-section-gap">
					{stats.map((stat: StatType) => (
						<Stat
							className="col-span-1"
							key={stat.label}
							label={stat.label}
							value={stat.value}
						/>
					))}
				</div>
			</div>
			{/*AudienceDirector — hidden on mobile to save space; mobile users get the in-flow CTA above */}
			<div className="hidden md:col-span-5 md:grid md:grid-cols-subgrid md:justify-end">
				<AudienceDirectorPanel
					className="z-30 col-end-6 place-self-end"
					heading={"How can we help you"}
				/>
			</div>
			<Logo
				className="-bottom-[10vh] pointer-events-none absolute right-[5vw] w-[60vw] select-none text-mint-5/20 md:w-[45vw] md:text-mint-5/30"
				logomark={true}
			/>
		</section>
	)
}

export default HeroBanner
