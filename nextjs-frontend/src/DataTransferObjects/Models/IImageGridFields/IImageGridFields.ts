import IImage from '@/DataTransferObjects/Models/IImage';

export default interface IImageGridFields {
	pageBy: {
		imageGrid: {
			image1: IImage;
			image2: IImage;
			image3: IImage;
			image4: IImage;
			image5: IImage;
			image6: IImage;
			image7: IImage;
		};
	};
}
