import {useContext, type RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"

import type {ReadFileInChunksSyncResult as ReadFileInChunksResult} from "#~synthetic/async.sync/export/ReadFileInChunksSyncResult.d.mts"

import {openFile} from "@aniojs-private/node-async-sync-fs/sync"

export function implementation(
	wrapped_context: RuntimeWrappedContextInstance,
	file_path: string,
	chunk_size: number
) : ReadFileInChunksResult {
	const context = useContext(wrapped_context, 0)

	context.log.debug(`reading file '${file_path}' with chunk size '${chunk_size}'.`)

	const file = openFile(file_path, "r")

	let closed = false

	return {
		readNextChunk() {
			if (closed) return false

			let chunk_buffer = Buffer.alloc(chunk_size)

			const bytes_read = file.read(chunk_buffer)

			context.log.trace(
				`read ${bytes_read} bytes from file ${file_path}`
			)

			if (!bytes_read) {
				if (!closed) file.close()

				closed = true

				return false
			}

			return chunk_buffer.subarray(0, bytes_read)
		},

		close() {
			if (closed) return

			file.close()

			closed = true
		}
	}
}
