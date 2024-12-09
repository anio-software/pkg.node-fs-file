import {generateFactoryFiles} from "@fourtune/realm-js/v0/autogenerate"

export default {
	realm: {
		name: "js",
		type: "package",

		options: {
			runtime: "node"
		}
	},

	autogenerate: {
		...generateFactoryFiles({
			source_file: "src/__readFileInChunksXXX.as.mts",
			export_name: "readFileInChunksXXX",
			destination: "src/export"
		}),
		...generateFactoryFiles({
			source_file: "src/__hashFileXXX.as.mts",
			export_name: "hashFileXXX",
			destination: "src/export"
		})
	}
}
