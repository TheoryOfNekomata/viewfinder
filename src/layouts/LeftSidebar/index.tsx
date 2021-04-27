import * as React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import TopBar from '../../widgets/TopBar';

const DisableScrolling = createGlobalStyle({
	'body': {
		overflow: 'hidden',
		'@media (min-width: 1080px)': {
			overflow: 'auto',
		},
	},
})

const LayoutBase = styled('div')({
	'--width-base': 'var(--width-base, 360px)',
	'--height-topbar': 'var(--height-topbar, 4rem)',
})

const ContentBase = styled('main')({
	boxSizing: 'border-box',
	'@media (min-width: 1080px)': {
		paddingLeft: 'calc(50% - var(--width-base, 360px) * 0.5)',
	},
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
	backgroundColor: 'var(--color-bg, white)',
	overflow: 'hidden',
	'@media (prefers-color-scheme: dark)': {
		backgroundColor: 'var(--color-bg, black)',
	},
	'@media (min-width: 1080px)': {
		width: 'calc(50% - var(--width-base, 360px) * 0.5)',
		left: 0,
	},
})

const OpenSidebarBase = styled(SidebarBase)({
	left: 0,
})

export const SidebarContainer = styled('div')({
	margin: '0 auto',
	padding: '0 1rem',
	boxSizing: 'border-box',
	maxWidth: 'calc(var(--width-base, 360px) * 2)',
	'@media (min-width: 1080px)': {
		width: 'var(--width-base, 360px)',
		marginRight: 0,
	},
})

export const ContentContainer = styled('div')({
	padding: '0 1rem',
	boxSizing: 'border-box',

	width: '100%',
	maxWidth: 'calc(var(--width-base, 360px) * 2)',
	marginRight: 'auto',
	marginLeft: 'auto',
	'@media (min-width: 1080px)': {
		marginLeft: 0,
	},
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
		<LayoutBase>
			{
				sidebarMainOpen
				&& (
					<DisableScrolling />
				)
			}
			<TopBar
				wide
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
		</LayoutBase>
	)
}
