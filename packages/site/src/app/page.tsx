import { HomePage } from "@pages/home/ui"
import type { Metadata, NextPage } from "next"

export const metadata: Metadata = {
	title: "OptiHR — Specialist HR, Labour Law & AI Consulting | South Africa",
	description:
		"OptiHR delivers specialist HR, labour law, and AI consulting for South African businesses and independent schools. CCMA representation, compliance, and practical HR support — without the cost of a full-time hire.",
	openGraph: {
		title: "OptiHR — Specialist HR, Labour Law & AI Consulting",
		description:
			"Specialist HR, labour law, and AI consulting for South African businesses and independent schools — practical, legally sound, and without the cost of a full-time hire.",
	},
}

const Page: NextPage = () => {
	return <HomePage />
}

export default Page
