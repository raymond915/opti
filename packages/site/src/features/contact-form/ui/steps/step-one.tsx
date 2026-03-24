import { defaultValues } from "@features/contact-form/config"
import { withForm } from "@features/contact-form/lib/form"
import { fieldConfig } from "@features/contact-form/model/field-config"
import { BusinessTypeSchema, CompanyNameSchema } from "@features/contact-form/model/schema"
import { FormField, RadioGroupInput, TextInput } from "@shared/components/form-components"
import { contactFormVariants, createAsyncValidator, createValidator } from "../../lib"
import { ContactFormLayout } from "../contact-form-layout"

export const StepOne = withForm({
	defaultValues: defaultValues,
	render: ({ form, ...props }) => {
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
						onBlur: createValidator(CompanyNameSchema),
						onChangeAsync: createAsyncValidator(CompanyNameSchema),
						onChangeAsyncDebounceMs: 500,
					}}
				>
					{(field) => {
						return (
							<FormField
								field={field}
								label={fieldConfig.stepOne.companyName.label}
							>
								{({ field: f, isInvalid }) => (
									<TextInput
										invalid={isInvalid}
										onBlur={() => f.handleBlur()}
										onChange={(e) => f.handleChange(e.target.value)}
										placeholder={fieldConfig.stepOne.companyName.placeholder}
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
						onChangeAsync: createAsyncValidator(BusinessTypeSchema),
						onChangeAsyncDebounceMs: 500,
					}}
				>
					{(field) => (
						<FormField
							field={field}
							label={fieldConfig.stepOne.businessType.label}
						>
							{({ field: f, isInvalid }) => (
								<RadioGroupInput
									invalid={isInvalid}
									items={fieldConfig.stepOne.businessType.options}
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
			</ContactFormLayout>
		)
	},
})
