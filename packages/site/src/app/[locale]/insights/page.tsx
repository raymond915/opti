import { InsightArchivePage } from "@pages/insight-archive/ui"
import type { Metadata, NextPage } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { getAlternates } from "@/i18n/alternates"

interface PageProps {
	params: Promise<{ locale: string }>
	searchParams: Promise<{ category?: string }>
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>
}): Promise<Metadata> {
	const { locale } = await params
	const t = await getTranslations({ locale, namespace: "Insights" })

	return {
		title: t("metaTitle"),
		description: t("metaDescription"),
		alternates: getAlternates("/insights", locale),
		openGraph: {
			title: t("ogTitle"),
			description: t("ogDescription"),
		},
	}
}

const Page: NextPage<PageProps> = async ({ params, searchParams }) => {
	const { locale } = await params
	setRequestLocale(locale)
	const { category } = await searchParams
	return <InsightArchivePage selectedCategory={category ?? "all"} />
}

export default Page
