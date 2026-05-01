"use client"
import { ActionButton } from "@shared/components/button"
import { P } from "@shared/components/typography"
import { cn } from "@shared/lib/utils"
import { initialFormState, mergeForm, useStore, useTransform } from "@tanstack/react-form-nextjs"
import { AnimatePresence, motion } from "motion/react"
import { useTranslations } from "next-intl"
import { serialize } from "object-to-formdata"
import { type MouseEvent, startTransition, useActionState, useMemo, useState } from "react"
import { formOpts } from "../config"
import { useAppForm, validateStep } from "../lib"
import { submitContactForm } from "../lib/action"
import { StepOne, StepThree, StepTwo } from "./steps"

type FormMeta = {
	submitAction: "submit" | null
}

const defaultSubmitMeta: FormMeta = {
	submitAction: null,
}

export const stepFields = {
	1: "stepOne",
	2: "stepTwo",
	3: "stepThree",
} as const

export const ContactForm = () => {
	const t = useTranslations("ContactForm")
	const [state, action] = useActionState(submitContactForm, initialFormState)
	const [step, setStep] = useState<1 | 2 | 3>(1)

	const goToPreviousStep = () => {
		setStep((prev) => (prev > 1 ? prev - 1 : prev) as 1 | 2 | 3)
	}

	const goToNextStep = () => {
		setStep((prev) => (prev < 3 ? prev + 1 : prev) as 1 | 2 | 3)
	}

	const form = useAppForm({
		...formOpts,
		onSubmitMeta: defaultSubmitMeta,
		transform: useTransform(
			(baseForm) =>
				mergeForm(
					baseForm,
					("values" in (state ?? {})
						? state
						: {
								values: state,
							}) as any,
				),
			[
				state,
			],
		),
		onSubmit: async ({ value, meta }) => {
			const { submitAction } = meta
			if (submitAction === "submit") {
				startTransition(() =>
					action(
						serialize(value, {
							dotsForObjectNotation: true,
						}),
					),
				)
				// TODO: Add reroute
				form.reset()
				setStep(1)
			}
		},
	})

	const renderStep = (step: 1 | 2 | 3, form: any) => {
		switch (step) {
			case 1:
				return <StepOne form={form} />
			case 2:
				return <StepTwo form={form} />
			case 3:
				return <StepThree form={form} />
		}
	}

	const formValues = useStore(form.store, (state) => state.values)
	const isStepValid = useMemo(
		() => validateStep(formValues, step),
		[
			formValues,
			step,
		],
	)
	return (
		<form className="flex h-full w-full flex-col justify-between gap-fluid-4">
			<form.AppForm>
				<AnimatePresence>{renderStep(step, form)}</AnimatePresence>
				{/* POPIA consent notice — shown on final step before submit */}
				{step === 3 && (
					<p className="text-fluid-n1 leading-snug text-mint-5/60">
						{t("privacy.prefix")}
						<a className="text-mint-4 underline hover:text-mint-6" href="/legal#privacy-notice">
							{t("privacy.linkText")}
						</a>
						{t("privacy.suffix")}
					</p>
				)}
				<div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-inner-padding pb-fluid-4">
					{step > 1 && (
						<ActionButton
							background={"muted"}
							onClick={(e) => {
								e.preventDefault()
								goToPreviousStep()
							}}
							showTrim={false}
						>
							{t("buttons.back")}
						</ActionButton>
					)}
					<form.Subscribe
						selector={(formState) => [
							formState.isSubmitting,
						]}
					>
						{([isSubmitting]) => {
							const isNextStep = step < 3
							const onClick = async (e: MouseEvent) => {
								e.preventDefault()
								if (isNextStep) {
									isStepValid && goToNextStep()
								} else {
									form.handleSubmit({
										submitAction: "submit",
									})
								}
							}
							const text = isNextStep
								? t("buttons.next")
								: isSubmitting
									? t("buttons.submitting")
									: t("buttons.submit")
							return (
								<div className="sm:col-start-2 flex items-center gap-inner-padding place-self-end">
									<P className="text-fluid-n1 text-mint-1 opacity-60.">{t("stepIndicator", { step })}</P>
									<ActionButton
										className={cn(
											"disabled:opacity-50",
											!isStepValid && "cursor-not-allowed opacity-50",
										)}
										disabled={!isStepValid}
										onClick={onClick}
										type={isNextStep ? "button" : "submit"}
									>
										{text}
									</ActionButton>
								</div>
							)
						}}
					</form.Subscribe>
				</div>
			</form.AppForm>
		</form>
	)
}
