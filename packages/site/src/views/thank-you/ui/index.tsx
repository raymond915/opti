import { FeaturedPost } from "@entities/insight"
import { Badge } from "@shared/components/badge"
import { Button } from "@shared/components/button"
import Logo from "@shared/components/logo"
import { H1, P } from "@shared/components/typography"
import { Heart } from "lucide-react"
import type { NextPage } from "next"

export const ThankYouPage: NextPage = () => {
	const content = {
		title: "Thank You!",
		subtitle: "More coming soon",
		cta: {
			text: "Services",
		},
	}

	return (
		// TODO: Copy
		<section className="contained-height nav-padding relative col-span-full grid w-full grid-cols-1 gap-gutter overflow-clip rounded-outer bg-mint-6 md:grid-cols-subgrid">
			<div className="col-span-full row-span-full flex flex-col justify-center gap-fluid-4 px-inner-padding md:col-span-6 md:pl-section-gap">
				<div className="flex flex-col gap-fluid-3">
					<Badge
						icon={<Heart />}
						label={"Thank You"}
					/>
					<H1 className="text-white">{content.title}</H1>
					<P className="text-mint-1">
						Your message has been received. A member of the OptiHR team will be in touch with you shortly. In the meantime, explore our insights or browse our full range of services.
					</P>
				</div>
				<div className="flex flex-wrap items-center gap-fluid-3">
					<Button
						href="/insights"
						size="lg"
					>
						Discover industry insights
					</Button>
					<P className="w-fit text-mint-1">{content.subtitle}</P>
					<Button href="/services">{content.cta.text}</Button>
				</div>
			</div>
			<FeaturedPost
				_id="thank-you-featured"
				className="hidden md:absolute md:right-inner-padding md:bottom-inner-padding md:block md:h-2/5 md:w-1/4"
				excerpt="Explore OptiHR services while you wait."
				title={content.title}
			/>
			<Logo
				className="pointer-events-none absolute top-[10vh] right-[5vw] hidden w-[55vw] select-none opacity-5 md:block"
				logomark={true}
			/>
		</section>
	)
}

export default ThankYouPage
