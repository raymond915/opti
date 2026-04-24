import { PricingPage } from "@pages/pricing/ui"
import type { Metadata, NextPage } from "next"

export const metadata: Metadata = {
	title: "Pricing — Transparent HR & Labour Law Support",
	description:
		"Transparent OptiHR pricing — ad hoc, prepaid hour packages, and monthly retainers from R7,500/month. Specialist HR and labour law support for South African businesses.",
	openGraph: {
		title: "OptiHR Pricing — Transparent HR & Labour Law Support",
		description:
			"Flexible OptiHR pricing for South African businesses — from ad hoc projects to fixed monthly retainers, with no surprises.",
	},
}

const Page: NextPage = () => {
	return <PricingPage />
}

export default Page
