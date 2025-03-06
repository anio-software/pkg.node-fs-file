import {createContext} from "@fourtune/realm-js/v0/runtime"

import {findNearestFileSyncFactory as factory} from "#~synthetic/user/export/findNearestFileSyncFactory.mts"

export function findNearestFileSync(config_file_name: string, start_dir: string) : string|false {
	const __fnImplementation = factory(createContext())

	return __fnImplementation(config_file_name, start_dir)
}
