import * as React from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import TopBar from '../../widgets/TopBar'
import {applyBackgroundColor, minWidthFactor} from '../../utilities/mixins'
import {configVar, loadConfig} from '../../utilities/helpers'

const Config = createGlobalStyle({
	...loadConfig(),
})

const DisableScrolling = createGlobalStyle({
	'body': {
		overflow: 'hidden',
		...minWidthFactor(3)({
			overflow: 'auto',
		}),
	},
})

const ContentBase = styled('main')({
	boxSizing: 'border-box',
	...minWidthFactor(3)({
		paddingLeft: `calc(50% - ${configVar('base-width')} * 0.5)`,
	}),
})

const SidebarOverflow = styled('div')({
	width: '100%',
	height: '100%',
	overflow: 'auto',
	// overflow: 'overlay',
	scrollbarWidth: 'none',
	'::-webkit-scrollbar': {
		display: 'none',
	},
})

const SidebarBase = styled('div')({
	boxSizing: 'border-box',
	position: 'fixed',
	top: 0,
	left: '-100%',
	width: '100%',
	height: '100%',
	overflow: 'hidden',
	...applyBackgroundColor(),
	...minWidthFactor(3)({
		width: `calc(50% - ${configVar('base-width')} * 0.5)`,
		left: 0,
	}),
})

const OpenSidebarBase = styled(SidebarBase)({
	left: 0,
})

export const SidebarContainer = styled('div')({
	margin: '0 auto',
	padding: '0 1rem',
	boxSizing: 'border-box',
	maxWidth: `calc(${configVar('base-width')} * 2)`,
	...minWidthFactor(3)({
		width: `${configVar('base-width')}`,
		marginRight: 0,
	}),
})

export const ContentContainer = styled('div')({
	padding: '0 1rem',
	boxSizing: 'border-box',

	width: '100%',
	maxWidth: `calc(${configVar('base-width')} * 2)`,
	marginRight: 'auto',
	marginLeft: 'auto',
	...minWidthFactor(3)({
		marginLeft: 0,
	}),
})

type Props = {
	brand?: React.ReactNode,
	sidebarMain?: React.ReactChild,
	sidebarMainOpen?: boolean,
	menuLink?: React.ReactNode,
	userLink?: React.ReactNode,
	topBarCenter?: React.ReactChild,
}

export const Layout: React.FC<Props> = ({
	brand,
	sidebarMain,
	sidebarMainOpen,
	menuLink,
	userLink,
	topBarCenter,
	children,
}) => {
	const LeftSidebarComponent = sidebarMainOpen ? OpenSidebarBase : SidebarBase

	return (
		<>
			<Config />
			{
				sidebarMainOpen
				&& (
					<DisableScrolling />
				)
			}
			<TopBar
				span="wide"
				brand={brand}
				menuLink={menuLink}
				userLink={userLink}
			>
				{topBarCenter}
			</TopBar>
			<LeftSidebarComponent>
				<SidebarOverflow>
					{sidebarMain}
				</SidebarOverflow>
			</LeftSidebarComponent>
			<ContentBase>
				{children}
			</ContentBase>
		</>
	)
}
