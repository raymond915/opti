import { ActionButton } from "@shared/components/button"
import { H4, P } from "@shared/components/typography"
import { cn } from "@shared/lib/utils"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"
import type { BlogPostThumbnailProps } from "../model/schema"
import { ArticlePlaceholder } from "./article-placeholder"

export const BlogPostThumbnail = ({
	title,
	excerpt,
	slug,
	featureImage,
	className,
}: BlogPostThumbnailProps) => {
	const t = useTranslations("Insights.meta")
	const hasImage = Boolean(featureImage)

	return (
		<Link
			className={cn("group relative flex flex-col gap-fluid-3", className)}
			href={`/insights/${slug}`}
		>
			<div className="relative z-10 aspect-3/2 w-full overflow-clip rounded-inner">
				{hasImage ? (
					<Image
						alt={title}
						className="object-cover"
						fill={true}
						sizes="(max-width: 768px) 100vw, 50vw"
						src={featureImage as string}
					/>
				) : (
					<ArticlePlaceholder />
				)}
			</div>
			<div className="z-10 flex flex-col gap-fluid-1 p-inner-padding">
				<H4 className="line-clamp-2 text-pretty text-fluid-1 leading-tight">{title}</H4>
				{excerpt && <P className="line-clamp-2 text-mint-6/70 leading-normal!">{excerpt}</P>}
				{/*TODO: Make this decorative, the card itself is the button ↓*/}
				<ActionButton
					background="white"
					className="mt-2 *:px-0"
					size="sm"
					type="button"
				>
					{t("readMore")}
				</ActionButton>
			</div>
			<div className="absolute -inset-4 rounded-outer bg-muted-2/50 opacity-0 transition-opacity group-hover:opacity-100" />
		</Link>
	)
}
