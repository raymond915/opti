"use client"
import { ActionButton } from "@shared/components/button"
import { H4, P } from "@shared/components/typography"
import { cn } from "@shared/lib/utils"
import Link from "next/link"
import type { ServiceCardProps } from "../model/schema"

export const ServiceCard = ({
	title,
	description,
	callToAction,
	href,
	hasIcon = true,
	...props
}: ServiceCardProps) => {
	return (
		<Link
			{...props}
			className={cn(
				"group/card flex flex-col justify-between rounded-inner bg-muted-1 p-inner-padding outline-mint-3 transition-all hover:bg-mint-3/20 hover:outline",
				!hasIcon && "bg-muted-2",
				props.className,
			)}
			href={href}
		>
			{/*TODO: Add hover ↑*/}
			{hasIcon && (
			<div className="size-fluid-6 shrink-0 rounded-full bg-mint-6 flex items-center justify-center overflow-hidden">
				<svg
					aria-hidden="true"
					className="w-[58%]"
					fill="none"
					viewBox="0 0 443 454"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						clipRule="evenodd"
						d="M225.85 0.101974C268.713 2.27742 302.806 37.7191 302.806 81.1261C302.806 124.544 268.713 159.986 225.85 162.15L221.68 162.264C176.868 162.264 140.543 125.938 140.543 81.1261C140.543 36.3255 176.868 0 221.68 0L225.85 0.101974ZM221.68 40.0645C198.997 40.0645 180.619 58.4538 180.607 81.1261C180.607 103.81 198.997 122.199 221.68 122.199L223.788 122.142C245.486 121.043 262.742 103.096 262.742 81.1261L262.685 79.0186C261.62 58.0233 244.783 41.1862 223.788 40.1212L221.68 40.0645Z"
						fill="#86f0a3"
						fillRule="evenodd"
					/>
					<path
						d="M32.3825 162.785C88.219 165.844 140.271 189.536 179.44 229.828L183.474 234.099C199.246 251.208 212.072 270.425 221.669 291.08C232.082 268.702 246.268 248.002 263.909 229.839L267.739 225.998C307.701 186.783 360.286 164.303 416.372 162.57L416.406 162.559L418.207 162.593C427.158 163.136 434.84 169.402 437.004 178.263L438.489 184.755C441.707 199.96 443.35 215.528 443.35 231.108L443.27 236.558C441.967 290.865 421.165 342.135 384.261 381.996L380.522 385.95C341.851 425.765 290.57 449.367 235.458 452.879H235.379L235.311 452.89C224.694 453.344 218.644 453.332 208.016 452.845L207.937 452.834H207.869C152.927 449.231 101.43 425.675 62.8161 385.95C23.5787 345.557 1.41631 292.678 0.0679828 236.546L0 231.097C0 213.296 2.13013 195.496 6.33373 178.251L6.34506 178.24L6.8436 176.506C9.7442 167.986 17.9248 162.309 26.9438 162.547H26.9665L32.3825 162.785ZM43.0557 205.07C41.8094 213.67 41.1749 222.383 41.1749 231.097L41.2315 235.527C42.3306 281.256 60.3913 324.312 92.3546 357.239L95.2325 360.15C123.695 388.182 159.986 405.722 199.212 410.673C200.255 403.433 200.878 396.125 201.048 388.783L201.082 384.67C201.082 338.77 184.029 295.306 152.973 261.757L149.913 258.539C121.043 228.808 83.6188 210.203 43.0557 205.07ZM400.282 205.07C361.079 210.022 324.765 227.595 296.303 255.627L293.425 258.539C260.408 292.508 242.257 337.286 242.257 384.67L242.302 388.783C242.461 396.125 243.084 403.433 244.126 410.673C284.678 405.552 322.114 386.947 350.995 357.239L354.043 354.021C384.114 321.548 401.053 279.806 402.107 235.538L402.163 231.097C402.163 222.372 401.529 213.67 400.282 205.07Z"
						fill="#86f0a3"
					/>
				</svg>
			</div>
		)}
			<div className="flex h-full flex-col gap-fluid-1 pt-40">
				<H4 className="flex w-full">{title}</H4>
				<P className="h-full text-pretty">{description}</P>
				<ActionButton
					background="white"
					className={"mt-fluid-2"}
					size="sm"
				>
					{callToAction}
				</ActionButton>
			</div>
		</Link>
	)
}
