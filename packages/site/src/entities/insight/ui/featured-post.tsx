import { H3 } from "@shared/components/typography"
import { cn } from "@shared/lib/utils"
import Image from "next/image"
import Link from "next/link"
import type { FeaturedPostProps } from "../model/schema"
import { ArticlePlaceholder } from "./article-placeholder"

export const FeaturedPost = ({ className, slug, category, ...props }: FeaturedPostProps) => {
	const hasImage = Boolean(props.featureImage)

	const inner = (
		<article
			className={cn(
				"relative flex aspect-square w-full flex-col justify-end overflow-clip rounded-outer border transition-transform duration-200 group-hover:scale-[1.01]",
				hasImage ? "border-beige-1 bg-beige-1" : "border-mint-7/40 bg-mint-7",
				className,
			)}
		>
			{hasImage ? (
				<div className="absolute inset-0">
					<div className="absolute inset-0 z-9 bg-radial from-beige-1/0 to-beige-1 opacity-50" />
					<div className="absolute inset-0 z-9 bg-linear-180 from-beige-1/0 to-80% to-beige-1" />
					<Image
						alt={props.title ?? ""}
						className="object-cover"
						fill={true}
						src={props.featureImage}
					/>
				</div>
			) : (
				<ArticlePlaceholder category={category} />
			)}
			<div className="z-10 flex h-full flex-col justify-between font-medium text-xs">
				{category && (
					<div className="p-inner-padding">
						<div className="w-fit rounded-full bg-mint-4 px-3 py-1 text-white uppercase tracking-wide">
							{category}
						</div>
					</div>
				)}
				<H3
					className={cn(
						"line-clamp-3 text-pretty p-inner-padding text-fluid-1 leading-fluid-4",
						!hasImage && "text-white/90",
					)}
				>
					{props.title}
				</H3>
			</div>
		</article>
	)

	if (slug) {
		return (
			<Link href={`/insights/${slug}`} className="group block w-full">
				{inner}
			</Link>
		)
	}

	return inner
}
