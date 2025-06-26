'use client';
import { useApp } from '@/hooks/useApp';
import { cn } from '@primeuix/utils';
import * as React from 'react';
import { AppFooter, AppMenu, AppNews, AppTopbar } from './sections';

export default function AppLayout({
    children
}: Readonly<{
    children?: React.ReactNode;
}>) {
    const { isNewsActive, preset, onMaskClick, sidebarActive } = useApp();

    return (
        <div className={cn('layout-wrapper', { 'layout-news-active': isNewsActive })} data-p-theme={preset}>
            <AppNews />
            <AppTopbar />
            <div className={cn('layout-mask', { 'layout-mask-active': sidebarActive })} onClick={onMaskClick}></div>
            <div className="layout-content">
                <AppMenu />
                <div className="layout-content-slot">{children}</div>
            </div>
            <AppFooter />
        </div>
    );
}
