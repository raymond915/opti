import { defineField, defineType } from "sanity"
export default defineType({
	name: "faqCategory",
	title: "FAQ Category",
	type: "document",
	fields: [
		defineField({
			name: "title",
			type: "string",
			title: "Title",
			description: "The title of the FAQ category",
		}),
		defineField({
			name: "description",
			type: "text",
			title: "Description",
			description: "A brief description of the FAQ category",
		}),
	],
})
