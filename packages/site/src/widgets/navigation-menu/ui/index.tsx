"use client"
import Logo from "@shared/components/logo"
import { cn } from "@shared/lib/utils"
import { SubMenuList } from "@widgets/footer/ui/sub-menu-list"
import {
	AnimatePresence,
	motion,
	stagger,
	useMotionValueEvent,
	useScroll,
	type Variants,
} from "motion/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { LanguageToggle } from "@widgets/language-toggle"
import { featuredItems } from "../model/featured-items"
import { Connect } from "./connect"
import { FeaturedItem } from "./featured-item"
import { MenuButton } from "./menu-button"

//NOTE: You can use useMobile to change which menus show
//NOTE: onScroll down threshold to decide if the menu should close
export const NavigationMenu = () => {
	const pathname = usePathname()
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	// Auto-close the dropdown whenever the route changes (e.g. user taps a nav
	// link). On mobile the open menu was overlaying the destination page.
	useEffect(() => {
		setIsMenuOpen(false)
	}, [pathname])
	const { scrollYProgress } = useScroll()
	const [isFeaturedItemsVisible, setFeatureItemsVisible] = useState(true)
	const [isTop, setIsTop] = useState(true)
	const [featureNavDelay, setFeatureNavDelay] = useState(0)
	const menuScrollThreshold = 0.01

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		if (latest > menuScrollThreshold) {
			setIsTop(false)
			setFeatureItemsVisible(false)
			setFeatureNavDelay(0.45)
		} else {
			setIsTop(true)
			setFeatureItemsVisible(true)
			setFeatureNavDelay(0)
		}
	})

	const featureNavListVariants = {
		visible: {
			width: "auto",
		},
		hidden: {
			width: "0",
			transition: {
				delay: featureNavDelay,
				duration: 0.4,
			},
		},
	}

	const featureNavItemsVariants = {
		visible: {
			translateX: 0,
			opacity: 1,
			transition: {
				delay: 0,
				duration: 0.4,
			},
		},
		hidden: {
			translateX: 100,
			opacity: 0,
			transition: {
				delay: 2,
				duration: 0.4,
			},
		},
	}

	const subMenuVariants: Record<string, Variants> = {
		menuContainer: {
			open: {
				height: "auto",
				opacity: 1,
				transition: {
					delay: 0.1,
					duration: 0.4,
					ease: "circInOut",
				},
			},
			closed: {
				height: "0",
				opacity: 0,
				transition: {
					delay: 0.1,
					duration: 0.4,
					ease: "circInOut",
				},
			},
		},
		itemContainer: {
			open: {
				transition: {
					delay: 0.4,
					delayChildren: stagger(0.04),
				},
			},
			closed: {},
		},
		items: {
			open: {
				translateY: 0,
				opacity: 1,
				transition: {
					opacity: {
						duration: 0.4,
					},
					translateY: {
						duration: 0.4,
					},
					damping: 300,
				},
			},
			closed: {
				translateY: -200,
				opacity: 0,
				transition: {
					opacity: {
						duration: 0.4,
					},
					translateY: {
						duration: 0.4,
					},
					damping: 300,
				},
			},
		},
	}

	return (
		<div
			className={cn("fixed inset-x-0 top-0 z-40")}
			id="menu-container"
		>
			<div className="mx-auto flex h-full w-full max-w-[1800px] flex-col">
				<div
					className={cn(
						"flex w-full items-start justify-between rounded-outer p-inner-padding",
						pathname === "/contact" && "",
					)}
					id="main-menu"
				>
					<Link
						className="size-fit rounded-full bg-mint-7 px-inner-padding py-3"
						href="/"
					>
						{/*TODO: LOGO animation*/}
						<Logo
							className={cn("h-9 bg-mint-7", pathname === "/contact" && "")}
						/>
					</Link>
					<motion.div
						className="flex h-auto w-fit flex-col overflow-clip rounded-outer bg-mint-7 p-inner-padding"
						onHoverEnd={() => {
							!isTop && setFeatureItemsVisible(false)
							setIsMenuOpen(false)
						}}
						onHoverStart={() => {
							setFeatureItemsVisible(true)
						}}
					>
						<div className="flex h-fit w-full items-center justify-end">
							<AnimatePresence
								mode={"wait"}
								propagate={true}
							>
								{isFeaturedItemsVisible && (
									<motion.nav
										animate={isFeaturedItemsVisible ? "visible" : "hidden"}
										className="flex h-10 items-center overflow-clip"
										exit={"hidden"}
										initial={"hidden"}
										key={"featuredItems"}
										variants={featureNavListVariants}
									>
										{featuredItems.map((item) => {
											return (
												<FeaturedItem
													className="last:mr-inner-padding"
													href={item.href}
													key={item.label}
													variants={featureNavItemsVariants}
												>
													{item.label}
												</FeaturedItem>
											)
										})}
									</motion.nav>
								)}
							</AnimatePresence>
							<LanguageToggle className="mr-2" />
							<MenuButton
								onClick={() => {
									setIsMenuOpen(!isMenuOpen)
								}}
							/>
						</div>
						<AnimatePresence
							mode={"wait"}
							propagate={true}
						>
							{isMenuOpen && (
								<motion.div
									animate={isMenuOpen ? "open" : "closed"}
									className="relative flex h-full w-full flex-col justify-end overflow-clip bg-mint-7"
									exit="closed"
									initial="closed"
									key={"subnav"}
									layout={true}
									variants={subMenuVariants.menuContainer}
									whileHover={"open"}
								>
									<SubMenuList
										itemVariants={subMenuVariants.items}
										variants={subMenuVariants.itemContainer}
									/>
									<Connect />
								</motion.div>
							)}
						</AnimatePresence>
					</motion.div>
				</div>
			</div>
		</div>
	)
}
