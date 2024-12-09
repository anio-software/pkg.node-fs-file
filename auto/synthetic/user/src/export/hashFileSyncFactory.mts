import {implementation} from "#~synthetic/async.sync/hashFileSync.mts"
import type {RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"
import {getProject} from "@fourtune/realm-js/v0/project"

// vvv--- types needed for implementation
/* couldn't find a user defined type named 'BufferEncoding' at the top level */
// ^^^--- types needed for implementation

declare function hashFileSync(
	file_path: string,
	algo: string,
	hash_encoding: BufferEncoding
) : string

/**
 * @brief
 * Create an instance of the function 'hashFileSync'.
 *
 * @param user
 * Options object (see @fourtune/realm-js/v0/runtime) or an already
 * created context with createContext().
 * This parameter is optional.
 *
 * @return
 * An instance of the function 'hashFileSync'.
 */
export function hashFileSyncFactory(context: RuntimeWrappedContextInstance) : typeof hashFileSync {
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

	return function hashFileSync(file_path: string, algo: string, hash_encoding: BufferEncoding) : string {
		return implementation(local_context, file_path, algo, hash_encoding)
	}
}
