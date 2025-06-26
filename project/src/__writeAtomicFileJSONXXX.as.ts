import {
	type EnkoreJSRuntimeContextOptions,
	createContext
} from "@anio-software/enkore.js-runtime"

import {__implementation as writeAtomicFile} from "#~src/writeAtomicFile.ts"
//>import {__implementationSync as writeAtomicFile} from "#~src/writeAtomicFileSync.ts"

import type {randomIdentifierSync} from "@anio-software/pkg.random-identifier"

export type __EnkoreFunctionDependencies = {
	randomIdentifierSync: typeof randomIdentifierSync
}

export async function __implementation(
//>export function __implementationSync(
	contextOptions: EnkoreJSRuntimeContextOptions,
	dependencies: __EnkoreFunctionDependencies,
	file_path: string,
	data: any,
	options?: {
		pretty?: boolean,
		disableNewLineAtEOF?: boolean
		createParents?: boolean
		parentsMode?: number
		mode?: number
	}
) : Promise<number> {
//>) : number {
	const context = createContext(contextOptions, 0)

	context.log.trace(`writing atomic json file at '${file_path}'`)

	let data_str = options?.pretty === true ? JSON.stringify(data, null, 4) : JSON.stringify(data)

	//
	// in unix it is common, if not required, that text files
	// end with a new line
	//
	if (options?.disableNewLineAtEOF !== true) {
		data_str += "\n"
	}

	return await writeAtomicFile(
//>	return writeAtomicFile(
		contextOptions,
		dependencies,
		file_path,
		data_str,
		{
			createParents: options?.createParents === true,
			parentsMode: options?.parentsMode,
			mode: options?.mode
		}
	)
}
