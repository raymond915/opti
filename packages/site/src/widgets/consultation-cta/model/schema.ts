import { type } from "arktype"

const ConsultationCtaSchema = type({
	subtitle: "string",
	title: "string",
	body: "string",
	callToAction: "string",
	media: "string",
})
type ConsultationCtaType = typeof ConsultationCtaSchema.infer
export interface ConsultationCtaProps extends ConsultationCtaType {}
