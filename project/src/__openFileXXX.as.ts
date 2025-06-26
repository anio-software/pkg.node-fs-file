import {
	type EnkoreJSRuntimeContextOptions,
	createContext
} from "@anio-software/enkore.js-runtime"

import {openFile as x} from "@anio-software/pkg-private.node-consistent-fs/async"
//>import {openFile as x} from "@anio-software/pkg-private.node-consistent-fs/sync"

export async function __implementation(
//>export function __implementationSync(
	contextOptions: EnkoreJSRuntimeContextOptions,
	path: string,
	flags?: string,
	mode?: number
) : Promise<ReturnType<typeof x>> {
//>) : ReturnType<typeof x> {
	return await x(path, flags, mode)
//>	return x(path, flags, mode)
}
