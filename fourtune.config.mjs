import generateTypesFile from "./generateTypesFile.mjs"

export default {
	realm: "js",
	type: "package",

	autogenerate: {
		"types.d.ts": generateTypesFile()
	}
}
