import {createContext} from "@fourtune/realm-js/v0/runtime"

// vvv--- types needed for implementation
/* couldn't find a user defined type named 'Buffer' at the top level */
// ^^^--- types needed for implementation

import {writeAtomicFileSyncFactory as factory} from "#~synthetic/user/export/writeAtomicFileSyncFactory.mts"

export function writeAtomicFileSync(file_path: string, data: string | Buffer, options?: {
		createParents?: boolean
		parentsMode?: number
		mode?: number
	}) : number {
	const __fnImplementation = factory(createContext())

	return __fnImplementation(file_path, data, options)
}
