import { AboutPage } from "@pages/about/ui"
import type { Metadata, NextPage } from "next"

export const metadata: Metadata = {
	title: "About OptiHR — Specialist HR & Labour Law for South Africa",
	description:
		"Meet OptiHR — founded by Raymond Hauptfleisch, an admitted attorney, qualified HR practitioner, and former educator. Specialist HR and labour law support for South African businesses and independent schools.",
	openGraph: {
		title: "About OptiHR — Specialist HR & Labour Law for South Africa",
		description:
			"Founded by Raymond Hauptfleisch — admitted attorney, qualified HR practitioner, and former educator. Specialist HR and labour law support for South African businesses and independent schools.",
	},
}

const Page: NextPage = () => {
	return <AboutPage />
}
export default Page
