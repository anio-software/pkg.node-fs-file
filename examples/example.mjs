import {hashFileSync, readFileInChunksSync} from "../dist/default/index.min.mjs"

console.log(
	hashFileSync("./package.json", "sha1"),
	readFileInChunksSync("./package.json", 512)
)
