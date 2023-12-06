'use client';

import { PropsWithChildren } from 'react';
import useIsMobile, {
	IScreenSize,
} from '@/Utils/Helpers/Hooks/useIsMobile/useIsMobile';

export const MobileLayout = ({
	children,
	maxBreakpoint = 'md',
}: PropsWithChildren<{ maxBreakpoint?: IScreenSize }>) => {
	const isMobile = useIsMobile(maxBreakpoint);
	return isMobile && children;
};

export const DesktopLayout = ({
	children,
	minBreakpoint = 'md',
}: PropsWithChildren<{ minBreakpoint?: IScreenSize }>) => {
	const isMobile = useIsMobile(minBreakpoint);
	return !isMobile && children;
};
