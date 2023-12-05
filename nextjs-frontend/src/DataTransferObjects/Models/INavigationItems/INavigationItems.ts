export default interface INavigationItems {
	menu: {
		databaseId: number;
		name: string;
		slug: string;
		menuItems: {
			nodes: IMenuItem[];
		};
	};
}

export interface IMenuItem {
	databaseID: string;
	url: URL;
	label: string;
}
