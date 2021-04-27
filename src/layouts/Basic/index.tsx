import * as React from 'react'
import styled from 'styled-components';
import TopBar from '../../widgets/TopBar';

const LayoutBase = styled('div')({
	'--width-base': 'var(--width-base, 360px)',
	'--height-topbar': 'var(--height-topbar, 4rem)',
})

const ContentBase = styled('main')({
	boxSizing: 'border-box',
})

export const ContentContainer = styled('div')({
	padding: '0 1rem',
	boxSizing: 'border-box',
	margin: '0 auto',
	maxWidth: 'calc(var(--width-base, 360px) * 2)',
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
		<LayoutBase>
			<TopBar
				brand={brand}
				userLink={userLink}
			>
				{topBarCenter}
			</TopBar>
			<ContentBase>
				{children}
			</ContentBase>
		</LayoutBase>
	)
}
