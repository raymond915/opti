import { PageBanner } from "@shared/components/page-banner"
import { H2, H3, P } from "@shared/components/typography"
import type { NextPage } from "next"
import { useTranslations } from "next-intl"

const Section = ({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) => (
	<section className="mt-fluid-4" id={id}>
		<H2 className="mb-fluid-2 text-mint-6">{title}</H2>
		{children}
	</section>
)

const Sub = ({ title, children }: { title: string; children: React.ReactNode }) => (
	<div className="mt-fluid-3">
		<H3 className="mb-fluid-1 text-mint-6">{title}</H3>
		{children}
	</div>
)

const Body = ({ children }: { children: React.ReactNode }) => (
	<P className="mb-fluid-2 text-mint-5/80 leading-relaxed">{children}</P>
)

const Item = ({ children }: { children: React.ReactNode }) => (
	<li className="mb-2 flex items-start gap-2">
		<span className="mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-mint-4/20">
			<svg viewBox="0 0 16 16" fill="none" className="h-2.5 w-2.5 text-mint-4" aria-hidden="true">
				<path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		</span>
		<span className="text-base leading-relaxed text-mint-5/80">{children}</span>
	</li>
)

const SECTION_ANCHORS = [
	"privacy-notice",
	"information-collected",
	"lawful-basis",
	"how-we-use",
	"retention",
	"third-parties",
	"your-rights",
	"information-officer",
	"cookies",
	"terms",
	"contact-legal",
] as const

export const LegalPage: NextPage = () => {
	const t = useTranslations("Legal")
	const tocItems = t.raw("toc.items") as string[]

	const sub1Items = t.raw("section2.sub1Items") as string[]
	const sub2Items = t.raw("section2.sub2Items") as string[]
	const lawfulItems = t.raw("section3.items") as { label: string; body: string }[]
	const useItems = t.raw("section4.items") as string[]
	const retentionItems = t.raw("section5.items") as { label: string; body: string }[]
	const sharingItems = t.raw("section6.items") as { label: string; body: string }[]
	const rightsItems = t.raw("section7.items") as { label: string; body: string }[]
	const cookieItems = t.raw("section9.sub2Items") as { label: string; body: string }[]

	return (
		<>
			<PageBanner
				anchorId="policies"
				anchorText={t("banner.anchorText")}
				body={t("banner.body")}
				title={t("banner.title")}
			/>

			<div className="container mx-auto max-w-3xl px-inner-padding py-section-gap" id="policies">

				{/* Table of contents */}
				<nav className="mb-10 rounded-lg border border-mint-2/30 bg-muted-1 p-6">
					<p className="mb-3 text-sm font-semibold uppercase tracking-wider text-mint-4">{t("toc.heading")}</p>
					<ol className="flex flex-col gap-2 text-sm">
						{tocItems.map((label, i) => (
							<li key={SECTION_ANCHORS[i]}>
								<a className="text-mint-6 hover:underline" href={`#${SECTION_ANCHORS[i]}`}>{label}</a>
							</li>
						))}
					</ol>
				</nav>

				{/* 1. Privacy Notice */}
				<Section id="privacy-notice" title={t("section1.title")}>
					<Body>
						{t("section1.para1Pre")}
						<strong>{t("section1.para1Strong")}</strong>
						{t("section1.para1Post")}
					</Body>
					<Body>{t("section1.para2")}</Body>
					<Body>
						<strong>{t("section1.para3")}</strong>
					</Body>
				</Section>

				{/* 2. Information Collected */}
				<Section id="information-collected" title={t("section2.title")}>
					<Sub title={t("section2.sub1Title")}>
						<Body>{t("section2.sub1Body")}</Body>
						<ul className="mb-4 ml-1 flex flex-col">
							{sub1Items.map((item) => (
								<Item key={item}>{item}</Item>
							))}
						</ul>
					</Sub>
					<Sub title={t("section2.sub2Title")}>
						<Body>{t("section2.sub2Body")}</Body>
						<ul className="mb-4 ml-1 flex flex-col">
							{sub2Items.map((item) => (
								<Item key={item}>{item}</Item>
							))}
						</ul>
					</Sub>
					<Sub title={t("section2.sub3Title")}>
						<Body>
							{t("section2.sub3BodyPre")}
							<strong>{t("section2.sub3BodyStrong")}</strong>
							{t("section2.sub3BodyPost")}
						</Body>
					</Sub>
				</Section>

				{/* 3. Lawful Basis */}
				<Section id="lawful-basis" title={t("section3.title")}>
					<Body>{t("section3.body")}</Body>
					<ul className="mb-4 ml-1 flex flex-col">
						{lawfulItems.map((item) => (
							<Item key={item.label}>
								<strong>{item.label}</strong>
								{item.body}
							</Item>
						))}
					</ul>
				</Section>

				{/* 4. How We Use */}
				<Section id="how-we-use" title={t("section4.title")}>
					<Body>{t("section4.body")}</Body>
					<ul className="mb-4 ml-1 flex flex-col">
						{useItems.map((item) => (
							<Item key={item}>{item}</Item>
						))}
					</ul>
					<Body>{t("section4.closing")}</Body>
				</Section>

				{/* 5. Retention */}
				<Section id="retention" title={t("section5.title")}>
					<Body>{t("section5.body")}</Body>
					<ul className="mb-4 ml-1 flex flex-col">
						{retentionItems.map((item) => (
							<Item key={item.label}>
								<strong>{item.label}</strong>
								{item.body}
							</Item>
						))}
					</ul>
					<Body>{t("section5.closing")}</Body>
				</Section>

				{/* 6. Third Parties */}
				<Section id="third-parties" title={t("section6.title")}>
					<Body>{t("section6.body")}</Body>
					<ul className="mb-4 ml-1 flex flex-col">
						{sharingItems.map((item) => (
							<Item key={item.label}>
								<strong>{item.label}</strong>
								{item.body}
							</Item>
						))}
					</ul>
					<Body>{t("section6.closing1")}</Body>
					<Body>{t("section6.closing2")}</Body>
				</Section>

				{/* 7. Your Rights */}
				<Section id="your-rights" title={t("section7.title")}>
					<Body>{t("section7.body")}</Body>
					<ul className="mb-4 ml-1 flex flex-col">
						{rightsItems.map((item) => (
							<Item key={item.label}>
								<strong>{item.label}</strong>
								{item.body}
							</Item>
						))}
						<Item>
							<strong>{t("section7.complaintLabel")}</strong>
							{t("section7.complaintPre")}
							<strong>{t("section7.complaintRegulator")}</strong>
							{t("section7.complaintMid")}
							<a className="text-mint-6 underline" href="https://www.justice.gov.za/inforeg/" rel="noopener noreferrer" target="_blank">{t("section7.complaintLinkText")}</a>
							{t("section7.complaintBetween")}
							<a className="text-mint-6 underline" href="mailto:complaints.IR@justice.gov.za">{t("section7.complaintEmail")}</a>
							{t("section7.complaintEnd")}
						</Item>
					</ul>
					<Body>{t("section7.closing")}</Body>
				</Section>

				{/* 8. Information Officer */}
				<Section id="information-officer" title={t("section8.title")}>
					<Body>{t("section8.body1")}</Body>
					<div className="mt-4 rounded-lg border border-mint-2/30 bg-muted-1 p-6">
						<p className="mb-3 text-sm font-semibold uppercase tracking-wider text-mint-4">{t("section8.cardHeading")}</p>
						<div className="flex flex-col gap-2 text-base text-mint-5/90">
							<p><strong>{t("section8.nameLabel")}</strong> {t("section8.name")}</p>
							<p><strong>{t("section8.orgLabel")}</strong> {t("section8.org")}</p>
							<p>
								<strong>{t("section8.emailLabel")}</strong>{" "}
								<a className="text-mint-6 underline" href="mailto:hello@optihr.co.za">hello@optihr.co.za</a>
							</p>
							<p>
								<strong>{t("section8.phoneLabel")}</strong>{" "}
								<a className="text-mint-6 underline" href="tel:+27875511622">087 551 1622</a>
							</p>
						</div>
					</div>
					<Body>{t("section8.body2")}</Body>
				</Section>

				{/* 9. Cookie Policy */}
				<Section id="cookies" title={t("section9.title")}>
					<Body>{t("section9.body")}</Body>
					<Sub title={t("section9.sub1Title")}>
						<Body>{t("section9.sub1Body")}</Body>
					</Sub>
					<Sub title={t("section9.sub2Title")}>
						<ul className="mb-4 ml-1 flex flex-col">
							{cookieItems.map((item) => (
								<Item key={item.label}>
									<strong>{item.label}</strong>
									{item.body}
								</Item>
							))}
						</ul>
					</Sub>
					<Sub title={t("section9.sub3Title")}>
						<Body>{t("section9.sub3Body")}</Body>
					</Sub>
				</Section>

				{/* 10. Terms of Use */}
				<Section id="terms" title={t("section10.title")}>
					<Body>{t("section10.body1")}</Body>
					<Body>
						{t("section10.body2Pre")}
						<strong>{t("section10.body2Strong")}</strong>
						{t("section10.body2Post")}
					</Body>
					<Sub title={t("section10.sub1Title")}>
						<Body>{t("section10.sub1Body")}</Body>
					</Sub>
					<Sub title={t("section10.sub2Title")}>
						<Body>{t("section10.sub2Body")}</Body>
					</Sub>
					<Sub title={t("section10.sub3Title")}>
						<Body>{t("section10.sub3Body")}</Body>
					</Sub>
				</Section>

				{/* 11. Contact & Complaints */}
				<Section id="contact-legal" title={t("section11.title")}>
					<Body>{t("section11.body1")}</Body>
					<div className="mt-4 rounded-lg border border-mint-2/30 bg-muted-1 p-6">
						<div className="flex flex-col gap-2 text-base text-mint-5/90">
							<p><strong>{t("section11.contactCardOrg")}</strong></p>
							<p>
								{t("section11.contactCardEmailLabel")}{" "}
								<a className="text-mint-6 underline" href="mailto:hello@optihr.co.za">hello@optihr.co.za</a>
							</p>
							<p>
								{t("section11.contactCardPhoneLabel")}{" "}
								<a className="text-mint-6 underline" href="tel:+27875511622">087 551 1622</a>
							</p>
						</div>
					</div>
					<Body>
						{t("section11.body2Pre")}
						<strong>{t("section11.body2Strong")}</strong>
						{t("section11.body2Post")}
					</Body>
					<div className="mt-2 rounded-lg border border-mint-2/30 bg-muted-1 p-6">
						<div className="flex flex-col gap-2 text-base text-mint-5/90">
							<p><strong>{t("section11.regulatorOrg")}</strong></p>
							<p>{t("section11.regulatorEmailLabel")} <a className="text-mint-6 underline" href="mailto:complaints.IR@justice.gov.za">complaints.IR@justice.gov.za</a></p>
							<p>
								{t("section11.regulatorWebsiteLabel")}{" "}
								<a className="text-mint-6 underline" href="https://www.justice.gov.za/inforeg/" rel="noopener noreferrer" target="_blank">
									www.justice.gov.za/inforeg
								</a>
							</p>
						</div>
					</div>
				</Section>

			</div>
		</>
	)
}

export default LegalPage
