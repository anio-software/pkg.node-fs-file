import {createContext} from "@fourtune/realm-js/v0/runtime"

import {readFileJSONSyncFactory as factory} from "#~synthetic/user/export/readFileJSONSyncFactory.mts"

export function readFileJSONSync(path: string) : unknown {
	const __fnImplementation = factory(createContext())

	return __fnImplementation(path)
}
