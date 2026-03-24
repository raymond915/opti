import { ButtonTrim } from "@shared/components/button"
import { Subtitle } from "@shared/components/typography"
import { motion } from "motion/react"
import Link from "next/link"
import { cn } from "../../../lib/utils"
import type { AudienceDirectorProps, AudienceProps } from "../model/schema"
import { audienceItems } from "../model/schema"

const AudienceSelector = ({ label, href }: AudienceProps) => {
	return (
		<Link
			className="group flex w-full items-center justify-between gap-2 rounded-lg p-6 text-mint-1 transition-all hover:bg-mint-1/10"
			href={href}
		>
			<span className="flex text-fluid-n1">{label}</span>
			<ButtonTrim
				chevron={true}
				className="size-8 bg-mint-3 opacity-0 transition-all *:ml-px *:size-5 group-hover:opacity-100"
				size="lg"
			/>
		</Link>
	)
}

const AnimatedSelector = ({ label }: { label: string }) => {
	return (
		// TODO: Update function
		<motion.div
			className="group flex w-full items-center justify-between gap-2 rounded-lg p-6 text-mint-1 transition-all hover:bg-mint-1/10"
			onClick={() => console.log("clicked")}
		>
			<span className="flex text-fluid-n1">{label}</span>
			<div className="relative">
				<ButtonTrim
					chevron={true}
					className="size-8 bg-mint-3 opacity-0 transition-all *:ml-px *:size-5 group-hover:opacity-100"
					size="lg"
				/>
				<motion.svg
					className="-inset-1 -z-10 absolute rounded-full bg-mint-7/50"
					viewBox="0 0 40 40"
				>
					<title>Animated Circle</title>
					<motion.circle
						animate={{
							pathLength: 1,
						}}
						className="size-8 fill-transparent stroke-4 stroke-white"
						cx="20"
						cy="20"
						initial={{
							pathLength: 0,
						}}
						r="20"
						transition={{
							duration: 10,
						}}
					/>
				</motion.svg>
			</div>
		</motion.div>
	)
}

interface AudienceDirectorPanelProps extends AudienceDirectorProps {
	children?: React.ReactNode
}

export const AudienceDirectorPanel = ({
	heading,
	children,
	...props
}: AudienceDirectorPanelProps) => {
	return (
		<div className={cn("flex w-[24rem] flex-col gap-fluid-1", props.className)}>
			{heading && <Subtitle className="text-white">{heading}</Subtitle>}
			<div
				className={cn(
					"flex flex-col gap-1 rounded-2xl bg-mint-5 p-2 outline-1 outline-mint-1/2 backdrop-blur-2xl",
				)}
			>
				{children ||
					audienceItems.map((audience) => {
						return (
							<AudienceSelector
								href={audience.href}
								key={audience.label}
								label={audience.label}
							/>
						)
					})}
			</div>
		</div>
	)
}

AudienceDirectorPanel.Item = AudienceSelector
AudienceDirectorPanel.AnimatedItem = AnimatedSelector
