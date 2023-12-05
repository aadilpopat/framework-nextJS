import ICTAButton from '@/DataTransferObjects/Models/ICTAButton';

export default interface IAccordionFields {
	pageBy: {
		accordion: {
			heading: string;
			text: string;
			sectionHeading: string;
			sectionText: string;
			ctaButton: ICTAButton;
		};
	};
}
