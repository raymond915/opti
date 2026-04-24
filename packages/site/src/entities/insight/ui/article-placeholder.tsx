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
			{/* Radial highlight — adds depth to the gradient */}
			<div
				className="absolute inset-0"
				style={{
					background: `radial-gradient(ellipse 60% 50% at 80% 20%, ${grad.from}55 0%, transparent 70%)`,
				}}
			/>

			{/* "OptiBuzz" watermark */}
			<div className="absolute bottom-3 right-4 select-none text-right font-medium text-white/20 uppercase tracking-widest" style={{ fontSize: "0.55rem", letterSpacing: "0.2em" }}>
				OptiBuzz
			</div>
		</div>
	)
}
