import {type RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"

import {readFile} from "@aniojs-private/node-async-sync-fs/sync"

export function implementation(
	wrapped_context: RuntimeWrappedContextInstance,
	path: string
) : string {
	return readFile(path).toString()
}
