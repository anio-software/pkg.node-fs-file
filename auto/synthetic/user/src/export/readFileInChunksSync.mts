import {createContext} from "@fourtune/realm-js/v0/runtime"

// vvv--- types needed for implementation
import type {ReadFileInChunksSyncResult as ReadFileInChunksResult} from "#~synthetic/async.sync/export/ReadFileInChunksSyncResult.d.mts"
// ^^^--- types needed for implementation

import {readFileInChunksSyncFactory as factory} from "#~synthetic/user/export/readFileInChunksSyncFactory.mts"

let __fnImplementation: any = null

export function readFileInChunksSync(file_path: string, chunk_size: number) : ReadFileInChunksResult {
	if (__fnImplementation === null) __fnImplementation = factory(createContext());

	return __fnImplementation(file_path, chunk_size)
}
