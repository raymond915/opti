import { Button } from "@shared/components/button"
import { ContainedLayout } from "@shared/components/layout/contained-layout"
import { SectionSubtitle } from "@shared/components/section-subtitle"
import { H2, P } from "@shared/components/typography"

export const AboutSection = () => {
	return (
		<ContainedLayout>
			<div className="col-span-full md:col-span-6">
				<SectionSubtitle title={"Who we are"} />
			</div>
			<div className="col-span-full md:col-span-6 flex flex-col gap-gutter">
				<H2 className="wrap-normal block [&>span]:shrink-0 [&>span]:text-mint-4">
					You run your business.
					<br />
					Let OptiHR perfect your <span>HR solutions</span>,{" "}
					<span>compliance</span>, and <span>AI strategy</span>.
				</H2>
				<P className="max-w-2xl text-lg leading-relaxed">
					Founded by Raymond Hauptfleisch, an expert HR professional who has witnessed countless
					South African businesses struggle with outdated HR practices. After 15 years in corporate
					HR, Raymond spotted a critical gap: most HR consultants focus on problems, not
					possibilities.
				</P>
				<Button href={"/services"}>Explore our services</Button>
			</div>
		</ContainedLayout>
	)
}

export default () => null
