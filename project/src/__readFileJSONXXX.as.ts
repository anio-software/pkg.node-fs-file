import {
	type EnkoreJSRuntimeContextOptions,
	createContext
} from "@anio-software/enkore.js-runtime"

import {implementation as readFileString} from "#~synthetic/async.sync/readFileString.mts"
//>import {implementation as readFileString} from "#~synthetic/async.sync/readFileStringSync.mts"

export async function implementation(
//>export function implementation(
	contextOptions: EnkoreJSRuntimeContextOptions,
	path: string
) : Promise<unknown> {
//>) : unknown {
	return JSON.parse(await readFileString(contextOptions, path))
//>	return JSON.parse(readFileString(contextOptions, path))
}
