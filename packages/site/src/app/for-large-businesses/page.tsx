import ForLargeBusinessesPage from "@pages/for-large-businesses/ui"
import type { Metadata } from "next"
import type { NextPage } from "next"

export const metadata: Metadata = {
	title: "Specialist HR & IR Support for Large Businesses | OptiHR South Africa",
	description:
		"OptiHR partners with large business HR departments as a trusted extension of your team — handling unions, bargaining councils, compliance, and CCMA disputes so your team can focus on strategy.",
	openGraph: {
		title: "Specialist HR & IR Support for Large Businesses | OptiHR",
		description:
			"Even strong HR teams can't cover everything. OptiHR adds specialist depth where it's needed most — from compliance and case law to union negotiations and CCMA representation.",
	},
}

const Page: NextPage = () => {
	return <ForLargeBusinessesPage />
}

export default Page
