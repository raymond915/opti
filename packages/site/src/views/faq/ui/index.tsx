import { PageBanner } from "@shared/components/page-banner"
import { FaqSection } from "@widgets/faq-section"
import type { NextPage } from "next"

export const FaqPage: NextPage = () => {
	return (
		<>
			<PageBanner
				anchorId="faq-list"
				anchorText="View FAQs"
				body="Find answers to common queries about our services."
				title="Frequently Asked Questions"
			/>
			<div
				className="col-span-full flex flex-col gap-section-gap"
				id="faq-list"
			>
				<FaqSection
					data={{
						title: "About OptiHR",
						subtitle: "Getting to know us",
						body: "",
						cta: { text: "Contact us", navigateTo: "/contact" },
						questions: [
							{
								question: "Who is OptiHR and what makes you different?",
								answer:
									"OptiHR is a specialist HR and industrial relations consultancy led by Raymond Hauptfleisch — an admitted attorney, qualified HR practitioner, and SACE-registered former educator. This rare combination of legal authority, HR expertise, and teaching background gives OptiHR a distinct advantage in helping businesses and independent schools navigate complex HR and labour challenges.",
							},
							{
								question: "Who do you work with?",
								answer:
									"We work with small businesses that need HR support without the cost of a full-time hire, large businesses and HR departments that need specialist IR and compliance depth, and independent schools navigating the unique HR challenges of the education sector.",
							},
							{
								question: "Do you work across South Africa or only in specific regions?",
								answer:
									"We primarily serve businesses in Gauteng but work with clients across South Africa. Many of our services — including policy development, compliance reviews, and CCMA support — can be delivered remotely.",
							},
						],
					}}
					key="about"
				/>

				<FaqSection
					data={{
						title: "Labour Law & Compliance",
						subtitle: "Understanding your legal obligations",
						body: "",
						cta: { text: "View compliance services", navigateTo: "/services/compliance" },
						questions: [
							{
								question: "Which labour laws apply to my business?",
								answer:
									"All South African employers are subject to the Basic Conditions of Employment Act (BCEA), the Labour Relations Act (LRA), and the Occupational Health and Safety Act (OHSA). Designated employers (50+ employees) must also comply with the Employment Equity Act (EEA). All businesses must comply with POPIA for employee data.",
							},
							{
								question: "Do labour laws apply to small businesses too?",
								answer:
									"Yes — from the moment you employ someone, labour law applies. The BCEA minimum standards, LRA dismissal protections, and OHSA duties apply regardless of business size. Even a single CCMA dispute handled incorrectly can cost more than a year of HR support.",
							},
							{
								question: "How do we know if we're compliant?",
								answer:
									"The most reliable way is a professional labour audit. OptiHR reviews your contracts, policies, payroll practices, and procedures against current legislation and identifies compliance gaps. Many businesses discover significant risks they weren't aware of.",
							},
							{
								question: "What happens if the Department of Labour inspects us?",
								answer:
									"An unannounced DOL inspection can check employment contracts, payroll records, working hours, leave records, OHSA compliance, and employment equity reports. OptiHR ensures you're prepared for inspection at any time, with documentation that meets all legislative requirements.",
							},
						],
					}}
					key="labour-law"
				/>

				<FaqSection
					data={{
						title: "CCMA & Dispute Resolution",
						subtitle: "Navigating workplace disputes",
						body: "",
						cta: { text: "View IR services", navigateTo: "/services/industrial-relations" },
						questions: [
							{
								question: "What is the CCMA?",
								answer:
									"The Commission for Conciliation, Mediation and Arbitration (CCMA) is the primary dispute resolution body for labour disputes in South Africa. Employees can refer disputes about unfair dismissal, unfair labour practices, and wage disputes to the CCMA, which attempts conciliation and, if unresolved, arbitration.",
							},
							{
								question: "What is OptiHR's CCMA success rate?",
								answer:
									"Over 95%. Our success comes from thorough preparation, expert representation by admitted attorneys, and strategic management of settlements and arbitrations. We bring both legal authority and practical HR experience to every CCMA matter.",
							},
							{
								question: "An employee has referred a dispute to the CCMA. What should we do?",
								answer:
									"Act immediately. Contact OptiHR to review the referral, assess the merits of your position, prepare your response and documentation, and represent you at conciliation and arbitration. Early preparation significantly improves outcomes.",
							},
							{
								question: "Can a dismissal be both procedurally and substantively fair?",
								answer:
									"Yes — and it must be both. Procedural fairness means the process was followed correctly (notice, hearing, opportunity to respond). Substantive fairness means the reason for dismissal was valid and the sanction was appropriate. A dismissal can fail on either or both grounds at the CCMA.",
							},
						],
					}}
					key="ccma"
				/>

				<FaqSection
					data={{
						title: "HR Policies & Employment Contracts",
						subtitle: "Building the right foundations",
						body: "",
						cta: { text: "View policy development", navigateTo: "/services/hr-policy-development" },
						questions: [
							{
								question: "Which HR policies does every business need?",
								answer:
									"At a minimum: an employment contract template, a disciplinary and grievance policy, a leave policy, and a code of conduct. Larger businesses also need performance management policies, retrenchment procedures, social media policies, and sector-specific policies.",
							},
							{
								question: "Can we use a downloaded template?",
								answer:
									"Generic templates are better than nothing, but they carry risk. A template not tailored to your business, sector, and current legislation can give you false confidence and fail when you need it most. OptiHR's policies are built for your specific context and legally verified.",
							},
							{
								question: "What should an employment contract include?",
								answer:
									"A lawful employment contract must include: the employer and employee's details, job title and description, remuneration and benefits, working hours, leave entitlements (meeting BCEA minimums), notice period, and disciplinary policy reference. Contracts that fall short of BCEA requirements are automatically upgraded by law — but may create confusion or disputes.",
							},
							{
								question: "How often should HR policies be reviewed?",
								answer:
									"At minimum annually, and whenever there are significant changes to legislation, your workforce structure, or your business operations. OptiHR monitors the South African labour landscape continuously and advises clients on required policy updates.",
							},
						],
					}}
					key="policies"
				/>

				<FaqSection
					data={{
						title: "Retrenchments & Restructuring",
						subtitle: "Managing workforce changes correctly",
						body: "",
						cta: { text: "View retrenchment support", navigateTo: "/services/retrenchments" },
						questions: [
							{
								question: "What is the Section 189 process?",
								answer:
									"Section 189 of the Labour Relations Act requires employers contemplating retrenchments to consult with affected employees before any dismissals take effect. The consultation must cover the reasons for proposed retrenchments, alternatives considered, proposed selection criteria, and severance pay. Failure to follow this process results in procedurally unfair dismissal findings.",
							},
							{
								question: "What severance pay are retrenched employees entitled to?",
								answer:
									"Under the BCEA, employees are entitled to at least one week's remuneration for each completed year of service, plus notice pay, outstanding leave, and any other contractual entitlements. OptiHR ensures all calculations are accurate and correctly documented.",
							},
							{
								question: "What alternatives to retrenchment should we consider?",
								answer:
									"The Section 189 process requires genuine consideration of alternatives, including reduced working hours, wage reductions by agreement, voluntary retrenchment, temporary lay-off, and redeployment. OptiHR helps structure this consultation process correctly so every step is documented and defensible.",
							},
						],
					}}
					key="retrenchments"
				/>

				<FaqSection
					data={{
						title: "Independent Schools",
						subtitle: "HR for the education sector",
						body: "",
						cta: { text: "View school HR support", navigateTo: "/services/hr-support-for-independent-schools" },
						questions: [
							{
								question: "Do independent schools have to comply with South African labour law?",
								answer:
									"Yes — fully. Independent schools are private employers subject to all South African labour legislation, including the BCEA, LRA, EEA, OHSA, and POPIA. Unlike public schools, they cannot rely on the ELRC or provincial education departments for HR support.",
							},
							{
								question: "What is SACE and how does it affect school HR?",
								answer:
									"The South African Council for Educators (SACE) regulates the professional conduct and registration of all educators. Independent schools must ensure all teaching staff are SACE-registered and that disciplinary and conduct processes align with SACE's Code of Professional Ethics alongside LRA requirements.",
							},
							{
								question: "What makes OptiHR the right choice for independent schools?",
								answer:
									"Our founder is an admitted attorney with labour law expertise, a qualified HR practitioner, and a SACE-registered former educator. This rare combination means we understand both the classroom and the courtroom — giving schools a partner who can manage governance, compliance, and disputes with deep sector-specific insight.",
							},
						],
					}}
					key="schools"
				/>
			</div>
		</>
	)
}

export default FaqPage
