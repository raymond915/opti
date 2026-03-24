import { ArkErrors } from "arktype"
import { StepOneSchema, StepThreeSchema, StepTwoSchema } from "../model"

export const createValidator = (schema: any) => {
	return ({ value }: { value: any }): string | undefined => {
		try {
			const result = schema(value)
			if (result instanceof ArkErrors) {
				return result.map((error) => error.message).join(" ")
			}
			return undefined
		} catch (error) {
			return error instanceof Error ? error.message : "Validation failed"
		}
	}
}

export const createAsyncValidator = (schema: any) => {
	return async ({ value }: { value: any }): Promise<string | undefined> => {
		try {
			const result = schema(value)
			if (result instanceof ArkErrors) {
				return result.map((error) => error.message).join(" ")
			}
			return undefined
		} catch (error) {
			return error instanceof Error ? error.message : "Validation failed"
		}
	}
}

export const validateStep = (values: any, step: 1 | 2 | 3) => {
	if (!values) return false
	switch (step) {
		case 1: {
			const result = StepOneSchema(values.stepOne)
			if (result instanceof ArkErrors) {
				return false
			}
			return true
		}
		case 2: {
			const result = StepTwoSchema(values.stepTwo)
			if (result instanceof ArkErrors) {
				return false
			}
			return true
		}
		case 3: {
			const result = StepThreeSchema(values.stepThree)
			if (result instanceof ArkErrors) {
				return false
			}
			return true
		}
	}
}
