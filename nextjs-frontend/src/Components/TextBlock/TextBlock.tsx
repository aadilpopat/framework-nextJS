import React from 'react';
import getTextBlockFields from '@/Utils/Services/Wordpress/Homepage/getTextBlockFields';
import Link from 'next/link';

const TextBlock = async () => {
	const textBlockFields = await getTextBlockFields();
	const link = textBlockFields.textBlockCtaButton;
	return (
		<div className='text-block container mb-80 md:mb-160 md:grid md:grid-cols-12 md:gap-20'>
			<div className='col-span-6 col-start-3'>
				<p className='mb-20 text-heading-sub text-green-100'>
					{textBlockFields.textBlockSubheading}
				</p>
				<h2 className='text-heading-medium mb-20 text-green-100'>
					{textBlockFields.textBlockHeading}
				</h2>

				<p className='mb-40 text-copy text-green-100'>
					{textBlockFields.textBlockText}
				</p>

				<Link
					href={link.url}
					{...(link.target ? { target: link.target } : {})}
					className='button-1'
				>
					{link.title}
				</Link>
			</div>
		</div>
	);
};

export default TextBlock;
