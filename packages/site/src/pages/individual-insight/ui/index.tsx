import { ContainedLayout } from "@shared/components/layout"
import { H2, H3, H4, P } from "@shared/components/typography"
import { SectionSubtitle } from "@shared/components/section-subtitle"
import {
	HighlightBlock,
	HighlightBlockBody,
	HighlightBlockButton,
	HighlightBlockTitle,
} from "@shared/components/layout/highlight-block"
import { ClientLogos } from "@widgets/client-logos"
import { articles } from "../article-content/articles"
import Link from "next/link"
import type { NextPage } from "next"

interface IndividualInsightPageProps {
	slug: string
}

export const IndividualInsightPage: NextPage<IndividualInsightPageProps> = ({ slug }) => {
	const article = articles.find((a) => a.slug === slug)

	if (!article) {
		return (
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-white">
				<div className="col-span-full flex flex-col gap-fluid-2 py-fluid-4 items-center text-center">
					<H2 className="text-mint-6">Article not found</H2>
					<P className="text-mint-5/80">This article may have moved or been removed.</P>
					<Link
						href="/insights"
						className="mt-4 inline-block rounded-inner bg-mint-6 px-6 py-3 text-sm font-medium text-white hover:bg-mint-5 transition-colors"
					>
						Back to OptiBuzz
					</Link>
				</div>
			</ContainedLayout>
		)
	}

	return (
		<>
			{/* Article header */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-3 bg-muted-1">
				<div className="col-span-full flex flex-col gap-fluid-1 max-w-3xl">
					{/* Breadcrumb */}
					<div className="flex items-center gap-2 text-xs text-mint-4/70">
						<Link href="/insights" className="hover:text-mint-6 transition-colors">OptiBuzz</Link>
						<span>›</span>
						<span className="text-mint-4">{article.category}</span>
					</div>

					{/* Category + meta */}
					<div className="flex flex-wrap items-center gap-3">
						<span className="rounded-full bg-mint-4/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-mint-4">
							{article.category}
						</span>
						<P className="text-mint-5/60 text-xs">{article.date}</P>
						<P className="text-mint-5/60 text-xs">·</P>
						<P className="text-mint-5/60 text-xs">{article.readTime}</P>
					</div>

					<H2 className="text-mint-6 text-pretty">{article.title}</H2>
					<P className="text-mint-5/70 text-lg leading-relaxed">{article.excerpt}</P>

					{/* Author */}
					<div className="flex items-center gap-3 pt-2">
						<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mint-6 text-white text-xs font-bold">
							RH
						</div>
						<div>
							<P className="text-sm font-medium text-mint-6">{article.author}</P>
							<P className="text-xs text-mint-4/70">Admitted Attorney · Qualified HR Practitioner</P>
						</div>
					</div>
				</div>
			</ContainedLayout>

			{/* Article body */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-white">
				<div className="col-span-full max-w-3xl flex flex-col gap-fluid-3">

					{/* Intro */}
					<P className="text-mint-5/90 leading-relaxed text-base border-l-2 border-mint-4 pl-4">
						{article.intro}
					</P>

					{/* Sections */}
					{article.sections.map((section, i) => (
						<div key={i} className="flex flex-col gap-3">
							<H3 className="text-mint-6">{section.heading}</H3>
							{section.body.map((para, j) => (
								<P key={j} className="text-mint-5/80 leading-relaxed">
									{para}
								</P>
							))}
						</div>
					))}
				</div>

				{/* CTA card inline */}
				<div className="col-span-full max-w-3xl rounded-inner bg-mint-6 p-inner-padding flex flex-col gap-3">
					<H4 className="text-white">{article.cta.heading}</H4>
					<P className="text-white/80 text-sm">{article.cta.body}</P>
					<Link
						href="/contact"
						className="mt-1 inline-block w-fit rounded-inner bg-white px-6 py-3 text-sm font-medium text-mint-6 hover:bg-mint-1 transition-colors"
					>
						Book a free consultation
					</Link>
				</div>
			</ContainedLayout>

			{/* More articles */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-muted-1">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark title="OptiBuzz" />
					<H2 className="text-mint-6">More articles</H2>
				</div>
				<div className="col-span-full grid grid-cols-1 gap-inner-padding sm:grid-cols-2 lg:grid-cols-3">
					{articles
						.filter((a) => a.slug !== article.slug)
						.slice(0, 3)
						.map((related) => (
							<Link
								key={related.slug}
								href={`/insights/${related.slug}`}
								className="group flex flex-col gap-3 rounded-inner bg-white border border-mint-2/20 p-inner-padding hover:border-mint-4/40 transition-colors"
							>
								<span className="rounded-full bg-mint-4/15 px-2 py-0.5 text-xs font-semibold uppercase tracking-widest text-mint-4 w-fit">
									{related.category}
								</span>
								<H4 className="text-mint-6 line-clamp-2 group-hover:text-mint-5 transition-colors">
									{related.title}
								</H4>
								<P className="text-mint-5/70 text-sm line-clamp-2">{related.excerpt}</P>
								<P className="text-xs text-mint-4/70 mt-auto">{related.date} · {related.readTime}</P>
							</Link>
						))}
				</div>
				<div className="col-span-full">
					<Link
						href="/insights"
						className="inline-block rounded-inner border border-mint-4/30 px-6 py-3 text-sm font-medium text-mint-6 hover:bg-mint-6 hover:text-white hover:border-mint-6 transition-colors"
					>
						View all articles
					</Link>
				</div>
			</ContainedLayout>

			<HighlightBlock
				background="green"
				body="OptiHR provides hands-on HR and labour law support to South African businesses and schools. Book a free consultation to discuss your needs."
				buttonHref="/contact"
				buttonText="Book a free consultation"
				media={{ type: "component", mediaNode: <div /> }}
				mediaPosition="right"
				title="Need expert HR support?"
			>
				<HighlightBlockTitle />
				<HighlightBlockBody />
				<HighlightBlockButton />
			</HighlightBlock>

			<ClientLogos />
		</>
	)
}

export default IndividualInsightPage
