import {type RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"

import {openFile as x} from "@aniojs-private/node-async-sync-fs/async"
//>import {openFile as x} from "@aniojs-private/node-async-sync-fs/sync"

export async function implementation(
//>export function implementation(
	wrapped_context: RuntimeWrappedContextInstance,
	path: string,
	flags?: string,
	mode?: number
) : Promise<ReturnType<typeof x>> {
//>) : ReturnType<typeof x> {
	return await x(path, flags, mode)
//>	return x(path, flags, mode)
}
