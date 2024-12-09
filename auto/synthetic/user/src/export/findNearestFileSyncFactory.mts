import {implementation} from "#~synthetic/async.sync/findNearestFileSync.mts"
import type {RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"
import {getProject} from "@fourtune/realm-js/v0/project"

declare function findNearestFileSync(
	config_file_name: string,
	start_dir: string
) : string|false

/**
 * @brief
 * Create an instance of the function 'findNearestFileSync'.
 *
 * @param user
 * Options object (see @fourtune/realm-js/v0/runtime) or an already
 * created context with createContext().
 * This parameter is optional.
 *
 * @return
 * An instance of the function 'findNearestFileSync'.
 */
export function findNearestFileSyncFactory(context: RuntimeWrappedContextInstance) : typeof findNearestFileSync {
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

	return function findNearestFileSync(config_file_name: string, start_dir: string) : string|false {
		return implementation(local_context, config_file_name, start_dir)
	}
}
