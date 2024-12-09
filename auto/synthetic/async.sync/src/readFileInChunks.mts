import {useContext, type RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"

import type {ReadFileInChunksResult} from "#~synthetic/async.sync/export/ReadFileInChunksResult.d.mts"

import {openFile} from "@aniojs-private/node-async-sync-fs/async"

export async function implementation(
	wrapped_context: RuntimeWrappedContextInstance,
	file_path: string,
	chunk_size: number
) : Promise<ReadFileInChunksResult> {

	const context = useContext(wrapped_context, 0)

	context.log.debug(`reading file '${file_path}' with chunk size '${chunk_size}'.`)

	const file = await openFile(file_path, "r")

	let closed = false

	return {
		async readNextChunk() {
			if (closed) return false

			let chunk_buffer = Buffer.alloc(chunk_size)

			const bytes_read = await file.read(chunk_buffer)

			context.log.trace(
				`read ${bytes_read} bytes from file ${file_path}`
			)

			if (!bytes_read) {
				if (!closed) await file.close()

				closed = true

				return false
			}

			return chunk_buffer.subarray(0, bytes_read)
		},

		async close() {
			if (closed) return

			await file.close()

			closed = true
		}
	}
}
