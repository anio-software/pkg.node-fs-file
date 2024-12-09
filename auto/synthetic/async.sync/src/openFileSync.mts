import {useContext, type RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"

import {openFile as x} from "@aniojs-private/node-async-sync-fs/sync"

export function implementation(
	wrapped_context: RuntimeWrappedContextInstance,
	path: string,
	flags?: string,
	mode?: number
) : ReturnType<typeof x> {
	return x(path, flags, mode)
}
