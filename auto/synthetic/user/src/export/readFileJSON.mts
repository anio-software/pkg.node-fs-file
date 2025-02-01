import {createContext} from "@fourtune/realm-js/v0/runtime"

// vvv--- types needed for implementation
/* couldn't find a user defined type named 'Promise' at the top level */
// ^^^--- types needed for implementation

import {readFileJSONFactory as factory} from "#~synthetic/user/export/readFileJSONFactory.mts"

const fn = factory(createContext())

export async function readFileJSON(path: string) : Promise<unknown> {
	return await fn(path)
}
