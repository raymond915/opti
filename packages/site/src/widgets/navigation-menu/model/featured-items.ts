/**
 * Items shown in the always-visible top nav strip (next to the menu button).
 *
 * `labelKey` references a key in messages/{locale}.json under "Nav".
 * The rendering component looks up the translation via useTranslations.
 */
export const featuredItems = [
	{
		labelKey: "ourServices",
		href: "/services",
	},
	{
		labelKey: "contactUs",
		href: "/contact",
	},
] as const

export type FeaturedItemKey = (typeof featuredItems)[number]["labelKey"]
