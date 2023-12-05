import fetchAPI from '@/Utils/Services/Wordpress';
import IImageGridFields from '@/DataTransferObjects/Models/IImageGridFields/IImageGridFields';

const getImageGridFields = async () => {
	const requestQuery: string = `
	query ImageGridFields {
		pageBy(uri: "/") {
			imageGrid {
				image1 {
					...MediaItemFragment
				}
				image2 {
					...MediaItemFragment
				}
				image3 {
					...MediaItemFragment
				}
				image4 {
					...MediaItemFragment
				}
				image5 {
					...MediaItemFragment
				}
				image6 {
					...MediaItemFragment
				}
				image7 {
					...MediaItemFragment
				}
			}
		}
	}
	
	fragment MediaItemFragment on MediaItem {
		altText
		mediaItemUrl
		mediaDetails {
			height
			width
		}
	}
	`;

	const data = await fetchAPI<IImageGridFields>(requestQuery);
	
	return data.pageBy.imageGrid;
};
export default getImageGridFields;
