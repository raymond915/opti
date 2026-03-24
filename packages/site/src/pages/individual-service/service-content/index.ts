// @ts-check
import { validateService } from "../model/schema"

const serviceFiles = [
	"company-secretary-services.json",
	"compliance.json",
	"employment-equity.json",
	"hr-policy-development.json",
	"hr-support-for-independent-schools.json",
	"hr-training.json",
	"industrial-relations.json",
	"job-evaluation.json",
	"labour-audits.json",
	"performance-management.json",
	"retrenchments.json",
	"workplace-discipline.json",
	"workplace-wellness-programs.json",
]

async function validateAll() {
	for (const file of serviceFiles) {
		try {
			const mod = await import(`./${file}`)
			validateService(mod.default)
			console.log(`${file}: OK`)
		} catch (e: unknown) {
			console.error(`${file}: FAILED`, (e as Error).message)
		}
	}
}

validateAll()
