import "./globals.css"

/**
 * Root layout — keeps the document shell minimal.
 *
 * Per next-intl App Router conventions, the actual page chrome
 * (html/body attributes, fonts, providers, nav, footer) lives in
 * `[locale]/layout.tsx` so it has access to the active locale.
 *
 * This shell exists only because Next.js requires a root layout.
 */
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return children
}
