import { InsightArchivePage } from "@pages/insight-archive/ui"
import type { NextPage } from "next"

interface PageProps {
	searchParams: Promise<{ category?: string }>
}

const Page: NextPage<PageProps> = async ({ searchParams }) => {
	const { category } = await searchParams
	return <InsightArchivePage selectedCategory={category ?? "all"} />
}

export default Page
