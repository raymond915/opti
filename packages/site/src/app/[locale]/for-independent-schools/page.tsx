import ForIndependentSchoolsPage from "@pages/for-independent-schools/ui"
import type { Metadata } from "next"
import type { NextPage } from "next"

export const metadata: Metadata = {
	title: "HR & Labour Compliance for Independent Schools | OptiHR South Africa",
	description:
		"OptiHR provides specialist HR, governance, and labour compliance support for independent schools in South Africa. SACE compliance, union engagement, staff contracts, and dispute resolution.",
	openGraph: {
		title: "HR & Labour Compliance for Independent Schools | OptiHR",
		description:
			"Unlike public schools, independent schools carry the full HR burden themselves. OptiHR's founder is an admitted attorney, qualified HR practitioner, and former educator — uniquely equipped to help.",
	},
}

const Page: NextPage = () => {
	return <ForIndependentSchoolsPage />
}

export default Page
