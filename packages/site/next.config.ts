import path from "path"
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	distDir: "/tmp/optihr-next",
	pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
	turbopack: {
		resolveAlias: {
			// @react-email/render imports prettier for HTML formatting.
			// Stub it out to prevent a Turbopack symlink panic in this bun monorepo.
			prettier: path.resolve("./src/lib/prettier-stub.ts"),
		},
	},
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "placehold.co",
			},
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
			{
				protocol: "https",
				hostname: "images.pexels.com",
			},
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
				port: "",
				pathname: "/images/ftltf6r2/**",
				search: "",
			},
		],
	},
	allowedDevOrigins: [
		"100.112.55.40",
		"localhost",
	],
}

export default nextConfig
