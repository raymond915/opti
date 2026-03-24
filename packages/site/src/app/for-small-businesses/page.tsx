import { ForSmallBusinessesPage } from "@pages/for-small-businesses/ui"
import type { Metadata } from "next"
import type { NextPage } from "next"

export const metadata: Metadata = {
	title: "HR & Compliance Support for Small Businesses | OptiHR South Africa",
	description:
		"OptiHR gives small businesses in South Africa professional HR and IR support without the cost of a full-time hire. Labour audits, disciplinary handling, CCMA representation, and more.",
	openGraph: {
		title: "HR & Compliance Support for Small Businesses | OptiHR",
		description:
			"Running a small business is demanding — HR shouldn't be another burden. OptiHR provides expert, practical HR support only when you need it, at a fraction of the cost.",
	},
}

const Page: NextPage = () => {
	return (
		<ForSmallBusinessesPage
			content={{
				pageBanner: {
					title: "",
					subtitle: "",
				},
				introSection: {
					title: "",
					body: "",
				},
				highlightBlocks: [],
				faqSection: {
					title: "",
					faqs: [],
				},
			}}
		/>
	)
}

export default Page
