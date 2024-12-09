import {implementation} from "#~synthetic/async.sync/findNearestFile.mts"
import type {RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"
import {getProject} from "@fourtune/realm-js/v0/project"

// vvv--- types needed for implementation
/* couldn't find a user defined type named 'Promise' at the top level */
// ^^^--- types needed for implementation

declare function findNearestFile(
	config_file_name: string,
	start_dir: string
) : Promise<string|false>

/**
 * @brief
 * Create an instance of the function 'findNearestFile'.
 *
 * @param user
 * Options object (see @fourtune/realm-js/v0/runtime) or an already
 * created context with createContext().
 * This parameter is optional.
 *
 * @return
 * An instance of the function 'findNearestFile'.
 */
export function findNearestFileFactory(context: RuntimeWrappedContextInstance) : typeof findNearestFile {
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

	return async function findNearestFile(config_file_name: string, start_dir: string) : Promise<string|false> {
		return await implementation(local_context, config_file_name, start_dir)
	}
}
