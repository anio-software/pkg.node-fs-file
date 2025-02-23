import {useContext, type RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"

import {implementation as writeAtomicFile} from "#~synthetic/async.sync/writeAtomicFile.mts"

import {randomIdentifierSync} from "@aniojs/random-ident"

export type AnioJsDependencies = {
	randomIdentifierSync: typeof randomIdentifierSync
}

export async function implementation(
	wrapped_context: RuntimeWrappedContextInstance,
	dependencies: AnioJsDependencies,
	file_path: string,
	data: any,
	options?: {
		pretty?: boolean,
		disableNewLineAtEOF?: boolean,
		createParents?: boolean
		parentsMode?: number
	}
) : Promise<number> {
	const context = useContext(wrapped_context, 0)

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
		wrapped_context,
		dependencies,
		file_path,
		data_str,
		{
			createParents: options?.createParents === true,
			parentsMode: options?.parentsMode
		}
	)
}
