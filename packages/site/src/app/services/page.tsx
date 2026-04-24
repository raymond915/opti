import { ServicesPage } from "@pages/service-archive/ui"
import type { Metadata, NextPage } from "next"

export const metadata: Metadata = {
	title: "Our Services — HR, Labour Law & AI Consulting",
	description:
		"OptiHR's full range of services — labour audits, HR policy development, CCMA representation, retrenchments, employment equity, training, wellness, and AI consulting through OptiAI.",
	openGraph: {
		title: "OptiHR Services — HR, Labour Law & AI Consulting",
		description:
			"From compliance and dispute resolution to training, wellness, and OptiAI — OptiHR covers every dimension of modern HR for South African businesses and independent schools.",
	},
}

const Page: NextPage = () => {
	return <ServicesPage />
}

export default Page
