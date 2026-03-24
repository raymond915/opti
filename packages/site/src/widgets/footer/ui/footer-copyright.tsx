import Link from "next/link"

export const Copyright = () => {
	return (
		<div className="grid grid-cols-2 items-center gap-x-gutter text-fluid-n1 text-mint-1">
			<div>
				{`©Copyright OptiHR ${new Date().getFullYear()} . All rights reserved. Designed & Developed by `}
				<span className="font-semibold underline underline-offset-3 hover:text-mint-3">
					<Link href={"https://singer.agency"}>SINGER</Link>
				</span>
			</div>
			<div className="flex gap-fluid-3 font-medium">
				<Link href="/legal">Privacy Policy</Link>
				<Link href="/legal">Terms and Conditions</Link>
			</div>
			<div />
		</div>
	)
}
