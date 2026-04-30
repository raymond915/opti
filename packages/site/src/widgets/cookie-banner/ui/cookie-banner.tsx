"use client"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"

const COOKIE_KEY = "optihr_cookie_consent"

export const CookieBanner = () => {
	const [visible, setVisible] = useState(false)
	const t = useTranslations("CookieBanner")

	useEffect(() => {
		try {
			const stored = localStorage.getItem(COOKIE_KEY)
			if (!stored) setVisible(true)
		} catch {
			// localStorage unavailable (e.g. private browsing) — don't show banner
		}
	}, [])

	const accept = () => {
		try { localStorage.setItem(COOKIE_KEY, "accepted") } catch { /* noop */ }
		setVisible(false)
	}

	const decline = () => {
		try { localStorage.setItem(COOKIE_KEY, "declined") } catch { /* noop */ }
		setVisible(false)
	}

	if (!visible) return null

	return (
		<div
			aria-live="polite"
			className="fixed bottom-0 left-0 right-0 z-50 border-t border-mint-2/30 bg-white/95 shadow-lg backdrop-blur-sm"
			role="region"
			aria-label={t("ariaLabel")}
		>
			<div className="mx-auto flex max-w-[1800px] flex-col gap-3 px-inner-padding py-4 sm:flex-row sm:items-center sm:justify-between">
				<p className="text-sm leading-relaxed text-mint-5/80 max-w-2xl">
					{t("body")}{" "}
					<strong>{t("acceptStrong")}</strong>{" "}
					{t("bodyContinued")}{" "}
					<a
						className="text-mint-6 underline hover:text-mint-4"
						href="/legal#cookies"
					>
						{t("readPolicy")}
					</a>
					.
				</p>
				<div className="flex shrink-0 gap-3">
					<button
						className="rounded-inner border border-mint-2/50 bg-transparent px-4 py-2 text-sm font-medium text-mint-5 transition-colors hover:border-mint-4 hover:text-mint-6"
						onClick={decline}
						type="button"
					>
						{t("decline")}
					</button>
					<button
						className="rounded-inner bg-mint-6 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-mint-5"
						onClick={accept}
						type="button"
					>
						{t("accept")}
					</button>
				</div>
			</div>
		</div>
	)
}
