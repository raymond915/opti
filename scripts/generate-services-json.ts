import { exec } from "child_process"
import fs from "fs/promises"
import path from "path"
import { promisify } from "util"

const execAsync = promisify(exec)

const servicesDir = "/Users/singer/dev/opti/packages/site/Content/Services/"

const run = async () => {
	const files = await fs
		.readdir(servicesDir)
		.then((files) => files.filter((f) => f.endsWith(".docx")).sort())
	console.log("Found", files.length, "docx files")

	for (const filename of files) {
		const docxPath = path.join(servicesDir, filename)
		const mdPath = path.join(servicesDir, filename.replace(".docx", ".md"))
		const title = filename
			.replace(".docx", "")
			.split(/\s+/)
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
			.join(" ")
		const slug = title.toLowerCase().replace(/\s+/g, "-")
		const jsonPath = path.join(servicesDir, `${slug}.json`)

		console.log(`Processing ${filename} -> ${slug}.json`)

		// Extract md
		await execAsync(`pandoc "${docxPath}" -t markdown --wrap=none > "${mdPath}"`)

		// Read md
		const md = await fs.readFile(mdPath, "utf8")

		// Parse content: split by double newlines for paras
		const content = md
			.split(/\n\s*\n/)
			.map((p) => p.trim())
			.filter((p) => p.length > 0)

		// Json
		const data = {
			title,
			slug,
			content,
		}

		// Write json
		await fs.writeFile(jsonPath, JSON.stringify(data, null, 2) + "\n")

		// Cleanup md
		await fs.unlink(mdPath)

		console.log(`Created ${jsonPath}`)
	}

	console.log(`\n✅ Created ${files.length} JSON files in ${servicesDir}`)
}

run().catch(console.error)
