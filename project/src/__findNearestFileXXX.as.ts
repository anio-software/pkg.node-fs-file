import type {EnkoreJSRuntimeContextOptions} from "@anio-software/enkore.js-runtime"

import {nodeFsFindNearestFile} from "@anio-software/pkg-private.node-fs-find-nearest-file"
//>import {nodeFsFindNearestFileSync as nodeFsFindNearestFile} from "@anio-software/pkg-private.node-fs-find-nearest-file"

export async function __implementation(
//>export function __implementationSync(
	contextOptions: EnkoreJSRuntimeContextOptions,
	configFileName: string,
	startDir: string
) : Promise<string|false> {
//>) : string|false {
	return await nodeFsFindNearestFile(
//>	return nodeFsFindNearestFile(
		configFileName, startDir
	)
}
