import {implementation} from "#~synthetic/async.sync/hashFile.mts"
import type {RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"
import {getProject} from "@fourtune/realm-js/v0/project"

// vvv--- types needed for implementation
/* couldn't find a user defined type named 'BufferEncoding' at the top level */
/* couldn't find a user defined type named 'Promise' at the top level */
// ^^^--- types needed for implementation

declare function hashFile(
	file_path: string,
	algo: string,
	hash_encoding?: BufferEncoding
) : Promise<string>

/**
 * @brief
 * Create an instance of the function 'hashFile'.
 *
 * @param user
 * Options object (see @fourtune/realm-js/v0/runtime) or an already
 * created context with createContext().
 * This parameter is optional.
 *
 * @return
 * An instance of the function 'hashFile'.
 */
export function hashFileFactory(context: RuntimeWrappedContextInstance) : typeof hashFile {
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

	return async function hashFile(file_path: string, algo: string, hash_encoding?: BufferEncoding) : Promise<string> {
		return await implementation(local_context, file_path, algo, hash_encoding)
	}
}
