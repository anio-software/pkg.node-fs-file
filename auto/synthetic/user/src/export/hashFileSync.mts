import {createContext} from "@fourtune/realm-js/v0/runtime"

// vvv--- types needed for implementation
/* couldn't find a user defined type named 'BufferEncoding' at the top level */
// ^^^--- types needed for implementation

import {hashFileSyncFactory as factory} from "#~synthetic/user/export/hashFileSyncFactory.mts"

export function hashFileSync(file_path: string, algo: string, hash_encoding?: BufferEncoding) : string {
	const __fnImplementation = factory(createContext())

	return __fnImplementation(file_path, algo, hash_encoding)
}
