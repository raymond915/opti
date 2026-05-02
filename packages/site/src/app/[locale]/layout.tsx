import type { Metadata } from "next"
import { Be_Vietnam_Pro } from "next/font/google"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { MainLayout } from "@shared/components/layout"
import { Footer } from "../../widgets/footer/ui"
import { NavigationMenu } from "../../widgets/navigation-menu/ui"
import { CookieBanner } from "../../widgets/cookie-banner"
import { ChatWidget } from "../../widgets/chat-widget/ui"
import { FloatingContact } from "../../widgets/floating-contact/ui"
import { routing } from "../../i18n/routing"

const beVietnamPro = Be_Vietnam_Pro({
	variable: "--font-be-vietnam-pro",
	subsets: [
		"latin",
	],
	weight: [
		"400",
		"500",
		"600",
		"700",
	],
})

const SITE_URL = (
	process.env.NEXT_PUBLIC_SITE_URL || "https://opti-site-tau.vercel.app"
).replace(/\/$/, "")

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: "OptiHR — Specialist HR, Labour Law & AI Consulting | South Africa",
		template: "%s | OptiHR",
	},
	description:
		"Specialist HR, labour law, and AI consulting for South African businesses and independent schools. CCMA representation, compliance, and practical HR support — without the cost of a full-time hire.",
	openGraph: {
		title: "OptiHR — Specialist HR, Labour Law & AI Consulting",
		description:
			"Specialist HR, labour law, and AI consulting for South African businesses and independent schools.",
		type: "website",
		locale: "en_ZA",
		siteName: "OptiHR",
	},
}

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode
	params: Promise<{ locale: string }>
}>) {
	const { locale } = await params

	// Reject unsupported locales — next-intl will 404 the request.
	if (!hasLocale(routing.locales, locale)) {
		notFound()
	}

	// Required for Server Components inside this segment to access translations
	// without explicitly receiving the locale.
	setRequestLocale(locale)

	return (
		<html lang={locale === "af" ? "af-ZA" : "en-ZA"}>
			<body
				className={`${beVietnamPro.className} mx-auto w-full max-w-[1800px] overflow-x-clip overflow-y-scroll antialiased selection:bg-mint-3/20`}
			>
				<NextIntlClientProvider>
					<NavigationMenu />
					<MainLayout>{children}</MainLayout>
					<Footer />
					<CookieBanner />
					<FloatingContact />
					<ChatWidget />
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
