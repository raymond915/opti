import Image from "next/image"
export const RaymondPortrait = () => {
	return (
		<div className="relative h-full w-full">
			<Image
				alt={"A portrait of Raymond Hauptfleisch a qualified HR Practioner with Legal Experience"}
				className="object-cover"
				fill={true}
				src={"/Optihr-Raymond-Hauptfleisch-Portrait.jpg"}
			/>
			<div className="absolute inset-0 bg-mint-2/40 mix-blend-darken" />
			<div className="absolute inset-0 bg-gradient-radial from-mint-1/0 via-[66%] via-mint-1/50 to-mint-1 opacity-70" />
		</div>
	)
}

export default RaymondPortrait
