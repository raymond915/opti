"use client"
import { Field } from "@base-ui/react"
import { AnimatePresence, motion } from "motion/react"
import { useTranslations } from "next-intl"
import type { FormFieldProps } from "../model/schema"

// Translate raw error messages — when validators bypass the translator, or when
// errors come back from the server action, errors[0] is a translation key like
// "validation.companyNameRequired". Look it up so the user always sees translated text.
const useTranslatedError = (raw: string | undefined) => {
	const t = useTranslations("ContactForm")
	if (!raw) return raw
	if (typeof raw !== "string") return raw
	if (!raw.startsWith("validation.")) return raw
	try {
		const translated = t(raw)
		return translated || raw
	} catch {
		return raw
	}
}

export const FormField = ({ field, label, children, isOptional, ...props }: FormFieldProps) => {
	const { isValid, errors } = field.state.meta
	const t = useTranslations("ContactForm")
	const translatedError = useTranslatedError(errors[0])
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
				{isOptional && <span className="w-full text-right opacity-50">{t("optional")}</span>}
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
							<div className="py-1">{translatedError}</div>
						</Field.Error>
					</motion.div>
				)}
			</AnimatePresence>
		</Field.Root>
	)
}
