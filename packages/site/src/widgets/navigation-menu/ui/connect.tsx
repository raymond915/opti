import { SocialIcon } from "@shared/components/social-icon"
import Link from "next/link"

export const Connect = () => {
	return (
		<div className="flex items-end justify-between gap-2 text-white">
			<div className="flex flex-col gap-1 text-fluid-n1">
				<Link href="mailto:hello@optihr.co.za">hello@optihr.co.za</Link>
				<Link href="tel:+27875500932">087 550 0932</Link>
			</div>
			<div className="*bg-mint-3/10 mt-fluid-2 flex gap-fluid-2 *:text-mint-3">
				{/*TODO: Add correct links*/}
				<SocialIcon
					href={"/"}
					icon={"whatsapp"}
				/>
				<SocialIcon
					href={"/"}
					icon={"linkedin"}
				/>
			</div>
		</div>
	)
}
