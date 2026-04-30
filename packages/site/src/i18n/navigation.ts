import { createNavigation } from "next-intl/navigation"
import { routing } from "./routing"

/**
 * Locale-aware navigation utilities.
 *
 * Use these instead of next/link / next/navigation when you need links
 * and redirects to respect the active locale prefix.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
	createNavigation(routing)
