import {useContext, type RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"

import {nodeFsFindNearestFile} from "@aniojs-private/node-fs-find-nearest-file"

export async function implementation(
	wrapped_context: RuntimeWrappedContextInstance,
	config_file_name: string,
	start_dir: string
) : Promise<string|false> {
	const context = useContext(wrapped_context, 0)

	return await nodeFsFindNearestFile(
		config_file_name, start_dir
	)
}
