import { IndividualInsightPage } from "@pages/individual-insight/ui"
import { articles } from "@pages/individual-insight/article-content/articles"
import type { NextPage } from "next"
import { notFound } from "next/navigation"

interface PageProps {
	params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
	return articles.map((article) => ({
		slug: article.slug,
	}))
}

export async function generateMetadata({ params }: PageProps) {
	const { slug } = await params
	const article = articles.find((a) => a.slug === slug)
	if (!article) return {}
	return {
		title: { absolute: `${article.title} — OptiBuzz | OptiHR` },
		description: article.excerpt,
		openGraph: {
			title: `${article.title} — OptiBuzz | OptiHR`,
			description: article.excerpt,
			type: "article",
		},
	}
}

const Page: NextPage<PageProps> = async ({ params }) => {
	const { slug } = await params
	const article = articles.find((a) => a.slug === slug)
	if (!article) notFound()
	return <IndividualInsightPage slug={slug} />
}

export default Page
