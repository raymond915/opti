import { defaultValues } from "@features/contact-form/config"
import { withForm } from "@features/contact-form/lib/form"
import {
	BusinessTypeSchema,
	CompanyNameSchema,
	LocationSchema,
} from "@features/contact-form/model/schema"
import { FormField, RadioGroupInput, SelectInput, TextInput } from "@shared/components/form-components"
import type { RadioItemType, SelectItemType } from "@shared/components/form-components"
import { useTranslations } from "next-intl"
import { contactFormVariants, createAsyncValidator, createValidator } from "../../lib"
import { ContactFormLayout } from "../contact-form-layout"

export const StepOne = withForm({
	defaultValues: defaultValues,
	render: ({ form, ...props }) => {
		const t = useTranslations("ContactForm")
		const businessTypeOptions = t.raw("options.businessType") as RadioItemType[]
		const locationOptions = t.raw("options.location") as SelectItemType[]
		return (
			<ContactFormLayout
				animate="in"
				exit="out"
				initial="in"
				key={"stepOne"}
				variants={contactFormVariants.container}
				{...props}
			>
				<form.AppField
					key="stepOne.companyName"
					name="stepOne.companyName"
					validators={{
						onBlur: createValidator(CompanyNameSchema, t),
						onChangeAsync: createAsyncValidator(CompanyNameSchema, t),
						onChangeAsyncDebounceMs: 500,
					}}
				>
					{(field) => {
						return (
							<FormField
								field={field}
								label={t("fields.companyName.label")}
							>
								{({ field: f, isInvalid }) => (
									<TextInput
										invalid={isInvalid}
										onBlur={() => f.handleBlur()}
										onChange={(e) => f.handleChange(e.target.value)}
										placeholder={t("fields.companyName.placeholder")}
										value={f.state.value ?? ""}
									/>
								)}
							</FormField>
						)
					}}
				</form.AppField>
				<form.AppField
					key="stepOne.businessType"
					name="stepOne.businessType"
					validators={{
						onChangeAsync: createAsyncValidator(BusinessTypeSchema, t),
						onChangeAsyncDebounceMs: 500,
					}}
				>
					{(field) => (
						<FormField
							field={field}
							label={t("fields.businessType.label")}
						>
							{({ field: f, isInvalid }) => (
								<RadioGroupInput
									invalid={isInvalid}
									items={businessTypeOptions}
									onBlur={() => f.handleBlur()}
									onValueChange={(value) => {
										f.handleChange(value)
									}}
									value={f.state.value}
								/>
							)}
						</FormField>
					)}
				</form.AppField>
				<form.AppField
					key="stepOne.location"
					name="stepOne.location"
					validators={{
						onBlur: createValidator(LocationSchema, t),
						onChangeAsync: createAsyncValidator(LocationSchema, t),
						onChangeAsyncDebounceMs: 500,
					}}
				>
					{(field) => (
						<FormField
							field={field}
							label={t("fields.location.label")}
						>
							{({ field: f, isInvalid }) => (
								<SelectInput
									invalid={isInvalid}
									items={locationOptions}
									onBlur={() => f.handleBlur()}
									onValueChange={(value) => f.handleChange(value?.value)}
									placeholder={t("fields.location.placeholder")}
									value={f.state.value || null}
								/>
							)}
						</FormField>
					)}
				</form.AppField>
				<form.Subscribe selector={(state) => state?.values?.stepOne?.location}>
					{(location) =>
						location === "Other" ? (
							<form.AppField key="stepOne.locationOther" name="stepOne.locationOther">
								{(field) => (
									<FormField
										field={field}
										isOptional
										label={t("fields.locationOther.label")}
									>
										{({ field: f, isInvalid }) => (
											<TextInput
												invalid={isInvalid}
												onBlur={() => f.handleBlur()}
												onChange={(e) => f.handleChange(e.target.value)}
												placeholder={t("fields.locationOther.placeholder")}
												value={f.state.value ?? ""}
											/>
										)}
									</FormField>
								)}
							</form.AppField>
						) : null
					}
				</form.Subscribe>
			</ContactFormLayout>
		)
	},
})
