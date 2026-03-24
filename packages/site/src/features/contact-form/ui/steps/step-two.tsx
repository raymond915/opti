import { defaultValues } from "@features/contact-form/config"
import { withForm } from "@features/contact-form/lib/form"
import { fieldConfig } from "@features/contact-form/model/field-config"
import {
	PrimaryServiceInterestSchema,
	UrgencyLevelSchema,
} from "@features/contact-form/model/schema"
import { FormField, SelectInput, TextAreaInput } from "@shared/components/form-components"
import { contactFormVariants, createAsyncValidator, createValidator } from "../../lib"
import { ContactFormLayout } from "../contact-form-layout"

export const StepTwo = withForm({
	defaultValues: defaultValues,
	render: ({ form }) => {
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
						onChangeAsync: createAsyncValidator(PrimaryServiceInterestSchema),
						onChangeAsyncDebounceMs: 500,
						onBlur: createValidator(PrimaryServiceInterestSchema),
					}}
				>
					{(field) => (
						<FormField
							field={field}
							key="primaryServiceInterest"
							label={fieldConfig.stepTwo.primaryServiceInterest.label}
						>
							{({ field: f, isInvalid }) => (
								<SelectInput
									invalid={isInvalid}
									items={fieldConfig.stepTwo.primaryServiceInterest.options}
									onBlur={() => f.handleBlur()}
									onValueChange={(value) => f.handleChange(value?.value)}
									placeholder={fieldConfig.stepTwo.primaryServiceInterest.placeholder}
									value={f.state.value || null}
								/>
							)}
						</FormField>
					)}
				</form.AppField>
				<form.AppField
					name="stepTwo.urgencyLevel"
					validators={{
						onChangeAsync: createAsyncValidator(UrgencyLevelSchema),
						onChangeAsyncDebounceMs: 500,
						onBlur: createValidator(UrgencyLevelSchema),
					}}
				>
					{(field) => (
						<FormField
							field={field}
							key="urgencyLevel"
							label={fieldConfig.stepTwo.urgencyLevel.label}
						>
							{({ field: f, isInvalid }) => (
								<SelectInput
									invalid={isInvalid}
									items={fieldConfig.stepTwo.urgencyLevel.options}
									onBlur={() => f.handleBlur()}
									onValueChange={(value) => f.handleChange(value?.value)}
									placeholder={fieldConfig.stepTwo.urgencyLevel.placeholder}
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
							isOptional={fieldConfig.stepTwo.challengeDescription.optional}
							key="challengeDescription"
							label={fieldConfig.stepTwo.challengeDescription.label}
						>
							{({ field: f, isInvalid }) => (
								<TextAreaInput
									invalid={isInvalid}
									onBlur={() => f.handleBlur()}
									onChange={(e) => f.handleChange(e.target.value)}
									placeholder={fieldConfig.stepTwo.challengeDescription.placeholder}
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
