import * as React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import TopBar from '../../widgets/TopBar'
import {configVar, loadConfig} from '../../utilities/helpers'

const Config = createGlobalStyle({
	...loadConfig(),
})

const ContentBase = styled('main')({
	boxSizing: 'border-box',
})

export const ContentContainer = styled('div')({
	padding: '0 1rem',
	boxSizing: 'border-box',
	margin: '0 auto',
	maxWidth: `calc(${configVar('base-width')} * 2)`,
	width: '100%',
})

type Props = {
	brand?: React.ReactNode,
	userLink?: React.ReactNode,
	topBarCenter?: React.ReactChild,
}

export const Layout: React.FC<Props> = ({
	brand,
	userLink,
	topBarCenter,
	children,
}) => {
	return (
		<>
			<Config />
			{
				(
					brand
					|| userLink
					|| topBarCenter
				)
				&& (
					<TopBar
						brand={brand}
						userLink={userLink}
					>
						{topBarCenter}
					</TopBar>
				)
			}
			<ContentBase>
				{children}
			</ContentBase>
		</>
	)
}
