import {createContext} from "@fourtune/realm-js/v0/runtime"

// vvv--- types needed for implementation
/* couldn't find a user defined type named 'Buffer' at the top level */
/* couldn't find a user defined type named 'Promise' at the top level */
// ^^^--- types needed for implementation

import {writeAtomicFileFactory as factory} from "#~synthetic/user/export/writeAtomicFileFactory.mts"

let __fnImplementation: any = null

export async function writeAtomicFile(file_path: string, data: string | Buffer, options?: {
		createParents?: boolean
		parentsMode?: number
		mode?: number
	}) : Promise<number> {
	if (__fnImplementation === null) __fnImplementation = factory(createContext());

	return await __fnImplementation(file_path, data, options)
}
