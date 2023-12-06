import React from 'react';
import Link from 'next/link';
import { IMenuItem } from '@/DataTransferObjects/Models/INavigationItems/INavigationItemsWPResponse';
import IMobileNavigation from '@/DataTransferObjects/Models/IMobileNavigation/IMobileNavigation';

const MobileNavMenu = ({ MainMenu, BottomMenu }: IMobileNavigation) => (
	<div className='container absolute inset-0 z-10 flex h-screen w-screen flex-col justify-between bg-green-100 pb-40 pt-[8.188rem]'>
		<ul className='flex flex-col gap-30'>
			{MainMenu.menuItems.nodes.map((navItem: IMenuItem) => (
				<li
					key={`main-nav-item-${navItem.databaseId}`}
					className='button-2 text-white-100'
				>
					<Link href={navItem.url}>{navItem.label}</Link>
				</li>
			))}
		</ul>
		<ul className='flex flex-col gap-10'>
			{BottomMenu.menuItems.nodes.map((navItem: IMenuItem) => (
				<li
					key={`main-nav-item-${navItem.databaseId}`}
					className='text-copy text-white-100'
				>
					<Link href={navItem.url}>{navItem.label}</Link>
				</li>
			))}
		</ul>
	</div>
);

export default MobileNavMenu;
