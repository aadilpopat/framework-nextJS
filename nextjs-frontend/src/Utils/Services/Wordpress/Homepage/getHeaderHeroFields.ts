import IHeaderHeroFields from '@/DataTransferObjects/Models/IHeaderHeroFields/IHeaderHeroFields';
import fetchAPI from '@/Utils/Services/Wordpress';

const getHeaderHeroFields = async () => {
	const requestQuery: string = `
	query HeaderHero {
		pageBy(uri: "/") {
			headerHero {
				pageTitle
				image {
					mediaItemUrl
					mediaDetails {
						width
						height
					}
				}
			}
		}
	}`;

	const data = await fetchAPI<IHeaderHeroFields>(requestQuery);
	return data.pageBy.headerHero;
};
export default getHeaderHeroFields;
