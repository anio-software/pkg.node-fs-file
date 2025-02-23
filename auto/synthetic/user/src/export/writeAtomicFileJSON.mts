import {createContext} from "@fourtune/realm-js/v0/runtime"

// vvv--- types needed for implementation
/* couldn't find a user defined type named 'Promise' at the top level */
// ^^^--- types needed for implementation

import {writeAtomicFileJSONFactory as factory} from "#~synthetic/user/export/writeAtomicFileJSONFactory.mts"

const fn = factory(createContext())

export async function writeAtomicFileJSON(file_path: string, data: any, options?: {
		pretty?: boolean,
		disableNewLineAtEOF?: boolean,
		createParents?: boolean
		parentsMode?: number
	}) : Promise<number> {
	return await fn(file_path, data, options)
}
