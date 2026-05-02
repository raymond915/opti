import type { Metadata } from "next"

/**
 * Production canonical URL — set NEXT_PUBLIC_SITE_URL in Vercel to override.
 * Falls back to the Vercel preview URL so previews self-canonicalise correctly.
 */
const SITE_URL = (
	process.env.NEXT_PUBLIC_SITE_URL || "https://opti-site-tau.vercel.app"
).replace(/\/$/, "")

/**
 * Build the canonical + hreflang `alternates` block for a given page.
 *
 * Pass the path WITHOUT the locale prefix, e.g. `/about-us` or `/services/compliance`.
 * Pass `/` for the home page.
 *
 * Output goes into Next.js metadata as `alternates: getAlternates(path, locale)`.
 * Renders as:
 *   <link rel="canonical" href="..." />
 *   <link rel="alternate" hreflang="en-ZA" href="https://…/about-us" />
 *   <link rel="alternate" hreflang="af-ZA" href="https://…/af/about-us" />
 *   <link rel="alternate" hreflang="x-default" href="https://…/about-us" />
 *
 * The English URL is the x-default per ICCM convention (English is the
 * default locale and most international traffic falls back there).
 */
export function getAlternates(path: string, currentLocale: string): NonNullable<Metadata["alternates"]> {
	const cleanPath = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`
	const enUrl = `${SITE_URL}${cleanPath || "/"}`
	const afUrl = `${SITE_URL}/af${cleanPath}`
	const canonical = currentLocale === "af" ? afUrl : enUrl
	return {
		canonical,
		languages: {
			"en-ZA": enUrl,
			"af-ZA": afUrl,
			"x-default": enUrl,
		},
	}
}
