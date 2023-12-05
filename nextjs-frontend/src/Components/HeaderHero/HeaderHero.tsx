import React from 'react';
import getHeaderHeroFields from '@/Utils/Services/Wordpress/Homepage/getHeaderHeroFields';
import Image from 'next/image';

const HeaderHero = async () => {
	const headerHeroFields = await getHeaderHeroFields();
	return (
		<section className='header my-80 md:mb-160 md:mt-100'>
			<div className='container md:grid md:grid-cols-12 md:gap-20'>
				<h1 className='text-heading-large mb-30 md:col-span-8 md:mb-40'>
					{headerHeroFields.pageTitle}
				</h1>
			</div>
			<div className='extend-right pl-20'>
				<Image
					src={headerHeroFields.image.mediaItemUrl}
					alt='test'
					width={headerHeroFields.image.mediaDetails.width}
					height={headerHeroFields.image.mediaDetails.height}
					className='h-[314px] w-full object-cover object-left md:h-[600px]'
				/>
			</div>
		</section>
	);
};

export default HeaderHero;
