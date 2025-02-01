import {createContext} from "@fourtune/realm-js/v0/runtime"

import {readFileJSONSyncFactory as factory} from "#~synthetic/user/export/readFileJSONSyncFactory.mts"

const fn = factory(createContext())

export function readFileJSONSync(path: string) : unknown {
	return fn(path)
}
