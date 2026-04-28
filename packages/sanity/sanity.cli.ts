import { defineCliConfig } from "sanity/cli"

export default defineCliConfig({
	api: {
		projectId: "ftltf6r2",
		dataset: "production",
	},
	deployment: {
		/**
		 * Auto-updates fetch the studio runtime from Sanity's CDN at build time.
		 * Disabled so Vercel builds are deterministic — the studio bundle is
		 * fully self-contained in `dist/` and doesn't depend on a network call
		 * during build (which was occasionally producing an empty dist and
		 * breaking deploys).
		 *
		 * Learn more at https://www.sanity.io/docs/cli#auto-updates
		 */
		autoUpdates: false,
	},
})
