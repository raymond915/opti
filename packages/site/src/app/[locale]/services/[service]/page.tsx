import {
	type ExtendedServiceContent,
	ServicePage,
	serviceMap,
} from "@pages/individual-service/ui"
import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { getAlternates } from "@/i18n/alternates"

interface PageProps {
	params: Promise<{ locale: string; service: string }>
}

export async function generateStaticParams() {
	return Object.keys(serviceMap).map((service) => ({ service }))
}

const slugToCamel = (slug: string) =>
	slug.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase())

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const { locale, service } = await params
	const data = serviceMap[service] as ExtendedServiceContent | undefined
	if (!data) return {}

	const t = await getTranslations({ locale, namespace: "Services" })
	const detailKey = slugToCamel(service)
	const title = t(`details.${detailKey}.title`)
	const rawDescription = t(`details.${detailKey}.description`)
	const description = rawDescription.length > 160
		? `${rawDescription.slice(0, 157).trimEnd()}…`
		: rawDescription
	return {
		title: { absolute: `${title} — OptiHR Services | OptiHR` },
		description,
		alternates: getAlternates(`/services/${service}`, locale),
		openGraph: {
			title: `${title} — OptiHR Services`,
			description,
		},
	}
}

export default async function ServiceDetailPage({ params }: PageProps) {
	const { locale, service } = await params
	setRequestLocale(locale)
	return <ServicePage slug={service} />
}
