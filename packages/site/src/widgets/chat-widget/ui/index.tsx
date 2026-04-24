"use client"

import { useEffect, useRef, useState, type KeyboardEvent } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Loader2, MessageCircle, Send, X } from "lucide-react"

// ── Types ────────────────────────────────────────────────────────────────────

type Message = {
	role: "user" | "assistant"
	content: string
}

type LeadData = {
	name: string
	email: string
	phone: string
	summary: string
}

// Mirror of lib/chat-logger.ts ChatSession — sent to /api/chat/end on unload
type SessionSnapshot = {
	id: string
	site: "optihr"
	startedAt: string
	lastActivityAt: string
	messages: { role: "user" | "assistant"; content: string; timestamp: string }[]
	metadata: {
		leadCaptured?: boolean
		leadName?: string
		leadEmail?: string
		leadPhone?: string
		leadSummary?: string
	}
}

// ── Constants ────────────────────────────────────────────────────────────────

const WHATSAPP_NUMBER = "27686362218"
const CONTACT_EMAIL = "hello@optihr.co.za"

const GREETING: Message = {
	role: "assistant",
	content:
		"Hi there! 👋 I'm the OptiHR assistant. Whether you're looking for HR support, curious about how AI could help your business, or just exploring your options — I'm here to help.\n\nWhat brings you to OptiHR today?",
}

// ── Helpers ──────────────────────────────────────────────────────────────────

function formatMessage(text: string) {
	// Convert **bold** and line breaks to JSX-friendly fragments
	return text.split("\n").map((line, i) => {
		const parts = line.split(/(\*\*[^*]+\*\*)/g)
		return (
			<span key={i}>
				{parts.map((part, j) =>
					part.startsWith("**") && part.endsWith("**") ? (
						<strong key={j}>{part.slice(2, -2)}</strong>
					) : (
						<span key={j}>{part}</span>
					),
				)}
				{i < text.split("\n").length - 1 && <br />}
			</span>
		)
	})
}

// ── Widget ───────────────────────────────────────────────────────────────────

