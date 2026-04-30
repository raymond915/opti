import { hasLocale } from "next-intl"
import { getRequestConfig } from "next-intl/server"
import { routing } from "./routing"

/**
 * Server-side translation loader.
 *
 * Resolves the active locale per request and loads the matching message
 * bundle from `messages/{locale}.json`. Falls back to the default locale
 * if the requested one is unsupported.
 */
export default getRequestConfig(async ({ requestLocale }) => {
	const requested = await requestLocale
	const locale = hasLocale(routing.locales, requested)
		? requested
		: routing.defaultLocale

	return {
		locale,
		messages: (await import(`../../messages/${locale}.json`)).default,
	}
})
