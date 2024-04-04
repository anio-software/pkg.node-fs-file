import {hashFileSync, readFileInChunksSync} from "../src/index.mjs"

console.log(
	hashFileSync("./package.json", "sha1"),
	readFileInChunksSync("./package.json", 512)
)
