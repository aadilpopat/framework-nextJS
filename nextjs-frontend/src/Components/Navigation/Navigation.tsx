import React from 'react';
import getNavigationItems from '@/Utils/Services/Wordpress/Navigation/getNavigationItems';
import { IMenuItem } from '@/DataTransferObjects/Models/INavigationItems/INavigationItems';

const Navigation = async () => {
	const navItems = await getNavigationItems('Main Menu');
	return (
		<nav className='navigation relative md:mt-15'>
			<div className='container flex items-center justify-between py-32 md:py-16'>
				<a
					href='/'
					className='text-site-logo relative z-20 text-green-100'
				>
					Cottage Retreat
				</a>

				<button className='mobile-menu-button'>
					<img
						src=''
						alt=''
						className='relative z-20 md:hidden'
					/>
				</button>

				<div className='mobile-menu container absolute inset-0 z-10 hidden h-screen w-screen flex-col justify-between bg-green-100 pt-[8.188rem] md:relative md:mx-0 md:block md:h-auto md:w-auto md:flex-row md:bg-transparent md:px-0 md:pt-0'></div>
				<div className='menu-main-menu-container'>
					<ul
						id={navItems.slug + '-' + navItems.databaseId}
						className='flex flex-col gap-30 md:flex-row md:justify-around md:gap-50'
					>
						{navItems.menuItems.nodes.map((navItem: IMenuItem) => (
							<li>{navItem.label}</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
