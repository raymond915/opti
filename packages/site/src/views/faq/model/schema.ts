import { type } from "arktype"

export const FaqSchema = type({
	content: type({}),
})

export type FaqProps = typeof FaqSchema.infer
