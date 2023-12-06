'use client';

import React, { useState } from 'react';
import SiteLogo from '@/Components/SiteLogo/SiteLogo';
import IMobileNavigation from '@/DataTransferObjects/Models/IMobileNavigation/IMobileNavigation';
import NavToggle from '@/Commons/Navigation/Mobile/NavToggle';
import MobileNavMenu from '@/Commons/Navigation/Mobile/MobileNavMenu';

const MobileNavigation = ({ MainMenu, BottomMenu }: IMobileNavigation) => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	return (
		<>
			<nav className='navigation container relative flex items-center justify-between py-32'>
				<SiteLogo isNavOpen={isNavOpen} />
				<NavToggle
					isNavOpen={isNavOpen}
					setIsNavOpen={setIsNavOpen}
				/>
			</nav>
			{isNavOpen && (
				<MobileNavMenu
					MainMenu={MainMenu}
					BottomMenu={BottomMenu}
				/>
			)}
		</>
	);
};
export default MobileNavigation;
