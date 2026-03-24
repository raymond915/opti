export const stepCopy = {
	step1: {
		heading: "Tell Us About Your Business",
		body: "Quickly share your company name, type (small business, enterprise, or independent school), and employee count. Get personalized HR solutions tailored to your size and needs.",
	},
	step2: {
		heading: "What HR Challenges Do You Face?",
		body: "Choose primary services like labour audits, performance management, or HR for private schools. Specify urgency and describe challenges for targeted expert support.",
	},
	step3: {
		heading: "Let's Get in Touch",
		body: "Provide your full name, work email, and phone number. Our HR consultants will reach out within 24 hours with your free customized consultation.",
	},
} as const

export type StepCopyType = typeof stepCopy
