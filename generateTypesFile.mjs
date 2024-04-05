export default function() {
	return async function(vipen_session) {
		let types = ""

		const packages = [
			"@anio-fs/int--hash-file",
			"@anio-fs/int--read-file-in-chunks",
			"@anio-fs/int--write-atomic-file",
			"@anio-fs/int--find-nearest-file"
		]

		for (const pkg of packages) {
			types += `export * from "${pkg}"\n`
		}

		return types
	}
}
