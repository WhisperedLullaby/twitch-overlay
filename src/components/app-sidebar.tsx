'use client'

import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react'

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'

const items = [
	{ title: 'Home', url: '#', icon: Home },
	{ title: 'Inbox', url: '#', icon: Inbox },
	{ title: 'Calendar', url: '#', icon: Calendar },
	{ title: 'Search', url: '#', icon: Search },
	{ title: 'Settings', url: '#', icon: Settings },
]

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Application</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							<Button>Log in</Button>
							<Sheet>
								<SheetTrigger asChild>
									<Button className='w-full'>Setup Stream</Button>
								</SheetTrigger>
								<SheetContent>
									<SheetHeader>
										<SheetTitle>Setup Your Stream</SheetTitle>
										<SheetDescription>Configure your stream settings here.</SheetDescription>
									</SheetHeader>
									{/* Add your stream setup form or content here */}
								</SheetContent>
							</Sheet>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<a href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	)
}
