import { BlogPostThumbnail } from "@entities/insight/ui"
import { ContainedLayout } from "@shared/components/layout"
import { PageBanner } from "@shared/components/page-banner"
import { SectionSubtitle } from "@shared/components/section-subtitle"
import { H2, H4, P } from "@shared/components/typography"
import { articles, categories } from "@pages/individual-insight/article-content/articles"
import type { NextPage } from "next"
import Link from "next/link"

interface InsightArchivePageProps {
	selectedCategory?: string
}

export const InsightArchivePage: NextPage<InsightArchivePageProps> = ({ selectedCategory = "all" }) => {
	const filteredArticles = selectedCategory === "all"
		? articles
		: articles.filter((a) => a.categorySlug === selectedCategory)

	return (
		<>
			<PageBanner
				anchorId="archive"
				anchorText="Read articles"
				body="Practical guidance, plain-language legal insight, and employer-focused analysis on South African labour law, HR compliance, CCMA disputes, and workplace best practices — written by an admitted attorney with hands-on HR experience."
				title="OptiBuzz — HR & Labour Law Insights for South African Businesses"
			/>

			{/* What OptiBuzz is */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-muted-1">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark title="About OptiBuzz" />
					<H2 className="text-mint-6">Real answers to real HR and labour law questions</H2>
					<P className="text-mint-5/80 max-w-2xl">
						OptiHR's blog and insights hub covers the issues South African employers actually face — from CCMA notices and disciplinary hearings to POPIA compliance and retrenchment processes. Every article is written by Raymond Hauptfleisch, admitted attorney and qualified HR practitioner, to give you accurate, actionable guidance you can rely on.
					</P>
				</div>
				<div className="col-span-full grid grid-cols-1 gap-inner-padding sm:grid-cols-3">
					{[
						{ label: "Labour Law", detail: "LRA, BCEA, and EEA explained in plain language for employers." },
						{ label: "CCMA Guidance", detail: "What to expect, how to prepare, and how to protect your business." },
						{ label: "HR Best Practice", detail: "Practical frameworks for discipline, performance, and compliance." },
					].map((item) => (
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
					<SectionSubtitle isDark title="All Articles" />
					<H2 className="text-mint-6">Browse by topic</H2>
				</div>

				{/* Category filter links */}
				<div className="col-span-full flex flex-wrap gap-2">
					{categories.map((cat) => {
						const isActive = cat.slug.current === selectedCategory
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
								{cat.title}
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
								title={article.title}
								excerpt={article.excerpt}
								featureImage={article.featureImage}
								className="col-span-1"
							/>
						))}
					</div>
				) : (
					<div className="col-span-full py-fluid-4 text-center">
						<P className="text-mint-5/60">No articles found in this category yet.</P>
					</div>
				)}
			</ContainedLayout>
		</>
	)
}

export default InsightArchivePage
