import {useContext, type RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"

import {nodeFsFindNearestFileSync as nodeFsFindNearestFile} from "@aniojs-private/node-fs-find-nearest-file"

export function implementation(
	wrapped_context: RuntimeWrappedContextInstance,
	config_file_name: string,
	start_dir: string
) : string|false {
	const context = useContext(wrapped_context, 0)

	return nodeFsFindNearestFile(
		config_file_name, start_dir
	)
}
