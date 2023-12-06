import { IMenuItemCollection } from '@/DataTransferObjects/Models/INavigationItems/INavigationItemsWPResponse';

export default interface IMobileNavigation {
	MainMenu: IMenuItemCollection;
	BottomMenu: IMenuItemCollection;
}
