import React from 'react';
import getImageGridFields from '@/Utils/Services/Wordpress/Homepage/getImageGridFields';
import Image from 'next/image';

const ImageGrid = async () => {
	const imageGridFields = await getImageGridFields();

	// Desktop Image Heights
	const row1Height = 'md:h-[525px]';
	const row2Height = 'md:h-[489px]';
	const row3Height = 'md:h-[670px]';
	const row4Height = 'md:h-[371px]';

	//Mobile Image Height
	const mobileHeight1 = 'h-[335px]';
	const mobileHeight2 = 'h-[400px]';

	return (
		<div className='image-grid container mb-80 grid grid-cols-6 gap-20 md:mb-160 md:grid-cols-12'>
			<Image
				className={`col-span-6 w-full ${mobileHeight1} ${row1Height} object-cover md:col-span-8`}
				src={imageGridFields.image1.mediaItemUrl}
				width={imageGridFields.image1.mediaDetails.width}
				height={imageGridFields.image1.mediaDetails.height}
				alt={imageGridFields.image1.altText}
			/>

			<Image
				className={`col-span-6 w-full ${mobileHeight2} ${row1Height} object-cover md:col-span-4`}
				src={imageGridFields.image2.mediaItemUrl}
				width={imageGridFields.image2.mediaDetails.width}
				height={imageGridFields.image2.mediaDetails.height}
				alt={imageGridFields.image2.altText}
			/>

			<Image
				className={`col-span-6 w-full ${mobileHeight1} ${row2Height} object-cover md:col-span-12`}
				src={imageGridFields.image3.mediaItemUrl}
				width={imageGridFields.image3.mediaDetails.width}
				height={imageGridFields.image3.mediaDetails.height}
				alt={imageGridFields.image3.altText}
			/>

			<Image
				className={`col-span-6 w-full ${mobileHeight2} ${row3Height} object-cover md:col-span-6`}
				src={imageGridFields.image4.mediaItemUrl}
				width={imageGridFields.image4.mediaDetails.width}
				height={imageGridFields.image4.mediaDetails.height}
				alt={imageGridFields.image4.altText}
			/>
			<Image
				className={`col-span-6 w-full ${mobileHeight2} ${row3Height} object-cover md:col-span-6`}
				src={imageGridFields.image5.mediaItemUrl}
				width={imageGridFields.image5.mediaDetails.width}
				height={imageGridFields.image5.mediaDetails.height}
				alt={imageGridFields.image5.altText}
			/>

			<Image
				className={`col-span-6 w-full ${mobileHeight1} ${row4Height} object-cover md:col-span-4`}
				src={imageGridFields.image6.mediaItemUrl}
				width={imageGridFields.image6.mediaDetails.width}
				height={imageGridFields.image6.mediaDetails.height}
				alt={imageGridFields.image6.altText}
			/>

			<Image
				className={`col-span-6 w-full ${mobileHeight1} ${row4Height} object-cover md:col-span-8`}
				src={imageGridFields.image7.mediaItemUrl}
				width={imageGridFields.image7.mediaDetails.width}
				height={imageGridFields.image7.mediaDetails.height}
				alt={imageGridFields.image7.altText}
			/>
		</div>
	);
};

export default ImageGrid;
