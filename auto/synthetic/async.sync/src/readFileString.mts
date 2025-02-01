import {type RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"

import {readFile} from "@aniojs-private/node-async-sync-fs/async"

export async function implementation(
	wrapped_context: RuntimeWrappedContextInstance,
	path: string
) : Promise<string> {
	return (await readFile(path)).toString()
}
