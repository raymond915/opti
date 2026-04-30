/**
 * Hero stats — labelKey/valueKey reference "Home.hero.{key}" in
 * messages/{locale}.json. The HeroBanner looks them up via useTranslations.
 */
export const heroStatKeys = [
	{ labelKey: "statYearsLabel", valueKey: "statYearsValue" },
	{ labelKey: "statCasesLabel", valueKey: "statCasesValue" },
	{ labelKey: "statOrgsLabel", valueKey: "statOrgsValue" },
] as const
