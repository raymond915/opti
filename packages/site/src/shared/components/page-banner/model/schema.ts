import { type } from "arktype"

export const PageBannerSchema = type({
	title: "string",
	body: "string",
	anchorText: "string",
	anchorId: "string",
})
type PageBannerType = typeof PageBannerSchema.infer
export interface PageBannerProps extends PageBannerType {}
