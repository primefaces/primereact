'use client';
import { menu, navigation } from '@/assets/menu/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';
import { TailwindLogoIcon } from '../icons';

export default function DocSidebar() {
    const pathname = usePathname();
    const scrollContainerRef = React.useRef<HTMLDivElement | null>(null);
    const activeItemRef = React.useRef<HTMLAnchorElement | null>(null);

    React.useLayoutEffect(() => {
        const container = scrollContainerRef.current;
        const active = activeItemRef.current;

        if (!container || !active) return;

        container.scrollTo({
            top: active.offsetTop - container.clientHeight / 2 + active.clientHeight / 2,
            behavior: 'auto'
        });
    }, []);

    return (
        <aside className="w-(--sidebar-width) shrink-0 flex-col sticky top-(--sticky-offset-top) h-[calc(100svh-var(--sticky-offset-top))] overflow-hidden xl:flex hidden">
            <div className="space-y-0.5 mb-2 pt-(--docs-layout-spacing)">
                {navigation.map((nav, i) => (
                    <Link
                        key={nav.name + i}
                        className="group h-8 rounded-lg px-3 flex items-center gap-3 text-sm font-medium text-surface-600 dark:text-surface-400 hover:bg-surface-200/50 hover:text-surface-900 dark:hover:bg-surface-900 dark:hover:text-surface-0 data-active:bg-primary-500/10 dark:data-active:bg-primary-400/10 data-active:text-primary! aria-disabled:pointer-events-none aria-disabled:select-none "
                        href={nav.disabled ? '' : nav.href}
                        aria-disabled={nav.disabled}
                        {...(pathname.startsWith(nav.href) ? { 'data-active': '' } : {})}
                    >
                        {nav.icon === 'tailwind' ? (
                            <span className="w-3.5 relative">
                                <TailwindLogoIcon className="w-4.5 h-auto absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 fill-surface-500 dark:fill-surface-400 group-hover:fill-surface-900 dark:group-hover:fill-surface-0 group-data-active:fill-primary!" />
                            </span>
                        ) : (
                            <i className={`pi ${nav.icon} text-sm!`} />
                        )}
                        {nav.name}
                        {'badge' in nav && nav?.badge && (
                            <span className="uppercase flex items-center justify-center px-1 py-0.5 rounded-sm bg-primary-500/10 dark:bg-primary-400/10 border border-primary-500/15 dark:border-primary-400/15 text-primary font-bold text-[10px] tracking-tight leading-none ml-auto mr-0">
                                {nav.badge}
                            </span>
                        )}
                    </Link>
                ))}
            </div>
            <div ref={scrollContainerRef} className="space-y-8 overflow-auto flex-1 border-t border-(--border-color) pt-2 pb-6">
                {(menu[pathname.split('/')[2] as keyof typeof menu] || []).map((item, i) => (
                    <div key={item.name + i}>
                        <span className="text-xs text-surface-500 dark:text-surface-400 pl-3 font-mono uppercase">{item.name}</span>
                        <ul className="space-y-px mt-1">
                            {item.children?.map((child, j) => {
                                const isExternalLink = child.href.startsWith('http');

                                const isActive = child.href === pathname;

                                return (
                                    <li key={child.name + j}>
                                        <Link
                                            ref={isActive ? activeItemRef : null}
                                            href={child.href}
                                            target={isExternalLink ? '_blank' : ''}
                                            className="h-8 text-sm rounded-lg flex items-center px-3 text-surface-900 dark:text-surface-100 hover:bg-surface-200/50 dark:hover:bg-surface-800/50 data-active:bg-surface-200/50 dark:data-active:bg-surface-800/50"
                                            {...(isActive ? { 'data-active': '' } : {})}
                                        >
                                            {child.name}
                                            {'badge' in child && child?.badge && (
                                                <span className="uppercase flex items-center justify-center px-1 py-0.5 rounded-sm bg-primary-500/10 dark:bg-primary-400/10 border border-primary-500/15 dark:border-primary-400/15 text-primary font-bold text-[10px] tracking-tight leading-none ml-auto mr-0">
                                                    {child.badge}
                                                </span>
                                            )}
                                            {isExternalLink && <i className="pi pi-arrow-up-right ml-auto mr-0 text-xs! opacity-60" />}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </div>
        </aside>
    );
}
