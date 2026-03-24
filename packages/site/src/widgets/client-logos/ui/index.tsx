import { ContainedLayout } from "@shared/components/layout"
import { H2 } from "@shared/components/typography"
import Marquee from "react-fast-marquee"
import * as ClientLogo from "../logos"

export const ClientLogos = () => {
	return (
		<ContainedLayout className="gap-section-gap">
			<H2 className="col-span-full justify-center text-center">What our clients say</H2>
			<Marquee
				className="col-span-full **:w-full"
				gradient={true}
				gradientColor="#efece7"
				speed={50}
			>
				<div className="flex justify-evenly *:h-20 *:items-center *:justify-center *:opacity-50">
					<ClientLogo.DmMineralsGroup />
					<ClientLogo.OnsTuis />
					<ClientLogo.PicknPay />
					<ClientLogo.TrailLink />
				</div>
			</Marquee>
		</ContainedLayout>
	)
}
