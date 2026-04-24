import { AiInTheWorkplacePage } from "@pages/ai-in-the-workplace/ui"
import type { Metadata } from "next"
import type { NextPage } from "next"

export const metadata: Metadata = {
	title: "AI in the Workplace — Strategy, Governance & People Support | OptiHR South Africa",
	description:
		"OptiHR helps South African businesses and schools adopt AI with confidence. AI readiness assessments, HR policy and governance frameworks, POPIA compliance, workforce reskilling, and change management.",
	openGraph: {
		title: "AI in the Workplace | OptiHR South Africa",
		description:
			"Introducing AI into your organisation is as much a people challenge as a technology one. OptiHR gives you the strategy, legal frameworks, and change management expertise to get it right.",
	},
}

const Page: NextPage = () => {
	return <AiInTheWorkplacePage />
}

export default Page
