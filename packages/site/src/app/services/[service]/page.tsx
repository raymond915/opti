import { ServicePage } from "@pages/individual-service/ui"

export default async function ServiceDetailPage({
	params,
}: {
	params: Promise<{
		service: string
	}>
}) {
	const { service } = await params
	return <ServicePage slug={service} />
}
