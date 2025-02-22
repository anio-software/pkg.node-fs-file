import {createContext} from "@fourtune/realm-js/v0/runtime"

import {writeAtomicFileJSONSyncFactory as factory} from "#~synthetic/user/export/writeAtomicFileJSONSyncFactory.mts"

const fn = factory(createContext())

export function writeAtomicFileJSONSync(file_path: string, data: any, options?: {
		pretty?: boolean,
		disableNewLineAtEOF?: boolean,
		createParents?: boolean
	}) : number {
	return fn(file_path, data, options)
}