export const ChatWidget = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [messages, setMessages] = useState<Message[]>([])
	const [input, setInput] = useState("")
	const [isLoading, setIsLoading] = useState(false)
	const [lead, setLead] = useState<LeadData | null>(null)
	const [hasUnread, setHasUnread] = useState(false)

	const messagesEndRef = useRef<HTMLDivElement>(null)
	const inputRef = useRef<HTMLInputElement>(null)
	const panelRef = useRef<HTMLDivElement>(null)

	// Session snapshot held in a ref so the unload handler always sees the latest
	// state (state inside event listeners gets stale).
	const sessionRef = useRef<SessionSnapshot | null>(null)
	const transcriptSentRef = useRef(false)

	// Send the transcript to /api/chat/end on tab close. Uses sendBeacon so the
	// request goes out even as the page is being torn down.
	useEffect(() => {
		const flush = () => {
			const session = sessionRef.current
			if (!session || session.messages.length === 0) return
			if (transcriptSentRef.current) return
			transcriptSentRef.current = true
			try {
				const blob = new Blob([JSON.stringify(session)], { type: "application/json" })
				navigator.sendBeacon("/api/chat/end", blob)
			} catch {
				// Best-effort — ignore if the browser blocks beacons.
			}
		}
		window.addEventListener("pagehide", flush)
		window.addEventListener("beforeunload", flush)
		return () => {
			window.removeEventListener("pagehide", flush)
			window.removeEventListener("beforeunload", flush)
		}
	}, [])

	// Greeting on first open
	useEffect(() => {
		if (isOpen && messages.length === 0) {
			setMessages([GREETING])
			setHasUnread(false)
		}
		if (isOpen) {
			setHasUnread(false)
			setTimeout(() => inputRef.current?.focus(), 150)
		}
	}, [isOpen])

	// Tease notification after 30 s if widget not opened
	useEffect(() => {
		const timer = setTimeout(() => {
			if (!isOpen && messages.length === 0) setHasUnread(true)
		}, 30_000)
		return () => clearTimeout(timer)
	}, [])

	// Auto-scroll to latest message
	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
	}, [messages, isLoading])

	const sendMessage = async () => {
		const text = input.trim()
		if (!text || isLoading) return

		const userMsg: Message = { role: "user", content: text }
		const nextMessages = [...messages, userMsg]
		setMessages(nextMessages)
		setInput("")
		setIsLoading(true)

		const userTimestamp = new Date().toISOString()

		try {
			const res = await fetch("/api/chat", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					messages: nextMessages,
					sessionId: sessionRef.current?.id,
					site: "optihr",
				}),
			})

			if (!res.ok) throw new Error("API error")

			const data = await res.json()

			// Initialise the session snapshot on first response, or update activity.
			const assistantTimestamp = new Date().toISOString()
			if (!sessionRef.current) {
				sessionRef.current = {
					id: data.sessionId ?? `optihr-${Date.now()}`,
					site: "optihr",
					startedAt: userTimestamp,
					lastActivityAt: assistantTimestamp,
					messages: [],
					metadata: {},
				}
			}
			sessionRef.current.lastActivityAt = assistantTimestamp
			sessionRef.current.messages.push({ role: "user", content: text, timestamp: userTimestamp })
			sessionRef.current.messages.push({ role: "assistant", content: data.message, timestamp: assistantTimestamp })

			if (data.leadCaptured && data.lead) {
				setLead(data.lead)
				sessionRef.current.metadata.leadCaptured = true
				sessionRef.current.metadata.leadName = data.lead.name
				sessionRef.current.metadata.leadEmail = data.lead.email
				sessionRef.current.metadata.leadPhone = data.lead.phone
				sessionRef.current.metadata.leadSummary = data.lead.summary
			}

			setMessages((prev) => [...prev, { role: "assistant", content: data.message }])
		} catch {
			setMessages((prev) => [
				...prev,
				{
					role: "assistant",
					content:
						"I'm having a technical hiccup right now — apologies! You can reach us directly at hello@optihr.co.za or call 087 551 1622.",
				},
			])
		} finally {
			setIsLoading(false)
		}
	}

	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault()
			sendMessage()
		}
	}

	const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
		`Hi OptiHR! ${lead?.name ? `I'm ${lead.name}. ` : ""}I was chatting with your assistant${lead?.summary ? ` about: ${lead.summary}` : ""} and would like to speak with a consultant.`,
	)}`

	return (
		<>
			{/* ── Chat panel ─────────────────────────────────────────────── */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						ref={panelRef}
						key="chat-panel"
						initial={{ opacity: 0, y: 16, scale: 0.97 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 16, scale: 0.97 }}
						transition={{ type: "spring", stiffness: 400, damping: 30 }}
						className="fixed bottom-24 right-4 z-50 flex w-[360px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-outer bg-white shadow-[0_8px_48px_rgba(5,60,67,0.18)]"
						style={{ height: "520px" }}
					>
						{/* Header */}
						<div className="flex items-center gap-3 bg-[#053c43] px-4 py-3">
							<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#adeacb]/20">
								<svg
									viewBox="0 0 24 24"
									fill="none"
									className="h-5 w-5 text-[#adeacb]"
									aria-hidden="true"
								>
									<path
										d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"
										fill="currentColor"
									/>
									<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
									<path
										d="M9 9h1.5v6H9zM13.5 9H15v6h-1.5z"
										fill="currentColor"
									/>
								</svg>
							</div>
							<div className="flex-1 min-w-0">
								<p className="text-sm font-semibold text-white leading-none">OptiHR Assistant</p>
								<p className="mt-0.5 text-xs text-[#adeacb]/70 leading-none">
									Powered by OptiAI
								</p>
							</div>
							<button
								aria-label="Close chat"
								className="flex h-7 w-7 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white"
								onClick={() => setIsOpen(false)}
							>
								<X className="h-4 w-4" />
							</button>
						</div>

						{/* Messages */}
						<div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#f7faf9]">
							{messages.map((msg, i) => (
								<div
									key={i}
									className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
								>
									{msg.role === "assistant" && (
										<div className="mr-2 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#053c43]">
											<svg viewBox="0 0 16 16" fill="none" className="h-3 w-3 text-[#adeacb]" aria-hidden="true">
												<circle cx="8" cy="5" r="2.5" fill="currentColor" />
												<path d="M3 13c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
											</svg>
										</div>
									)}
									<div
										className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
											msg.role === "user"
												? "rounded-br-sm bg-[#053c43] text-white"
												: "rounded-bl-sm bg-white text-[#1e5056] shadow-sm border border-[#e4f8ed]"
										}`}
									>
										{formatMessage(msg.content)}
									</div>
								</div>
							))}

							{/* Typing indicator */}
							{isLoading && (
								<div className="flex justify-start">
									<div className="mr-2 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#053c43]">
										<svg viewBox="0 0 16 16" fill="none" className="h-3 w-3 text-[#adeacb]" aria-hidden="true">
											<circle cx="8" cy="5" r="2.5" fill="currentColor" />
											<path d="M3 13c0-2.76 2.24-5 5-5s5 2.24 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
										</svg>
									</div>
									<div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-white px-4 py-3 shadow-sm border border-[#e4f8ed]">
										{[0, 1, 2].map((i) => (
											<motion.span
												key={i}
												animate={{ y: [0, -4, 0] }}
												transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.15 }}
												className="block h-1.5 w-1.5 rounded-full bg-[#0d937c]"
											/>
										))}
									</div>
								</div>
							)}

							<div ref={messagesEndRef} />
						</div>

						{/* Lead CTA — shown after lead is captured */}
						{lead && (
							<div className="border-t border-[#e4f8ed] bg-[#e4f8ed]/60 px-4 py-3">
								<p className="mb-2 text-xs font-semibold text-[#053c43] uppercase tracking-wide">
									Ready to speak with a consultant?
								</p>
								<div className="flex gap-2">
									<a
										href={whatsappUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="flex flex-1 items-center justify-center gap-2 rounded-inner bg-[#25D366] px-3 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
									>
										{/* WhatsApp icon */}
										<svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
											<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
										</svg>
										WhatsApp
									</a>
									<a
										href={`mailto:${CONTACT_EMAIL}?subject=Enquiry from ${lead.name || "website visitor"}&body=Hi Raymond,%0A%0A${encodeURIComponent(lead.summary || "I'd like to find out more about OptiHR's services.")}`}
										className="flex flex-1 items-center justify-center gap-2 rounded-inner bg-[#053c43] px-3 py-2 text-xs font-semibold text-white transition-opacity hover:opacity-90"
									>
										{/* Mail icon */}
										<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5" aria-hidden="true">
											<rect x="2" y="4" width="20" height="16" rx="2" />
											<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
										</svg>
										Email us
									</a>
								</div>
							</div>
						)}

						{/* Input */}
						<div className="flex items-center gap-2 border-t border-[#e4f8ed] bg-white px-3 py-3">
							<input
								ref={inputRef}
								type="text"
								value={input}
								onChange={(e) => setInput(e.target.value)}
								onKeyDown={handleKeyDown}
								placeholder="Type a message…"
								disabled={isLoading}
								className="flex-1 rounded-full bg-[#f7faf9] px-4 py-2 text-sm text-[#1e5056] placeholder-[#1e5056]/40 outline-none focus:ring-2 focus:ring-[#0d937c]/30 disabled:opacity-50"
							/>
							<button
								aria-label="Send message"
								disabled={!input.trim() || isLoading}
								onClick={sendMessage}
								className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#053c43] text-white transition-all hover:bg-[#0d937c] disabled:opacity-40 disabled:cursor-not-allowed"
							>
								{isLoading ? (
									<Loader2 className="h-4 w-4 animate-spin" />
								) : (
									<Send className="h-4 w-4 translate-x-px" />
								)}
							</button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			{/* ── Floating button ─────────────────────────────────────────── */}
			<motion.button
				aria-label={isOpen ? "Close chat" : "Open chat with OptiHR"}
				whileHover={{ scale: 1.06 }}
				whileTap={{ scale: 0.95 }}
				onClick={() => setIsOpen((v) => !v)}
				className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#053c43] text-white shadow-[0_4px_24px_rgba(5,60,67,0.35)] transition-colors hover:bg-[#0d937c]"
			>
				<AnimatePresence mode="wait">
					{isOpen ? (
						<motion.span
							key="close"
							initial={{ rotate: -90, opacity: 0 }}
							animate={{ rotate: 0, opacity: 1 }}
							exit={{ rotate: 90, opacity: 0 }}
							transition={{ duration: 0.15 }}
						>
							<X className="h-6 w-6" />
						</motion.span>
					) : (
						<motion.span
							key="open"
							initial={{ rotate: 90, opacity: 0 }}
							animate={{ rotate: 0, opacity: 1 }}
							exit={{ rotate: -90, opacity: 0 }}
							transition={{ duration: 0.15 }}
						>
							<MessageCircle className="h-6 w-6" />
						</motion.span>
					)}
				</AnimatePresence>

				{/* Unread dot */}
				<AnimatePresence>
					{hasUnread && !isOpen && (
						<motion.span
							key="dot"
							initial={{ scale: 0 }}
							animate={{ scale: 1 }}
							exit={{ scale: 0 }}
							className="absolute right-1 top-1 flex h-3 w-3 items-center justify-center rounded-full bg-[#0d937c]"
						>
							<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#86f0a3] opacity-75" />
						</motion.span>
					)}
				</AnimatePresence>
			</motion.button>
		</>
	)
}
