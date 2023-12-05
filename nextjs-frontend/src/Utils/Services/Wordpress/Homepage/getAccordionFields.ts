import fetchAPI from '@/Utils/Services/Wordpress';
import IAccordionFields from '@/DataTransferObjects/Models/IAccordionFields/IAccordionFields';

const getAccordionFields = async () => {
	const requestQuery: string = `
	query Accordion {
		pageBy(uri: "/") {
			accordion {
				heading
				text
				sectionHeading
				sectionText
				ctaButton {
					target
					title
					url
				}
			}
		}
	}
`;

	const data = await fetchAPI<IAccordionFields>(requestQuery);
	return data.pageBy.accordion;
};
export default getAccordionFields;
