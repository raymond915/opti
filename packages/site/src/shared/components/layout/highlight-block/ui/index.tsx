"use client"
import { Button } from "@shared/components/button"
import { ContainedLayout } from "@shared/components/layout/contained-layout"
import { SectionSubtitle } from "@shared/components/section-subtitle"
import { H2, P } from "@shared/components/typography"
import { cn } from "@shared/lib/utils"
import { cva } from "class-variance-authority"
import Image from "next/image"
import { createContext, useContext } from "react"
import type { HighlightBlockProps } from "../model/schema"

const HighlightBlockContext = createContext<HighlightBlockProps | undefined>(undefined)

const useHighlightBlockContext = () => {
	const context = useContext(HighlightBlockContext)
	if (!context) {
		throw new Error("useHighlightBlockContext must be used within a HighlightBlock")
	}
	return context
}

const highlightBlockVariants = cva([], {
	variants: {
		background: {
			green: [
				"bg-mint-6",
			],
			white: [
				"bg-white",
			],
			muted: [
				"bg-muted-2",
			],
		},
		mediaPosition: {
			left: [
				"order-first",
			],
			right: [
				"order-last",
			],
		},
	},
	defaultVariants: {
		background: "green",
	},
})

const highlightBlockTextVariants = cva([], {
	variants: {
		background: {
			green: [
				"text-white",
			],
			white: [
				"text-mint-6",
			],
			muted: [
				"text-mint-6",
			],
		},
	},
	defaultVariants: {
		background: "green",
	},
})

export const HighlightBlock = ({ ...props }: HighlightBlockProps) => {
	const MediaNode = () => {
		switch (props.media.type) {
			case "component": {
				const MediaNode = props.media.mediaNode
				return MediaNode
			}
			case "image": {
				const imgSrc = typeof props.media.imageProps.src === "string" ? props.media.imageProps.src : ""
				const isSvg = imgSrc.endsWith(".svg")
				const MediaNode = (
					<div
						className={cn("relative flex h-full w-full bg-mint-1", props.media.containerClassnames)}
					>
						{isSvg ? (
							// eslint-disable-next-line @next/next/no-img-element
							<img
								src={imgSrc}
								alt={props.media.imageProps.alt}
								className={cn("absolute inset-0 h-full w-full object-cover", props.media.imageProps.className)}
							/>
						) : (
							<Image
								{...props.media.imageProps}
								alt={props.media.imageProps.alt}
								className={cn("absolute inset-2", props.media.imageProps.className)}
								fill={true}
							/>
						)}
					</div>
				)
				return MediaNode
			}
		}
	}
	return (
		//Container styling
		<HighlightBlockContext.Provider value={props}>
			<ContainedLayout
				className={cn(
					highlightBlockVariants({
						background: props.background,
					}),
					props.className,
				)}
			>
				<div className="col-span-full md:col-span-6 grid md:grid-cols-subgrid items-center gap-inner-padding">
					<div className="col-span-full md:col-span-4 md:col-start-2 flex flex-col gap-fluid-3 py-4 md:py-section-gap">
						{props.children}
					</div>
				</div>
				<div
					className={cn(
						[
							"relative col-span-full md:col-span-6 flex h-full w-full overflow-clip rounded-inner min-h-[250px]",
						],
						highlightBlockVariants({
							mediaPosition: props.mediaPosition,
						}),
					)}
				>
					<MediaNode />
				</div>
			</ContainedLayout>
		</HighlightBlockContext.Provider>
	)
}

HighlightBlock.Subtitle = ({ className }: { className?: string }) => {
	const props = useHighlightBlockContext()
	return (
		<SectionSubtitle
			className={cn(className)}
			isDark={props.background !== "green"}
			title={props.subtitle as string}
		/>
	)
}
HighlightBlock.Title = ({ className }: { className?: string }) => {
	const props = useHighlightBlockContext()
	return (
		<H2
			className={cn(
				highlightBlockTextVariants({
					background: props.background,
				}),
				className,
			)}
		>
			{props.title}
		</H2>
	)
}
HighlightBlock.Body = ({ className }: { className?: string }) => {
	const props = useHighlightBlockContext()
	const styles = cn(props.background === "green" ? "text-white/90" : "text-mint-5/90", className)
	if (typeof props.body === "string") {
		return <P className={styles}>{props.body}</P>
	}
	return props.body?.map((snippet: string) => (
		<P
			className={styles}
			key={snippet}
		>
			{snippet}
		</P>
	))
}
HighlightBlock.Button = ({ className }: { className?: string }) => {
	const props = useHighlightBlockContext()
	return (
		<Button
			className={cn("mt-fluid-3", className)}
			href={props.buttonHref as string}
		>
			{props.buttonText}
		</Button>
	)
}

// Export subcomponents as separate, named exports for reliability
export const HighlightBlockTitle = HighlightBlock.Title
export const HighlightBlockSubtitle = HighlightBlock.Subtitle
export const HighlightBlockBody = HighlightBlock.Body
export const HighlightBlockButton = HighlightBlock.Button
