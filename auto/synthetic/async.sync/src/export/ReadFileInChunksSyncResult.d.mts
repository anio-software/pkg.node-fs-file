export type ReadFileInChunksSyncResult = {
	/**
	 * @brief Synchronously reads the next chunk.
	 */
	readNextChunk(): Buffer|false

	/**
	 * @brief Synchronously closes the file.
	 */
	close() : undefined
}
