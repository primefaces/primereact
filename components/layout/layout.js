import Config from '@/components/layout/config';
import Footer from '@/components/layout/footer';
import Menu from '@/components/layout/menu';
import Topbar from '@/components/layout/topbar';
import { DomHandler, classNames } from '@/components/lib/utils/Utils';
import NewsSection from '@/components/news/newssection';
import { useAppConfig } from '@/components/context/AppConfigContext';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Layout({ children }) {
    const { darkMode, inputStyle, newsActive, ripple, theme, changeThemeMode } = useAppConfig();

    const [sidebarActive, setSidebarActive] = useState(false);
    const [configActive, setConfigActive] = useState(false);
    const router = useRouter();

    const wrapperClassName = classNames('layout-wrapper', {
        'layout-news-active': newsActive,
        'p-input-filled': inputStyle === 'filled',
        'p-ripple-disabled': ripple === false,
        'layout-dark': darkMode,
        'layout-light': !darkMode
    });

    useEffect(() => {
        if (sidebarActive) {
            DomHandler.blockBodyScroll('blocked-scroll');
        } else {
            DomHandler.unblockBodyScroll('blocked-scroll');
        }
    }, [sidebarActive]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        const handleRouteChangeComplete = () => {
            setSidebarActive(false);
        };

        router.events.on('routeChangeComplete', handleRouteChangeComplete);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChangeComplete);
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className={wrapperClassName} data-p-theme={theme}>
            <Head>
                <title>PrimeReact - React UI Component Library</title>
                <meta charSet="UTF-8" />
                <meta name="description" content="The ultimate collection of design-agnostic, flexible and accessible React UI Components." />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@primereact" />
                <meta name="twitter:title" content="PrimeReact | React UI Component Library" />
                <meta name="twitter:description" content="The ultimate collection of design-agnostic, flexible and accessible React UI Components." />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="PrimeReact | React UI Component Library" />
                <meta property="og:url" content="https://primereact.org" />
                <meta property="og:description" content="The ultimate collection of design-agnostic, flexible and accessible React UI Components." />
                <meta property="og:image" content="https://www.primefaces.org/static/social/primereact-preview.jpg" />
                <meta property="og:ttl" content="604800" />
                <link rel="icon" href="https://primefaces.org/cdn/primereact/images/favicon.ico" type="image/x-icon" />
            </Head>
            <NewsSection />
            <Topbar showConfigurator showMenuButton onMenuButtonClick={() => setSidebarActive(true)} onConfigButtonClick={() => setConfigActive(true)} onDarkSwitchClick={changeThemeMode} />
            <div className={classNames('layout-mask', { 'layout-mask-active': sidebarActive })} onClick={() => setSidebarActive(false)} />
            <Config active={configActive} onHide={() => setConfigActive(false)} />
            <div className="layout-content">
                <Menu active={sidebarActive} />
                <div className="layout-content-slot">{children}</div>
            </div>
            <Footer />
        </div>
    );
}
