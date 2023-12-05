import IImage from '@/DataTransferObjects/Models/IImage';

export default interface IHeaderHeroFields {
	pageBy: {
		headerHero: {
			pageTitle: string;
			image: IImage;
		};
	};
};
