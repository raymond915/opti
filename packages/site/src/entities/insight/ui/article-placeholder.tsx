type ArticlePlaceholderProps = {
	category?: string
}

export const ArticlePlaceholder = ({ category: _category }: ArticlePlaceholderProps) => {
	return (
		<div className="absolute inset-0 overflow-hidden bg-mint-1">
			{/* Subtle radial wash for depth */}
			<div
				className="absolute inset-0"
				style={{
					background: "radial-gradient(ellipse 70% 60% at 80% 25%, rgba(134, 240, 163, 0.30) 0%, transparent 70%)",
				}}
			/>

			{/* Bee + dashed flight trail — modelled on the OptiBuzz reference */}
			<svg
				aria-hidden="true"
				className="absolute inset-0 h-full w-full select-none"
				fill="none"
				viewBox="0 0 240 240"
				xmlns="http://www.w3.org/2000/svg"
			>
				{/*
				 * Flight trail — enters from bottom-left, makes one loop, then
				 * sweeps up to the bee in the upper-right.
				 */}
				<path
					d="M 24 222
					   C 50 210, 80 198, 100 184
					   C 116 172, 110 152, 88 154
					   C 70 156, 64 178, 92 184
					   C 124 190, 156 156, 198 88"
					fill="none"
					stroke="#053c43"
					strokeWidth="2"
					strokeDasharray="6 6"
					strokeLinecap="round"
					opacity="0.55"
				/>

				{/*
				 * Bee — upper-right corner, body horizontal with head facing
				 * right. All paths positioned in absolute SVG coords.
				 */}
				<g>
					{/* Top wings — large, white with mint outline, slightly fanned */}
					<ellipse
						cx="172" cy="62"
						rx="22" ry="11"
						fill="white"
						stroke="#053c43" strokeWidth="2"
						transform="rotate(-22 172 62)"
					/>
					<ellipse
						cx="186" cy="60"
						rx="20" ry="10"
						fill="white"
						stroke="#053c43" strokeWidth="2"
						transform="rotate(-8 186 60)"
					/>

					{/* Body — rounded, mint outline, white base */}
					<ellipse cx="190" cy="86" rx="26" ry="20" fill="white" stroke="#053c43" strokeWidth="2.5" />

					{/* Stripes — alternating mint accent, clipped to body shape */}
					<defs>
						<clipPath id="bee-body">
							<ellipse cx="190" cy="86" rx="26" ry="20" />
						</clipPath>
					</defs>
					<g clipPath="url(#bee-body)">
						{/* Left mint stripe */}
						<rect x="172" y="64" width="11" height="50" fill="#86f0a3" />
						{/* Mid-right mint stripe */}
						<rect x="194" y="64" width="11" height="50" fill="#86f0a3" />
					</g>
					{/* Stripe outlines for crispness */}
					<g clipPath="url(#bee-body)" stroke="#053c43" strokeWidth="2" fill="none">
						<line x1="172" y1="64" x2="172" y2="114" />
						<line x1="183" y1="64" x2="183" y2="114" />
						<line x1="194" y1="64" x2="194" y2="114" />
						<line x1="205" y1="64" x2="205" y2="114" />
					</g>
					{/* Re-trace body outline so stripes don't muddy it */}
					<ellipse cx="190" cy="86" rx="26" ry="20" fill="none" stroke="#053c43" strokeWidth="2.5" />

					{/* Stinger — small triangle on the left side */}
					<path d="M164 86 L156 82 L156 90 Z" fill="#053c43" />

					{/* Head — circle on the right with simple eye */}
					<circle cx="222" cy="80" r="9" fill="white" stroke="#053c43" strokeWidth="2" />
					<circle cx="224" cy="78" r="2" fill="#053c43" />

					{/* Antennae — two curls rising from the head */}
					<path
						d="M 222 71 Q 224 60 218 56"
						fill="none" stroke="#053c43" strokeWidth="2" strokeLinecap="round"
					/>
					<circle cx="219" cy="55" r="2.3" fill="none" stroke="#053c43" strokeWidth="2" />
					<path
						d="M 230 73 Q 234 64 230 58"
						fill="none" stroke="#053c43" strokeWidth="2" strokeLinecap="round"
					/>
					<circle cx="231" cy="57" r="2.3" fill="none" stroke="#053c43" strokeWidth="2" />
				</g>
			</svg>

			{/* "OPTIBUZZ" watermark — bottom-right */}
			<div
				className="absolute bottom-3 right-4 select-none text-right font-medium uppercase tracking-widest text-mint-6/35"
				style={{ fontSize: "0.55rem", letterSpacing: "0.2em" }}
			>
				OptiBuzz
			</div>
		</div>
	)
}
