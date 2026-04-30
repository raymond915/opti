import { HomePage } from "@pages/home/ui"
import type { Metadata, NextPage } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>
}): Promise<Metadata> {
	const { locale } = await params
	const t = await getTranslations({ locale, namespace: "Home" })

	return {
		title: t("metaTitle"),
		description: t("metaDescription"),
		openGraph: {
			title: t("ogTitle"),
			description: t("ogDescription"),
		},
	}
}

const Page: NextPage<{ params: Promise<{ locale: string }> }> = async ({
	params,
}) => {
	const { locale } = await params
	setRequestLocale(locale)
	return <HomePage />
}

export default Page
