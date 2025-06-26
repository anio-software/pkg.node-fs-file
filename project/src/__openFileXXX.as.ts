import {
	type EnkoreJSRuntimeContextOptions
} from "@anio-software/enkore.js-runtime"

import {openFile} from "@anio-software/pkg-private.node-consistent-fs/async"
//>import {openFile} from "@anio-software/pkg-private.node-consistent-fs/sync"

export async function __implementation(
//>export function __implementationSync(
	contextOptions: EnkoreJSRuntimeContextOptions,
	path: string,
	flags?: string,
	mode?: number
) : Promise<ReturnType<typeof openFile>> {
//>) : ReturnType<typeof openFile> {
	return await openFile(path, flags, mode)
//>	return openFile(path, flags, mode)
}
