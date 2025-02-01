import {createContext} from "@fourtune/realm-js/v0/runtime"

// vvv--- types needed for implementation
/* couldn't find a user defined type named 'Promise' at the top level */
// ^^^--- types needed for implementation

import {readFileStringFactory as factory} from "#~synthetic/user/export/readFileStringFactory.mts"

const fn = factory(createContext())

export async function readFileString(path: string) : Promise<string> {
	return await fn(path)
}
