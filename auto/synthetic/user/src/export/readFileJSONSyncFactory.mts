import {implementation} from "#~synthetic/async.sync/readFileJSONSync.mts"
import type {RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"
import {getProject} from "@fourtune/realm-js/v0/project"

declare function readFileJSONSync(
	path: string
) : unknown

/**
 * @brief
 * Create an instance of the function 'readFileJSONSync'.
 *
 * @param user
 * Options object (see @fourtune/realm-js/v0/runtime) or an already
 * created context with createContext().
 * This parameter is optional.
 *
 * @return
 * An instance of the function 'readFileJSONSync'.
 */
export function readFileJSONSyncFactory(context: RuntimeWrappedContextInstance) : typeof readFileJSONSync {
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

	return function readFileJSONSync(path: string) : unknown {
		return implementation(local_context, path)
	}
}
