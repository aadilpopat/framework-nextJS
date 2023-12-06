import React from 'react';
import Link from 'next/link';
import getNavigationItems from '@/Utils/Services/Wordpress/Navigation/getNavigationItems';
import { IMenuItem } from '@/DataTransferObjects/Models/INavigationItems/INavigationItemsWPResponse';
import SiteLogo from '@/Components/SiteLogo/SiteLogo';

const DesktopNavigation = async () => {
	const navItems = await getNavigationItems('Main Menu');
	return (
		<nav className='navigation container relative mt-15 flex items-center justify-between py-16'>
			<SiteLogo />
			<ul className='flex justify-around gap-50'>
				{navItems.menuItems.nodes.map((navItem: IMenuItem) => (
					<li
						key={`main-nav-item-${navItem.databaseId}`}
						className='button-2 text-green-100'
					>
						<Link href={navItem.url}>{navItem.label}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default DesktopNavigation;
