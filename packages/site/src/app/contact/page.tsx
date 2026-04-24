import { ContactPage } from "@pages/contact/ui"
import type { Metadata, NextPage } from "next"

export const metadata: Metadata = {
	title: "Contact OptiHR — Free HR & Compliance Consultations",
	description:
		"Get in touch with OptiHR for HR, labour law, and compliance support. Free consultations available for South African businesses and independent schools.",
	openGraph: {
		title: "Contact OptiHR — Free HR & Compliance Consultations",
		description:
			"Reach out for urgent HR support or to book a free compliance consultation. We work with businesses and independent schools across South Africa.",
	},
}

const Page: NextPage = () => {
	return <ContactPage />
}

export default Page
