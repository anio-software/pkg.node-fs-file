export default function() {
	return async function(vipen_session) {
		let types = ""

		const packages = [
			"@anio-fs/int--hash-file",
			"@anio-fs/int--read-file-in-chunks",
			"@anio-fs/int--write-atomic-file",
			"@anio-fs/int--find-nearest-file",
			"@anio-fs/int--write-atomic-file-json"
		]

		for (const pkg of packages) {
			types += `export * from "${pkg}"\n`
		}

		return types
	}
}
