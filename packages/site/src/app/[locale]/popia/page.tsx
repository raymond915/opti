import { PopiaPage } from "@pages/popia/ui"
import type { Metadata, NextPage } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { getAlternates } from "@/i18n/alternates"

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>
}): Promise<Metadata> {
	const { locale } = await params
	const t = await getTranslations({ locale, namespace: "Popia" })

	return {
		title: t("metaTitle"),
		description: t("metaDescription"),
		alternates: getAlternates("/popia", locale),
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
	return <PopiaPage />
}

export default Page
