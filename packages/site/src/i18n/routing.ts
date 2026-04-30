import { defineRouting } from "next-intl/routing"

/**
 * Locale routing configuration for next-intl.
 *
 * URL structure (`localePrefix: "as-needed"`):
 *   /              → English (default, no prefix)
 *   /about-us      → English
 *   /af            → Afrikaans home
 *   /af/about-us   → Afrikaans about page
 *
 * This preserves all existing English URLs for SEO.
 */
export const routing = defineRouting({
	locales: ["en", "af"],
	defaultLocale: "en",
	localePrefix: "as-needed",
})

export type Locale = (typeof routing.locales)[number]
