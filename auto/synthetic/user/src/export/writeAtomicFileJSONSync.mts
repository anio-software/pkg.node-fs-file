import {createContext} from "@fourtune/realm-js/v0/runtime"

import {writeAtomicFileJSONSyncFactory as factory} from "#~synthetic/user/export/writeAtomicFileJSONSyncFactory.mts"

const fn = factory(createContext())

export function writeAtomicFileJSONSync(file_path: string, data: any, options?: {
		pretty?: boolean,
		disable_new_line_at_eof?: boolean,
		create_parents?: boolean
	}) : number {
	return fn(file_path, data, options)
}
