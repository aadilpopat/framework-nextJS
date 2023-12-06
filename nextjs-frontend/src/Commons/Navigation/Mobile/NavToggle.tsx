import React from 'react';
import Image from 'next/image';
import INavButton from '@/DataTransferObjects/Models/NavButton/INavButton';

const NavToggle = ({ isNavOpen, setIsNavOpen }: INavButton) => {
	const preventBodyScroll = () => {
		document.body.classList.toggle('overflow-hidden');
	};
	return (
		<button
			className='mobile-menu-button'
			onClick={() => {
				setIsNavOpen(!isNavOpen);
				preventBodyScroll();
			}}
			type='button'
		>
			{isNavOpen ? (
				<Image
					src='/images/close-menu-icon.svg'
					alt='close icon'
					className='relative z-20 h-auto w-full md:hidden'
					width={0}
					height={0}
				/>
			) : (
				<Image
					src='/images/hamburger-menu-icon.svg'
					alt='hamburger icon'
					className='relative z-20 h-auto w-full md:hidden'
					width={0}
					height={0}
				/>
			)}
		</button>
	);
};

export default NavToggle;
