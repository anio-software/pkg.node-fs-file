export type ReadFileInChunksResult = {
	/**
	 * @brief Asynchronously reads the next chunk.
	 */
	readNextChunk(): Promise<Buffer|false>

	/**
	 * @brief Asynchronously closes the file.
	 */
	close() : Promise<undefined>
}
