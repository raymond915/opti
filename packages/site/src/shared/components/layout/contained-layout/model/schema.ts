import { type } from "arktype"

export const ContainedLayoutSchema = type({})

export interface ContainedLayoutInterface
	extends Omit<React.ComponentPropsWithRef<"section">, keyof typeof ContainedLayoutSchema.infer> {}
