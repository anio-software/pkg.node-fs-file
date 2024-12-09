import {implementation} from "#~synthetic/async.sync/openFile.mts"
import type {RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"
import {getProject} from "@fourtune/realm-js/v0/project"

// vvv--- types needed for implementation
/* couldn't find a user defined type named 'Promise' at the top level */
/* couldn't find a user defined type named 'ReturnType' at the top level */
import {openFile as x} from "@aniojs-private/node-async-sync-fs/async"
// ^^^--- types needed for implementation

declare function openFile(
	path: string,
	flags?: string,
	mode?: number
) : Promise<ReturnType<typeof x>>

/**
 * @brief
 * Create an instance of the function 'openFile'.
 *
 * @param user
 * Options object (see @fourtune/realm-js/v0/runtime) or an already
 * created context with createContext().
 * This parameter is optional.
 *
 * @return
 * An instance of the function 'openFile'.
 */
export function openFileFactory(context: RuntimeWrappedContextInstance) : typeof openFile {
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

	return async function openFile(path: string, flags?: string, mode?: number) : Promise<ReturnType<typeof x>> {
		return await implementation(local_context, path, flags, mode)
	}
}
