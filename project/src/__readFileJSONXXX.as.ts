import type {EnkoreJSRuntimeContextOptions} from "@anio-software/enkore.js-runtime"

import {__implementation as readFileString} from "#~src/readFileString.ts"
//>import {__implementationSync as readFileString} from "#~src/readFileStringSync.ts"

export async function __implementation(
//>export function __implementationSync(
	contextOptions: EnkoreJSRuntimeContextOptions,
	path: string
) : Promise<unknown> {
//>) : unknown {
	return JSON.parse(await readFileString(contextOptions, path))
//>	return JSON.parse(readFileString(contextOptions, path))
}
