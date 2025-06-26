import {
	type EnkoreJSRuntimeContextOptions,
	createContext
} from "@anio-software/enkore.js-runtime"

import type {randomIdentifierSync} from "@anio-software/pkg.random-identifier"

export type __EnkoreFunctionDependencies = {
	randomIdentifierSync: typeof randomIdentifierSync
}

import path from "node:path"

import {mkdir, writeFile, rename} from "@anio-software/pkg-private.node-consistent-fs/async"
//>import {mkdir, writeFile, rename} from "@anio-software/pkg-private.node-consistent-fs/sync"

export async function __implementation(
//>export function __implementationSync(
	contextOptions: EnkoreJSRuntimeContextOptions,
	dependencies: __EnkoreFunctionDependencies,
	filePath: string,
	data: string | Buffer,
	options?: {
		createParents?: boolean
		parentsMode?: number
		mode?: number
	}
) : Promise<number> {
//>) : number {
	const context = createContext(contextOptions, 0)

	const randomStr = dependencies.randomIdentifierSync(16)

	const parentDir = path.dirname(filePath)

	//
	// if options.createParents is set, make sure all sub-directories are created
	//
	if (options?.createParents === true) {
		const mode = options?.parentsMode ?? 0o777

		await mkdir(parentDir, {recursive: true, mode})
//>		mkdir(parentDir, {recursive: true, mode})
	}

	const fileName = path.basename(filePath)
	const tmpName = fileName + `.tmp${randomStr}`
	const tmpPath = path.join(parentDir, tmpName)

	context.log.trace(`writing file at '${tmpPath}'`)

	await writeFile(tmpPath, data, {mode: options?.mode})
//>	writeFile(tmpPath, data, {mode: options?.mode})

	await rename(tmpPath, filePath)
//>	rename(tmpPath, filePath)

	return data.length
}
