import { cn } from "@shared/lib/utils"
import Link from "next/link"
import type { SocialIconProps } from "../model/schema"
import LinkedInIcon from "./linkedin"
import WhatsappIcon from "./whatsapp"

export const SocialIcon = ({ icon, href, className }: SocialIconProps) => {
	const renderIcon = (icon: SocialIconProps["icon"]) => {
		switch (icon) {
			case "whatsapp":
				return <WhatsappIcon />
			case "linkedin":
				return <LinkedInIcon />
		}
	}

	return (
		<Link
			className={cn(
				[
					"text-mint-1",
					"bg-mint-5",
					"size-12",
					"grid",
					"rounded-full",
					"*:place-self-center",
					"*:h-6",
				],
				className,
			)}
			href={href}
		>
			{renderIcon(icon)}
		</Link>
	)
}
