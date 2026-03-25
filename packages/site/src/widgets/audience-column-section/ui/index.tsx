import { AudienceCard } from "@entities/audience"
import type { AudienceCardProps } from "@entities/audience/model/schema"
import { ContainedLayout } from "@shared/components/layout/contained-layout"

//TODO: Fill in accurate content
const audienceContent: AudienceCardProps[] = [
	{
		imageProps: {
			src: "/optihr-small-business-worker.jpeg",
			alt: "HR support for small businesses in South Africa",
		},
		title: "For Small Businesses",
		body: "Professional HR compliance without the cost of a full-time hire. Protect your business from CCMA disputes and labour law risk with expert support tailored to your size.",
		callToAction: "Learn more",
		href: "/for-small-businesses",
	},
	{
		imageProps: {
			src: "https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
			alt: "Specialist HR and IR support for large businesses",
		},
		title: "For Large Businesses",
		body: "Specialist industrial relations, compliance, and union engagement support — giving your HR team the depth and legal expertise they need for high-stakes matters.",
		callToAction: "Learn more",
		href: "/for-large-businesses",
	},
	{
		imageProps: {
			src: "https://images.pexels.com/photos/3182766/pexels-photo-3182766.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1",
			alt: "HR and labour compliance for independent schools",
		},
		title: "For Independent Schools",
		body: "SACE compliance, governance, educator contracts, and CCMA representation — from a founder who understands both the classroom and the courtroom.",
		callToAction: "Learn more",
		href: "/for-independent-schools",
	},
]

export const AudienceColumnSection = () => {
	return (
		<ContainedLayout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-inner-padding p-0">
			{audienceContent.map((props) => (
				<AudienceCard
					key={props.title}
					{...props}
				/>
			))}
		</ContainedLayout>
	)
}
