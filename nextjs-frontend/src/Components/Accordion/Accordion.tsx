import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import getAccordionFields from '@/Utils/Services/Wordpress/Homepage/getAccordionFields';

const Accordion = async () => {
	const accordionFields = await getAccordionFields();
	const link = accordionFields.ctaButton;
	const accordionSections = [];

	for (let i = 0; i <= 5; i += 1) {
		accordionSections.push(
			<details
				className='group mb-30'
				key={`accordion-section-${i}`}
			>
				<summary className='flex w-full cursor-pointer flex-nowrap place-items-baseline justify-between border-b border-b-white-300 md:grid md:grid-cols-10'>
					<span className='mr-30 inline-block text-copy md:col-span-1 md:mr-0'>
						{(i + 1).toString().padStart(2, '0')}
					</span>
					<h5 className='text-heading-xsmall mb-26 text-green-100 md:col-span-8 md:mb-8'>
						{accordionFields.sectionHeading}
					</h5>
					<div className='md:grid-col-none relative ml-37 mt-8 flex h-21 w-21 items-center md:col-span-1 md:ml-0 md:mr-16 md:mt-0'>
						<span className='absolute right-0 opacity-100 group-open:opacity-0'>
							<Image
								priority
								src='/images/plus-icon.svg'
								alt='plus icon'
								width={0}
								height={0}
								className='h-auto w-full'
							/>
						</span>
						<span className='absolute right-0 flex items-center opacity-0 group-open:opacity-100'>
							<Image
								priority
								src='/images/minus-icon.svg'
								alt='plus icon'
								width={0}
								height={0}
								className='h-auto w-full'
							/>
						</span>
					</div>
				</summary>
				<div className='md:grid md:grid-cols-10'>
					<div className='md:col-span-8 md:col-start-2'>
						<p className='mt-30 text-copy text-green-100'>
							{accordionFields.sectionText}
						</p>
					</div>
				</div>
			</details>
		);
	}
	return (
		<div className='accordion container md:grid md:grid-cols-12'>
			<div className='col-span-5 col-start-2'>
				<h3 className='text-heading-large mb-20 text-green-100'>
					{accordionFields.heading}
				</h3>
				<p className='mb-[3.12rem] text-copy text-green-100'>
					{accordionFields.text}
				</p>
			</div>

			<div className='col-span-10 col-start-2'>
				{accordionSections}
				<Link
					href={link.url}
					{...(link.target ? { target: link.target } : {})}
					className='button-1 mt-10'
				>
					{link.title}
				</Link>
			</div>
		</div>
	);
};

export default Accordion;
