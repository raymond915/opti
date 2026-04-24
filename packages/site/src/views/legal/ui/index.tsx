import { PageBanner } from "@shared/components/page-banner"
import type { NextPage } from "next"

const Section = ({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) => (
	<section className="mt-10" id={id}>
		<h2 className="mb-4 text-2xl font-semibold text-mint-6">{title}</h2>
		{children}
	</section>
)

const Sub = ({ title, children }: { title: string; children: React.ReactNode }) => (
	<div className="mt-6">
		<h3 className="mb-2 text-lg font-semibold text-mint-6">{title}</h3>
		{children}
	</div>
)

const Body = ({ children }: { children: React.ReactNode }) => (
	<p className="mb-3 text-base leading-relaxed text-mint-5/80">{children}</p>
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

export const LegalPage: NextPage = () => {
	return (
		<>
			<PageBanner
				anchorId="policies"
				anchorText="Read policies"
				body="This page contains OptiHR's Privacy Notice (POPIA), Terms of Use, and Cookie Policy. Please read these documents carefully."
				title="Legal & Privacy Information"
			/>

			<div className="container mx-auto max-w-3xl px-inner-padding py-section-gap" id="policies">

				{/* Table of contents */}
				<nav className="mb-10 rounded-lg border border-mint-2/30 bg-muted-1 p-6">
					<p className="mb-3 text-sm font-semibold uppercase tracking-wider text-mint-4">On this page</p>
					<ol className="flex flex-col gap-2 text-sm">
						{[
							["#privacy-notice", "1. Privacy Notice (POPIA)"],
							["#information-collected", "2. Personal Information We Collect"],
							["#lawful-basis", "3. Lawful Basis for Processing"],
							["#how-we-use", "4. How We Use Your Information"],
							["#retention", "5. Retention of Personal Information"],
							["#third-parties", "6. Sharing with Third Parties"],
							["#your-rights", "7. Your Rights Under POPIA"],
							["#information-officer", "8. Information Officer"],
							["#cookies", "9. Cookie Policy"],
							["#terms", "10. Terms of Use"],
							["#contact-legal", "11. Contact & Complaints"],
						].map(([href, label]) => (
							<li key={href as string}>
								<a className="text-mint-6 hover:underline" href={href as string}>{label}</a>
							</li>
						))}
					</ol>
				</nav>

				{/* 1. Privacy Notice */}
				<Section id="privacy-notice" title="1. Privacy Notice (POPIA)">
					<Body>
						OptiHR (Pty) Ltd ("OptiHR", "we", "our", "us") is committed to protecting your privacy and to the responsible, lawful handling of your personal information. This Privacy Notice is issued in compliance with the <strong>Protection of Personal Information Act 4 of 2013 (POPIA)</strong> and explains how we collect, use, store, and protect personal information.
					</Body>
					<Body>
						This notice applies to all personal information collected through our website, contact forms, service engagements, and any other interaction with OptiHR. By providing us with your personal information, you acknowledge that you have read and understood this notice.
					</Body>
					<Body>
						<strong>Last updated: March 2026</strong>
					</Body>
				</Section>

				{/* 2. Information Collected */}
				<Section id="information-collected" title="2. Personal Information We Collect">
					<Sub title="Information you provide directly">
						<Body>When you contact us, submit an enquiry, book a consultation, or engage our services, we may collect:</Body>
						<ul className="mb-4 ml-1 flex flex-col">
							<Item>Full name and job title</Item>
							<Item>Business name and industry</Item>
							<Item>Email address (personal and/or work)</Item>
							<Item>Telephone and mobile number</Item>
							<Item>Physical and postal address</Item>
							<Item>Information about your HR and employment challenges shared with us</Item>
						</ul>
					</Sub>
					<Sub title="Information collected automatically">
						<Body>When you visit our website, we automatically collect certain technical information, including:</Body>
						<ul className="mb-4 ml-1 flex flex-col">
							<Item>IP address and approximate geographic location</Item>
							<Item>Browser type, version, and operating system</Item>
							<Item>Pages visited, time spent on site, and referring URLs</Item>
							<Item>Cookie and similar tracking data (see our Cookie Policy below)</Item>
						</ul>
					</Sub>
					<Sub title="Information received during service delivery">
						<Body>
							When we provide HR consulting services, we may receive or process employee-related personal information on behalf of our clients. In such cases, OptiHR acts as an <strong>operator</strong> processing information on behalf of the responsible party (our client), and we do so strictly under contract and only for the agreed purpose.
						</Body>
					</Sub>
				</Section>

				{/* 3. Lawful Basis */}
				<Section id="lawful-basis" title="3. Lawful Basis for Processing">
					<Body>Under POPIA, we process personal information only where at least one of the following lawful conditions applies:</Body>
					<ul className="mb-4 ml-1 flex flex-col">
						<Item><strong>Consent</strong> — You have given specific, informed, and voluntary consent (e.g. submitting a contact form or subscribing to communications).</Item>
						<Item><strong>Contractual necessity</strong> — Processing is necessary to perform a contract with you, or to take steps at your request before entering a contract.</Item>
						<Item><strong>Legal obligation</strong> — Processing is required to comply with an obligation under South African law.</Item>
						<Item><strong>Legitimate interest</strong> — Processing is necessary for our legitimate business interests, provided these do not override your rights and interests.</Item>
					</ul>
				</Section>

				{/* 4. How We Use */}
				<Section id="how-we-use" title="4. How We Use Your Information">
					<Body>We use personal information only for the purposes for which it was collected, including:</Body>
					<ul className="mb-4 ml-1 flex flex-col">
						<Item>Responding to your enquiries and providing HR consulting services</Item>
						<Item>Processing and managing your service engagement and related contracts</Item>
						<Item>Sending relevant communications, proposals, or updates (where you have consented)</Item>
						<Item>Complying with our legal and regulatory obligations under South African law</Item>
						<Item>Improving our website and services through anonymised analytics</Item>
						<Item>Protecting OptiHR's legitimate business interests, including fraud prevention</Item>
					</ul>
					<Body>
						We do not sell, rent, or trade your personal information to any third party for their own marketing or commercial purposes.
					</Body>
				</Section>

				{/* 5. Retention */}
				<Section id="retention" title="5. Retention of Personal Information">
					<Body>We retain personal information only for as long as necessary to fulfil the purpose for which it was collected, or as required by applicable law:</Body>
					<ul className="mb-4 ml-1 flex flex-col">
						<Item><strong>Enquiry and contact form data</strong> — 3 years from last contact, unless an ongoing service relationship continues.</Item>
						<Item><strong>Client service records and contracts</strong> — 5 years after the conclusion of the service engagement, as required by the BCEA and general contract law.</Item>
						<Item><strong>Financial and invoicing records</strong> — 5 years as required by the Companies Act and SARS regulations.</Item>
						<Item><strong>Website analytics data</strong> — Up to 26 months in anonymised or aggregated form.</Item>
					</ul>
					<Body>Once the applicable retention period expires, personal information is securely deleted or permanently anonymised.</Body>
				</Section>

				{/* 6. Third Parties */}
				<Section id="third-parties" title="6. Sharing with Third Parties">
					<Body>We may share your personal information with trusted third parties strictly in the following circumstances:</Body>
					<ul className="mb-4 ml-1 flex flex-col">
						<Item><strong>Service providers</strong> — IT, hosting, and software providers who process data on our behalf under written agreements containing POPIA-compliant data processing terms.</Item>
						<Item><strong>Legal and professional advisors</strong> — Attorneys or other professionals where necessary to provide services or comply with legal obligations.</Item>
						<Item><strong>Regulatory authorities</strong> — Where required by law, court order, or lawful government request.</Item>
					</ul>
					<Body>All third-party processors are contractually bound to process your information only as instructed by us and in compliance with POPIA.</Body>
					<Body>
						OptiHR does not transfer personal information outside South Africa without ensuring adequate and appropriate protection measures are in place, as required by section 72 of POPIA.
					</Body>
				</Section>

				{/* 7. Your Rights */}
				<Section id="your-rights" title="7. Your Rights Under POPIA">
					<Body>As a data subject, you have the following rights under POPIA, which you may exercise at any time:</Body>
					<ul className="mb-4 ml-1 flex flex-col">
						<Item><strong>Right of access</strong> — Request a record of the personal information we hold about you.</Item>
						<Item><strong>Right to correction or deletion</strong> — Request that inaccurate, irrelevant, outdated, or incomplete information be corrected or deleted.</Item>
						<Item><strong>Right to object</strong> — Object to the processing of your personal information on reasonable grounds.</Item>
						<Item><strong>Right to withdraw consent</strong> — Where processing is based on consent, withdraw that consent at any time. Withdrawal does not affect the lawfulness of prior processing.</Item>
						<Item>
							<strong>Right to lodge a complaint</strong> — If you believe your rights have been violated, you may lodge a complaint with the <strong>Information Regulator of South Africa</strong> at{" "}
							<a className="text-mint-6 underline" href="https://www.justice.gov.za/inforeg/" rel="noopener noreferrer" target="_blank">www.justice.gov.za/inforeg</a>{" "}
							or email{" "}
							<a className="text-mint-6 underline" href="mailto:complaints.IR@justice.gov.za">complaints.IR@justice.gov.za</a>.
						</Item>
					</ul>
					<Body>To exercise any of these rights, please submit a written request to our Information Officer (see section 8). We will respond within 30 days of receipt.</Body>
				</Section>

				{/* 8. Information Officer */}
				<Section id="information-officer" title="8. Information Officer">
					<Body>
						In compliance with section 55 of POPIA, OptiHR has appointed an Information Officer who is responsible for ensuring the organisation's compliance with POPIA and for handling all data subject requests and complaints.
					</Body>
					<div className="mt-4 rounded-lg border border-mint-2/30 bg-muted-1 p-6">
						<p className="mb-3 text-sm font-semibold uppercase tracking-wider text-mint-4">Information Officer Details</p>
						<div className="flex flex-col gap-2 text-base text-mint-5/90">
							<p><strong>Name:</strong> Raymond Hauptfleisch</p>
							<p><strong>Organisation:</strong> OptiHR (Pty) Ltd</p>
							<p>
								<strong>Email:</strong>{" "}
								<a className="text-mint-6 underline" href="mailto:hello@optihr.co.za">hello@optihr.co.za</a>
							</p>
							<p>
								<strong>Phone:</strong>{" "}
								<a className="text-mint-6 underline" href="tel:+27875511622">087 551 1622</a>
							</p>
						</div>
					</div>
					<Body>
						All data subject access requests, requests for correction or deletion, objections to processing, or POPIA-related complaints should be directed to the Information Officer in writing at the contact details above.
					</Body>
				</Section>

				{/* 9. Cookie Policy */}
				<Section id="cookies" title="9. Cookie Policy">
					<Body>
						Our website uses cookies and similar tracking technologies to improve your browsing experience, analyse site traffic, and understand how visitors interact with our content.
					</Body>
					<Sub title="What are cookies?">
						<Body>Cookies are small text files stored on your device when you visit a website. They allow the website to recognise your device on return visits and remember certain preferences or actions.</Body>
					</Sub>
					<Sub title="Types of cookies we use">
						<ul className="mb-4 ml-1 flex flex-col">
							<Item><strong>Strictly necessary cookies</strong> — Essential for the website to function correctly. These cannot be disabled as they are required for core functionality.</Item>
							<Item><strong>Analytical / performance cookies</strong> — Help us understand how visitors interact with our website by collecting anonymised or aggregated data. We use this information to improve our website.</Item>
							<Item><strong>Functional cookies</strong> — Allow the website to remember choices you have made (such as form progress) to provide an improved, personalised experience.</Item>
						</ul>
					</Sub>
					<Sub title="Managing your cookie preferences">
						<Body>
							You can control and manage cookies through your browser settings at any time. Please note that disabling certain cookies may affect the functionality of parts of our website. You may also manage your cookie consent preferences using the banner shown on your first visit to our website.
						</Body>
					</Sub>
				</Section>

				{/* 10. Terms of Use */}
				<Section id="terms" title="10. Terms of Use">
					<Body>
						By accessing and using the OptiHR website, you agree to these terms of use. The content published on this site is provided for general information purposes only. While we take care to ensure accuracy, OptiHR does not warrant that the information is complete, current, or free from error.
					</Body>
					<Body>
						<strong>Nothing on this website constitutes legal advice.</strong> Please contact us directly for professional advice specific to your circumstances.
					</Body>
					<Sub title="Intellectual property">
						<Body>All content, text, logos, graphics, and materials on this website are the intellectual property of OptiHR (Pty) Ltd. They may not be reproduced, distributed, modified, or used in any form without prior written permission from OptiHR.</Body>
					</Sub>
					<Sub title="Links to third-party websites">
						<Body>Our website may contain links to third-party websites. OptiHR is not responsible for the privacy practices, accuracy, or content of those websites and we encourage you to read their privacy notices independently.</Body>
					</Sub>
					<Sub title="Limitation of liability">
						<Body>OptiHR shall not be liable for any direct, indirect, or consequential loss or damage arising from reliance on information contained on this website. Use of this site is entirely at your own risk.</Body>
					</Sub>
				</Section>

				{/* 11. Contact & Complaints */}
				<Section id="contact-legal" title="11. Contact & Complaints">
					<Body>For any questions or concerns about this Privacy Notice, your personal information, or these terms, please contact our Information Officer:</Body>
					<div className="mt-4 rounded-lg border border-mint-2/30 bg-muted-1 p-6">
						<div className="flex flex-col gap-2 text-base text-mint-5/90">
							<p><strong>OptiHR (Pty) Ltd</strong></p>
							<p>
								Email:{" "}
								<a className="text-mint-6 underline" href="mailto:hello@optihr.co.za">hello@optihr.co.za</a>
							</p>
							<p>
								Phone:{" "}
								<a className="text-mint-6 underline" href="tel:+27875511622">087 551 1622</a>
							</p>
						</div>
					</div>
					<Body>
						If you are not satisfied with how we have handled your personal information or your request, you have the right to lodge a complaint directly with the <strong>Information Regulator of South Africa</strong>:
					</Body>
					<div className="mt-2 rounded-lg border border-mint-2/30 bg-muted-1 p-6">
						<div className="flex flex-col gap-2 text-base text-mint-5/90">
							<p><strong>Information Regulator (South Africa)</strong></p>
							<p>Email: <a className="text-mint-6 underline" href="mailto:complaints.IR@justice.gov.za">complaints.IR@justice.gov.za</a></p>
							<p>
								Website:{" "}
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
