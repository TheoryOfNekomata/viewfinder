import * as React from 'react'
import styled from 'styled-components'

const BrandBase = styled('a')({
	display: 'block',
	textDecoration: 'none',
	fontSize: '1.5rem',
	fontWeight: 'bold',
	fontStretch: '75%',
	textTransform: 'uppercase',
	width: '2rem',
	textAlign: 'center',
	'@media (min-width: 720px)': {
		width: '8rem',
		textAlign: 'left',
	},
})

const Hide = styled('span')({
	display: 'none',
	'@media (min-width: 720px)': {
		display: 'inline',
	},
})

const Brand = () => {
	return (
		<BrandBase
			href="/index.html"
		>
			B
			<Hide>
				rand
			</Hide>
		</BrandBase>
	)
}

export default Brand
