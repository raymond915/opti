/**
 * Items in the expanded nav dropdown.
 *
 * `labelKey` references a key in messages/{locale}.json under "Nav".
 * The rendering component looks up the translation via useTranslations.
 */
export const subMenuItems = [
	{ labelKey: "home", href: "/" },
	{ labelKey: "aboutUs", href: "/about-us" },
	{ labelKey: "services", href: "/services" },
	{ labelKey: "aiInTheWorkplace", href: "/ai-in-the-workplace" },
	{ labelKey: "pricing", href: "/pricing" },
	{ labelKey: "popiaCompliance", href: "/popia" },
	{ labelKey: "optiBuzz", href: "/insights" },
	{ labelKey: "faq", href: "/faq" },
	{ labelKey: "contactUs", href: "/contact" },
	{ labelKey: "bookConsultation", href: "/contact" },
] as const

export type SubMenuItemKey = (typeof subMenuItems)[number]["labelKey"]
