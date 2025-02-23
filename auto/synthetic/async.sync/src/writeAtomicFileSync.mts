import {useContext, type RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"

import {randomIdentifierSync} from "@aniojs/random-ident"

export type AnioJsDependencies = {
	randomIdentifierSync: typeof randomIdentifierSync
}

import path from "node:path"

import {mkdir, writeFile, rename} from "@aniojs-private/node-async-sync-fs/sync"

export function implementation(
	wrapped_context: RuntimeWrappedContextInstance,
	dependencies: AnioJsDependencies,
	file_path: string,
	data: string | Buffer,
	options?: {
		createParents?: boolean
		parentsMode?: number
		mode?: number
	}
) : number {
	const context = useContext(wrapped_context, 0)

	const random_str = dependencies.randomIdentifierSync(16)

	const parent_dir = path.dirname(file_path)

	//
	// if options.create_parents is set, make sure all sub-directories are created
	//
	if (options?.createParents === true) {
		const mode = options?.parentsMode ?? 0o777

		mkdir(parent_dir, {recursive: true, mode})
	}

	const file_name = path.basename(file_path)
	const tmp_name = file_name + `.tmp${random_str}`
	const tmp_path = path.join(parent_dir, tmp_name)

	context.log.trace(`writing file at '${tmp_path}'`)

	writeFile(tmp_path, data, {mode: options?.mode})

	rename(tmp_path, file_path)

	return data.length
}
