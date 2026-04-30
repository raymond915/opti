"use client"

import { useLocale, useTranslations } from "next-intl"
import { useTransition } from "react"
import { cn } from "@shared/lib/utils"
import { usePathname, useRouter } from "../../../i18n/navigation"

/**
 * Language toggle — switches between English and Afrikaans, preserving the
 * current path. Renders as a compact "EN | AF" pill suitable for the nav.
 *
 * The active locale is read from next-intl. On click we replace the current
 * route with the same pathname under the other locale; next-intl handles
 * adding/removing the `/af` prefix automatically.
 */
export const LanguageToggle = ({ className }: { className?: string }) => {
	const t = useTranslations("LanguageToggle")
	const locale = useLocale()
	const router = useRouter()
	const pathname = usePathname()
	const [, startTransition] = useTransition()

	const switchTo = (next: "en" | "af") => {
		if (next === locale) return
		startTransition(() => {
			router.replace(pathname, { locale: next })
		})
	}

	return (
		<div
			aria-label={t("label")}
			className={cn(
				"flex items-center gap-0.5 rounded-full bg-white/10 p-0.5 text-xs font-medium",
				className,
			)}
			role="group"
		>
			<button
				aria-label={t("english")}
				aria-pressed={locale === "en"}
				className={cn(
					"rounded-full px-2.5 py-1 transition-colors",
					locale === "en"
						? "bg-white text-mint-7"
						: "text-white/70 hover:text-white",
				)}
				onClick={() => switchTo("en")}
				type="button"
			>
				{t("shortEnglish")}
			</button>
			<button
				aria-label={t("afrikaans")}
				aria-pressed={locale === "af"}
				className={cn(
					"rounded-full px-2.5 py-1 transition-colors",
					locale === "af"
						? "bg-white text-mint-7"
						: "text-white/70 hover:text-white",
				)}
				onClick={() => switchTo("af")}
				type="button"
			>
				{t("shortAfrikaans")}
			</button>
		</div>
	)
}
