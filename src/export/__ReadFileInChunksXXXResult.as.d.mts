export type __XX__ = {
	/**
	 * @brief Asynchronously reads the next chunk.
//>	 * @brief Synchronously reads the next chunk.
	 */
	readNextChunk(): Promise<Buffer|false>
//>	readNextChunk(): Buffer|false

	/**
	 * @brief Asynchronously closes the file.
//>	 * @brief Synchronously closes the file.
	 */
	close() : Promise<undefined>
//>	close() : undefined
}
