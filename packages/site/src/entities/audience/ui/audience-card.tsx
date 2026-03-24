import { Button } from "@shared/components/button"
import { H2, P } from "@shared/components/typography"
import Image from "next/image"
import type { AudienceCardProps } from "../model/schema"

export const AudienceCard = ({ ...props }: AudienceCardProps) => {
	return (
		<div className="flex flex-col gap-fluid-1 rounded-outer bg-muted-1 p-inner-padding">
			<div className="relative aspect-3/2 w-full">
				{(props.imageProps.src as string).endsWith(".svg") ? (
					// eslint-disable-next-line @next/next/no-img-element
					<img
						alt={props.imageProps.alt}
						className="absolute inset-0 h-full w-full rounded-inner object-cover"
						src={props.imageProps.src as string}
					/>
				) : (
					<Image
						alt={props.imageProps.alt}
						className="w-full rounded-inner object-cover"
						fill={true}
						src={props.imageProps.src}
					/>
				)}
			</div>
			<div className="flex flex-col gap-fluid-1 p-fluid-1">
				<H2 className="text-fluid-1">{props.title}</H2>
				<P>{props.body}</P>
				<Button
					background="white"
					className={"mt-fluid-2"}
					href={props.href}
					size="sm"
				>
					{props.callToAction}
				</Button>
			</div>
		</div>
	)
}
