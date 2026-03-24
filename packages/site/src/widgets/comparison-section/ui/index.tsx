import { Button } from "@shared/components/button"
import { ContainedLayout } from "@shared/components/layout/contained-layout"
import Logo from "@shared/components/logo"
import { SectionSubtitle } from "@shared/components/section-subtitle"
import { H2, H3 } from "@shared/components/typography"
import { CircleCheck, X } from "lucide-react"
import content from "../model/content.json"
import type { ComparisonSectionProps } from "../model/schema"

export const ComparisonSection = ({ ...props }: ComparisonSectionProps) => {
	return (
		<ContainedLayout
			className="col-span-full grid-cols-1 items-center"
			{...props}
		>
			<div className="flex flex-col items-center gap-inner-padding">
				<SectionSubtitle title={"Why choose Opti"} />
				<H2 className="w-fit text-center">
					Why clients choose OptiHR <br />
					over other service providers
				</H2>
				<div className="grid w-full max-w-6xl grid-cols-2 gap-inner-padding *:flex *:flex-col *:gap-fluid-5 *:rounded-outer *:p-section-gap">
					<div className="bg-mint-6">
						<Logo className="h-fluid-5 w-fit" />
						<ul className="flex flex-col gap-fluid-4">
							{content.opti.map((item) => {
								return (
									<li
										className="flex items-center gap-fluid-2 text-white"
										key={item}
									>
										<div className="grid aspect-square size-9 place-items-center rounded-full bg-mint-3">
											<CircleCheck
												absoluteStrokeWidth={true}
												className="size-5 text-mint-7"
											/>
										</div>
										{item}
									</li>
								)
							})}
						</ul>
						<Button
							href={"/contact"}
							size="lg"
						>
							Reach out and get started
						</Button>
					</div>
					<div className="h-fit bg-muted-1">
						<H3 className="h-fluid-5 items-center">Other service providers</H3>
						<ul className="flex flex-col gap-fluid-4">
							{content.competitors.map((item) => {
								return (
									<li
										className="flex h-9 items-center gap-fluid-3 text-green-6/90"
										key={item}
									>
										<X className="" />
										{item}
									</li>
								)
							})}
						</ul>
					</div>
				</div>
			</div>
		</ContainedLayout>
	)
}
