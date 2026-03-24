import { type } from "arktype"
import type { HTMLAttributes } from "react"

export const ServiceRollerSchema = type({})
export type ServiceRollerInfer = typeof ServiceRollerSchema.infer
export type HtmlProps = Omit<HTMLAttributes<HTMLDivElement>, keyof ServiceRollerInfer>
export interface ServiceRollerProps extends ServiceRollerInfer, HtmlProps {}
