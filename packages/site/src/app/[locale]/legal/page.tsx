import { LegalPage } from "@pages/legal/ui"
import type { Metadata, NextPage } from "next"

export const metadata: Metadata = {
	title: "Legal Information & Terms",
	description: "OptiHR legal information, terms of use, and disclosures.",
}

const Page: NextPage = () => {
	return <LegalPage />
}

export default Page
