import { type ClientConfig, createClient } from "@opti/sanity"

const config: ClientConfig = {
	projectId: "ftltf6r2",
	dataset: "production",
	useCdn: true,
	apiVersion: "2025-02-06",
	token: process.env.SANITY_SECRET_TOKEN,
}

export const sanityClient = createClient(config)
