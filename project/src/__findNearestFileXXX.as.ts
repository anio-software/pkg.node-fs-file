import {
	type EnkoreJSRuntimeContextOptions,
	createContext
} from "@anio-software/enkore.js-runtime"

import {nodeFsFindNearestFile} from "@aniojs-private/node-fs-find-nearest-file"
//>import {nodeFsFindNearestFileSync as nodeFsFindNearestFile} from "@aniojs-private/node-fs-find-nearest-file"

export async function __implementation(
//>export function __implementationSync(
	contextOptions: EnkoreJSRuntimeContextOptions,
	config_file_name: string,
	start_dir: string
) : Promise<string|false> {
//>) : string|false {
	const context = createContext(contextOptions, 0)

	return await nodeFsFindNearestFile(
//>	return nodeFsFindNearestFile(
		config_file_name, start_dir
	)
}
