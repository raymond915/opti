import { BlogPostThumbnail } from "@entities/insight/ui"
import { ContainedLayout } from "@shared/components/layout"
import { PageBanner } from "@shared/components/page-banner"
import { SectionSubtitle } from "@shared/components/section-subtitle"
import { H2, H4, P } from "@shared/components/typography"
import { articles, categories } from "@pages/individual-insight/article-content/articles"
import type { NextPage } from "next"
import { useTranslations } from "next-intl"
import Link from "next/link"

interface InsightArchivePageProps {
	selectedCategory?: string
}

export const InsightArchivePage: NextPage<InsightArchivePageProps> = ({ selectedCategory = "all" }) => {
	const t = useTranslations("Insights")
	const aboutCards = t.raw("about.cards") as { label: string; detail: string }[]
	const filteredArticles = selectedCategory === "all"
		? articles
		: articles.filter((a) => a.categorySlug === selectedCategory)

	const localizedTitle = (slug: string, fallback: string): string => {
		try {
			return t(`articles.${slug}.title`)
		} catch {
			return fallback
		}
	}
	const localizedExcerpt = (slug: string, fallback: string): string => {
		try {
			return t(`articles.${slug}.excerpt`)
		} catch {
			return fallback
		}
	}
	const localizedCategory = (slug: string, fallback: string): string => {
		try {
			return t(`categories.${slug}`)
		} catch {
			return fallback
		}
	}

	return (
		<>
			<PageBanner
				anchorId="archive"
				anchorText={t("banner.anchorText")}
				body={t("banner.body")}
				title={t("banner.title")}
			/>

			{/* What OptiBuzz is */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-muted-1">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark title={t("about.subtitle")} />
					<H2 className="text-mint-6">{t("about.h2")}</H2>
					<P className="text-mint-5/80 max-w-2xl">{t("about.body")}</P>
				</div>
				<div className="col-span-full grid grid-cols-1 gap-inner-padding sm:grid-cols-3">
					{aboutCards.map((item) => (
						<div key={item.label} className="flex flex-col gap-2 rounded-inner bg-white p-inner-padding border border-mint-2/20">
							<H4 className="text-mint-6">{item.label}</H4>
							<P className="text-mint-5/80 text-sm">{item.detail}</P>
						</div>
					))}
				</div>
			</ContainedLayout>

			{/* Article grid */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-white" id="archive">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark title={t("archive.subtitle")} />
					<H2 className="text-mint-6">{t("archive.h2")}</H2>
				</div>

				{/* Category filter links */}
				<div className="col-span-full flex flex-wrap gap-2">
					{categories.map((cat) => {
						const isActive = cat.slug.current === selectedCategory
						const label = localizedCategory(cat.slug.current, cat.title)
						return (
							<Link
								key={cat.slug.current}
								href={cat.slug.current === "all" ? "/insights" : `/insights?category=${cat.slug.current}`}
								className={
									isActive
										? "rounded-full border border-mint-6 bg-mint-6 px-4 py-1.5 text-xs font-medium text-white transition-colors"
										: "rounded-full border border-mint-2/30 bg-muted-1 px-4 py-1.5 text-xs font-medium text-mint-5 transition-colors hover:bg-mint-6 hover:text-white hover:border-mint-6"
								}
							>
								{label}
							</Link>
						)
					})}
				</div>

				{/* Articles grid */}
				{filteredArticles.length > 0 ? (
					<div className="col-span-full grid grid-cols-1 gap-inner-padding sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{filteredArticles.map((article) => (
							<BlogPostThumbnail
								key={article.slug}
								slug={article.slug}
								title={localizedTitle(article.slug, article.title)}
								excerpt={localizedExcerpt(article.slug, article.excerpt)}
								featureImage={article.featureImage}
								className="col-span-1"
							/>
						))}
					</div>
				) : (
					<div className="col-span-full py-fluid-4 text-center">
						<P className="text-mint-5/60">{t("archive.emptyState")}</P>
					</div>
				)}
			</ContainedLayout>
		</>
	)
}

export default InsightArchivePage
