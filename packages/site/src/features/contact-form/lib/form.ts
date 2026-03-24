/** biome-ignore-all lint/style/useNamingConvention: <Components are named properly> */
import { ActionButton } from "@shared/components/button"
import { FormField } from "@shared/components/form-components"
import { createFormHook } from "@tanstack/react-form-nextjs"
import { fieldContext, formContext } from "./form-context"

export const { useAppForm, withForm } = createFormHook({
	fieldContext,
	formContext,
	fieldComponents: {
		FormField,
	},
	formComponents: {
		ActionButton,
	},
})
