'use client';

import { useEffect, useState } from 'react';
import GetTailwindConfig from '@/Utils/Helpers/GetTailwindConfig/GetTailwindConfig';
import JsonObject from '@/Utils/CustomTypes/JsonObject';

export type IScreenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
const useIsMobile = (screenSize: IScreenSize) => {
	const fullConfig = GetTailwindConfig();
	const breakpoint = Number(
		(
			(fullConfig.theme?.screens as JsonObject)[screenSize] as string
		).replace(/px/g, '')
	);
	const [isMobile, setIsMobile] = useState(true);

	useEffect(() => {
		let windowWidth = window.innerWidth;

		const updateBreakpoint = () => {
			if (window.innerWidth !== windowWidth) {
				windowWidth = window.innerWidth;
			}
			setIsMobile(windowWidth < breakpoint);
		};

		setIsMobile(windowWidth < breakpoint);

		window.addEventListener('resize', updateBreakpoint);

		return () => window.removeEventListener('resize', updateBreakpoint);
	}, [breakpoint]);

	return isMobile;
};

export default useIsMobile;
