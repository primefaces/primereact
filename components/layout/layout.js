import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { classNames } from '../lib/utils/ClassNames';
import NewsSection from '../news/newssection';
import AppContentContext from './appcontentcontext';
import Config from './config';
import Footer from './footer';
import Menu from './menu';
import Topbar from './topbar';
import { PrimeReactContext } from '../lib/api/context';

export default function Layout(props) {
    const [sidebarActive, setSidebarActive] = useState(false);
    const [configActive, setConfigActive] = useState(false);
    const router = useRouter();
    const { ripple, setRipple, inputStyle, setInputStyle, setPt } = useContext(PrimeReactContext);

    const wrapperClassName = classNames('layout-wrapper', {
        'layout-news-active': props.newsActive,
        'p-input-filled': inputStyle === 'filled',
        'p-ripple-disabled': ripple === false,
        'layout-wrapper-dark': props.dark,
        'layout-wrapper-light': !props.dark
    });
    const maskClassName = classNames('layout-mask', {
        'layout-mask-active': sidebarActive
    });

    const onMenuButtonClick = () => {
        setSidebarActive(true);
    };

    const onMaskClick = () => {
        setSidebarActive(false);
    };

    const onThemeChange = (event) => {
        if (event.theme.startsWith('md')) {
            setRipple(true);
        }

        props.onThemeChange(event.theme, event.dark);
    };

    const onInputStyleChange = (value) => {
        setInputStyle(value);
    };

    const onRippleChange = (value) => {
        setRipple(value);
    };

    const onHideOverlaysOnDocumentScrolling = (value) => {
        setHideOverlaysOnDocumentScrolling(value);
    };

    const onConfigHide = () => {
        setConfigActive(false);
    };

    const onConfigButtonClick = () => {
        setConfigActive(true);
    };

    useEffect(() => {
        setRipple(true);
        setInputStyle('outlined');
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (sidebarActive) document.body.classList.add('blocked-scroll');
        else document.body.classList.remove('blocked-scroll');
    }, [sidebarActive]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        const handleRouteChange = (url, { shallow }) => {
            setSidebarActive(false);
        };

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div className={wrapperClassName}>
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
                <meta property="og:type" content="website"></meta>
                <meta property="og:title" content="PrimeReact | React UI Component Library"></meta>
                <meta property="og:url" content="https://primereact.org"></meta>
                <meta property="og:description" content="The ultimate collection of design-agnostic, flexible and accessible React UI Components." />
                <meta property="og:image" content="https://www.primefaces.org/static/social/primereact-preview.jpg"></meta>
                <meta property="og:ttl" content="604800"></meta>
                <link rel="icon" href="https://primefaces.org/cdn/primereact/images/favicon.ico" type="image/x-icon"></link>
            </Head>
            {props.newsActive && <NewsSection announcement={props.announcement} onClose={props.onNewsClose} />}
            <Topbar onMenuButtonClick={onMenuButtonClick} onConfigButtonClick={onConfigButtonClick} />
            <Menu active={sidebarActive} darkTheme={props.dark} />
            <AppContentContext.Provider
                value={{
                    ripple: ripple,
                    inputStyle: inputStyle,
                    darkTheme: props.dark,
                    onInputStyleChange: onInputStyleChange,
                    onRippleChange: onRippleChange,
                    onHideOverlaysOnDocumentScrolling: onHideOverlaysOnDocumentScrolling
                }}
            >
                <div className="layout-content">
                    <div className="layout-content-inner">
                        {props.children}
                        <Footer></Footer>
                    </div>
                </div>
                <Config
                    ripple={ripple}
                    inputStyle={inputStyle}
                    onRippleChange={onRippleChange}
                    onHideOverlaysOnDocumentScrolling={onHideOverlaysOnDocumentScrolling}
                    onInputStyleChange={onInputStyleChange}
                    onThemeChange={onThemeChange}
                    active={configActive}
                    onHide={onConfigHide}
                />
            </AppContentContext.Provider>
            <div className={maskClassName} onClick={onMaskClick}></div>
        </div>
    );
}
