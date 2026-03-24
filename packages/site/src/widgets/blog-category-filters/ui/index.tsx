import type { BlogCategoryButtonType } from "@shared/components/blog-category-button"
import { BlogCategoryButton } from "@shared/components/blog-category-button"
import { cn } from "@shared/lib/utils"
import type { BlogCategoryFiltersProps } from "../model/schema"

export const BlogCategoryFilters = ({ className, ...props }: BlogCategoryFiltersProps) => {
	return (
		<div
			className={cn(
				"flex h-fit flex-col gap-inner-padding rounded-3xl bg-muted-2 p-inner-padding",
				className,
			)}
		>
			<BlogCategoryButton
				isActive={true}
				title="All"
			/>
			{props.categories.map((category: BlogCategoryButtonType) => (
				<BlogCategoryButton
					isActive={false}
					key={category.title}
					title={category.title}
				/>
			))}
		</div>
	)
}
