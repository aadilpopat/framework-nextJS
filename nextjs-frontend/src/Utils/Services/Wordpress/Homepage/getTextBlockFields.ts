import fetchAPI from '@/Utils/Services/Wordpress';
import ITextBlockFields from '@/DataTransferObjects/Models/ITextBlockFields/ITextBlockFields';

const getTextBlockFields = async () => {
	const requestQuery: string = `
	query TextBlock {
		pageBy(uri: "/") {
			textBlock {
				textBlockSubheading
				textBlockHeading
				textBlockText
				textBlockCtaButton {
					target
					title
					url
				}
			}
		}
	}
`;

	const data = await fetchAPI<ITextBlockFields>(requestQuery);
	return data.pageBy.textBlock;
};
export default getTextBlockFields;
