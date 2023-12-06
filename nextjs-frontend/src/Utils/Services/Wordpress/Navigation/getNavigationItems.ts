import fetchAPI from '@/Utils/Services/Wordpress';
import INavigationItemsWPResponse from '@/DataTransferObjects/Models/INavigationItems/INavigationItemsWPResponse';

const getNavigationItems = async (menuName: string) => {
	const requestQuery: string = `
	query GET_MENU_BY_NAME($id: ID!, $idType: MenuNodeIdTypeEnum = NAME) {
		menu(id: $id, idType: $idType) {
			databaseId
			name
			slug
			menuItems {
				nodes {
					databaseId
					url
					label
				}
			}
		}
	}`;

	const data = await fetchAPI<INavigationItemsWPResponse>(requestQuery, {
		variables: { id: menuName },
	});
	return data.menu;
};
export default getNavigationItems;
