import {
	type ExtendedServiceContent,
	ServicePage,
	serviceMap,
} from "@pages/individual-service/ui"
import type { Metadata } from "next"

interface PageProps {
	params: Promise<{ service: string }>
}

export async function generateStaticParams() {
	return Object.keys(serviceMap).map((service) => ({ service }))
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { service } = await params
	const data = serviceMap[service] as ExtendedServiceContent | undefined
	if (!data) return {}
	const description = data.description.length > 160
		? `${data.description.slice(0, 157).trimEnd()}…`
		: data.description
	return {
		title: { absolute: `${data.title} — OptiHR Services | OptiHR` },
		description,
		openGraph: {
			title: `${data.title} — OptiHR Services`,
			description,
		},
	}
}

export default async function ServiceDetailPage({ params }: PageProps) {
	const { service } = await params
	return <ServicePage slug={service} />
}
