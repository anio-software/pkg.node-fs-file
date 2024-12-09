import {createContext} from "@fourtune/realm-js/v0/runtime"

// vvv--- types needed for implementation
/* couldn't find a user defined type named 'BufferEncoding' at the top level */
// ^^^--- types needed for implementation

import {hashFileSyncFactory as factory} from "#~synthetic/user/export/hashFileSyncFactory.mts"

const fn = factory(createContext())

export function hashFileSync(file_path: string, algo: string, hash_encoding?: BufferEncoding) : string {
	return fn(file_path, algo, hash_encoding)
}
