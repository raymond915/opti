import { defaultValues } from "@features/contact-form/config"
import { withForm } from "@features/contact-form/lib/form"
import {
	PrimaryServiceInterestSchema,
	UrgencyLevelSchema,
} from "@features/contact-form/model/schema"
import { FormField, SelectInput, TextAreaInput } from "@shared/components/form-components"
import type { SelectItemType } from "@shared/components/form-components"
import { useTranslations } from "next-intl"
import { contactFormVariants, createAsyncValidator, createValidator } from "../../lib"
import { ContactFormLayout } from "../contact-form-layout"

export const StepTwo = withForm({
	defaultValues: defaultValues,
	render: ({ form }) => {
		const t = useTranslations("ContactForm")
		const primaryServiceOptions = t.raw("options.primaryServiceInterest") as SelectItemType[]
		const urgencyOptions = t.raw("options.urgencyLevel") as SelectItemType[]
		return (
			<ContactFormLayout
				animate="in"
				exit="out"
				initial="in"
				key={"stepTwo"}
				layout={true}
				variants={contactFormVariants.container}
			>
				<form.AppField
					name={"stepTwo.primaryServiceInterest"}
					validators={{
						onChangeAsync: createAsyncValidator(PrimaryServiceInterestSchema, t),
						onChangeAsyncDebounceMs: 500,
						onBlur: createValidator(PrimaryServiceInterestSchema, t),
					}}
				>
					{(field) => (
						<FormField
							field={field}
							key="primaryServiceInterest"
							label={t("fields.primaryServiceInterest.label")}
						>
							{({ field: f, isInvalid }) => (
								<SelectInput
									invalid={isInvalid}
									items={primaryServiceOptions}
									onBlur={() => f.handleBlur()}
									onValueChange={(value) => f.handleChange(value?.value)}
									placeholder={t("fields.primaryServiceInterest.placeholder")}
									value={f.state.value || null}
								/>
							)}
						</FormField>
					)}
				</form.AppField>
				<form.AppField
					name="stepTwo.urgencyLevel"
					validators={{
						onChangeAsync: createAsyncValidator(UrgencyLevelSchema, t),
						onChangeAsyncDebounceMs: 500,
						onBlur: createValidator(UrgencyLevelSchema, t),
					}}
				>
					{(field) => (
						<FormField
							field={field}
							key="urgencyLevel"
							label={t("fields.urgencyLevel.label")}
						>
							{({ field: f, isInvalid }) => (
								<SelectInput
									invalid={isInvalid}
									items={urgencyOptions}
									onBlur={() => f.handleBlur()}
									onValueChange={(value) => f.handleChange(value?.value)}
									placeholder={t("fields.urgencyLevel.placeholder")}
									value={f.state.value || null}
								/>
							)}
						</FormField>
					)}
				</form.AppField>
				<form.AppField name="stepTwo.challengeDescription">
					{(field) => (
						<FormField
							field={field}
							isOptional
							key="challengeDescription"
							label={t("fields.challengeDescription.label")}
						>
							{({ field: f, isInvalid }) => (
								<TextAreaInput
									invalid={isInvalid}
									onBlur={() => f.handleBlur()}
									onChange={(e) => f.handleChange(e.target.value)}
									placeholder={t("fields.challengeDescription.placeholder")}
									value={f.state.value ?? ""}
								/>
							)}
						</FormField>
					)}
				</form.AppField>
			</ContactFormLayout>
		)
	},
})
