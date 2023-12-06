export default interface INavigationItemsWPResponse {
	menu: IMenuItemCollection;
}

export interface IMenuItemCollection {
	databaseId: number;
	name: string;
	slug: string;
	menuItems: {
		nodes: IMenuItem[];
	};
}

export interface IMenuItem {
	databaseId: string;
	url: string;
	label: string;
}
