const icons = require('@tabler/icons-react')
const fs = require('fs')
const path = require('path')

// List all export names
const exportNames = Object.keys(icons)

// Generate ICON_OPTIONS array
const ICON_OPTIONS = exportNames.map((name) => {
	// Remove 'Icon' prefix and split camel case
	const title = name
		.replace(/^Icon/, '')
		.replace(/([A-Z])/g, ' $1')
		.trim()
	return { title, value: name }
})

// generate the file and write to the file
const file = `// This file is auto-generated. Do not edit manually.
export const ICON_OPTIONS = ${JSON.stringify(ICON_OPTIONS, null, 2)}

export const ICON_VALUES = ICON_OPTIONS.map((icon) => icon.value)
`

fs.writeFileSync(path.join(__dirname, '../src/constants/icon-list.ts'), file)
