import createMiddleware from "next-intl/middleware"
import { routing } from "./i18n/routing"

/**
 * next-intl middleware — handles locale detection and routing.
 *
 * - Reads the URL prefix to determine the active locale.
 * - Sets the `NEXT_LOCALE` cookie so the user's preference persists.
 * - Redirects when needed (e.g. visiting /af when default locale is /en).
 *
 * Skips API routes, Next.js internals, and static assets via the matcher.
 */
export default createMiddleware(routing)

export const config = {
	// Match all pathnames except those starting with:
	// - api (route handlers)
	// - _next (Next.js internals)
	// - _vercel (Vercel internals)
	// - any path containing a dot (static files like /favicon.ico)
	matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
}
