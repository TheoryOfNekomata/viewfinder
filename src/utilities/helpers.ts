import config from '../config.json'

const mangledVarNames: Record<string, string> = {}
export const configVar = (varName: keyof typeof config) => {
	let { [varName]: mangledVarName } = mangledVarNames
	if (!mangledVarName) {
		mangledVarNames[varName] = mangledVarName = `config-${varName}`
	}

	return `var(--${mangledVarName}, ${config[varName]})`
}

export const loadConfig = (): any => {
	return ({
		':root': Object.entries(mangledVarNames).reduce(
			(varNames, [key, cssVarName]) => {
				switch (key as keyof typeof config) {
				case 'base-width':
					if (typeof config[key as keyof typeof config] === 'number') {
						return ({
							...varNames,
							[`--${cssVarName}`]: `${config[key as keyof typeof config]}px`,
						})
					}
					break
				}
				return ({
					...varNames,
					[`--${cssVarName}`]: config[key as keyof typeof config],
				})
			},
			{},
		),
	})
}
