import { defaultValues } from "@features/contact-form/config"
import { withForm } from "@features/contact-form/lib/form"
import { fieldConfig } from "@features/contact-form/model/field-config"
import {
	FullNameSchema,
	PhoneNumberSchema,
	WorkEmailSchema,
} from "@features/contact-form/model/schema"
import { FormField, TextInput } from "@shared/components/form-components"
import { contactFormVariants, createAsyncValidator, createValidator } from "../../lib"
import { ContactFormLayout } from "../contact-form-layout"

export const StepThree = withForm({
	defaultValues: defaultValues,
	render: ({ form }) => {
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
						onChangeAsync: createAsyncValidator(FullNameSchema),
						onChangeAsyncDebounceMs: 500,
						onBlur: createValidator(FullNameSchema),
					}}
				>
					{(field) => {
						return (
							<FormField
								field={field}
								key="fullName"
								label={fieldConfig.stepThree.fullName.label}
							>
								{({ field: f, isInvalid }) => (
									<TextInput
										invalid={isInvalid}
										onBlur={() => f.handleBlur()}
										onChange={(e) => f.handleChange(e.target.value)}
										placeholder={fieldConfig.stepThree.fullName.placeholder}
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
						onChangeAsync: createAsyncValidator(WorkEmailSchema),
						onChangeAsyncDebounceMs: 500,
						onBlur: createValidator(WorkEmailSchema),
					}}
				>
					{(field) => {
						return (
							<FormField
								field={field}
								key="workEmail"
								label={fieldConfig.stepThree.workEmail.label}
							>
								{({ field: f, isInvalid }) => (
									<TextInput
										invalid={isInvalid}
										onBlur={() => f.handleBlur()}
										onChange={(e) => f.handleChange(e.target.value)}
										placeholder={fieldConfig.stepThree.workEmail.placeholder}
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
						onChangeAsync: createAsyncValidator(PhoneNumberSchema),
						onChangeAsyncDebounceMs: 500,
						onBlur: createValidator(PhoneNumberSchema),
					}}
				>
					{(field) => {
						return (
							<FormField
								field={field}
								isOptional={fieldConfig.stepThree.phoneNumber.optional}
								key="phoneNumber"
								label={fieldConfig.stepThree.phoneNumber.label}
							>
								{({ field: f, isInvalid }) => (
									<TextInput
										invalid={isInvalid}
										onBlur={() => f.handleBlur()}
										onChange={(e) => f.handleChange(e.target.value)}
										placeholder={fieldConfig.stepThree.phoneNumber.placeholder}
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
