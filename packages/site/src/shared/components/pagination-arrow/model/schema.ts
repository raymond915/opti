import { type } from "arktype"

export const PaginationArrowSchema = type({
	swap: "boolean?",
})

export type PaginationArrowProps = typeof PaginationArrowSchema.infer
