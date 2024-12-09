import {createContext} from "@fourtune/realm-js/v0/runtime"

// vvv--- types needed for implementation
/* couldn't find a user defined type named 'Buffer' at the top level */
// ^^^--- types needed for implementation

import {writeAtomicFileSyncFactory as factory} from "#~synthetic/user/export/writeAtomicFileSyncFactory.mts"

const fn = factory(createContext())

export function writeAtomicFileSync(file_path: string, data: string | Buffer, options?: {
		create_parents?: boolean
	}) : number {
	return fn(file_path, data, options)
}
