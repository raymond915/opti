import { ScrollArea, type ScrollAreaRootProps } from "@base-ui/react"

type ScrollThumbType = {
	children: React.ReactNode
	className?: string
}

interface ScrollThumbProps
	extends Omit<ScrollAreaRootProps, keyof ScrollThumbType>,
		ScrollThumbType {}

export const ScrollThumb = ({ children, ...props }: ScrollThumbProps) => {
	return (
		<ScrollArea.Root
			className="flex max-h-60 w-full"
			{...props}
		>
			<ScrollArea.Viewport className={"w-full data-has-overflow-y:pr-5"}>
				{children}
			</ScrollArea.Viewport>
			<ScrollArea.Scrollbar className="my-2 mr-2 flex w-2 overflow-clip rounded-full bg-mint-7/6">
				<ScrollArea.Thumb className="flex w-full rounded-full bg-mint-4" />
			</ScrollArea.Scrollbar>
		</ScrollArea.Root>
	)
}
