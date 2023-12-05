import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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

				<button
					className='mobile-menu-button'
					type='button'
				>
					<Image
						src='/images/hamburger-menu-icon.svg'
						alt='hamburger menu'
						className='relative z-20 md:hidden'
						width={20}
						height={10}
					/>
				</button>

				<div className='mobile-menu container absolute inset-0 z-10 hidden h-screen w-screen flex-col justify-between bg-green-100 pt-[8.188rem] md:relative md:mx-0 md:block md:h-auto md:w-auto md:flex-row md:bg-transparent md:px-0 md:pt-0' />
				<ul className='flex flex-col gap-30 md:flex-row md:justify-around md:gap-50'>
					{navItems.menuItems.nodes.map((navItem: IMenuItem) => (
						<li
							key={`main-nav-item-${navItem.databaseID}`}
							className='button-2 text-white-100 md:text-green-100'
						>
							<Link href={navItem.url}>{navItem.label}</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navigation;
