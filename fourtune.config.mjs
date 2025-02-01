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
		}),
		...generateFactoryFiles({
			source_file: "src/__writeAtomicFileXXX.as.mts",
			export_name: "writeAtomicFileXXX",
			destination: "src/export"
		}),
		...generateFactoryFiles({
			source_file: "src/__writeAtomicFileJSONXXX.as.mts",
			export_name: "writeAtomicFileJSONXXX",
			destination: "src/export"
		}),
		...generateFactoryFiles({
			source_file: "src/__findNearestFileXXX.as.mts",
			export_name: "findNearestFileXXX",
			destination: "src/export"
		}),
		...generateFactoryFiles({
			source_file: "src/__openFileXXX.as.mts",
			export_name: "openFileXXX",
			destination: "src/export"
		}),
		...generateFactoryFiles({
			source_file: "src/__readFileStringXXX.as.mts",
			export_name: "readFileStringXXX",
			destination: "src/export"
		})
	}
}
