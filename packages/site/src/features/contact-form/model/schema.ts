import { regex, type } from "arktype"
import type { HTMLAttributes } from "react"

export const CompanyNameSchema = type("string").narrow((value, ctx) => {
	if (value === undefined) {
		return ctx.reject({
			message: "Your company name is required.",
		})
	}
	if (value.trim().length < 1)
		return ctx.reject({
			message: "Your company name is required.",
		})
	return true
})

export const BusinessTypeSchema = type("string").narrow((value, ctx) => {
	if (value === undefined || value === null) {
		return ctx.reject({
			message: "Your business type is required.",
		})
	}
	const validOptions = [
		"Small Business",
		"Large Business",
		"Independent School",
	]
	if (value === "") {
		return ctx.reject({
			message: "Your business type is required.",
		})
	}
	if (!validOptions.includes(value)) {
		return ctx.reject({
			message: "Invalid business type",
		})
	}
	return true
})

export const PrimaryServiceInterestSchema = type("string").narrow((value, ctx) => {
	if (value === undefined || value === null) {
		return ctx.reject({
			message: "Please select a service that you are interested in.",
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
			message: "Please select a service that you are interested in.",
		})
	}
	if (!validOptions.includes(value)) {
		return ctx.reject({
			message: "Invalid service option",
		})
	}
	return true
})

export const UrgencyLevelSchema = type("string").narrow((value, ctx) => {
	if (value === undefined || value === null) {
		return ctx.reject({
			message: "Please select an urgency level.",
		})
	}
	const validOptions = [
		"Immediate",
		"1–3 Months",
		"Exploring my options",
	]
	if (value === "") {
		return ctx.reject({
			message: "Please select an urgency level.",
		})
	}
	if (!validOptions.includes(value)) {
		return ctx.reject({
			message: "Invalid urgency level",
		})
	}
	return true
})

export const ChallengeDescriptionSchema = type("string").optional()

export const FullNameSchema = type("string").narrow((value, ctx) => {
	if (value === undefined || value === null) {
		return ctx.reject({
			message: "Your full name is required.",
		})
	}
	const minLength = 3
	if (value.trim().length <= minLength) {
		return ctx.reject({
			message: `Your full name must be longer than ${minLength} characters.`,
		})
	}
	return true
})

export const WorkEmailSchema = type("string").narrow((value, ctx) => {
	if (value === undefined || value === null) {
		return ctx.reject({
			message: "Your work email is required.",
		})
	}
	if (value.trim().length < 1) {
		return ctx.reject({
			message: "Your work email is required.",
		})
	}
	const emailRegex = regex(
		"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
		"i",
	)
	if (!emailRegex.test(value)) {
		return ctx.reject({
			message: "Please enter a valid email address.",
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
			message: "Your phone number cannot be more than 15 characters.",
		})
	}
	const phoneRegex = regex("^[+]?[0-9\\s\\-\\(\\)]{7,15}[0-9]$", "i")
	if (!phoneRegex.test(value)) {
		return ctx.reject({
			message: "Invalid phone number format.",
		})
	}
	return true
})

export const StepOneSchema = type({
	companyName: CompanyNameSchema,
	businessType: BusinessTypeSchema,
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
