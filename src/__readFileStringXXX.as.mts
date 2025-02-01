import {type RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"

import {readFile} from "@aniojs-private/node-async-sync-fs/async"
//>import {readFile} from "@aniojs-private/node-async-sync-fs/sync"

export async function implementation(
//>export function implementation(
	wrapped_context: RuntimeWrappedContextInstance,
	path: string
) : Promise<string> {
//>) : string {
	return (await readFile(path)).toString()
//>	return readFile(path).toString()
}
