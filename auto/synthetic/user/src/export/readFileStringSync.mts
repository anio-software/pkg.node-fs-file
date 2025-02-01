import {createContext} from "@fourtune/realm-js/v0/runtime"

import {readFileStringSyncFactory as factory} from "#~synthetic/user/export/readFileStringSyncFactory.mts"

const fn = factory(createContext())

export function readFileStringSync(path: string) : string {
	return fn(path)
}
