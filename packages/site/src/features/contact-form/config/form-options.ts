import { formOptions } from "@tanstack/react-form-nextjs"
import type { ContactFormSchema } from "../model/schema"

export const defaultValues: typeof ContactFormSchema.infer = {
	stepOne: {
		companyName: "",
		businessType: "",
		location: "",
		locationOther: "",
	},
	stepTwo: {
		primaryServiceInterest: "",
		urgencyLevel: "",
		challengeDescription: "",
	},
	stepThree: {
		fullName: "",
		workEmail: "",
		phoneNumber: "",
	},
}

export const formOpts = formOptions({
	defaultValues: defaultValues,
})
