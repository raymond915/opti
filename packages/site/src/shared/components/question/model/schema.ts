import { type } from "arktype"
import type { HTMLMotionProps } from "motion/react"

export const QuestionSchema = type({
	question: "string",
	answer: "string",
})

export type QuestionType = typeof QuestionSchema.infer

export interface QuestionProps
	extends Omit<HTMLMotionProps<"div">, keyof QuestionType>,
		QuestionType {
	isOpen?: boolean
	onToggle?: () => void
}
