import {createContext} from "@fourtune/realm-js/v0/runtime"

// vvv--- types needed for implementation
/* couldn't find a user defined type named 'Promise' at the top level */
// ^^^--- types needed for implementation

import {readFileStringFactory as factory} from "#~synthetic/user/export/readFileStringFactory.mts"

let __fnImplementation: any = null

export async function readFileString(path: string) : Promise<string> {
	if (__fnImplementation === null) __fnImplementation = factory(createContext());

	return await __fnImplementation(path)
}
