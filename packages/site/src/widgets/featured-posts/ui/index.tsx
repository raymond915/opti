"use client"
import type { FeaturedPostType } from "@entities/insight"
import { FeaturedPost } from "@entities/insight/ui/featured-post"
import { Button } from "@shared/components/button"
import { ContainedLayout } from "@shared/components/layout/contained-layout"
import { SectionSubtitle } from "@shared/components/section-subtitle"
import { H2 } from "@shared/components/typography"
import { useTranslations } from "next-intl"
import type { FeaturedPostsProps } from "../model/schema"

export const FeaturedPosts = ({ posts }: FeaturedPostsProps) => {
	const t = useTranslations("Widgets.featuredPosts")
	return (
		<ContainedLayout className="grid-cols-subgrid gap-y-pair-6 p-0">
			<div className="col-span-full flex h-fit items-end justify-between gap-8">
				<div className="flex flex-col gap-fluid-2 md:max-w-1/2">
					<SectionSubtitle title={t("subtitle")} />
					<H2>{t("heading")}</H2>
				</div>
				<div className="hidden md:flex flex-col items-end gap-fluid-2 flex-shrink-0">
					<Button href="/insights">{t("browseButton")}</Button>
				</div>
				<Button className="md:hidden" href="/insights">{t("browseButton")}</Button>
			</div>
			<ul className="col-span-full row-start-2 flex gap-inner-padding">
				{posts.map((post: FeaturedPostType) => (
					<li
						className="flex w-full"
						key={post._id}
					>
						<FeaturedPost
							_id={post._id}
							title={post.title}
							featureImage={post.featureImage}
							excerpt={post.excerpt}
							slug={post.slug}
							category={post.category}
						/>
					</li>
				))}
			</ul>
		</ContainedLayout>
	)
}
