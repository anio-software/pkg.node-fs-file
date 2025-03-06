import {createContext} from "@fourtune/realm-js/v0/runtime"

// vvv--- types needed for implementation
/* couldn't find a user defined type named 'Promise' at the top level */
// ^^^--- types needed for implementation

import {findNearestFileFactory as factory} from "#~synthetic/user/export/findNearestFileFactory.mts"

let __fnImplementation: any = null

export async function findNearestFile(config_file_name: string, start_dir: string) : Promise<string|false> {
	if (__fnImplementation === null) __fnImplementation = factory(createContext());

	return await __fnImplementation(config_file_name, start_dir)
}
