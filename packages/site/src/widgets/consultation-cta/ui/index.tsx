import { Button } from "@shared/components/button"
import { ContainedLayout } from "@shared/components/layout/contained-layout"
import Logo from "@shared/components/logo"
import { SectionSubtitle } from "@shared/components/section-subtitle"
import { H2, P } from "@shared/components/typography"
import type { ConsultationCtaProps } from "../model/schema"

export const ConsultationCta = ({ ...props }: ConsultationCtaProps) => {
	return (
		<ContainedLayout className="bg-mint-6">
			<div className="col-span-6 grid grid-cols-subgrid justify-center place-self-center">
				<div className="col-span-4 col-start-2 flex flex-col gap-fluid-1 py-section-gap *:text-white">
					<SectionSubtitle
						isDark={false}
						title={props.subtitle}
					/>
					<H2 className="text-balance">{props.title}</H2>
					<P>{props.body}</P>
					<Button
						className="mt-pair-4"
						href={"/contact"}
					>
						{props.callToAction}
					</Button>
				</div>
			</div>
			<div className="relative col-span-6 flex items-center justify-center overflow-clip rounded-inner bg-mint-1">
				<div className="absolute inset-0 bg-radial from-mint-2/40 via-mint-1/60 to-mint-1" />
				<Logo
					className="relative z-10 w-2/3 opacity-20"
					logomark={true}
				/>
			</div>
		</ContainedLayout>
	)
}
