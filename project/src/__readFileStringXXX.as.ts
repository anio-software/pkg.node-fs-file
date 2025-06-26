import {
	type EnkoreJSRuntimeContextOptions,
	createContext
} from "@anio-software/enkore.js-runtime"

import {readFile} from "@aniojs-private/node-async-sync-fs/async"
//>import {readFile} from "@aniojs-private/node-async-sync-fs/sync"

export async function __implementation(
//>export function __implementationSync(
	contextOptions: EnkoreJSRuntimeContextOptions,
	path: string
) : Promise<string> {
//>) : string {
	return (await readFile(path)).toString()
//>	return readFile(path).toString()
}
