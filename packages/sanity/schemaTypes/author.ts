import { defineField, defineType } from "sanity"

export default defineType({
	name: "author",
	title: "Author",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Name",
			type: "string",
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				maxLength: 96,
			},
		}),
		defineField({
			name: "image",
			title: "Portrait",
			type: "image",
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: "about",
			title: "About the auther",
			type: "array",
			of: [
				{
					type: "block",
				},
			],
		}),
	],
})
