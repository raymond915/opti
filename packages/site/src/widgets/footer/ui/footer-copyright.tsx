import { useTranslations } from "next-intl"
import Link from "next/link"

export const Copyright = () => {
	const t = useTranslations("Footer")
	const year = new Date().getFullYear()

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-2 md:gap-x-gutter text-fluid-n1 text-mint-1">
			<div>
				{t("copyright", { year })} {t("designedBy")}{" "}
				<span className="font-semibold underline underline-offset-3 hover:text-mint-3">
					<Link href={"https://singer.agency"}>SINGER</Link>
				</span>
			</div>
			<div className="flex gap-fluid-3 font-medium">
				<Link href="/legal">{t("privacyPolicy")}</Link>
				<Link href="/legal">{t("termsConditions")}</Link>
			</div>
			<div />
		</div>
	)
}
