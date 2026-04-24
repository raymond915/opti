"use client"

import { Mail, Phone } from "lucide-react"

const WHATSAPP_NUMBER = "27686362218"
const CONTACT_EMAIL = "hello@optihr.co.za"
const OFFICE_NUMBER_TEL = "+27875511622"

const WhatsAppIcon = () => (
	<svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0" aria-hidden="true">
		<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
	</svg>
)

export const FloatingContact = () => {
	return (
		<div className="fixed bottom-[5.5rem] right-4 z-40 flex flex-col items-end gap-2.5">
			{/* WhatsApp button — expands left on hover to reveal label */}
			<a
				href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi OptiHR! I'd like to find out more about your services.")}`}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Chat with OptiHR on WhatsApp"
				className="group flex h-12 w-12 items-center justify-end overflow-hidden rounded-full bg-[#25D366] text-white shadow-[0_4px_16px_rgba(37,211,102,0.40)] transition-[width,box-shadow] duration-300 ease-in-out hover:w-40 hover:shadow-[0_4px_24px_rgba(37,211,102,0.55)] active:scale-95"
			>
				<span className="mr-0 flex-1 overflow-hidden pl-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
					<span className="whitespace-nowrap text-sm font-semibold">WhatsApp us</span>
				</span>
				<span className="flex h-12 w-12 shrink-0 items-center justify-center">
					<WhatsAppIcon />
				</span>
			</a>

			{/* Call button — expands left on hover to reveal label */}
			<a
				href={`tel:${OFFICE_NUMBER_TEL}`}
				aria-label="Call OptiHR office"
				className="group flex h-12 w-12 items-center justify-end overflow-hidden rounded-full bg-[#0d937c] text-white shadow-[0_4px_16px_rgba(13,147,124,0.40)] transition-[width,box-shadow] duration-300 ease-in-out hover:w-44 hover:shadow-[0_4px_24px_rgba(13,147,124,0.55)] active:scale-95"
			>
				<span className="mr-0 flex-1 overflow-hidden pl-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
					<span className="whitespace-nowrap text-sm font-semibold">087 551 1622</span>
				</span>
				<span className="flex h-12 w-12 shrink-0 items-center justify-center">
					<Phone className="h-5 w-5 shrink-0" />
				</span>
			</a>

			{/* Email button — expands left on hover to reveal label */}
			<a
				href={`mailto:${CONTACT_EMAIL}?subject=Enquiry from OptiHR website`}
				aria-label="Email OptiHR"
				className="group flex h-12 w-12 items-center justify-end overflow-hidden rounded-full bg-[#053c43] text-white shadow-[0_4px_16px_rgba(5,60,67,0.35)] transition-[width,background-color,box-shadow] duration-300 ease-in-out hover:w-36 hover:bg-[#0d937c] hover:shadow-[0_4px_24px_rgba(13,147,124,0.45)] active:scale-95"
			>
				<span className="mr-0 flex-1 overflow-hidden pl-4 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
					<span className="whitespace-nowrap text-sm font-semibold">Email us</span>
				</span>
				<span className="flex h-12 w-12 shrink-0 items-center justify-center">
					<Mail className="h-5 w-5 shrink-0" />
				</span>
			</a>
		</div>
	)
}
