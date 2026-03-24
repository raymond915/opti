import { Button } from "@shared/components/button/ui/button"

export default function Page() {
	return (
		<div className="pt-80">
			<Button
				background={"muted"}
				href={"/playground"}
				size={"lg"}
			>
				Testing the button
			</Button>
		</div>
	)
}
