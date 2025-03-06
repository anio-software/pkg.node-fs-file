import {createContext} from "@fourtune/realm-js/v0/runtime"

import {readFileJSONSyncFactory as factory} from "#~synthetic/user/export/readFileJSONSyncFactory.mts"

let __fnImplementation: any = null

export function readFileJSONSync(path: string) : unknown {
	if (__fnImplementation === null) __fnImplementation = factory(createContext());

	return __fnImplementation(path)
}
