import { regex, type } from "arktype"
import type { HTMLAttributes } from "react"

// Validator messages emit translation keys. The client validators in
// `lib/advanced-validation.ts` look these up against the ContactForm.validation
// namespace to render the user's locale. The server action passes them through
// as-is — TanStack Form propagates them back to the client where they're rendered
// via the same translation lookup in <FormField>.

export const CompanyNameSchema = type("string").narrow((value, ctx) => {
	if (value === undefined) {
		return ctx.reject({
			message: "validation.companyNameRequired",
		})
	}
	if (value.trim().length < 1)
		return ctx.reject({
			message: "validation.companyNameRequired",
		})
	return true
})

export const BusinessTypeSchema = type("string").narrow((value, ctx) => {
	if (value === undefined || value === null) {
		return ctx.reject({
			message: "validation.businessTypeRequired",
		})
	}
	const validOptions = [
		"Small Business",
		"Large Business",
		"Independent School",
	]
	if (value === "") {
		return ctx.reject({
			message: "validation.businessTypeRequired",
		})
	}
	if (!validOptions.includes(value)) {
		return ctx.reject({
			message: "validation.businessTypeInvalid",
		})
	}
	return true
})

export const PrimaryServiceInterestSchema = type("string").narrow((value, ctx) => {
	if (value === undefined || value === null) {
		return ctx.reject({
			message: "validation.primaryServiceInterestRequired",
		})
	}
	const validOptions = [
		"Labour Audits",
		"Job Evaluation & Salary Benchmarking",
		"Performance Management & Employee Retention",
		"Workplace Discipline & Dispute Resolution",
		"Retrenchments & Restructuring",
		"HR Policy Development & Implementation",
		"HR Training & Development",
		"Workplace Wellness Programs",
		"HR Support for Private Schools",
		"All of the above",
	]
	if (value === "") {
		return ctx.reject({
			message: "validation.primaryServiceInterestRequired",
		})
	}
	if (!validOptions.includes(value)) {
		return ctx.reject({
			message: "validation.primaryServiceInterestInvalid",
		})
	}
	return true
})

export const UrgencyLevelSchema = type("string").narrow((value, ctx) => {
	if (value === undefined || value === null) {
		return ctx.reject({
			message: "validation.urgencyLevelRequired",
		})
	}
	const validOptions = [
		"Immediate",
		"1–3 Months",
		"Exploring my options",
	]
	if (value === "") {
		return ctx.reject({
			message: "validation.urgencyLevelRequired",
		})
	}
	if (!validOptions.includes(value)) {
		return ctx.reject({
			message: "validation.urgencyLevelInvalid",
		})
	}
	return true
})

export const ChallengeDescriptionSchema = type("string").optional()

export const LocationSchema = type("string").narrow((value, ctx) => {
	if (value === undefined || value === null || value === "") {
		return ctx.reject({
			message: "validation.locationRequired",
		})
	}
	const validOptions = ["Gauteng", "Cape Town and Surrounds", "Other"]
	if (!validOptions.includes(value)) {
		return ctx.reject({
			message: "validation.locationInvalid",
		})
	}
	return true
})

export const LocationOtherSchema = type("string").optional()

export const FullNameSchema = type("string").narrow((value, ctx) => {
	if (value === undefined || value === null) {
		return ctx.reject({
			message: "validation.fullNameRequired",
		})
	}
	const minLength = 3
	if (value.trim().length <= minLength) {
		return ctx.reject({
			message: "validation.fullNameTooShort",
		})
	}
	return true
})

export const WorkEmailSchema = type("string").narrow((value, ctx) => {
	if (value === undefined || value === null) {
		return ctx.reject({
			message: "validation.workEmailRequired",
		})
	}
	if (value.trim().length < 1) {
		return ctx.reject({
			message: "validation.workEmailRequired",
		})
	}
	const emailRegex = regex(
		"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
		"i",
	)
	if (!emailRegex.test(value)) {
		return ctx.reject({
			message: "validation.workEmailInvalid",
		})
	}
	return true
})

export const PhoneNumberSchema = type("string").narrow((value, ctx) => {
	if (value === undefined || value === null) {
		return true // allow undefined and null since optional
	}
	if (value.trim().length < 1) {
		return true // allow empty since optional
	}
	if (value.trim().length > 15) {
		return ctx.reject({
			message: "validation.phoneNumberTooLong",
		})
	}
	const phoneRegex = regex("^[+]?[0-9\\s\\-\\(\\)]{7,15}[0-9]$", "i")
	if (!phoneRegex.test(value)) {
		return ctx.reject({
			message: "validation.phoneNumberInvalid",
		})
	}
	return true
})

export const StepOneSchema = type({
	companyName: CompanyNameSchema,
	businessType: BusinessTypeSchema,
	location: LocationSchema,
	locationOther: LocationOtherSchema,
})

export const StepTwoSchema = type({
	primaryServiceInterest: PrimaryServiceInterestSchema,
	urgencyLevel: UrgencyLevelSchema,
	challengeDescription: ChallengeDescriptionSchema,
})

export const StepThreeSchema = type({
	fullName: FullNameSchema,
	workEmail: WorkEmailSchema,
	phoneNumber: PhoneNumberSchema,
})

export const ContactFormSchema = type({
	stepOne: StepOneSchema,
	stepTwo: StepTwoSchema,
	stepThree: StepThreeSchema,
})

//Form Container Schema
export const ContactFormLayoutSchema = type({
	className: "string?",
})

export type ContactFormLayoutType = typeof ContactFormLayoutSchema.infer

export interface ContactFormLayoutProps
	extends Omit<HTMLAttributes<HTMLElement>, keyof ContactFormLayoutType>,
		ContactFormLayoutType {}

// Form Submit Metadata
export const FormMetadataSchema = type({
	submitAction: "'continue'|'submit'|null",
})

export type FormSubmitMetadataType = typeof FormMetadataSchema.infer
