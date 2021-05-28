import * as React from 'react'
import styled from 'styled-components'
import {minWidthFactor} from '../../utilities/mixins';
import {configVar} from '../../utilities/helpers'

const Base = styled('div')({
	position: 'fixed',
	top: 0,
	left: 0,
	width: '100%',
	height: 'var(--height-topbar, 4rem)',
	zIndex: 2,
	'> *': {
		display: 'block',
		width: '100%',
		height: '100%',
		backgroundColor: 'white',
	},
	'~ *': {
		paddingTop: 'var(--height-topbar, 4rem)',
	},
	'~ main ~ *': {
		paddingTop: 0,
	},
	[minWidthFactor(3)]: {
		'~ main ~ *': {
			paddingTop: 'var(--height-topbar, 4rem)',
		},
	},
})

const Container = styled('div')({
	padding: '0 1rem',
	boxSizing: 'border-box',
	margin: '0 auto',
	maxWidth: `calc(${configVar('base-width')} * 2)`,
	width: '100%',
	height: '100%',
	display: 'flex',
	alignItems: 'center',
})

const NarrowContainer = styled(Container)({
	maxWidth: configVar('base-width'),
})

const WideContainer = styled(Container)({
	[minWidthFactor(3)]: {
		maxWidth: `calc(${configVar('base-width')} * 3)`,
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
	[minWidthFactor(2)]: {
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
	[minWidthFactor(3)]: {
		position: 'absolute',
		left: -999999,
	},
})

const CONTAINER_COMPONENTS = {
	narrow: NarrowContainer,
	normal: Container,
	wide: WideContainer,
}

type Props = {
	span?: keyof typeof CONTAINER_COMPONENTS,
	brand?: React.ReactNode,
	menuLink?: React.ReactNode,
	userLink?: React.ReactNode,
	baseComponent?: React.ElementType,
}

const TopBar: React.FC<Props> = ({
	span = 'normal',
	brand,
	menuLink,
	userLink,
	children,
	baseComponent: BaseComponent = 'div',
}) => {
	const { [span as keyof typeof CONTAINER_COMPONENTS]: ContainerComponent = Container } = CONTAINER_COMPONENTS
	return (
		<Base>
			<BaseComponent>
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
			</BaseComponent>
		</Base>
	)
}

export default TopBar
