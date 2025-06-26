import {
	type EnkoreJSRuntimeContextOptions,
	createContext
} from "@anio-software/enkore.js-runtime"

import type {ReadFileInChunksResult} from "#~src/ReadFileInChunksResult.ts"
//>import type {ReadFileInChunksSyncResult as ReadFileInChunksResult} from "#~src/ReadFileInChunksSyncResult.ts"

import {openFile} from "@anio-software/pkg-private.node-consistent-fs/async"
//>import {openFile} from "@anio-software/pkg-private.node-consistent-fs/sync"

export async function __implementation(
//>export function __implementationSync(
	contextOptions: EnkoreJSRuntimeContextOptions,
	filePath: string,
	chunkSize: number
) : Promise<ReadFileInChunksResult> {
//>) : ReadFileInChunksResult {
	const context = createContext(contextOptions, 0)

	context.log.debug(`reading file '${filePath}' with chunk size '${chunkSize}'.`)

	const file = await openFile(filePath, "r")
//>	const file = openFile(filePath, "r")

	let closed = false

	return {
		async readNextChunk() {
//>		readNextChunk() {
			if (closed) return false

			let chunkBuffer = Buffer.alloc(chunkSize)

			const bytesRead = await file.read(chunkBuffer)
//>			const bytesRead = file.read(chunkBuffer)

			context.log.trace(
				`read ${bytesRead} bytes from file ${filePath}`
			)

			if (!bytesRead) {
				if (!closed) await file.close()
//>				if (!closed) file.close()

				closed = true

				return false
			}

			return chunkBuffer.subarray(0, bytesRead)
		},

		async close() {
//>		close() {
			if (closed) return

			await file.close()
//>			file.close()

			closed = true
		}
	}
}
