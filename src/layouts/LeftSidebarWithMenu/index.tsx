import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
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
	'--size-menu': 'var(--size-menu, 4rem)',
})

const ContentBase = styled('main')({
	boxSizing: 'border-box',
	paddingBottom: 'var(--size-menu, 4rem)',
	'@media (min-width: 1080px)': {
		paddingLeft: 'calc(50% - var(--width-base, 360px) * 0.5)',
		paddingBottom: 0,
	},
})

const SidebarBase = styled('div')({
	boxSizing: 'border-box',
	backgroundColor: 'var(--color-bg, white)',
	overflow: 'hidden',
	display: 'contents',
	left: 'calc(var(--width-base, 360px) * -1)',
	'@media (prefers-color-scheme: dark)': {
		backgroundColor: 'var(--color-bg, black)',
	},
	'@media (min-width: 1080px)': {
		position: 'fixed',
		top: 0,
		left: 0,
		width: 'calc(50% - var(--width-base, 360px) * 0.5)',
		height: '100%',
		display: 'block',
	},
})

const SidebarMain = styled('div')({
	backgroundColor: 'var(--color-bg, white)',
	boxSizing: 'border-box',
	position: 'fixed',
	top: 0,
	right: '100%',
	width: '100%',
	height: '100%',
	overflow: 'auto',
	// overflow: 'overlay',
	paddingTop: 'inherit',
	paddingBottom: 'var(--size-menu, 4rem)',
	'@media (prefers-color-scheme: dark)': {
		backgroundColor: 'var(--color-bg, black)',
	},
	scrollbarWidth: 'none',
	'::-webkit-scrollbar': {
		display: 'none',
	},
	'@media (min-width: 1080px)': {
		position: 'absolute',
		right: 0,
		width: 'calc(var(--width-base, 360px) - var(--size-menu, 4rem))',
		marginLeft: 'auto',
		paddingBottom: 0,
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
	backgroundColor: 'var(--color-bg, white)',
	'@media (prefers-color-scheme: dark)': {
		backgroundColor: 'var(--color-bg, black)',
	},
	'@media (min-width: 1080px)': {
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
	maxWidth: 'calc(var(--width-base, 360px) * 2)',
	margin: '0 auto',
	'@media (min-width: 1080px)': {
		maxWidth: 'none',
		marginRight: 0,
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
	},
})

const SidebarMenuGroup = styled('div')({
	display: 'contents',
	'@media (min-width: 1080px)': {
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
	backgroundColor: 'var(--color-bg, white)',
	zIndex: -1,
	boxSizing: 'border-box',
	'@media (prefers-color-scheme: dark)': {
		backgroundColor: 'var(--color-bg, black)',
	},
	'@media (min-width: 1080px)': {
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
	'@media (min-width: 1080px)': {
		display: 'contents',
	},
})

const MorePrimarySidebarMenuGroup = styled(SidebarMenuGroup)({
	'@media (min-width: 1080px)': {
		flex: 'auto',
	},
})

const MoreSecondarySidebarMenuGroup = styled(SidebarMenuGroup)({
	'@media (min-width: 1080px)': {
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
	'@media (min-width: 1080px)': {
		width: 'auto !important',
		flex: '0 1 auto',
		'> *': {
			height: 'auto',
		}
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
	'@media (min-width: 1080px)': {
		width: 'auto !important',
		flex: '0 1 auto',
	},
})

const MoreToggleSidebarMenuItem = styled(SidebarMenuItem)({
	'@media (min-width: 1080px)': {
		display: 'none',
	},
})

export const SidebarMenuItemIcon = styled('span')({
	display: 'block',
	'@media (min-width: 1080px)': {
		width: 'var(--size-menu, 4rem)',
		height: 'var(--size-menu, 4rem)',
		display: 'grid',
		placeContent: 'center',
	},
})

export const MoreSidebarMenuItemIcon = styled('span')({
	marginRight: '1rem',
	display: 'block',
	'@media (min-width: 1080px)': {
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
	'@media (min-width: 1080px)': {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		width: 'var(--width-base, 360px)',
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
	width: 'calc(var(--width-base, 360px) * 2)',
	margin: '0 auto',
	padding: '0 1rem',
	textAlign: 'left',
	boxSizing: 'border-box',
	'@media (min-width: 1080px)': {
		marginRight: 0,
		width: 'var(--width-base, 360px)',
		paddingLeft: 0,
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

export const SidebarMainContainer = styled('div')({
	padding: '0 1rem',
	boxSizing: 'border-box',
	width: '100%',
	maxWidth: 'calc(var(--width-base, 360px) * 2)',
	margin: '0 auto',
	'@media (min-width: 1080px)': {
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
	sidebarMain: React.ReactChild,
	sidebarMainOpen?: boolean,
	sidebarMenuItems: MenuItem[],
	moreItemsOpen?: boolean,
	moreLinkMenuItem: BaseMenuItem,
	menuLink?: React.ReactNode,
	userLink?: React.ReactNode,
	moreLinkComponent: React.ElementType,
	linkComponent: React.ElementType,
	topBarCenter?: React.ReactChild,
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
			{
				(sidebarMainOpen || moreItemsOpen)
				&& (
					<DisableScrolling />
				)
			}
			<LayoutBase>
				<TopBar
					wide
					brand={brand}
					menuLink={menuLink}
					userLink={userLink}
				>
					{topBarCenter}
				</TopBar>
				<SidebarBase>
					<SidebarMenu>
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
							<MoreToggleSidebarMenuItem>
								<SidebarMenuItem>
									<LinkComponent
										{...moreLinkMenuItem}
									/>
								</SidebarMenuItem>
							</MoreToggleSidebarMenuItem>
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
					</SidebarMenu>
					<SidebarMainComponent>
						{sidebarMain}
					</SidebarMainComponent>
				</SidebarBase>
				<ContentBase>
					{children}
				</ContentBase>
			</LayoutBase>
		</>
	)
}
