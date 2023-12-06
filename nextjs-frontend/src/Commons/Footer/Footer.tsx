import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import getNavigationItems from '@/Utils/Services/Wordpress/Navigation/getNavigationItems';
import SiteLogo from '@/Components/SiteLogo/SiteLogo';

const Footer = async () => {
	const topMenuItems = await getNavigationItems('Main Menu');
	const bottomMenuItems = await getNavigationItems('Footer Menu - Bottom');

	return (
		<div className='footer container mb-40 mt-60 md:mt-160'>
			<div className='mb-15 border-t border-white-300 pt-40 md:mb-120 md:grid md:grid-cols-12 md:pt-60'>
				<div className='col-span-2 mb-50'>
					<SiteLogo />
				</div>
				<div className='col-span-4 col-start-9'>
					<ul className='flex flex-col gap-15 md:flex-row md:justify-end md:gap-[2.94rem]'>
						{topMenuItems.menuItems.nodes.map((navItem) => (
							<li
								className='footer-link'
								key={`footer-menu-top-item-${navItem.databaseId}`}
							>
								<Link href={navItem.url}>{navItem.label}</Link>
							</li>
						))}
					</ul>
				</div>
			</div>

			<div className='flex flex-col-reverse gap-[91px] md:grid md:grid-cols-12'>
				<div className='col-span-3'>
					<p className='mb-10 text-copy-s text-green-100 md:mb-4'>
						Company name © 2023. All rights Reserved.
					</p>

					<div className='flex items-center'>
						<span className='text-copy-s text-green-100'>
							Design by &nbsp;
						</span>
						<Image
							src='images/framework-logo.svg'
							alt='framework logo'
							className='framework-logo'
							width={73}
							height={11}
						/>
					</div>
				</div>
				<div className='col-span-2 col-start-11'>
					<ul className='flex flex-col gap-15 md:gap-1'>
						{bottomMenuItems.menuItems.nodes.map((navItem) => (
							<li
								className='footer-link md:text-right'
								key={`footer-menu-bottom-item-${navItem.databaseId}`}
							>
								<Link href={navItem.url}>{navItem.label}</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
