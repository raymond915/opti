import { defineField, defineType } from "sanity"

export default defineType({
	name: "faq",
	title: "FAQ",
	type: "document",
	fields: [
		defineField({
			name: "faqCategory",
			title: "FAQ Category",
			type: "reference",
			to: [
				{
					type: "faqCategory",
				},
			],
		}),
		defineField({
			name: "question",
			title: "Question",
			type: "string",
		}),
		defineField({
			name: "answer",
			title: "Answer",
			type: "text",
		}),
	],
})
