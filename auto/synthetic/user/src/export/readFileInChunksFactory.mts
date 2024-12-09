import {implementation} from "#~synthetic/async.sync/readFileInChunks.mts"
import type {RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"
import {getProject} from "@fourtune/realm-js/v0/project"

// vvv--- types needed for implementation
/* couldn't find a user defined type named 'Promise' at the top level */
import type {ReadFileInChunksResult} from "#~synthetic/async.sync/export/ReadFileInChunksResult.d.mts"
// ^^^--- types needed for implementation

declare function readFileInChunks(
	file_path: string,
	chunk_size: number
) : Promise<ReadFileInChunksResult>

/**
 * @brief
 * Create an instance of the function 'readFileInChunks'.
 *
 * @param user
 * Options object (see @fourtune/realm-js/v0/runtime) or an already
 * created context with createContext().
 * This parameter is optional.
 *
 * @return
 * An instance of the function 'readFileInChunks'.
 */
export function readFileInChunksFactory(context: RuntimeWrappedContextInstance) : typeof readFileInChunks {
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

	return async function readFileInChunks(file_path: string, chunk_size: number) : Promise<ReadFileInChunksResult> {
		return await implementation(local_context, file_path, chunk_size)
	}
}
