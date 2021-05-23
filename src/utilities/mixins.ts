import config from '../config.json'

export const minWidthFactor = (factor: number) => `@media (min-width: ${config['base-width'] * factor}px)`
