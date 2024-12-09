import {implementation} from "#~synthetic/async.sync/readFileInChunksSync.mts"
import type {RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"
import {getProject} from "@fourtune/realm-js/v0/project"

// vvv--- types needed for implementation
import type {ReadFileInChunksSyncResult as ReadFileInChunksResult} from "#~synthetic/async.sync/export/ReadFileInChunksSyncResult.d.mts"
// ^^^--- types needed for implementation

declare function readFileInChunksSync(
	file_path: string,
	chunk_size: number
) : ReadFileInChunksResult

/**
 * @brief
 * Create an instance of the function 'readFileInChunksSync'.
 *
 * @param user
 * Options object (see @fourtune/realm-js/v0/runtime) or an already
 * created context with createContext().
 * This parameter is optional.
 *
 * @return
 * An instance of the function 'readFileInChunksSync'.
 */
export function readFileInChunksSyncFactory(context: RuntimeWrappedContextInstance) : typeof readFileInChunksSync {
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

	return function readFileInChunksSync(file_path: string, chunk_size: number) : ReadFileInChunksResult {
		return implementation(local_context, file_path, chunk_size)
	}
}
