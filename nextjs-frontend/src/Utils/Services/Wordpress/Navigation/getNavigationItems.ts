import fetchAPI from '@/Utils/Services/Wordpress';
import INavigationItems from '@/DataTransferObjects/Models/INavigationItems/INavigationItems';

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

	const data = await fetchAPI<INavigationItems>(requestQuery, {
		variables: { id: menuName },
	});
	return data.menu;
};
export default getNavigationItems;
