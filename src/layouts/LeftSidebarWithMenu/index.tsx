import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import TopBar from '../../widgets/TopBar'
import {minWidthFactor} from '../../utilities/mixins';
import {configVar, loadConfig} from '../../utilities/helpers'

const Config = createGlobalStyle({
	...loadConfig(),
})

const DisableScrolling = createGlobalStyle({
	'body': {
		overflow: 'hidden',
		[minWidthFactor(3)]: {
			overflow: 'auto',
		},
	},
})

const ContentBase = styled('main')({
	boxSizing: 'border-box',
	paddingBottom: 'var(--size-menu, 4rem)',
	[minWidthFactor(3)]: {
		paddingLeft: `calc(50% - ${configVar('base-width')} * 0.5)`,
		paddingBottom: 0,
	},
})

const SidebarBase = styled('div')({
	boxSizing: 'border-box',
	overflow: 'hidden',
	display: 'contents',
	left: `calc(${configVar('base-width')} * -1)`,
	[minWidthFactor(3)]: {
		position: 'fixed',
		top: 0,
		left: 0,
		width: `calc(50% - ${configVar('base-width')} * 0.5)`,
		height: '100%',
		display: 'block',
	},
})

const SidebarMain = styled('div')({
	boxSizing: 'border-box',
	position: 'fixed',
	top: 0,
	right: '100%',
	width: '100%',
	height: '100%',
	paddingTop: 'inherit',
	paddingBottom: 'var(--size-menu, 4rem)',
	[minWidthFactor(3)]: {
		position: 'absolute',
		right: 0,
		width: `calc(${configVar('base-width')} - var(--size-menu, 4rem))`,
		marginLeft: 'auto',
		paddingBottom: 0,
	},
	'> *': {
		display: 'block',
		width: '100%',
		height: '100%',
		backgroundColor: 'white',
	},
})

const SidebarMainOverflow = styled('div')({
	width: '100%',
	height: '100%',
	overflow: 'auto',
	// overflow: 'overlay',
	scrollbarWidth: 'none',
	position: 'relative',
	zIndex: 1,
	'::-webkit-scrollbar': {
		display: 'none',
	},
})

const OpenSidebarMain = styled(SidebarMain)({
	right: 0,
})

const SidebarMenu = styled('div')({
	boxSizing: 'border-box',
	overflow: 'auto',
	// overflow: 'overlay',
	scrollbarWidth: 'none',
	'::-webkit-scrollbar': {
		display: 'none',
	},
	position: 'fixed',
	bottom: 0,
	left: 0,
	width: '100%',
	height: 'var(--size-menu, 4rem)',
	zIndex: 1,
	'> *': {
		display: 'block',
		width: '100%',
		height: '100%',
		backgroundColor: 'white',
	},
	[minWidthFactor(3)]: {
		top: 0,
		marginLeft: 'auto',
		position: 'absolute',
		height: '100%',
		paddingTop: 'inherit',
		overflow: 'auto',
		zIndex: 'auto',
	},
})

const SidebarMenuSize = styled('div')({
	display: 'flex',
	width: '100%',
	height: '100%',
	maxWidth: `calc(${configVar('base-width')} * 2)`,
	margin: '0 auto',
	position: 'relative',
	zIndex: 1,
	[minWidthFactor(3)]: {
		maxWidth: 'none',
		marginRight: 0,
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
	},
})

const SidebarMenuGroup = styled('div')({
	display: 'contents',
	[minWidthFactor(3)]: {
		width: '100%',
		display: 'block',
	},
})

const MoreItems = styled('div')({
	position: 'fixed',
	top: 0,
	left: '-100%',
	width: '100%',
	height: '100%',
	paddingTop: 'var(--height-topbar, 4rem)',
	paddingBottom: 'var(--size-menu, 4rem)',
	zIndex: -1,
	boxSizing: 'border-box',
	[minWidthFactor(3)]: {
		display: 'contents',
	},
})

const OpenMoreItems = styled(MoreItems)({
	left: 0,
})

const MoreItemsScroll = styled('div')({
	width: '100%',
	height: '100%',
	overflow: 'auto',
	[minWidthFactor(3)]: {
		display: 'contents',
	},
})

const MorePrimarySidebarMenuGroup = styled(SidebarMenuGroup)({
	[minWidthFactor(3)]: {
		flex: 'auto',
	},
})

