"use client"

import { Button } from "@shared/components/button"
import { H2, P } from "@shared/components/typography"
import { usePathname } from "next/navigation"

// Hidden on /contact and /thank-you — visitors already on those pages don't
// need another "go to contact" CTA.
const HIDE_ON_PATHS = ["/contact", "/thank-you"]

export const FooterCta = () => {
	const pathname = usePathname()
	if (HIDE_ON_PATHS.includes(pathname)) return null

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4 sm:gap-x-gutter rounded-inner bg-mint-1/10 p-inner-padding">
			<div className="flex flex-col gap-1 *:text-white">
				<H2 className="font-medium text-fluid-1">Begin Your Journey Today</H2>
				<P className="text-fluid-0">Book a free consultation and find out exactly where your business stands — no commitment, no pressure.</P>
			</div>
			<Button
				background="white"
				className="justify-self-end"
				href="/contact"
				size="lg"
			>
				Book your free consultation
			</Button>
			<div />
		</div>
	)
}
