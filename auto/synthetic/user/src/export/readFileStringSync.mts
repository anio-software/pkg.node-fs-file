import {createContext} from "@fourtune/realm-js/v0/runtime"

import {readFileStringSyncFactory as factory} from "#~synthetic/user/export/readFileStringSyncFactory.mts"

export function readFileStringSync(path: string) : string {
	const __fnImplementation = factory(createContext())

	return __fnImplementation(path)
}
