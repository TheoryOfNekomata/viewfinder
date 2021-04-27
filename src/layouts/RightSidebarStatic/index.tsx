import * as React from 'react';
import styled from 'styled-components';
import TopBar from '../../widgets/TopBar';

const LayoutBase = styled('div')({
	'--width-base': 'var(--width-base, 360px)',
	'--height-topbar': 'var(--height-topbar, 4rem)',
})

const ContentBase = styled('main')({
	boxSizing: 'border-box',
	'@media (min-width: 1080px)': {
		paddingRight: 'calc(50% - var(--width-base, 360px) * 0.5)',
	},
})

const SidebarBase = styled('div')({
	boxSizing: 'border-box',
	backgroundColor: 'var(--color-bg, white)',
	// prevent collapse of margin
	'::after': {
		content: "''",
		display: 'block',
		paddingBottom: 1,
		marginTop: -1,
		boxSizing: 'border-box',
	},
	'@media (prefers-color-scheme: dark)': {
		backgroundColor: 'var(--color-bg, black)',
	},
	'@media (min-width: 1080px)': {
		position: 'absolute',
		top: 0,
		right: 0,
		width: 'calc(50% - var(--width-base, 360px) * 0.5)',
		height: '100%',
	},
})

export const SidebarContainer = styled('div')({
	padding: '0 1rem',
	boxSizing: 'border-box',
	width: '100%',
	maxWidth: 'calc(var(--width-base, 360px) * 2)',
	margin: '0 auto',
	'@media (min-width: 1080px)': {
		width: 'var(--width-base, 360px)',
		marginLeft: 0,
	},
})

export const ContentContainer = styled('div')({
	padding: '0 1rem',
	boxSizing: 'border-box',
	width: '100%',
	maxWidth: 'calc(var(--width-base, 360px) * 2)',
	margin: '0 auto',
	'@media (min-width: 1080px)': {
		marginRight: 0,
	},
})

type Props = {
	brand?: React.ReactNode,
	sidebarMain: React.ReactChild,
	userLink?: React.ReactNode,
	topBarCenter?: React.ReactChild,
}

export const Layout: React.FC<Props> = ({
	brand,
	sidebarMain,
	userLink,
	topBarCenter,
	children,
}) => {
	return (
		<LayoutBase>
			<TopBar
				wide
				brand={brand}
				userLink={userLink}
			>
				{topBarCenter}
			</TopBar>
			<ContentBase>
				{children}
			</ContentBase>
			<SidebarBase>
				{sidebarMain}
			</SidebarBase>
		</LayoutBase>
	)
}
