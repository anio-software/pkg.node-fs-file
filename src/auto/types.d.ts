/**
 * @brief Asynchronously hash file.
 * @description
 * Asynchronously calculates the hash of `file_path` using algorithm `algo`.
 * @param file_path File to be hashed.
 * @param algo Hash algorithm to use.
 * @param hash_encoding Encoding of the hash, defaults to `hex`.
 * @return
 * Returns hash in specified encoding `hash_encoding`. The default encoding is `hex`.
 */
export function hashFile(file_path : string, algo : string, hash_encoding? : string) : Promise<string | Buffer>;

/**
 * @brief Synchronously hash file.
 * @description
 * Synchronously calculates the hash of `file_path` using algorithm `algo`.
 * @param file_path File to be hashed.
 * @param algo Hash algorithm to use.
 * @param hash_encoding Encoding of the hash, defaults to `hex`.
 * @return
 * Returns hash in specified encoding `hash_encoding`. The default encoding is `hex`.
 */
export function hashFileSync(file_path : string, algo : string, hash_encoding? : string) : string | Buffer;

declare type AsyncReadFileInChunksObject = {
	/**
	 * @brief Asynchronously reads the next chunk.
	 */
	readNextChunk() : Promise<Buffer>;
	/**
	 * @brief Asynchronously closes the file.
	 */
	close() : Promise<void>;
};

/**
 * @brief Asynchronously read a file in chunks.
 * @description
 * Asynchronously reads the file at `path` with a chunk size of `chunk_size`.
 * @param path The file to be read.
 * @param chunk_size Chunk size in bytes to be used.
 */
export function readFileInChunks(path : string, chunk_size : number) : Promise<AsyncReadFileInChunksObject>

declare type SyncReadFileInChunksObject = {
	/**
	 * @brief Synchronously reads the next chunk.
	 */
	readNextChunk() : Buffer;
	/**
	 * @brief Synchronously closes the file.
	 */
	close() : void;
};

/**
 * @brief Synchronously read a file in chunks.
 * @description
 * Synchronously reads the file at `path` with a chunk size of `chunk_size`.
 * @param path The file to be read.
 * @param chunk_size Chunk size in bytes to be used.
 */
export function readFileInChunksSync(path : string, chunk_size : number) : SyncReadFileInChunksObject

declare type WriteAtomicFileOptions = {
	/**
	 * @brief Create parent directories.
	 * @description
	 * Whether to create non-existing directories in the path.
	 * The default is `false`.
	 */
	create_parents : boolean;
};

/**
 * @brief Asynchronously and atomically create a file
 * @description
 * Asynchronously creates the file at `file_path` with `data` written to it.
 * If `options.create_parents` is set, directories in the path will be created
 * if they don't exist.
 * @param file_path File path to be written.
 * @param data Data to be written.
 * @param options Optional options.
 * @return
 * Returns the number of bytes written.
 */
declare function writeAtomicFile(
	file_path : string, data : string | Buffer, options? : WriteAtomicFileOptions
) : Promise<number>

/**
 * @brief Synchronously and atomically create a file
 * @description
 * Synchronously creates the file at `file_path` with `data` written to it.
 * If `options.create_parents` is set, directories in the path will be created
 * if they don't exist.
 * @param file_path File path to be written.
 * @param data Data to be written.
 * @param options Optional options.
 * @return
 * Returns the number of bytes written.
 */
declare function writeAtomicFileSync(
	file_path : string, data : string | Buffer, options? : WriteAtomicFileOptions
) : number

export { writeAtomicFile, writeAtomicFileSync };

/**
 * @brief Asynchronously find nearest file.
 * @description
 * Asynchronously finds the nearest file with the name `file_name` from starting point `dir_path`.
 * @param file_name The file to find.
 * @param dir_path The starting directory to start searching from.
 * @return
 * The path to the file or `false` if no file was found.
 */
declare function findNearestFile(file_name : string, dir_path : string) : Promise<string | false>

/**
 * @brief Synchronously find nearest file.
 * @description
 * Synchronously finds the nearest file with the name `file_name` from starting point `dir_path`.
 * @param file_name The file to find.
 * @param dir_path The starting directory to start searching from.
 * @return
 * The path to the file or `false` if no file was found.
 */
declare function findNearestFileSync(file_name : string, dir_path : string) : string | false

export { findNearestFile, findNearestFileSync };

