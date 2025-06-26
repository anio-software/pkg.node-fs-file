import type {EnkoreJSRuntimeContextOptions} from "@anio-software/enkore.js-runtime"

import {readFile} from "@anio-software/pkg-private.node-consistent-fs/async"
//>import {readFile} from "@anio-software/pkg-private.node-consistent-fs/sync"

export async function __implementation(
//>export function __implementationSync(
	contextOptions: EnkoreJSRuntimeContextOptions,
	path: string
) : Promise<string> {
//>) : string {
	return (await readFile(path)).toString()
//>	return readFile(path).toString()
}
