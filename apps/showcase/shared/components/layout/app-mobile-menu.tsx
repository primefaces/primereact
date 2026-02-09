'use client';
import { Portal } from 'primereact/portal';
import { AppTopbarButton } from './app-topbar';
import * as React from 'react';
import { usePresence } from '@primereact/hooks';
import appConfig from '@/app.config';
import Link from 'next/link';
import { menu, navigation } from '@/assets/menu/navigation';
import { usePathname } from 'next/navigation';
import { TailwindLogoIcon } from '../icons';
import { Bars } from '@primeicons/react/bars';
import { Times } from '@primeicons/react/times';

export default function AppMobileMenu() {
    const [open, setOpen] = React.useState(false);
    const { present, exiting, mounted, ref } = usePresence(open);
    const pathname = usePathname();

    const isVisible = present && mounted && !exiting;

    function toggleOpen() {
        setOpen((prev) => !prev);
    }

    React.useEffect(() => {
        if (!open) return;

        const originalOverflow = document.body.style.overflow;

        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [open]);

    React.useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 1280px)');

        function handleChange(e: MediaQueryListEvent | MediaQueryList) {
            if (e.matches) {
                setOpen(false);
            }
        }

        handleChange(mediaQuery);

        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    return (
        <>
            <AppTopbarButton className="xl:hidden flex" onClick={toggleOpen}>
                {open ? <Times /> : <Bars />}
            </AppTopbarButton>

            <Portal>
                {present && (
                    <div
                        ref={ref as React.RefObject<HTMLDivElement>}
                        className={`fixed py-8 inset-0 overflow-auto z-49 space-y-8 top-[calc(var(--sticky-offset-top)-1px)] bg-surface-0 dark:bg-surface-950 border-t border-surface  transition-[opacity,translate,filter] duration-200 ${isVisible ? 'opacity-100 translate-y-0 blur-[0]' : 'opacity-0 -translate-y-2 blur-sm'}`}
                    >
                        <div className="px-4">
                            <div className="font-mono text-xs uppercase mb-4 tracking-widest">Navigation</div>
                            <div className="flex flex-col gap-3">
                                {appConfig.navigation?.map((item) => (
                                    <Link key={item.name} href={item.href} className="text-xl font-medium" onClick={toggleOpen}>
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="w-full sticky -top-10 z-2 bg-surface-0 dark:bg-surface-950 py-4 px-4 border-y border-surface flex flex-col gap-4">
                            {navigation.map((nav, i) => (
                                <Link key={nav.name + i} className="group text-xl font-medium flex items-center gap-3 data-active:text-primary" href={nav.href} {...(pathname.startsWith(nav.href) ? { 'data-active': '' } : {})}>
                                    {nav.icon === 'tailwind' ? (
                                        <span className="w-4 relative">
                                            <TailwindLogoIcon className="w-5 h-auto absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 fill-(--text-color) group-data-active:fill-primary!" />
                                        </span>
                                    ) : (
                                        <i className={`pi ${nav.icon} text-base!`} />
                                    )}
                                    {nav.name}
                                </Link>
                            ))}
                        </div>
                        <div className="px-4 space-y-12 pb-8">
                            {(menu[pathname.split('/')[2] as keyof typeof menu] || []).map((item, i) => (
                                <div key={item.name + i}>
                                    <div className="font-mono text-xs uppercase mb-4 tracking-widest">{item.name}</div>
                                    <ul className="flex flex-col gap-3">
                                        {item.children?.map((child, j) => {
                                            const isExternalLink = child.href.startsWith('http');

                                            const isActive = child.href === pathname;

                                            return (
                                                <li key={child.name + j}>
                                                    <Link href={child.href} target={isExternalLink ? '_blank' : ''} className="text-xl font-medium" {...(isActive ? { 'data-active': '' } : {})} onClick={toggleOpen}>
                                                        {child.name}
                                                        {isExternalLink && <i className="pi pi-arrow-up-right ml-2 text-lg! opacity-50" />}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </Portal>
        </>
    );
}
