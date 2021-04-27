import * as React from 'react'
import styled from 'styled-components'

const Base = styled('div')({
	position: 'fixed',
	top: 0,
	left: 0,
	width: '100%',
	height: 'var(--height-topbar, 4rem)',
	backgroundColor: 'var(--color-bg, white)',
	zIndex: 2,
	'@media (prefers-color-scheme: dark)': {
		backgroundColor: 'var(--color-bg, black)',
	},
	'~ *': {
		paddingTop: 'var(--height-topbar, 4rem)',
	},
	'~ main ~ *': {
		paddingTop: 0,
	},
	'@media (min-width: 1080px)': {
		'~ main ~ *': {
			paddingTop: 'var(--height-topbar, 4rem)',
		},
	},
})

const Container = styled('div')({
	padding: '0 1rem',
	boxSizing: 'border-box',
	margin: '0 auto',
	maxWidth: 'calc(var(--width-base, 360px) * 2)',
	width: '100%',
	height: '100%',
	display: 'flex',
	alignItems: 'center',
})

const WideContainer = styled(Container)({
	'@media (min-width: 1080px)': {
		maxWidth: 'calc(var(--width-base, 360px) * 3)',
	},
})

const BrandContainer = styled('div')({
})

const CenterContainer = styled('div')({
	flex: 'auto',
	padding: '0 1rem',
	boxSizing: 'border-box',
	':first-child': {
		paddingLeft: 0,
	},
})

const ActionContainer = styled('div')({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	height: '100%',
	whiteSpace: 'nowrap',
	'@media (min-width: 720px)': {
		minWidth: '8rem',
	},
})

const LinkContainer = styled('div')({
	width: 'var(--height-topbar, 4rem)',
	height: '100%',
	'> *': {
		width: '100%',
		height: '100%',
		display: 'inline-grid',
		placeContent: 'center',
	},
})

const MenuLinkContainer = styled(LinkContainer)({
	'@media (min-width: 1080px)': {
		position: 'absolute',
		left: -999999,
	},
})

type Props = {
	wide?: boolean,
	brand?: React.ReactNode,
	menuLink?: React.ReactNode,
	userLink?: React.ReactNode,
}

const TopBar: React.FC<Props> = ({
	wide,
	brand,
	menuLink,
	userLink,
	children,
}) => {
	const ContainerComponent = wide ? WideContainer : Container
	return (
		<Base>
			<ContainerComponent>
				{
					Boolean(brand as unknown)
					&& (
						<BrandContainer>
							{brand}
						</BrandContainer>
					)
				}
				<CenterContainer>
					{children}
				</CenterContainer>
				<ActionContainer>
					{
						Boolean(menuLink as unknown)
						&& (
							<MenuLinkContainer>
								{menuLink}
							</MenuLinkContainer>
						)
					}
					{
						Boolean(userLink as unknown)
						&& (
							<LinkContainer>
								{userLink}
							</LinkContainer>
						)
					}
				</ActionContainer>
			</ContainerComponent>
		</Base>
	)
}

export default TopBar
