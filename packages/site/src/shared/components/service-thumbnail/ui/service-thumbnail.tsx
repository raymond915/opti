import { Button } from "@shared/components/button"
import { H3 } from "@shared/components/typography"
import Link from "next/link"
import type { ServiceThumbnailProps } from "../model/schema"

export const ServiceThumbnail = ({ ...props }: ServiceThumbnailProps) => {
	return (
		<article>
			<Link href={props.buttonHref}>
				<H3>{props.title}</H3>
				<p>{props.body}</p> {/* was props.title, fix to body */}
				<Button
					href={props.buttonHref}
					size="lg"
				>
					Learn more
				</Button>
			</Link>
		</article>
	)
}
