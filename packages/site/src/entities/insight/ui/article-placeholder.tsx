type ArticlePlaceholderProps = {
	category?: string
}

export const ArticlePlaceholder = ({ category: _category }: ArticlePlaceholderProps) => {
	return (
		<div className="absolute inset-0 overflow-hidden bg-mint-6">
			{/* Subtle radial wash for depth in the upper-right corner */}
			<div
				className="absolute inset-0"
				style={{
					background: "radial-gradient(ellipse 70% 60% at 80% 25%, rgba(134, 240, 163, 0.18) 0%, transparent 70%)",
				}}
			/>

			<svg
				aria-hidden="true"
				className="absolute inset-0 h-full w-full select-none"
				fill="none"
				viewBox="0 0 240 240"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="xMidYMid meet"
			>
				{/*
				 * Flight trail — enters from the bottom-left, makes one loop,
				 * then sweeps up to the bee. The trail's tangent at its endpoint
				 * matches the bee's body axis so the trail visually flows into
				 * the stinger as a motion line.
				 */}
				<path
					d="M 22 220
					   C 48 210, 80 198, 100 184
					   C 118 172, 112 150, 88 152
					   C 66 154, 64 180, 98 184
					   C 110 188, 125 164, 147 119"
					fill="none"
					stroke="white"
					strokeWidth="2.5"
					strokeDasharray="7 7"
					strokeLinecap="round"
					opacity="0.55"
				/>

				{/*
				 * Bee — top-down view in local coords (head at top of body axis,
				 * stinger at the bottom). The whole group rotates 25° clockwise
				 * so the bee tilts up-and-right with the trail's final tangent.
				 */}
				<g transform="translate(160, 90) rotate(25)">
					<defs>
						<clipPath id="optibuzz-bee-body">
							<ellipse cx="0" cy="0" rx="18" ry="26" />
						</clipPath>
					</defs>

					{/* Forewings — large, swept slightly back */}
					<ellipse
						cx="-32" cy="-8" rx="22" ry="11"
						stroke="white" strokeWidth="2" fill="none"
						transform="rotate(-22 -32 -8)"
					/>
					<ellipse
						cx="32" cy="-8" rx="22" ry="11"
						stroke="white" strokeWidth="2" fill="none"
						transform="rotate(22 32 -8)"
					/>

					{/* Hindwings — smaller, less swept, sit lower */}
					<ellipse
						cx="-26" cy="8" rx="15" ry="8"
						stroke="white" strokeWidth="1.8" fill="none"
						transform="rotate(-10 -26 8)"
					/>
					<ellipse
						cx="26" cy="8" rx="15" ry="8"
						stroke="white" strokeWidth="1.8" fill="none"
						transform="rotate(10 26 8)"
					/>

					{/* Mint stripes — only filled colour on the bee */}
					<g clipPath="url(#optibuzz-bee-body)">
						<rect x="-22" y="-16" width="44" height="6" fill="#86f0a3" />
						<rect x="-22" y="-3" width="44" height="6" fill="#86f0a3" />
						<rect x="-22" y="10" width="44" height="6" fill="#86f0a3" />
					</g>

					{/* Body outline (re-traced after stripes for clean edges) */}
					<ellipse cx="0" cy="0" rx="18" ry="26" stroke="white" strokeWidth="2.5" fill="none" />

					{/* Stinger — small white triangle aligned with body axis */}
					<path d="M -3 26 L 0 32 L 3 26 Z" fill="white" stroke="white" strokeWidth="1" strokeLinejoin="round" />

					{/* Head */}
					<circle cx="0" cy="-32" r="7" stroke="white" strokeWidth="2" fill="none" />

					{/* Antennae — two curls rising from the head */}
					<path d="M -3 -38 Q -7 -45 -3 -50" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
					<circle cx="-3" cy="-51" r="2" stroke="white" strokeWidth="1.6" fill="none" />
					<path d="M 3 -38 Q 7 -45 3 -50" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
					<circle cx="3" cy="-51" r="2" stroke="white" strokeWidth="1.6" fill="none" />
				</g>
			</svg>

			{/* "OPTIBUZZ" watermark — bottom-right */}
			<div
				className="absolute bottom-3 right-4 select-none text-right font-medium uppercase tracking-widest text-mint-1/30"
				style={{ fontSize: "0.55rem", letterSpacing: "0.2em" }}
			>
				OptiBuzz
			</div>
		</div>
	)
}
