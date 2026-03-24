import { defineField, defineType } from "sanity"

export default defineType({
	name: "post",
	title: "Post",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "author",
			title: "Author",
			type: "reference",
			to: [
				{
					type: "author",
				},
			],
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "featureImage",
			title: "Feature Image",
			type: "image",
			fields: [
				defineField({
					name: "alt",
					title: "alt",
					type: "string",
				}),
			],
			options: {
				hotspot: true,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "excerpt",
			title: "Excerpt",
			type: "text",
			rows: 3,
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "category",
			title: "Category",
			type: "reference",
			to: [
				{
					type: "category",
				},
			],
		}),
		defineField({
			name: "tags",
			title: "Tags",
			type: "array",
			of: [
				{
					type: "tag",
				},
			],
			options: {
				layout: "tags",
			},
		}),
		defineField({
			name: "body",
			title: "Body",
			type: "array",
			of: [
				{
					type: "block",
				},
			],
		}),
	],
})
