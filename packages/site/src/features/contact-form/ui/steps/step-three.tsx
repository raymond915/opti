import { defaultValues } from "@features/contact-form/config"
import { withForm } from "@features/contact-form/lib/form"
import {
	FullNameSchema,
	PhoneNumberSchema,
	WorkEmailSchema,
} from "@features/contact-form/model/schema"
import { FormField, TextInput } from "@shared/components/form-components"
import { useTranslations } from "next-intl"
import { contactFormVariants, createAsyncValidator, createValidator } from "../../lib"
import { ContactFormLayout } from "../contact-form-layout"

export const StepThree = withForm({
	defaultValues: defaultValues,
	render: ({ form }) => {
		const t = useTranslations("ContactForm")
		return (
			<ContactFormLayout
				animate="in"
				exit="out"
				initial="in"
				key={"stepThree"}
				layout={true}
				variants={contactFormVariants.container}
			>
				<form.AppField
					name={"stepThree.fullName"}
					validators={{
						onChangeAsync: createAsyncValidator(FullNameSchema, t),
						onChangeAsyncDebounceMs: 500,
						onBlur: createValidator(FullNameSchema, t),
					}}
				>
					{(field) => {
						return (
							<FormField
								field={field}
								key="fullName"
								label={t("fields.fullName.label")}
							>
								{({ field: f, isInvalid }) => (
									<TextInput
										invalid={isInvalid}
										onBlur={() => f.handleBlur()}
										onChange={(e) => f.handleChange(e.target.value)}
										placeholder={t("fields.fullName.placeholder")}
										value={f.state.value ?? ""}
									/>
								)}
							</FormField>
						)
					}}
				</form.AppField>
				<form.AppField
					name="stepThree.workEmail"
					validators={{
						onChangeAsync: createAsyncValidator(WorkEmailSchema, t),
						onChangeAsyncDebounceMs: 500,
						onBlur: createValidator(WorkEmailSchema, t),
					}}
				>
					{(field) => {
						return (
							<FormField
								field={field}
								key="workEmail"
								label={t("fields.workEmail.label")}
							>
								{({ field: f, isInvalid }) => (
									<TextInput
										invalid={isInvalid}
										onBlur={() => f.handleBlur()}
										onChange={(e) => f.handleChange(e.target.value)}
										placeholder={t("fields.workEmail.placeholder")}
										value={f.state.value || ""}
									/>
								)}
							</FormField>
						)
					}}
				</form.AppField>
				<form.AppField
					name="stepThree.phoneNumber"
					validators={{
						onChangeAsync: createAsyncValidator(PhoneNumberSchema, t),
						onChangeAsyncDebounceMs: 500,
						onBlur: createValidator(PhoneNumberSchema, t),
					}}
				>
					{(field) => {
						return (
							<FormField
								field={field}
								isOptional
								key="phoneNumber"
								label={t("fields.phoneNumber.label")}
							>
								{({ field: f, isInvalid }) => (
									<TextInput
										invalid={isInvalid}
										onBlur={() => f.handleBlur()}
										onChange={(e) => f.handleChange(e.target.value)}
										placeholder={t("fields.phoneNumber.placeholder")}
										value={f.state.value || ""}
									/>
								)}
							</FormField>
						)
					}}
				</form.AppField>
			</ContactFormLayout>
		)
	},
})
