import { IndividualInsightPage } from "@pages/individual-insight/ui"
import { articles } from "@pages/individual-insight/article-content/articles"
import type { Metadata, NextPage } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"

interface PageProps {
	params: Promise<{ locale: string; slug: string }>
}

export async function generateStaticParams() {
	return articles.map((article) => ({
		slug: article.slug,
	}))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { locale, slug } = await params
	const article = articles.find((a) => a.slug === slug)
	if (!article) return {}

	const t = await getTranslations({ locale, namespace: "Insights" })
	const tryGet = (key: string, fallback: string): string => {
		try {
			return t(key)
		} catch {
			return fallback
		}
	}
	const title = tryGet(`articles.${slug}.title`, article.title)
	const excerpt = tryGet(`articles.${slug}.excerpt`, article.excerpt)

	return {
		title: { absolute: `${title} — OptiBuzz | OptiHR` },
		description: excerpt,
		openGraph: {
			title: `${title} — OptiBuzz | OptiHR`,
			description: excerpt,
			type: "article",
		},
	}
}

const Page: NextPage<PageProps> = async ({ params }) => {
	const { locale, slug } = await params
	setRequestLocale(locale)
	const article = articles.find((a) => a.slug === slug)
	if (!article) notFound()
	return <IndividualInsightPage slug={slug} />
}

export default Page
