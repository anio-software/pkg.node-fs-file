import {useContext, type RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"

import {nodeFsFindNearestFile} from "@aniojs-private/node-fs-find-nearest-file"
//>import {nodeFsFindNearestFileSync as nodeFsFindNearestFile} from "@aniojs-private/node-fs-find-nearest-file"

export async function implementation(
//>export function implementation(
	wrapped_context: RuntimeWrappedContextInstance,
	config_file_name: string,
	start_dir: string
) : Promise<string|false> {
//>) : string|false {
	const context = useContext(wrapped_context, 0)

	return await nodeFsFindNearestFile(
//>	return nodeFsFindNearestFile(
		config_file_name, start_dir
	)
}
