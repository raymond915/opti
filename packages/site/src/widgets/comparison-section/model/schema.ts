import { type } from "arktype"

const ComparisonSectionSchema = type({})

type ComparisonSectionType = typeof ComparisonSectionSchema.infer

export interface ComparisonSectionProps extends ComparisonSectionType {}
