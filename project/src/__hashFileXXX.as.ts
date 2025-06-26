import {
	type EnkoreJSRuntimeContextOptions,
	createContext
} from "@anio-software/enkore.js-runtime"

import {createHash} from "node:crypto"

import {__implementation as readFileInChunks} from "#~src/readFileInChunks.ts"
//>import {__implementationSync as readFileInChunks} from "#~src/readFileInChunksSync.ts"

export async function __implementation(
//>export function __implementationSync(
	contextOptions: EnkoreJSRuntimeContextOptions,
	filePath: string,
	algo: string,
	hashEncoding?: BufferEncoding
) : Promise<string> {
//>) : string {
	const context = createContext(contextOptions, 0)

	const hash = createHash(algo)

	context.log.trace(
		`requested hash of file '${filePath}' with algo '${algo}'`
	)

	//
	// read file in 4096 byte chunks
	//
	const file = await readFileInChunks(contextOptions, filePath, 4096)
//>	const file = readFileInChunks(contextOptions, filePath, 4096)

	while (true) {
		const chunk = await file.readNextChunk()
//>		const chunk = file.readNextChunk()

		if (!chunk) break

		hash.update(chunk)
	}

	if (hashEncoding === undefined) {
		hashEncoding = "hex"
	}

	hash.setEncoding(hashEncoding)
	hash.end()

	return hash.read()
}
