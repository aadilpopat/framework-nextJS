import React from 'react';
import Link from 'next/link';
import ISiteLogo from '@/DataTransferObjects/Models/ISiteLogo/ISiteLogo';

const SiteLogo = ({ isNavOpen }: ISiteLogo) => {
	const textColour = isNavOpen ? 'text-white-100' : 'text-green-100';

	return (
		<Link
			href='/'
			className={`text-site-logo relative z-20 ${textColour}`}
		>
			Cottage Retreat
		</Link>
	);
};

export default SiteLogo;
