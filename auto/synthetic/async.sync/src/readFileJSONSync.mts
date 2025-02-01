import {type RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"

import {implementation as readFileString} from "#~synthetic/async.sync/readFileStringSync.mts"

export function implementation(
	wrapped_context: RuntimeWrappedContextInstance,
	path: string
) : unknown {
	return JSON.parse(readFileString(wrapped_context, path))
}