const MoreSecondarySidebarMenuGroup = styled(SidebarMenuGroup)({
	[minWidthFactor(3)]: {
		order: 4,
	},
})

const SidebarMenuItem = styled('span')({
	width: 0,
	flex: 'auto',
	height: 'var(--size-menu, 4rem)',
	'> *': {
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		textDecoration: 'none',
		width: '100%',
	},
	[minWidthFactor(3)]: {
		width: 'auto !important',
		flex: '0 1 auto',
		'> *': {
			height: 'auto',
		},
	},
})

const MoreSidebarMenuItem = styled('span')({
	display: 'block',
	height: 'var(--size-menu, 4rem)',
	'> *': {
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		textDecoration: 'none',
		width: '100%',
	},
	[minWidthFactor(3)]: {
		width: 'auto !important',
		flex: '0 1 auto',
	},
})

const MoreToggleSidebarMenuItem = styled(SidebarMenuItem)({
	[minWidthFactor(3)]: {
		display: 'none',
	},
})

export const SidebarMenuItemIcon = styled('span')({
	display: 'block',
	[minWidthFactor(3)]: {
		width: 'var(--size-menu, 4rem)',
		height: 'var(--size-menu, 4rem)',
		display: 'grid',
		placeContent: 'center',
	},
})

export const MoreSidebarMenuItemIcon = styled('span')({
	marginRight: '1rem',
	display: 'block',
	[minWidthFactor(3)]: {
		width: 'var(--size-menu, 4rem)',
		height: 'var(--size-menu, 4rem)',
		display: 'grid',
		placeContent: 'center',
		marginRight: 0,
	},
})

export const SidebarMenuContainer = styled('span')({
	boxSizing: 'border-box',
	display: 'grid',
	placeContent: 'center',
	width: '100%',
	textAlign: 'center',
	[minWidthFactor(3)]: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		width: `${configVar('base-width')}`,
		marginLeft: 'auto',
		paddingRight: '1rem',
		textAlign: 'left',
		boxSizing: 'border-box',
	},
})

export const MoreSidebarMenuContainer = styled('div')({
	display: 'flex',
	justifyContent: 'flex-start',
	alignItems: 'center',
	width: `calc(${configVar('base-width')} * 2)`,
	margin: '0 auto',
	padding: '0 1rem',
	textAlign: 'left',
	boxSizing: 'border-box',
	[minWidthFactor(3)]: {
		marginRight: 0,
		width: `${configVar('base-width')}`,
		paddingLeft: 0,
	},
})

export const ContentContainer = styled('div')({
	padding: '0 1rem',
	boxSizing: 'border-box',

	width: '100%',
	maxWidth: `calc(${configVar('base-width')} * 2)`,
	marginRight: 'auto',
	marginLeft: 'auto',
	[minWidthFactor(3)]: {
		marginLeft: 0,
	},
})

export const SidebarMainContainer = styled('div')({
	padding: '0 1rem',
	boxSizing: 'border-box',
	width: '100%',
	maxWidth: `calc(${configVar('base-width')} * 2)`,
	margin: '0 auto',
	[minWidthFactor(3)]: {
		maxWidth: 'none',
	},
})

type BaseMenuItem = {
	label: React.ReactChild,
	icon: React.ReactChild,
	url: unknown,
}

export type MenuItem = BaseMenuItem & {
	id: string,
	secondary?: boolean,
}

type Props = {
	brand?: React.ReactNode,
	sidebarMain?: React.ReactChild,
	sidebarMainOpen?: boolean,
	sidebarMenuItems: MenuItem[],
	moreItemsOpen?: boolean,
	moreLinkMenuItem: BaseMenuItem,
	menuLink?: React.ReactNode,
	userLink?: React.ReactNode,
	moreLinkComponent: React.ElementType,
	linkComponent: React.ElementType,
	topBarCenter?: React.ReactChild,
	topBarComponent?: React.ElementType,
	sidebarMainComponent?: React.ElementType,
	sidebarMenuComponent?: React.ElementType,
}

