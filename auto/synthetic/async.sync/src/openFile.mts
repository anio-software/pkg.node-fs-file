import {useContext, type RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"

import {openFile as x} from "@aniojs-private/node-async-sync-fs/async"

export async function implementation(
	wrapped_context: RuntimeWrappedContextInstance,
	path: string,
	flags?: string,
	mode?: number
) : Promise<ReturnType<typeof x>> {
	return await x(path, flags, mode)
}
