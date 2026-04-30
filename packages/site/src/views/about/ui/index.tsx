import { BulletPoint } from "@shared/components/bullet-point"
import { LargeParagraph } from "@shared/components/large-paragraph"
import { ContainedLayout } from "@shared/components/layout"
import {
	HighlightBlock,
	HighlightBlockBody,
	HighlightBlockButton,
	HighlightBlockSubtitle,
	HighlightBlockTitle,
} from "@shared/components/layout/highlight-block"
import { PageBanner } from "@shared/components/page-banner"
import { SectionSubtitle } from "@shared/components/section-subtitle"
import { H2, P } from "@shared/components/typography"
import { AudienceColumnSection } from "@widgets/audience-column-section"
import { ClientLogos } from "@widgets/client-logos/ui"
import { ComparisonSection } from "@widgets/comparison-section/ui"
import { TestimonialSection } from "@widgets/testimonial/ui/testimonial-section"
import type { NextPage } from "next"
import { useTranslations } from "next-intl"
import Image from "next/image"

export const AboutPage: NextPage = () => {
	const t = useTranslations("About")

	const whyChooseCards = [
		{ icon: "⚖️", title: t("whyChoose.card1Title"), body: t("whyChoose.card1Body") },
		{ icon: "🏆", title: t("whyChoose.card2Title"), body: t("whyChoose.card2Body") },
		{ icon: "🎓", title: t("whyChoose.card3Title"), body: t("whyChoose.card3Body") },
		{ icon: "🛡️", title: t("whyChoose.card4Title"), body: t("whyChoose.card4Body") },
		{ icon: "🔍", title: t("whyChoose.card5Title"), body: t("whyChoose.card5Body") },
		{ icon: "🤝", title: t("whyChoose.card6Title"), body: t("whyChoose.card6Body") },
	]

	const raymondBullets = [
		t("raymond.bullet1"),
		t("raymond.bullet2"),
		t("raymond.bullet3"),
		t("raymond.bullet4"),
	]

	const rhodeneBullets = [
		t("rhodene.bullet1"),
		t("rhodene.bullet2"),
		t("rhodene.bullet3"),
		t("rhodene.bullet4"),
	]

	return (
		<>
			<PageBanner
				anchorId="/contact"
				anchorText={t("banner.anchorText")}
				body={t("banner.body")}
				title={t("banner.title")}
			/>
			<LargeParagraph
				ctaHref="/contact"
				ctaLabel={t("mission.cta")}
				description={t("mission.description")}
				heading={t("mission.heading")}
				title={t("mission.title")}
			/>
			<HighlightBlock
				background="white"
				body={t("raymond.body")}
				buttonHref="/contact"
				buttonText={t("raymond.cta")}
				media={{
					type: "component",
					mediaNode: (
						<div className="relative w-full">
							<div className="absolute inset-0 z-10 bg-radial-[at_50%_35%] from-0% from-mint-1/0 via-60% via-mint-1/50 to-100% to-mint-1 opacity-70" />
							<div className="absolute inset-0 z-10 bg-mint-2 opacity-40 mix-blend-darken" />
							<div className="relative h-full w-full">
								<Image
									alt={"Raymond Hauptfleisch, Founder of OptiHR"}
									className="object-cover"
									fill={true}
									src="/Optihr-Raymond-Hauptfleisch-Portrait.jpg"
								/>
							</div>
						</div>
					),
				}}
				mediaPosition={"left"}
				subtitle={t("raymond.subtitle")}
				title={t("raymond.title")}
			>
				<HighlightBlockSubtitle />
				<HighlightBlockTitle />
				<HighlightBlockBody />
				<ul className="mt-fluid-3 flex flex-col gap-fluid-3">
					{raymondBullets.map((bullet) => (
						<BulletPoint
							content={bullet}
							key={bullet}
						/>
					))}
				</ul>
				<HighlightBlockButton />
			</HighlightBlock>
			<HighlightBlock
				background="white"
				body={t("rhodene.body")}
				buttonHref="/contact"
				buttonText={t("rhodene.cta")}
				media={{
					type: "component",
					mediaNode: (
						<div className="relative h-full w-full">
							<Image
								alt={"Rhodene Duncan, Cape Town Director at OptiHR"}
								className="object-cover object-top"
								fill={true}
								src="/Optihr-Rhodene-Duncan-Portrait.jpg"
							/>
							<div className="absolute inset-0 bg-mint-2/40 mix-blend-darken" />
							<div className="absolute inset-0 bg-radial-[at_50%_35%] from-0% from-mint-1/0 via-60% via-mint-1/50 to-100% to-mint-1 opacity-70" />
						</div>
					),
				}}
				mediaPosition={"right"}
				subtitle={t("rhodene.subtitle")}
				title={t("rhodene.title")}
			>
				<HighlightBlockSubtitle />
				<HighlightBlockTitle />
				<HighlightBlockBody />
				<ul className="mt-fluid-3 flex flex-col gap-fluid-3">
					{rhodeneBullets.map((bullet) => (
						<BulletPoint
							content={bullet}
							key={bullet}
						/>
					))}
				</ul>
				<HighlightBlockButton />
			</HighlightBlock>
			<ComparisonSection />

			{/* Why Choose OptiHR */}
			<ContainedLayout className="max-h-none flex flex-col gap-fluid-4 bg-muted-1">
				<div className="col-span-full flex flex-col gap-fluid-1">
					<SectionSubtitle isDark title={t("whyChoose.subtitle")} />
					<H2 className="text-mint-6">{t("whyChoose.heading")}</H2>
					<P className="text-mint-5/70 max-w-2xl">
						{t("whyChoose.body")}
					</P>
				</div>
				<div className="col-span-full grid grid-cols-1 gap-inner-padding md:grid-cols-2 lg:grid-cols-3">
					{whyChooseCards.map((item) => (
						<div
							className="flex flex-col gap-4 rounded-inner border border-mint-2/20 bg-white p-inner-padding"
							key={item.title}
						>
							<div className="flex items-center gap-3">
								<span className="text-2xl" aria-hidden="true">{item.icon}</span>
								<P className="font-semibold text-mint-6">{item.title}</P>
							</div>
							<div className="h-px bg-mint-2/30" />
							<P className="text-mint-5/80 text-sm leading-relaxed">{item.body}</P>
						</div>
					))}
				</div>
			</ContainedLayout>

			<HighlightBlock
				background="green"
				body={t("strengthen.body")}
				buttonHref="/contact"
				buttonText={t("strengthen.cta")}
				media={{
					type: "image",
					imageProps: {
						alt: "OptiHR — Strengthen your HR today",
						src: "/Optihr-Raymond-Hauptfleisch-Portrait.jpg",
					},
					containerClassnames: undefined,
				}}
				mediaPosition={"right"}
				title={t("strengthen.title")}
			>
				<HighlightBlockSubtitle />
				<HighlightBlockTitle />
				<HighlightBlockBody />
				<HighlightBlockButton />
			</HighlightBlock>
			<AudienceColumnSection />
			<TestimonialSection
				testimonials={[
					{
						_id: "testimonial-1",
						_type: "testimonial",
						_createdAt: "",
						_updatedAt: "",
						_rev: "",
						name: t("testimonials.t1Name"),
						role: t("testimonials.t1Role"),
						company: t("testimonials.t1Company"),
						testimonial: [
							{
								_type: "block",
								_key: "t1-block",
								style: "normal",
								children: [
									{
										_type: "span",
										_key: "t1-span",
										text: t("testimonials.t1Quote"),
									},
								],
							},
						],
					},
					{
						_id: "testimonial-2",
						_type: "testimonial",
						_createdAt: "",
						_updatedAt: "",
						_rev: "",
						name: t("testimonials.t2Name"),
						role: t("testimonials.t2Role"),
						company: t("testimonials.t2Company"),
						testimonial: [
							{
								_type: "block",
								_key: "t2-block",
								style: "normal",
								children: [
									{
										_type: "span",
										_key: "t2-span",
										text: t("testimonials.t2Quote"),
									},
								],
							},
						],
					},
					{
						_id: "testimonial-3",
						_type: "testimonial",
						_createdAt: "",
						_updatedAt: "",
						_rev: "",
						name: t("testimonials.t3Name"),
						role: t("testimonials.t3Role"),
						company: t("testimonials.t3Company"),
						testimonial: [
							{
								_type: "block",
								_key: "t3-block",
								style: "normal",
								children: [
									{
										_type: "span",
										_key: "t3-span",
										text: t("testimonials.t3Quote"),
									},
								],
							},
						],
					},
				]}
			/>
			<ClientLogos />
		</>
	)
}

export default AboutPage
