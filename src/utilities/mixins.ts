import {CSSObject} from 'styled-components'
import config from '../config.json'

export const minWidthFactor = (factor: number) => (styles: CSSObject) => ({
	[`@media (min-width: ${config['base-width'] * factor}px)`]: styles,
})

export const applyBackgroundColor = () => ({
	backgroundColor: 'var(--color-bg, white)',
	'@media (prefers-color-scheme: dark)': {
		backgroundColor: 'var(--color-bg, black)',
	},
})
