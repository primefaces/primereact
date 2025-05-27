'use client';
import { useApp } from '@/hooks/useApp';
import { blockBodyScroll, cn, unblockBodyScroll } from '@primeuix/utils';
import * as React from 'react';
import { AppFooter, AppNews, AppTopbar } from './sections';

export default function LandingLayout({
    children
}: Readonly<{
    children?: React.ReactNode;
}>) {
    const app = useApp();
    const [sidebarActive, setSidebarActive] = React.useState(false);

    const onMenuButtonClick = () => {
        if (sidebarActive) {
            setSidebarActive(false);
            unblockBodyScroll('blocked-scroll');
        } else {
            setSidebarActive(true);
            blockBodyScroll('blocked-scroll');
        }
    };

    const onMaskClick = () => {
        setSidebarActive(false);
        unblockBodyScroll('blocked-scroll');
    };

    return (
        <div className={cn('layout-wrapper', { 'layout-news-active': app.isNewsActive })} data-p-theme={app.preset}>
            <AppNews />
            <AppTopbar onMenuButtonClick={onMenuButtonClick} />
            <div className={cn('layout-mask', { 'layout-mask-active': sidebarActive })} onClick={onMaskClick}></div>
            <div className="layout-content">
                <div className="layout-content-slot">{children}</div>
            </div>
            <AppFooter />
        </div>
    );
}
