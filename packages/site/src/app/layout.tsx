import type { Metadata } from "next"
import { Be_Vietnam_Pro } from "next/font/google"
import "./globals.css"
import { MainLayout } from "@shared/components/layout"
import { Footer } from "../widgets/footer/ui"
import { NavigationMenu } from "../widgets/navigation-menu/ui"
import { CookieBanner } from "../widgets/cookie-banner"
import { ChatWidget } from "../widgets/chat-widget/ui"
import { FloatingContact } from "../widgets/floating-contact/ui"

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

export const metadata: Metadata = {
	title: "OptiHR",
	description: "Website Description",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${beVietnamPro.className} mx-auto w-full max-w-[1800px] overflow-x-clip overflow-y-scroll antialiased selection:bg-mint-3/20`}
			>
				<NavigationMenu />
				<MainLayout>{children}</MainLayout>
				<Footer />
				<CookieBanner />
				<FloatingContact />
				<ChatWidget />
			</body>
		</html>
	)
}
