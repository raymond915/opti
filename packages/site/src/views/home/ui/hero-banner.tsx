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
		<section className="contained-height nav-padding relative grid w-full grid-cols-1 md:grid-cols-12 gap-inner-padding overflow-clip rounded-outer bg-mint-6 p-inner-padding">
			{/*Main Content*/}
			<div className="col-span-full md:col-span-7 grid md:grid-cols-subgrid items-stretch p-inner-padding">
				<div className="z-10 col-span-full md:col-span-6 flex flex-col justify-center gap-fluid-4">
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
							with practical, preventative support — no full-time hire needed.
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
				{/*Stats*/}
				<div className="col-span-full md:col-span-7 flex h-full items-end gap-4 md:gap-section-gap text-white flex-wrap">
					{stats.map((stat: StatType) => (
						<Stat
							className="col-span-2"
							key={stat.label}
							label={stat.label}
							value={stat.value}
						/>
					))}
				</div>
			</div>
			<div className="col-span-full md:col-span-5 grid md:grid-cols-subgrid justify-end">
				{/*AudienceDirector*/}
				<AudienceDirectorPanel
					className="z-30 col-end-6 place-self-end"
					heading={"How can we help you"}
				/>
			</div>
			<Logo
				className="-bottom-[10vh] absolute right-[5vw] w-[70vw] md:w-[45vw] select-none text-mint-5/30"
				logomark={true}
			/>
		</section>
	)
}

export default HeroBanner
