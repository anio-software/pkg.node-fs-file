import {createContext} from "@fourtune/realm-js/v0/runtime"

import {readFileStringSyncFactory as factory} from "#~synthetic/user/export/readFileStringSyncFactory.mts"

let __fnImplementation: any = null

export function readFileStringSync(path: string) : string {
	if (__fnImplementation === null) __fnImplementation = factory(createContext());

	return __fnImplementation(path)
}
