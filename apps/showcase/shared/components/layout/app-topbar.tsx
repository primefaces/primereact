'use client';
import appConfig from '@/app.config';
import { useApp } from '@/shared/hooks/useApp';
import useScroll from '@/shared/hooks/useScroll';
import { AngleDown } from '@primeicons/react/angle-down';
import { Github } from '@primeicons/react/github';
import { cn } from '@primeuix/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { StyleClass } from 'primereact/styleclass';
import * as React from 'react';
import { PrimeReactLogo, PrimeReactText } from '../logo';
import AppConfigurator from './app-configurator';
import AppMobileMenu from './app-mobile-menu';

export default function AppTopbar() {
    const { isDarkTheme, handleChangeDarkTheme } = useApp();

    const { y } = useScroll();

    const toggleDarkMode = () => {
        const isDark = !isDarkTheme;

        if (isDark) document.documentElement.classList.add('p-dark');
        else document.documentElement.classList.remove('p-dark');

        handleChangeDarkTheme();
        //app.setDarkTheme(isDark);
    };

    const pathname = usePathname();

    return (
        <header
            className="sticky top-(--news-height) z-50 w-full gap-4 border-b border-transparent data-scrolled:border-(--border-color) data-scrolled:bg-(--topbar-sticky-background) data-scrolled:backdrop-blur-sm transition-colors duration-500"
            {...(y > 10 && { 'data-scrolled': '' })}
        >
            <div className="container h-(--topbar-height) flex items-center justify-center">
                <div className="flex items-center justify-center">
                    <Link href="/" className="flex items-center gap-2">
                        <PrimeReactLogo className="h-7 w-auto " />
                        <PrimeReactText className="h-4 w-auto min-[520px]:block hidden" />
                    </Link>
                    <nav className=" items-center ml-6 gap-4 xl:flex hidden">
                        {appConfig.navigation?.map((item, i) => (
                            <Link
                                key={item.name + i}
                                href={item.href}
                                target={item.href?.startsWith('http') ? '_blank' : ''}
                                className={cn('text-sm ', pathname.startsWith(item.href) ? 'text-primary' : 'text-surface-500 dark:text-surface-400 hover:text-surface-800 dark:hover:text-surface-100')}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="flex-1 flex items-center justify-end gap-1.5">
                    <AppTopbarButton as="a" href="https://github.com/primefaces/primereact" target="_blank" rel="noopener noreferrer" aria-label="PrimeReact GitHub">
                        <Github></Github>
                    </AppTopbarButton>
                    <AppTopbarButton as="a" href="https://discord.gg/gzKFYnpmCY" target="_blank" rel="noopener noreferrer" aria-label="Join PrimeReact Discord">
                        <i className="pi pi-discord" />
                    </AppTopbarButton>
                    <AppTopbarButton as="a" href="https://github.com/orgs/primefaces/discussions" target="_blank" rel="noopener noreferrer" aria-label="PrimeReact Discussions">
                        <i className="pi pi-comments" />
                    </AppTopbarButton>
                    <AppTopbarButton onClick={toggleDarkMode} aria-label="Toggle Dark Mode">
                        <i className={cn('pi', { 'pi-moon': isDarkTheme, 'pi-sun': !isDarkTheme })} />
                    </AppTopbarButton>
                    <div className="relative">
                        <StyleClass
                            as={AppTopbarButton}
                            type="button"
                            aria-label="App Configurator"
                            selector="@next"
                            enterFromClassName="hidden"
                            enterActiveClassName="animate-scalein"
                            leaveToClassName="hidden"
                            leaveActiveClassName="animate-fadeout"
                            hideOnOutsideClick
                        >
                            <i className="pi pi-palette" />
                        </StyleClass>

                        <AppConfigurator />
                    </div>
                    <div className="relative">
                        <StyleClass
                            as={AppTopbarButton}
                            className="w-auto pl-2 pr-1.5"
                            selector="@next"
                            enterFromClassName="hidden"
                            enterActiveClassName="animate-scalein"
                            leaveToClassName="hidden"
                            leaveActiveClassName="animate-fadeout"
                            hideOnOutsideClick
                        >
                            {appConfig.versions?.[0].name}
                            <AngleDown />
                        </StyleClass>

                        <div className="hidden absolute origin-top top-[calc(100%+4px)] bg-(--overlay-background) p-1 rounded-md border border-surface space-y-0.5 shadow-md" style={{ insetInlineEnd: 0 }}>
                            {appConfig.versions?.map((version) => (
                                <a key={version.name} href={version.url} className="inline-flex items-center w-full px-2.5 py-1 text-sm whitespace-nowrap text-color hover:bg-(--hover-background) rounded-md">
                                    {version.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <AppMobileMenu />
                </div>
            </div>
        </header>
    );
}

type AppTopbarButtonProps<T extends React.ElementType> = {
    as?: T;
} & React.ComponentPropsWithoutRef<T>;

export function AppTopbarButton<T extends React.ElementType = 'button'>({ as, className, ...props }: AppTopbarButtonProps<T>) {
    const Component = as || 'button';

    return (
        <Component
            className={cn(
                'inline-flex items-center justify-center gap-2 border border-(--border-color) size-7 rounded-md  lg:[&_i]:text-sm lg:text-sm text-color bg-(--card-background) hover:border-primary focus-visible:outline-1 focus-visible:outline-primary focus-visible:outline-offset-(--p-focus-ring-offset) [transiton:outline-color_0.2s,border_0.2s]',
                className
            )}
            {...props}
        />
    );
}
