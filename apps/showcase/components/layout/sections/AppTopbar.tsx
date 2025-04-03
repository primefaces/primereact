import { useApp } from '@/hooks/useApp';
import type { AppTopbarProps } from '@/types/App.types';
import { cn } from '@primeuix/utils';
import Link from 'next/link';
import { StyleClass } from 'primereact/styleclass';
import AppConfigurator from './AppConfigurator';

export default function AppTopbar({ showMenuButton = true }: AppTopbarProps) {
    const app = useApp();

    const toggleDarkMode = () => {
        const isDark = !app.isDarkTheme;

        if (isDark) document.documentElement.classList.add('p-dark');
        else document.documentElement.classList.remove('p-dark');

        app.setDarkTheme(isDark);
    };

    const toggleDesigner = () => {};

    const onMenuButtonClick = () => {};

    return (
        <div className="layout-topbar">
            <div className="layout-topbar-inner">
                <div className="layout-topbar-logo-container">
                    <Link href="/" className="layout-topbar-logo" aria-label="PrimeReact logo">
                        Logo
                    </Link>
                    <Link href="/" className="layout-topbar-icon" aria-label="PrimeReact icon">
                        Icon
                    </Link>
                </div>

                <ul className="topbar-items">
                    <li>
                        <div id="docsearch"></div>
                    </li>
                    <li>
                        <a href="https://github.com/primefaces/primereact" target="_blank" rel="noopener noreferrer" className="topbar-item" aria-label="PrimeReact GitHub">
                            <i className="pi pi-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://discord.gg/gzKFYnpmCY" target="_blank" rel="noopener noreferrer" className="topbar-item" aria-label="Join PrimeReact Discord">
                            <i className="pi pi-discord"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/orgs/primefaces/discussions" target="_blank" rel="noopener noreferrer" className="topbar-item" aria-label="PrimeReact Discussions">
                            <i className="pi pi-comments"></i>
                        </a>
                    </li>
                    <li>
                        <button type="button" className="topbar-item" onClick={toggleDarkMode} aria-label="Toggle Dark Mode">
                            <i className={cn('pi', { 'pi-moon': app.isDarkTheme, 'pi-sun': !app.isDarkTheme })}></i>
                        </button>
                    </li>
                    <li>
                        <StyleClass
                            as="button"
                            type="button"
                            className="topbar-item config-item"
                            aria-label="App Configurator"
                            selector="@next"
                            enterFromClassName="hidden"
                            enterActiveClassName="animate-scalein"
                            leaveToClassName="hidden"
                            leaveActiveClassName="animate-fadeout"
                            hideOnOutsideClick
                        >
                            <i className="pi pi-palette"></i>
                        </StyleClass>

                        <AppConfigurator />
                    </li>
                    <li>
                        <button type="button" className="topbar-item relative group overflow-hidden !border-transparent" onClick={toggleDesigner} aria-label="Toggle Designer">
                            <span
                                style={{
                                    animationDuration: '2s',
                                    background: 'conic-gradient(from 90deg, #f97316, #f59e0b, #eab308, #84cc16, #22c55e, #10b981, #14b8a6, #06b6d4, #0ea5e9, #3b82f6, #6366f1, #8b5cf6, #a855f7, #d946ef, #ec4899, #f43f5e)'
                                }}
                                className="absolute -top-5 -left-5 w-20 h-20 animate-spin"
                            ></span>
                            <span style={{ inset: '1px', borderRadius: '4px' }} className="absolute z-2 bg-surface-0 dark:bg-surface-900 transition-all"></span>
                            <i className="pi pi-cog z-10"></i>
                        </button>
                    </li>
                    <li>
                        <StyleClass
                            as="button"
                            type="button"
                            style={{ maxWidth: '8rem' }}
                            className="topbar-item version-item"
                            selector="@next"
                            enterFromClassName="hidden"
                            enterActiveClassName="animate-scalein"
                            leaveToClassName="hidden"
                            leaveActiveClassName="animate-fadeout"
                            hideOnOutsideClick
                        >
                            <span className="version-text">{app.config.versions?.[0].name}</span>
                            <span className="version-icon pi pi-angle-down"></span>
                        </StyleClass>

                        <div className="versions-panel hidden">
                            <ul>
                                {app.config.versions?.map((version) => (
                                    <li key={version.name} role="none">
                                        <a href={version.url}>
                                            <span>PrimeReact {version.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                    {showMenuButton && (
                        <li className="menu-button">
                            <button type="button" className="topbar-item menu-button" onClick={onMenuButtonClick} aria-haspopup aria-label="Menu">
                                <i className="pi pi-bars"></i>
                            </button>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}
