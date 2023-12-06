import { Dispatch, SetStateAction } from 'react';

export default interface INavButton {
	isNavOpen: boolean;
	setIsNavOpen: Dispatch<SetStateAction<boolean>>;
}
