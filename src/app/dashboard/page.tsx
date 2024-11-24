'use client'

import * as React from 'react'
import { BarChart, LayoutDashboard, Settings, Users, Video } from 'lucide-react'

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarHeader,
	SidebarInset,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
	SidebarProvider,
	SidebarRail,
	SidebarTrigger,
} from '@/components/ui/sidebar'
// This is sample data.
const data = {
	navMain: [
		{
			title: 'Dashboard',
			url: '#',
			icon: 'LayoutDashboard',
		},
		{
			title: 'Stream',
			url: '#',
			icon: 'Video',
			items: [
				{
					title: 'Go Live',
					url: '#',
				},
				{
					title: 'Stream Settings',
					url: '#',
				},
			],
		},
		{
			title: 'Analytics',
			url: '#',
			icon: 'BarChart',
			items: [
				{
					title: 'Overview',
					url: '#',
				},
				{
					title: 'Audience',
					url: '#',
				},
				{
					title: 'Revenue',
					url: '#',
				},
			],
		},
		{
			title: 'Community',
			url: '#',
			icon: 'Users',
			items: [
				{
					title: 'Followers',
					url: '#',
				},
				{
					title: 'Subscribers',
					url: '#',
				},
				{
					title: 'Moderators',
					url: '#',
				},
			],
		},
		{
			title: 'Settings',
			url: '#',
			icon: 'Settings',
		},
	],
}

export default function Home() {
	return (
		<SidebarProvider>
			<Sidebar>
				<SidebarHeader>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton size='lg' asChild>
								<a href='#'>
									<div className='flex aspect-square size-8 items-center justify-center rounded-lg bg-purple-600 text-white'>
										<Video className='size-4' />
									</div>
									<div className='flex flex-col gap-0.5 leading-none'>
										<span className='font-semibold'>Twitch Dashboard</span>
										<span className=''>StreamerName</span>
									</div>
								</a>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarHeader>
				<SidebarContent>
					<SidebarGroup>
						<SidebarMenu>
							{data.navMain.map((item) => {
								const IconComponent =
									item.icon === 'LayoutDashboard'
										? LayoutDashboard
										: item.icon === 'Video'
										? Video
										: item.icon === 'BarChart'
										? BarChart
										: item.icon === 'Users'
										? Users
										: Settings

								return (
									<SidebarMenuItem key={item.title}>
										<SidebarMenuButton asChild>
											<a href={item.url} className='font-medium'>
												<IconComponent className='mr-2 h-4 w-4' />
												{item.title}
											</a>
										</SidebarMenuButton>
										{item.items?.length ? (
											<SidebarMenuSub>
												{item.items.map((subItem) => (
													<SidebarMenuSubItem key={subItem.title}>
														<SidebarMenuSubButton asChild>
															<a href={subItem.url}>{subItem.title}</a>
														</SidebarMenuSubButton>
													</SidebarMenuSubItem>
												))}
											</SidebarMenuSub>
										) : null}
									</SidebarMenuItem>
								)
							})}
						</SidebarMenu>
					</SidebarGroup>
				</SidebarContent>
				<SidebarRail />
			</Sidebar>
			<SidebarInset>
				<header className='flex h-16 shrink-0 items-center gap-2 border-b'>
					<div className='flex items-center gap-2 px-3'>
						<SidebarTrigger />
						<Separator orientation='vertical' className='mr-2 h-4' />
						<Breadcrumb>
							<BreadcrumbList>
								<BreadcrumbItem>
									<BreadcrumbLink href='#'>Dashboard</BreadcrumbLink>
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
					</div>
				</header>
				<div className='flex flex-1 flex-col gap-4 p-4'>
					<div className='grid auto-rows-min gap-4 md:grid-cols-3'>
						<div className='aspect-video rounded-xl bg-muted/50' />
						<div className='aspect-video rounded-xl bg-muted/50' />
						<div className='aspect-video rounded-xl bg-muted/50' />
					</div>
					<div className='min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min' />
				</div>
			</SidebarInset>
		</SidebarProvider>
	)
}
