"use client"
import { Field } from "@base-ui/react"
import { AnimatePresence, motion } from "motion/react"
import type { FormFieldProps } from "../model/schema"

export const FormField = ({ field, label, children, isOptional, ...props }: FormFieldProps) => {
	const { isValid, errors } = field.state.meta
	return (
		<Field.Root
			{...props}
			className={"relative flex flex-col"}
			name={field.name}
		>
			<Field.Label
				className={
					"mb-fluid-1 flex w-full items-center justify-between font-medium text-fluid-n1 text-mint-7"
				}
			>
				<span className="flex w-full">
					<span className="w-fit">{label}</span>
					{!isOptional && <span className="ml-1 text-mint-4">*</span>}
				</span>
				{isOptional && <span className="w-full text-right opacity-50">(Optional)</span>}
			</Field.Label>
			{children({
				isInvalid: !isValid,
				field,
			})}
			<AnimatePresence>
				{!isValid && (
					<motion.div
						animate={{
							opacity: 1,
							height: "auto",
						}}
						exit={{
							opacity: 0,
							height: 0,
						}}
						initial={{
							opacity: 0,
							height: 0,
						}}
						key={field.name}
						transition={{
							duration: 0.3,
						}}
					>
						<Field.Error
							className={"font-medium text-[#BB300F] text-fluid-n1"}
							match={true}
						>
							<div className="py-1">{errors[0]}</div>
						</Field.Error>
					</motion.div>
				)}
			</AnimatePresence>
		</Field.Root>
	)
}
