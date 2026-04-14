import { AudienceDirectorPanel } from "@shared/components/audience-director-panel"
import { Badge } from "@shared/components/badge"
import { Button } from "@shared/components/button"
import Logo from "@shared/components/logo"
import { H1, P } from "@shared/components/typography"
import { Bug } from "lucide-react"
import type { NextPage } from "next"
export const NotFoundPage: NextPage = () => {
	// TODO: Copy
	return (
		<section className="contained-height nav-padding relative col-span-full grid w-full grid-cols-subgrid gap-gutter overflow-clip rounded-outer bg-mint-6">
			<div className="col-span-6 row-span-full flex flex-col justify-center gap-fluid-4 px-inner-padding pl-section-gap">
				<div className="flex flex-col gap-fluid-3">
					<Badge
						icon={<Bug />}
						label="404"
					/>
					<H1 className="text-white">Page Not Found</H1>
					<P className="text-mint-1">Sorry, the page you're looking for doesn't exist or may have been moved. Let's get you back on track.</P>
				</div>
				<div className="flex items-center gap-fluid-3">
					<Button
						background="white"
						href="/services"
						size="lg"
					>
						Explore our services
					</Button>
					<P className="w-fit text-mint-1">or</P>
					<Button href="/contact">Reach out</Button>
				</div>
			</div>
			<AudienceDirectorPanel
				className="absolute right-inner-padding bottom-inner-padding z-20 h-2/5 w-1/4"
				heading="Our audiences"
			/>
			<Logo
				className="absolute top-[10vh] right-[5vw] w-[55vw] select-none opacity-[0.02]"
				logomark={true}
			/>
		</section>
	)
}

export default NotFoundPage
