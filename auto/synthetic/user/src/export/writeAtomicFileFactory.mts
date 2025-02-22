import {implementation, type AnioJsDependencies} from "#~synthetic/async.sync/writeAtomicFile.mts"
import type {RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"
import {getProject} from "@fourtune/realm-js/v0/project"

// vvv dependencies declared via AnioJsDependencies type
import {randomIdentifierSyncFactory} from "@aniojs/random-ident"
// ^^^ dependencies declared via AnioJsDependencies type

// vvv--- types needed for implementation
/* couldn't find a user defined type named 'Buffer' at the top level */
/* couldn't find a user defined type named 'Promise' at the top level */
// ^^^--- types needed for implementation

declare function writeAtomicFile(
	file_path: string,
	data: string | Buffer,
	options?: {
		createParents?: boolean
	}
) : Promise<number>

/**
 * @brief
 * Create an instance of the function 'writeAtomicFile'.
 *
 * @param user
 * Options object (see @fourtune/realm-js/v0/runtime) or an already
 * created context with createContext().
 * This parameter is optional.
 *
 * @return
 * An instance of the function 'writeAtomicFile'.
 */
export function writeAtomicFileFactory(context: RuntimeWrappedContextInstance) : typeof writeAtomicFile {
	const dependencies : AnioJsDependencies = {
		randomIdentifierSync: randomIdentifierSyncFactory(context)
	}

	const project = getProject()
	const local_context : RuntimeWrappedContextInstance = {
		...context,
		_package: {
			name: project.package_json.name,
			version: project.package_json.version,
			author: project.package_json.author,
			license: project.package_json.license
		}
	}

	return async function writeAtomicFile(file_path: string, data: string | Buffer, options?: {
		createParents?: boolean
	}) : Promise<number> {
		return await implementation(local_context, dependencies, file_path, data, options)
	}
}
