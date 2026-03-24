import type { FooterListProps } from "./schema"

export const menuItems: FooterListProps[] = [
	{
		heading: "Discover OptiHR",
		items: [
			{
				label: "Home",
				href: "/",
			},
			{
				label: "About Us",
				href: "/about-us",
			},
			{
				label: "Services",
				href: "/services",
			},
			{
				label: "Pricing",
				href: "/pricing",
			},
			{
				label: "POPIA Compliance",
				href: "/popia",
			},
			{
				label: "OptiBuzz — Blog & Insights",
				href: "/insights",
			},
			{
				label: "FAQ",
				href: "/faq",
			},
			{
				label: "Contact Us",
				href: "/contact",
			},
		],
	},
	{
		heading: "Who We Support",
		items: [
			{
				label: "For Small Businesses",
				href: "/for-small-businesses",
			},
			{
				label: "For Large Businesses",
				href: "/for-large-businesses",
			},
			{
				label: "For Independent Schools",
				href: "/for-independent-schools",
			},
			{
				label: "AI in the Workplace",
				href: "/ai-in-the-workplace",
			},
		],
	},
	{
		heading: "Connect",
		items: [
			{
				label: "hello@optihr.co.za",
				href: "mailto:hello@optihr.co.za",
			},
			{
				label: "087 550 0932",
				href: "tel:+27686362218",
			},
			{
				label: "Chat on WhatsApp",
				href: "https://wa.me/27686362218",
			},
			{
				label: "Book a consultation",
				href: "/contact",
			},
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
