// Prettier stub — prevents Turbopack from bundling prettier
// @react-email/render only uses prettier for optional HTML formatting
export const format = async (html: string) => html
export const resolveConfig = async () => ({})
export const resolveConfigFile = async () => null
export default { format, resolveConfig, resolveConfigFile }
