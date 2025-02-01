import {type RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"

import {implementation as readFileString} from "#~synthetic/async.sync/readFileString.mts"
//>import {implementation as readFileString} from "#~synthetic/async.sync/readFileStringSync.mts"

export async function implementation(
//>export function implementation(
	wrapped_context: RuntimeWrappedContextInstance,
	path: string
) : Promise<unknown> {
//>) : unknown {
	return JSON.parse(await readFileString(wrapped_context, path))
//>	return JSON.parse(readFileString(wrapped_context, path))
}
