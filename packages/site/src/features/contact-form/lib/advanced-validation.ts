import { ArkErrors } from "arktype"
import { StepOneSchema, StepThreeSchema, StepTwoSchema } from "../model"

// Optional translator passed by client React components.
// When provided, validator messages (which are translation keys like
// "validation.companyNameRequired") get rendered into the user's locale.
// When omitted (server-side or fallback), the raw key is returned —
// <FormField> still calls translateValidationMessage() on errors[0]
// before display, so the user always sees translated text.
type Translator = (key: string) => string

const tryTranslate = (raw: string, t?: Translator): string => {
	if (!t) return raw
	if (!raw) return raw
	if (!raw.startsWith("validation.")) return raw
	try {
		const translated = t(raw)
		// next-intl returns the key path back when the key is missing
		return translated || raw
	} catch {
		return raw
	}
}

export const createValidator = (schema: any, t?: Translator) => {
	return ({ value }: { value: any }): string | undefined => {
		try {
			const result = schema(value)
			if (result instanceof ArkErrors) {
				return result.map((error) => tryTranslate(error.message, t)).join(" ")
			}
			return undefined
		} catch (error) {
			return error instanceof Error ? error.message : tryTranslate("validation.validationFailed", t)
		}
	}
}

export const createAsyncValidator = (schema: any, t?: Translator) => {
	return async ({ value }: { value: any }): Promise<string | undefined> => {
		try {
			const result = schema(value)
			if (result instanceof ArkErrors) {
				return result.map((error) => tryTranslate(error.message, t)).join(" ")
			}
			return undefined
		} catch (error) {
			return error instanceof Error ? error.message : tryTranslate("validation.validationFailed", t)
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
