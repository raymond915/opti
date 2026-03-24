Object.defineProperty(exports, "__esModule", {
	value: true,
})
exports.BlogCategoryFiltersSchema = void 0
var arktype1 = require("arktype")
var blogCategoryButton1 = require("@shared/components/blog-category-button")
exports.BlogCategoryFiltersSchema = (0, arktype1.type)({
	categories: blogCategoryButton1.BlogCategoryButtonSchema.array(),
	className: "string",
})
