import * as React from 'react'
import styled, {createGlobalStyle} from 'styled-components';
import TopBar from '../../widgets/TopBar'
import {minWidthFactor} from '../../utilities/mixins';
import {configVar, loadConfig} from '../../utilities/helpers'

const Config = createGlobalStyle({
	...loadConfig(),
})

const ContentBase = styled('main')({
	boxSizing: 'border-box',
	[minWidthFactor(3)]: {
		paddingRight: `calc(50% - ${configVar('base-width')} * 0.5)`,
	},
})

const SidebarBase = styled('div')({
	boxSizing: 'border-box',
	// prevent collapse of margin
	'::after': {
		content: "''",
		display: 'block',
		paddingBottom: 1,
		marginTop: -1,
		boxSizing: 'border-box',
	},
	'> *': {
		display: 'block',
		width: '100%',
		height: '100%',
		backgroundColor: 'white',
	},
	[minWidthFactor(3)]: {
		position: 'absolute',
		top: 0,
		right: 0,
		width: `calc(50% - ${configVar('base-width')} * 0.5)`,
		height: '100%',
	},
})

const SidebarMainContent = styled('div')({
	position: 'relative',
	zIndex: 1,
})

export const SidebarMainContainer = styled('div')({
	padding: '0 1rem',
	boxSizing: 'border-box',
	width: '100%',
	maxWidth: `calc(${configVar('base-width')} * 2)`,
	margin: '0 auto',
	[minWidthFactor(3)]: {
		width: `${configVar('base-width')}`,
		marginLeft: 0,
	},
})

export const ContentContainer = styled('div')({
	padding: '0 1rem',
	boxSizing: 'border-box',
	width: '100%',
	maxWidth: `calc(${configVar('base-width')} * 2)`,
	margin: '0 auto',
	[minWidthFactor(3)]: {
		marginRight: 0,
	},
})

type Props = {
	brand?: React.ReactNode,
	sidebarMain: React.ReactChild,
	userLink?: React.ReactNode,
	topBarCenter?: React.ReactChild,
	topBarComponent?: React.ElementType,
	sidebarMainComponent?: React.ElementType,
}

export const Layout: React.FC<Props> = ({
	brand,
	sidebarMain,
	userLink,
	topBarCenter,
	children,
	topBarComponent: TopBarComponent = 'div',
	sidebarMainComponent: SidebarMainComponent = 'div',
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
						span="wide"
						brand={brand}
						userLink={userLink}
						baseComponent={TopBarComponent}
					>
						{topBarCenter}
					</TopBar>
				)
			}
			<ContentBase>
				{children}
			</ContentBase>
			<SidebarBase>
				<SidebarMainComponent>
					<SidebarMainContent>
						{sidebarMain}
					</SidebarMainContent>
				</SidebarMainComponent>
			</SidebarBase>
		</>
	)
}
