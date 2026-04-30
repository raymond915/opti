/**
 * Footer column structure.
 *
 * `headingKey` references "Footer.{key}" in messages/{locale}.json.
 * `labelKey` for each item references either "Footer.{key}" or "Nav.{key}"
 * depending on `labelNamespace` (default: "Nav" for cross-reuse, "Footer" for
 * footer-specific labels). Items with literal labels (email, phone) bypass
 * translation by using `literal`.
 *
 * The rendering component looks up translations via useTranslations.
 */

export type FooterMenuItem = {
	href: string
	labelKey?: string
	/** "Nav" (default) or "Footer" — which message namespace to look up labelKey in */
	labelNamespace?: "Nav" | "Footer"
	/** If set, render this exact string instead of looking up labelKey (for emails, phones, brand strings) */
	literal?: string
}

export type FooterMenuColumn = {
	headingKey: string
	items: FooterMenuItem[]
}

export const menuItems: FooterMenuColumn[] = [
	{
		headingKey: "discoverOptiHR",
		items: [
			{ href: "/", labelKey: "home" },
			{ href: "/about-us", labelKey: "aboutUs" },
			{ href: "/services", labelKey: "services" },
			{ href: "/pricing", labelKey: "pricing" },
			{ href: "/popia", labelKey: "popiaCompliance" },
			{ href: "/insights", labelKey: "optiBuzzBlog", labelNamespace: "Footer" },
			{ href: "/faq", labelKey: "faq" },
			{ href: "/contact", labelKey: "contactUs" },
		],
	},
	{
		headingKey: "whoWeSupport",
		items: [
			{ href: "/for-small-businesses", labelKey: "forSmallBusinesses", labelNamespace: "Footer" },
			{ href: "/for-large-businesses", labelKey: "forLargeBusinesses", labelNamespace: "Footer" },
			{ href: "/for-independent-schools", labelKey: "forIndependentSchools", labelNamespace: "Footer" },
			{ href: "/ai-in-the-workplace", labelKey: "aiInTheWorkplace" },
		],
	},
	{
		headingKey: "connect",
		items: [
			{ href: "mailto:hello@optihr.co.za", literal: "hello@optihr.co.za" },
			{ href: "tel:+27875511622", literal: "087 551 1622" },
			{ href: "https://wa.me/27686362218", labelKey: "chatWhatsApp", labelNamespace: "Footer" },
			{ href: "/contact", labelKey: "bookConsultation", labelNamespace: "Footer" },
		],
	},
]

export const socialIcons = [
	{
		href: "https://wa.me/27686362218",
		icon: "whatsapp",
	},
	{
		// TODO: Replace with the OptiHR company LinkedIn profile URL
		href: "https://www.linkedin.com/company/optihr",
		icon: "linkedin",
	},
] as const
