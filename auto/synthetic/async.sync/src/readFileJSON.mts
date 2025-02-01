import {type RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"

import {implementation as readFileString} from "#~synthetic/async.sync/readFileString.mts"

export async function implementation(
	wrapped_context: RuntimeWrappedContextInstance,
	path: string
) : Promise<unknown> {
	return JSON.parse(await readFileString(wrapped_context, path))
}
