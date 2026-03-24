import type { FeaturedPostType } from "@entities/insight"
import { FeaturedPost } from "@entities/insight/ui/featured-post"
import { Button } from "@shared/components/button"
import { ContainedLayout } from "@shared/components/layout/contained-layout"
import { SectionSubtitle } from "@shared/components/section-subtitle"
import { H2 } from "@shared/components/typography"
import type { FeaturedPostsProps } from "../model/schema"

const OptiBuzzBee = () => (
	<svg
		aria-hidden="true"
		className="w-24 h-32 flex-shrink-0 select-none"
		fill="none"
		viewBox="0 0 160 220"
		xmlns="http://www.w3.org/2000/svg"
	>
		<defs>
			<linearGradient gradientUnits="userSpaceOnUse" id="ob-body" x1="60" x2="110" y1="80" y2="210">
				<stop offset="0%" stopColor="#0d937c" />
				<stop offset="100%" stopColor="#053c43" />
			</linearGradient>
			<linearGradient gradientUnits="userSpaceOnUse" id="ob-wing" x1="0" x2="100" y1="0" y2="60">
				<stop offset="0%" stopColor="#e4f8ed" stopOpacity="0.95" />
				<stop offset="100%" stopColor="#adeacb" stopOpacity="0.55" />
			</linearGradient>
			<linearGradient gradientUnits="userSpaceOnUse" id="ob-head" x1="55" x2="105" y1="45" y2="100">
				<stop offset="0%" stopColor="#0d937c" />
				<stop offset="100%" stopColor="#1e5056" />
			</linearGradient>
			<filter id="ob-glow" x="-10%" y="-10%" width="120%" height="120%">
				<feGaussianBlur in="SourceAlpha" result="blur" stdDeviation="3" />
				<feFlood floodColor="#0d937c" floodOpacity="0.25" result="color" />
				<feComposite in="color" in2="blur" operator="in" result="shadow" />
				<feMerge>
					<feMergeNode in="shadow" />
					<feMergeNode in="SourceGraphic" />
				</feMerge>
			</filter>
		</defs>

		{/* Upper left wing */}
		<ellipse
			cx="47"
			cy="86"
			fill="url(#ob-wing)"
			rx="44"
			ry="17"
			stroke="#adeacb"
			strokeWidth="1"
			transform="rotate(-32 47 86)"
		/>
		{/* Upper right wing */}
		<ellipse
			cx="113"
			cy="86"
			fill="url(#ob-wing)"
			rx="44"
			ry="17"
			stroke="#adeacb"
			strokeWidth="1"
			transform="rotate(32 113 86)"
		/>
		{/* Lower left wing */}
		<ellipse
			cx="55"
			cy="106"
			fill="url(#ob-wing)"
			opacity="0.7"
			rx="28"
			ry="11"
			stroke="#adeacb"
			strokeWidth="0.8"
			transform="rotate(-18 55 106)"
		/>
		{/* Lower right wing */}
		<ellipse
			cx="105"
			cy="106"
			fill="url(#ob-wing)"
			opacity="0.7"
			rx="28"
			ry="11"
			stroke="#adeacb"
			strokeWidth="0.8"
			transform="rotate(18 105 106)"
		/>

		{/* Thorax */}
		<ellipse cx="80" cy="108" fill="url(#ob-body)" filter="url(#ob-glow)" rx="22" ry="18" />

		{/* Abdomen */}
		<ellipse cx="80" cy="158" fill="url(#ob-body)" filter="url(#ob-glow)" rx="27" ry="42" />

		{/* Abdomen stripes */}
		<path d="M53 141 Q80 135 107 141 Q80 147 53 141Z" fill="#adeacb" opacity="0.38" />
		<path d="M53 156 Q80 150 107 156 Q80 162 53 156Z" fill="#adeacb" opacity="0.38" />
		<path d="M56 171 Q80 166 104 171 Q80 176 56 171Z" fill="#adeacb" opacity="0.32" />

		{/* Abdomen highlight */}
		<ellipse cx="66" cy="142" fill="#e4f8ed" opacity="0.09" rx="7" ry="20" transform="rotate(-5 66 142)" />

		{/* Stinger */}
		<path d="M73 196 Q80 209 87 196 Q80 218 80 218Z" fill="#032529" opacity="0.85" />

		{/* Head */}
		<circle cx="80" cy="73" fill="url(#ob-head)" filter="url(#ob-glow)" r="27" />

		{/* Head highlight */}
		<ellipse cx="69" cy="63" fill="#e4f8ed" opacity="0.13" rx="9" ry="7" transform="rotate(-15 69 63)" />

		{/* Eyes */}
		<circle cx="69" cy="71" fill="#e4f8ed" opacity="0.95" r="6.5" />
		<circle cx="91" cy="71" fill="#e4f8ed" opacity="0.95" r="6.5" />
		<circle cx="70.5" cy="72" fill="#032529" r="3.5" />
		<circle cx="92.5" cy="72" fill="#032529" r="3.5" />
		{/* Eye shines */}
		<circle cx="72" cy="70.5" fill="#e4f8ed" r="1.2" />
		<circle cx="94" cy="70.5" fill="#e4f8ed" r="1.2" />

		{/* Smile */}
		<path d="M70 82 Q80 90 90 82" fill="none" stroke="#e4f8ed" strokeLinecap="round" strokeWidth="2" opacity="0.85" />

		{/* Antennae */}
		<path d="M71 47 Q64 30 56 20" fill="none" stroke="#053c43" strokeLinecap="round" strokeWidth="2.5" />
		<circle cx="54" cy="17" fill="#0d937c" r="5" />
		<circle cx="54" cy="17" fill="#e4f8ed" opacity="0.55" r="2.5" />

		<path d="M89 47 Q96 30 104 20" fill="none" stroke="#053c43" strokeLinecap="round" strokeWidth="2.5" />
		<circle cx="106" cy="17" fill="#0d937c" r="5" />
		<circle cx="106" cy="17" fill="#e4f8ed" opacity="0.55" r="2.5" />
	</svg>
)

export const FeaturedPosts = ({ posts }: FeaturedPostsProps) => {
	return (
		<ContainedLayout className="grid-cols-subgrid gap-y-pair-6 p-0">
			<div className="col-span-full flex h-fit items-end justify-between gap-8">
				<div className="flex flex-col gap-fluid-2 md:max-w-1/2">
					<SectionSubtitle title="OptiBuzz" />
					<H2>Practical HR and labour law insights for South African businesses.</H2>
				</div>
				<div className="hidden md:flex flex-col items-end gap-fluid-2 flex-shrink-0">
					<OptiBuzzBee />
					<Button href="/insights">Browse all articles</Button>
				</div>
				<Button className="md:hidden" href="/insights">Browse all articles</Button>
			</div>
			<ul className="col-span-full row-start-2 flex gap-inner-padding">
				{posts.map((post: FeaturedPostType) => (
					<li
						className="flex w-full"
						key={post._id}
					>
						<FeaturedPost
							_id={post._id}
							title={post.title}
							featureImage={post.featureImage}
							excerpt={post.excerpt}
							slug={post.slug}
							category={post.category}
						/>
					</li>
				))}
			</ul>
		</ContainedLayout>
	)
}
