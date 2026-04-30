import { PopiaPage } from "@pages/popia/ui"
import type { Metadata, NextPage } from "next"

export const metadata: Metadata = {
	title: "POPIA Notice — How OptiHR Handles Your Information",
	description:
		"OptiHR's POPIA notice and approach — how we collect, use, and protect personal information in line with South Africa's Protection of Personal Information Act.",
}

const Page: NextPage = () => {
	return <PopiaPage />
}

export default Page
