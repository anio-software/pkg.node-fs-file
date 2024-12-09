import {useContext, type RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"

import {createHash} from "node:crypto"

import {implementation as readFileInChunks} from "#~synthetic/async.sync/readFileInChunks.mts"

export async function implementation(
	wrapped_context: RuntimeWrappedContextInstance,
	file_path: string,
	algo: string,
	hash_encoding?: BufferEncoding
) : Promise<string> {
	const context = useContext(wrapped_context, 0)

	const hash = createHash(algo)

	context.log.trace(
		`requested hash of file '${file_path}' with algo '${algo}'`
	)

	//
	// read file in 4096 byte chunks
	//
	const file = await readFileInChunks(wrapped_context, file_path, 4096)

	while (true) {
		const chunk = await file.readNextChunk()

		if (!chunk) break

		hash.update(chunk)
	}

	if (hash_encoding === undefined) {
		hash_encoding = "hex"
	}

	hash.setEncoding(hash_encoding)
	hash.end()

	return hash.read()
}
