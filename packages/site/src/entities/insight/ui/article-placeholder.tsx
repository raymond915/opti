type ArticlePlaceholderProps = {
	category?: string
}

// Subtle accent gradient per category — all within the mint/teal palette
const categoryGradient: Record<string, { from: string; via: string; to: string }> = {
	CCMA: { from: "#0d937c", via: "#1e5056", to: "#032529" },
	Compliance: { from: "#086d5a", via: "#1e5056", to: "#032529" },
	"Performance Management": { from: "#0d937c", via: "#053c43", to: "#032529" },
	"Independent Schools": { from: "#0a7a6a", via: "#053c43", to: "#032529" },
}

const defaultGradient = { from: "#0d937c", via: "#1e5056", to: "#032529" }

export const ArticlePlaceholder = ({ category }: ArticlePlaceholderProps) => {
	const grad = category ? (categoryGradient[category] ?? defaultGradient) : defaultGradient

	return (
		<div
			className="absolute inset-0 overflow-hidden"
			style={{
				background: `linear-gradient(145deg, ${grad.from} 0%, ${grad.via} 55%, ${grad.to} 100%)`,
			}}
		>
			{/* Radial highlight — upper right to echo the bee's position */}
			<div
				className="absolute inset-0"
				style={{
					background: `radial-gradient(ellipse 60% 50% at 80% 20%, ${grad.from}55 0%, transparent 70%)`,
				}}
			/>

			{/* Bee flying with dashed looping flight path */}
			<svg
				aria-hidden="true"
				className="absolute inset-0 h-full w-full select-none"
				fill="none"
				viewBox="0 0 240 240"
				xmlns="http://www.w3.org/2000/svg"
			>
				{/*
				 * Flight path — enters from bottom-left, loops at centre,
				 * then sweeps up to the bee in the upper-right corner.
				 */}
				<path
					d="M 18 228
					   C 28 210, 52 192, 76 194
					   C 98 196, 114 198, 118 182
					   C 122 166, 110 154, 96 158
					   C 84 162, 80 150, 96 142
					   C 112 134, 148 112, 192 62"
					fill="none"
					opacity="0.4"
					stroke="white"
					strokeDasharray="9 6"
					strokeLinecap="round"
					strokeWidth="2.5"
				/>

				{/*
				 * Bee — side profile, flying at ~-38 ° toward upper-right.
				 * All transforms applied to a local coordinate system where
				 * the bee faces right along the x-axis.
				 */}
				<g transform="translate(190, 58) rotate(-38)">
					{/* ── Wings ─────────────────────────────────────────── */}
					{/* Top wing — large, translucent white */}
					<ellipse
						cx="-4" cy="-22"
						rx="26" ry="11"
						fill="white" fillOpacity="0.5"
						stroke="white" strokeOpacity="0.3" strokeWidth="0.8"
						transform="rotate(-12 -4 -22)"
					/>
					{/* Bottom wing — smaller */}
					<ellipse
						cx="-6" cy="15"
						rx="18" ry="8"
						fill="white" fillOpacity="0.30"
						stroke="white" strokeOpacity="0.2" strokeWidth="0.8"
						transform="rotate(12 -6 15)"
					/>

					{/* ── Body ──────────────────────────────────────────── */}
					{/* Abdomen */}
					<ellipse cx="-18" cy="0" rx="24" ry="13" fill="#adeacb" fillOpacity="0.82" />
					{/* Stripes */}
					<path d="M-34 -4 Q-18 -8 -2 -4 Q-18  0 -34 -4Z" fill="white" opacity="0.20" />
					<path d="M-34  4 Q-18  0 -2  4 Q-18  8 -34  4Z" fill="white" opacity="0.20" />
					{/* Stinger */}
					<path d="M-40 -1 L-48 0 L-40 2Z" fill="#e4f8ed" fillOpacity="0.55" />

					{/* Thorax */}
					<ellipse cx="3" cy="0" rx="12" ry="10" fill="#86f0a3" fillOpacity="0.72" />

					{/* ── Head ──────────────────────────────────────────── */}
					<circle cx="17" cy="0" r="10" fill="#e4f8ed" fillOpacity="0.88" />
					{/* Eye */}
					<circle cx="19" cy="-3" r="4"   fill="white"   opacity="0.92" />
					<circle cx="20" cy="-2.5" r="2.1" fill="#032529" opacity="0.80" />
					<circle cx="21" cy="-3.5" r="0.9" fill="white"   opacity="0.90" />
					{/* Smile */}
					<path
						d="M13 4 Q17 8 21 4"
						fill="none"
						stroke="#053c43" strokeWidth="1.3"
						strokeOpacity="0.5" strokeLinecap="round"
					/>

					{/* ── Antennae ──────────────────────────────────────── */}
					<path d="M13 -9 Q 8 -19  3 -26" fill="none" stroke="white" strokeWidth="1.6" strokeOpacity="0.55" strokeLinecap="round" />
					<circle cx="2"  cy="-27" r="2.8" fill="#adeacb" fillOpacity="0.85" />
					<path d="M20 -9 Q25 -19 31 -24" fill="none" stroke="white" strokeWidth="1.6" strokeOpacity="0.55" strokeLinecap="round" />
					<circle cx="32" cy="-25" r="2.8" fill="#adeacb" fillOpacity="0.85" />
				</g>
			</svg>

			{/* "OptiBuzz" watermark */}
			<div className="absolute bottom-3 right-4 select-none text-right font-medium text-white/20 uppercase tracking-widest" style={{ fontSize: "0.55rem", letterSpacing: "0.2em" }}>
				OptiBuzz
			</div>
		</div>
	)
}