export const Layout: React.FC<Props> = ({
	brand,
	sidebarMain,
	sidebarMainOpen,
	sidebarMenuItems,
	moreItemsOpen,
	moreLinkMenuItem,
	menuLink,
	userLink,
	moreLinkComponent: MoreLinkComponent,
	linkComponent: LinkComponent,
	topBarCenter,
	children,
	topBarComponent: TopBarComponent = 'div',
	sidebarMainComponent: SidebarMainWrapperComponent = 'div',
	sidebarMenuComponent: SidebarMenuComponent = 'div',
}) => {
	const SidebarMainComponent = sidebarMainOpen ? OpenSidebarMain : SidebarMain
	const MoreItemsComponent = moreItemsOpen ? OpenMoreItems : MoreItems
	const primarySidebarMenuItems = sidebarMenuItems.filter(s => !s.secondary)
	const secondarySidebarMenuItems = sidebarMenuItems.filter(s => s.secondary)

	const visibleSecondarySidebarMenuItems = secondarySidebarMenuItems.slice(0, 1)
	const moreSecondarySidebarMenuItems = secondarySidebarMenuItems.slice(1)
	const visiblePrimarySidebarMenuItems = (
		visibleSecondarySidebarMenuItems.length === 1
			? primarySidebarMenuItems.slice(0, 3)
			: primarySidebarMenuItems.slice(0, 4)
	)
	const morePrimarySidebarMenuItems = (
		visibleSecondarySidebarMenuItems.length === 1
			? primarySidebarMenuItems.slice(3)
			: primarySidebarMenuItems.slice(4)
	)

	return (
		<>
			<Config />
			{
				(sidebarMainOpen || moreItemsOpen)
				&& (
					<DisableScrolling />
				)
			}
			<>
				{
					(
						brand
						|| userLink
						|| topBarCenter
						|| sidebarMain
					)
					&& (
						<TopBar
							span="wide"
							brand={brand}
							menuLink={sidebarMain ? menuLink : undefined}
							userLink={userLink}
							baseComponent={TopBarComponent}
						>
							{topBarCenter}
						</TopBar>
					)
				}
				<SidebarBase>
					<SidebarMenu>
						<SidebarMenuComponent>
							<SidebarMenuSize>
								<SidebarMenuGroup>
									{visiblePrimarySidebarMenuItems.map((item) => {
										return (
											<SidebarMenuItem
												key={item.id}
											>
												<LinkComponent
													{...item}
												/>
											</SidebarMenuItem>
										)
									})}
								</SidebarMenuGroup>
								<MoreItemsComponent>
									<MoreItemsScroll>
										<MorePrimarySidebarMenuGroup>
											{morePrimarySidebarMenuItems.map((item) => {
												return (
													<MoreSidebarMenuItem
														key={item.id}
													>
														<MoreLinkComponent
															{...item}
														/>
													</MoreSidebarMenuItem>
												)
											})}
										</MorePrimarySidebarMenuGroup>
										<MoreSecondarySidebarMenuGroup>
											{moreSecondarySidebarMenuItems.map((item) => {
												return (
													<MoreSidebarMenuItem
														key={item.id}
													>
														<MoreLinkComponent
															{...item}
														/>
													</MoreSidebarMenuItem>
												)
											})}
										</MoreSecondarySidebarMenuGroup>
									</MoreItemsScroll>
								</MoreItemsComponent>
								{
									(
										morePrimarySidebarMenuItems.length > 0
										|| moreSecondarySidebarMenuItems.length > 0
									)
									&& (
										<MoreToggleSidebarMenuItem>
											<SidebarMenuItem>
												<LinkComponent
													{...moreLinkMenuItem}
												/>
											</SidebarMenuItem>
										</MoreToggleSidebarMenuItem>
									)
								}
								{
									visibleSecondarySidebarMenuItems.length > 0
									&& (
										<SidebarMenuGroup>
											{visibleSecondarySidebarMenuItems.map((item) => (
												<SidebarMenuItem
													key={item.id}
												>
													<LinkComponent
														{...item}
													/>
												</SidebarMenuItem>
											))}
										</SidebarMenuGroup>
									)
								}
							</SidebarMenuSize>
						</SidebarMenuComponent>
					</SidebarMenu>
					{
						(sidebarMain as unknown)
						&& (
							<SidebarMainComponent>
								<SidebarMainWrapperComponent>
									<SidebarMainOverflow>
										{sidebarMain}
									</SidebarMainOverflow>
								</SidebarMainWrapperComponent>
							</SidebarMainComponent>
						)
					}
				</SidebarBase>
				<ContentBase>
					{children}
				</ContentBase>
			</>
		</>
	)
}
