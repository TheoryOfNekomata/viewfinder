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
	maxWidth: configVar('base-width'),
	width: '100%',
})

type Props = {
	brand?: React.ReactNode,
	userLink?: React.ReactNode,
	topBarCenter?: React.ReactChild,
	topBarComponent?: React.ElementType,
}

export const Layout: React.FC<Props> = ({
	brand,
	userLink,
	topBarCenter,
	topBarComponent = 'div',
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
						span="narrow"
						brand={brand}
						userLink={userLink}
						baseComponent={topBarComponent}
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
