import {createContext} from "@fourtune/realm-js/v0/runtime"

import {findNearestFileSyncFactory as factory} from "#~synthetic/user/export/findNearestFileSyncFactory.mts"

const fn = factory(createContext())

export function findNearestFileSync(config_file_name: string, start_dir: string) : string|false {
	return fn(config_file_name, start_dir)
}
