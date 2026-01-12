'use client';
import { menu } from '@/assets/menu/navigation';
import { useApp } from '@/hooks/useApp';
import { cn } from '@primeuix/utils';
import { usePathname } from 'next/navigation';
import AppMenuItem from './AppMenuItem';
import AppRootMenu from './AppRootMenu';
import Link from 'next/link';

export default function AppMenu() {
    const { sidebarActive } = useApp();
    const pathname = usePathname();

    const m = menu[pathname.split('/')[2] as keyof typeof menu] || [];

    return (
        <aside className={cn('layout-sidebar', { active: sidebarActive })}>
            <nav>
                <AppRootMenu />
                <div className="space-y-8 overflow-auto!">
                    {m.map((item, i) => (
                        <div key={item.name + i}>
                            <span className="text-[13px] text-surface-500 dark:text-surface-400 pl-3">{item.name}</span>
                            <ul className="space-y-px mt-1">
                                {item.children?.map((child, j) => {
                                    const isExternalLink = child.href.startsWith('http');

                                    const isActive = child.href === pathname;

                                    return (
                                        <li key={child.name + j}>
                                            <Link
                                                href={child.href}
                                                target={isExternalLink ? '_blank' : ''}
                                                className="h-8 text-sm rounded-lg flex items-center px-3 text-surface-900 dark:text-surface-100 hover:bg-surface-200/50 dark:hover:bg-surface-800/50 data-active:bg-surface-200/50 dark:data-active:bg-surface-800/50"
                                                {...(isActive ? { 'data-active': '' } : {})}
                                            >
                                                {child.name}
                                                {isExternalLink && <i className="pi pi-arrow-up-right ml-auto mr-0 text-xs! opacity-60"></i>}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </div>
                <AppRootMenu />
                {m.length > 0 && (
                    <ol className="layout-menu">
                        <AppMenuItem menu={m} />
                    </ol>
                )}
            </nav>
        </aside>
    );
}
