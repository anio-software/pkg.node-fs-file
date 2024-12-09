import {implementation, type AnioJsDependencies} from "#~synthetic/async.sync/writeAtomicFileJSONSync.mts"
import type {RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"
import {getProject} from "@fourtune/realm-js/v0/project"

// vvv dependencies declared via AnioJsDependencies type
import {randomIdentifierSyncFactory} from "@aniojs/random-ident"
// ^^^ dependencies declared via AnioJsDependencies type

declare function writeAtomicFileJSONSync(
	file_path: string,
	data: any,
	options: {
		pretty?: boolean,
		disable_new_line_at_eof?: boolean,
		create_parents?: boolean
	}
) : number

/**
 * @brief
 * Create an instance of the function 'writeAtomicFileJSONSync'.
 *
 * @param user
 * Options object (see @fourtune/realm-js/v0/runtime) or an already
 * created context with createContext().
 * This parameter is optional.
 *
 * @return
 * An instance of the function 'writeAtomicFileJSONSync'.
 */
export function writeAtomicFileJSONSyncFactory(context: RuntimeWrappedContextInstance) : typeof writeAtomicFileJSONSync {
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

	return function writeAtomicFileJSONSync(file_path: string, data: any, options: {
		pretty?: boolean,
		disable_new_line_at_eof?: boolean,
		create_parents?: boolean
	}) : number {
		return implementation(local_context, dependencies, file_path, data, options)
	}
}
