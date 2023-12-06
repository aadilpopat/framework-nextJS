import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import React from 'react';
import DesktopNavigation from '@/Commons/Navigation/Desktop/DesktopNavigation';
import {
	DesktopLayout,
	MobileLayout,
} from '@/Utils/Helpers/LayoutSwitcher/LayoutSwitcher';
import MobileNavigation from '@/Commons/Navigation/Mobile/MobileNavigation';
import getNavigationItems from '@/Utils/Services/Wordpress/Navigation/getNavigationItems';
import { IMenuItemCollection } from '@/DataTransferObjects/Models/INavigationItems/INavigationItemsWPResponse';
import Footer from '@/Commons/Footer/Footer';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Framework Task - Aadil Popat',
	description: 'Built with WP, ACF, NextJS and TailwindCSS',
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
	const navItems: IMenuItemCollection = await getNavigationItems('Main Menu');
	const bottomMenuItems = await getNavigationItems('Footer Menu - Bottom');
	return (
		<html lang='en'>
			<body className={`${openSans.className} bg-white-100`}>
				<MobileLayout>
					<MobileNavigation
						MainMenu={navItems}
						BottomMenu={bottomMenuItems}
					/>
				</MobileLayout>
				<DesktopLayout>
					<DesktopNavigation />
				</DesktopLayout>
				{children}
				<Footer />
			</body>
		</html>
	);
};

export default RootLayout;
