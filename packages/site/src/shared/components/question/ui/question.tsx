"use client"
import { H3, P } from "@shared/components/typography"
import { Minus } from "lucide-react"
import { AnimatePresence, easeInOut, motion, type Transition, type Variants } from "motion/react"
import { useState } from "react"
import type { QuestionProps } from "../model/schema"

const MotionMinus = motion.create(Minus)

const animationTiming: Transition = {
	duration: 0.6,
	ease: easeInOut,
}
const animationVariants: Record<string, Variants> = {
	plus: {
		open: {
			rotate: 0,
			transition: {
				...animationTiming,
				duration: 0.7,
			},
		},
		closed: {
			rotate: 270,
			transition: animationTiming,
		},
	},
	minus: {
		open: {
			rotate: 0,
			transition: animationTiming,
		},
		closed: {
			rotate: 180,
			transition: animationTiming,
		},
	},
	answer: {
		open: {
			opacity: 1,
			height: "auto",
			transition: animationTiming,
		},
		closed: {
			opacity: 0,
			height: 0,
			transition: animationTiming,
		},
	},
}

export const Question = ({
	question,
	answer,
	isOpen: externalIsOpen,
	onToggle: externalOnToggle,
	...props
}: QuestionProps) => {
	const [localIsOpen, setLocalIsOpen] = useState(false)
	const currentIsOpen = externalIsOpen ?? localIsOpen
	const handleToggle = externalOnToggle ?? (() => setLocalIsOpen((p) => !p))
	return (
		<motion.div
			{...props}
			className="flex flex-col overflow-clip rounded-inner bg-beige-2/70 p-inner-padding"
		>
			<div className="flex items-center justify-between">
				<H3 className="w-full max-w-2/3 text-fluid-1 leading-loose">{question}</H3>
				<button
					className="relative flex size-12 items-center justify-center rounded-full transition-all hover:bg-mint-6/10"
					onClick={handleToggle}
					onKeyDown={(e) => {
						if (e.key === "Enter") handleToggle()
					}}
					type="button"
				>
					<MotionMinus
						animate={currentIsOpen ? "open" : "closed"}
						className="-translate-1/2 absolute top-1/2 left-1/2 origin-center"
						initial="closed"
						variants={animationVariants.plus}
					/>
					<MotionMinus
						animate={currentIsOpen ? "open" : "closed"}
						className="-translate-1/2 absolute top-1/2 left-1/2 origin-center"
						initial="closed"
						variants={animationVariants.minus}
					/>
				</button>
			</div>
			<AnimatePresence mode={"wait"}>
				{currentIsOpen && (
					<motion.div
						animate={currentIsOpen ? "open" : "closed"}
						className="overflow-clip"
						exit={"closed"}
						initial={"closed"}
						key={answer}
						variants={animationVariants.answer}
					>
						<P className="mt-inner-padding leading-loose">{answer}</P>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	)
}
