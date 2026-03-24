const {chromium} = require("playwright")

;(async () => {
	const browser = await chromium.launch({headless: true})
	const context = await browser.newContext()

	// Desktop
	const page = await context.newPage()
	await page.setViewportSize({width: 1920, height: 1080})
	await page.goto("http://localhost:3000")
	await page.waitForLoadState("networkidle")

	// Find CTA section
	const ctaElement = await page.locator("text=/Optimise Your HR Compliance Today/").first()
	await ctaElement.scrollIntoViewIfNeeded()

	// Screenshot desktop
	await page.screenshot({path: ".sisyphus/evidence/cta-desktop.png", fullPage: false})

	// Inspect elements
	const subtitle = await page.locator("text=/Optimise Your HR Compliance Today/").textContent()
	const title = await page.locator("text=/Schedule Your Free Consultation/").textContent()
	const bodyElement = await page.locator("text=/challenges/").first()
	const body = await bodyElement.textContent()
	const button = await page.locator('a[href="/calendly"]')
	const href = await button.getAttribute("href")

	// Media
	const image = await page.locator('img[src*="opti-1.png"]')
	const src = await image.getAttribute("src")

	// Logo - assume it's an img with logomark
	let logoSrc = null
	try {
		const logo = await page
			.locator("img")
			.filter({hasText: /Logo/})
			.or(page.locator('[class*="logo"] img'))
			.first()
		logoSrc = await logo.getAttribute("src")
	} catch (e) {
		console.log("Logo not found")
	}

	// Layout check - rough
	const contentTop = await page
		.locator('[class*="content"]')
		.or(page.locator("div").filter({hasText: title}))
		.first()
	const imageBottom = image
	const contentRect = await contentTop.boundingBox()
	const imageRect = await imageBottom.boundingBox()

	console.log("Desktop inspection:")
	console.log(
		JSON.stringify({subtitle, title, body, href, src, logoSrc, contentRect, imageRect}, null, 2),
	)

	// Console errors
	const errors = []
	page.on("console", (msg) => {
		if (msg.type() === "error") {
			errors.push(msg.text())
		}
	})
	await page.waitForTimeout(2000)
	console.log("Console errors:", JSON.stringify(errors))

	// Mobile
	await page.setViewportSize({width: 390, height: 844})
	await ctaElement.scrollIntoViewIfNeeded()
	await page.screenshot({path: ".sisyphus/evidence/cta-mobile.png", fullPage: false})

	console.log("Mobile screenshot taken")

	await browser.close()
})()
