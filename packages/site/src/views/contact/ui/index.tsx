import { ContactForm } from "@features/contact-form/ui/contact-form"
import { Badge } from "@shared/components/badge"
import Logo from "@shared/components/logo"
import { SocialIcon } from "@shared/components/social-icon"
import { H1, P } from "@shared/components/typography"
import { Inbox, Mail, Phone } from "lucide-react"
import type { NextPage } from "next"
import { useTranslations } from "next-intl"

export const ContactPage: NextPage = () => {
	const t = useTranslations("Contact")

	return (
		<div
			className={
				"contained-height relative col-span-full grid grid-cols-1 gap-inner-place-items-end rounded-outer md:grid-cols-12"
			}
		>
			<div className="nav-padding relative col-span-full grid grid-cols-1 overflow-clip rounded-outer bg-mint-6 px-inner-padding md:col-span-6 md:grid-cols-subgrid">
				<Logo
					className="absolute -right-[5vw] -bottom-[10vh] w-[45vw] select-none fill-mint-5 opacity-18"
					logomark={true}
				/>
				{/*TODO: Refactor Section Subtitle & Badge component so that copy is not defined in the prop "title"*/}
				<div className="z-10 col-span-full mt-section-gap flex h-full flex-col gap-inner-padding md:col-span-4 md:col-start-2">
					<Badge
						icon={<Inbox />}
						label={t("badge")}
					/>
					<H1 className="h-fit w-fit text-white">{t("h1")}</H1>
					<P className="text-balance text-mint-1">
						{t("body")}
					</P>
				</div>
				<div className="z-10 col-span-full flex flex-col justify-start gap-inner-padding pb-inner-padding text-base leading-tight md:col-span-4 md:col-start-2">
					<P className="font-medium text-mint-2">{t("detailsHeading")}</P>
					<div className="flex flex-col gap-4 text-base leading-tight">
						<a
							className="flex items-center gap-2 text-white hover:underline"
							href="mailto:hello@optihr.co.za"
						>
							<Mail className="size-4 text-mint-3" />
							hello@optihr.co.za
						</a>
						<a
							className="flex items-center gap-2 text-white hover:underline"
							href="tel:+27875511622"
						>
							<Phone className="size-4 text-mint-3" />
							087 551 1622 {t("officeLabel")}
						</a>
						<a
							className="flex items-center gap-2 text-white hover:underline"
							href="tel:+27718807971"
						>
							<Phone className="size-4 text-mint-3" />
							{t("rhodenePrefix")} 071 880 7971
						</a>
					</div>
					<div className="mt-4 flex gap-2">
						<SocialIcon
							href={"https://wa.me/27686362218"}
							icon="whatsapp"
						/>
						<SocialIcon
							href={"https://www.linkedin.com/company/optihr"}
							icon="linkedin"
						/>
					</div>
					<a
						href="https://wa.me/27686362218"
						className="mt-2 inline-flex w-fit flex-col items-center gap-2 rounded-inner bg-white/10 p-3 transition hover:bg-white/20"
						aria-label={t("qrAriaLabel")}
					>
						<img src="/optihr-whatsapp-qr.png" alt="WhatsApp QR code" width={96} height={96} className="rounded" />
						<span className="text-xs text-mint-2">{t("qrLabel")}</span>
					</a>
				</div>
			</div>
			<div className="col-span-full grid grid-cols-1 px-4 md:nav-padding md:col-span-6 md:grid-cols-subgrid md:px-0">
				<div className="col-span-full flex h-full w-full flex-col py-section-gap md:col-span-4 md:col-start-2">
					<ContactForm />
				</div>
			</div>
		</div>
	)
}
