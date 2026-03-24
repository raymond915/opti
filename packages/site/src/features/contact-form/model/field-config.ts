import type { RadioItemType, SelectItemType } from "@shared/components/form-components"

type OptionType = RadioItemType | SelectItemType

type FieldConfig = {
	label: string
	description?: string
	placeholder?: string
	optional?: boolean
	options?: OptionType[]
}

export const fieldConfig = {
	stepOne: {
		companyName: {
			label: "Company Name",
			description: "",
			placeholder: "Enter your company name",
		} satisfies FieldConfig,
		businessType: {
			label: "Business Type",
			placeholder: "Select your business type",
			options: [
				{
					label: "Small Business",
					value: "Small Business",
				},
				{
					label: "Large Business",
					value: "Large Business",
				},
				{
					label: "Independent School",
					value: "Independent School",
				},
			],
		} satisfies FieldConfig,
	},
	stepTwo: {
		primaryServiceInterest: {
			label: "Which services are you interested in?",
			placeholder: "Select one or more services",
			options: [
				{
					value: "Labour Audits",
					label: "Labour Audits",
				},
				{
					value: "Job Evaluation & Salary Benchmarking",
					label: "Job Evaluation & Salary Benchmarking",
				},
				{
					value: "Performance Management & Employee Retention",
					label: "Performance Management & Employee Retention",
				},
				{
					value: "Workplace Discipline & Dispute Resolution",
					label: "Workplace Discipline & Dispute Resolution",
				},
				{
					value: "Retrenchments & Restructuring",
					label: "Retrenchments & Restructuring",
				},
				{
					value: "HR Policy Development & Implementation",
					label: "HR Policy Development & Implementation",
				},
				{
					value: "HR Training & Development",
					label: "HR Training & Development",
				},
				{
					value: "Workplace Wellness Programs",
					label: "Workplace Wellness Programs",
				},
				{
					value: "HR Support for Private Schools",
					label: "HR Support for Private Schools",
				},
				{
					value: "All of the above",
					label: "All of the above",
				},
			],
		} satisfies FieldConfig,
		urgencyLevel: {
			label: "Urgency",
			placeholder: "Select urgency level",
			options: [
				{
					value: "Immediate",
					label: "Immediate",
				},
				{
					value: "1–3 Months",
					label: "1–3 Months",
				},
				{
					value: "Exploring my options",
					label: "Exploring my options",
				},
			],
		} satisfies FieldConfig,
		challengeDescription: {
			label: "Describe your challenges",
			description: "Please provide a brief description of your current challenges",
			optional: true,
			placeholder: "Tell us more about your challenges...",
		} satisfies FieldConfig,
	},
	stepThree: {
		fullName: {
			label: "Full name",
			placeholder: "Enter your full name",
		} satisfies FieldConfig,
		workEmail: {
			label: "Work Email",
			placeholder: "your@company.com",
		} satisfies FieldConfig,
		phoneNumber: {
			label: "Phone Number",
			optional: true,
			placeholder: "e.g. +27 123 456 789",
		} satisfies FieldConfig,
	},
} as const

export type FieldConfigType = typeof fieldConfig
