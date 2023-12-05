import ICTAButton from '@/DataTransferObjects/Models/ICTAButton';

export default interface ITextBlockFields {
	pageBy: {
		textBlock: {
			textBlockSubheading: string;
			textBlockHeading: string;
			textBlockText: string;
			textBlockCtaButton: ICTAButton;
		};
	};
}
