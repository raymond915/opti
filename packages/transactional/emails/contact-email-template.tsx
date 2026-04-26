import type {ContactFormSchema} from "@opti/site/features/contact-form"
import {
	Body,
	Column,
	Container,
	Heading,
	Hr,
	Html,
	pixelBasedPreset,
	Row,
	Section,
	Tailwind,
	Text,
} from "@react-email/components"

export const ContactEmailTemplate = (value:  typeof ContactFormSchema.infer) => {
	return (
		<Tailwind
			config={{
				presets: [pixelBasedPreset],
				theme: {
					extend: {
						colors: {
							brand: "#0d937c",
						},
					},
				},
			}}
		>
			<Html>
				<Body>
					<Container className="font-sans">
						<Heading className="text-2xl font-bold mb-6 text-neutral-800">New Contact Form Submission</Heading>
						<Section className="mb-6 text-neutral-600">
							<Heading as="h2" className="text-xl font-semibold mb-4 text-neutral-800">
								Company Info
							</Heading>
							<Row>
								<Column className="w-1/2 font-semibold text-neutral-800">
									<Text>Company Name:</Text>
								</Column>
								<Column className="w-1/2">
									<Text>{value?.stepOne.companyName || "Company Name"}</Text>
								</Column>
							</Row>
							<Row>
								<Column className="w-1/2 font-semibold text-neutral-800">
									<Text>Business Type:</Text>
								</Column>
								<Column className="w-1/2">
									<Text>{value?.stepOne.businessType || "Business Type"}</Text>
								</Column>
							</Row>
							<Row>
								<Column className="w-1/2 font-semibold text-neutral-800">
									<Text>Location:</Text>
								</Column>
								<Column className="w-1/2">
									<Text>
										{value?.stepOne.location === "Other"
											? value?.stepOne.locationOther || "Other (not specified)"
											: value?.stepOne.location || "—"}
									</Text>
								</Column>
							</Row>
						</Section>

						<Hr className="my-4" />

						<Section className="mb-6 text-neutral-600">
							<Heading as="h2" className="text-xl font-semibold mb-4 text-neutral-800">
								Service Interests
							</Heading>
							<Row>
								<Column className="w-1/2 font-semibold text-neutral-800">
									<Text>Primary Service Interest:</Text>
								</Column>
								<Column className="w-1/2">
									<Text>{value?.stepTwo.primaryServiceInterest || "Primary Service Interest"}</Text>
								</Column>
							</Row>
							<Row>
								<Column className="w-1/2 font-semibold text-neutral-800">
									<Text>Urgency Level:</Text>
								</Column>
								<Column className="w-1/2">
									<Text>{value?.stepTwo.urgencyLevel || "Urgency Level"}</Text>
								</Column>
							</Row>
							<Text className="font-semibold text-neutral-800">Challenge Description:</Text>
							<Text>{value?.stepTwo.challengeDescription || "Challenge Description"}</Text>
						</Section>

						<Hr className="my-4" />

						<Section className="mb-6 text-neutral-600">
							<Heading as="h2" className="text-xl font-semibold mb-4 text-neutral-800">
								Contact Details
							</Heading>
							<Row>
								<Column className="w-1/2 font-semibold text-neutral-800">
									<Text>Full Name:</Text>
								</Column>
								<Column className="w-1/2">
									<Text>{value?.stepThree.fullName || "Full Name"}</Text>
								</Column>
							</Row>
							<Row>
								<Column className="w-1/2 font-semibold text-neutral-800">
									<Text>Work Email:</Text>
								</Column>
								<Column className="w-1/2">
									<Text>{value?.stepThree.workEmail || "Work Email"}</Text>
								</Column>
							</Row>
							<Row>
								<Column className="w-1/2 font-semibold text-neutral-800">
									<Text>Phone Number:</Text>
								</Column>
								<Column className="w-1/2">
									<Text>{value?.stepThree.phoneNumber || "Phone Number"}</Text>
								</Column>
							</Row>
						</Section>

						<Hr className="my-4" />

						<Section className="text-neutral-500 text-sm">
							<Text className="font-semibold text-neutral-700 mb-1">OptiHR</Text>
							<Text className="mb-0">Raymond Hauptfleisch — raymond@optihr.co.za</Text>
							<Text className="mb-0">Rhodene Duncan — rhodene@optihr.co.za · 071 880 7971</Text>
							<Text className="mb-0">Office: 087 551 1622 · hello@optihr.co.za</Text>
							<Text className="mb-0">www.optihr.co.za</Text>
						</Section>
					</Container>
				</Body>
			</Html>
		</Tailwind>
	)
}

export default ContactEmailTemplate
