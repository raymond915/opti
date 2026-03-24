export const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className="grid grid-cols-1 gap-x-inner-padding gap-y-section-gap overflow-visible p-inner-padding pb-none">
			{children}
		</main>
	)
}
