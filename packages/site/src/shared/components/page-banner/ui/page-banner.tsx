import { Button } from "@shared/components/button"
import Logo from "@shared/components/logo"
import { H1, P } from "@shared/components/typography"
import type { PageBannerProps } from "../model/schema"

export const PageBanner = ({ ...props }: PageBannerProps) => {
	return (
		<section className="nav-padding relative col-span-full grid grid-cols-subgrid overflow-clip rounded-outer bg-mint-6">
			<div className="col-span-7 flex flex-col gap-fluid-5 p-section-gap">
				<div className="flex flex-col gap-fluid-2 *:text-white">
					<H1>{props.title}</H1>
					<P>{props.body}</P>
				</div>
				<Button href={props.anchorId}>{props.anchorText}</Button>
			</div>
			<div className="absolute top-section-gap right-section-gap">
				<Logo
					className="size-[60vh] opacity-5"
					logomark={true}
				/>
			</div>
		</section>
	)
}
