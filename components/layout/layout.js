import { useEffect, useRef, useState } from 'react';
import { classNames } from '../lib/utils/ClassNames';
import Topbar from './topbar';
import News from './news';
import Menu from './menu';
import Config from './config';
import Footer from './footer';
import Analytics from './analytics';
import Head from 'next/head';
import AppContentContext from './appcontentcontext';
import PrimeReact from '../lib/api/PrimeReact';
import getConfig from 'next/config';

export default function Layout(props) {
    const [inputStyle, setInputStyle] = useState('outlined');
    const [ripple, setRipple] = useState(false);
    const [sidebarActive, setSidebarActive] = useState(false);
    const [newsActive, setNewsActive] = useState(false);
    const mounted = useRef(false);
    const storageKey = 'primereact';
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    const wrapperClassName = classNames('layout-wrapper', {
        'layout-news-active': newsActive,
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
    }
    const onMenuItemClick = () => {
        setSidebarActive(false);
    }
    const onMaskClick = () => {
        setSidebarActive(false);
    }
    const onThemeChange = (event) => {
        if (event.theme.startsWith('md')) {
            setRipple(true);
        }
        props.onThemeChange(event.theme, event.dark);
    }
    const onInputStyleChange = (value) => {
        setInputStyle(value);
    }
    const onRippleChange = (value) => {
        setRipple(value);
    }
    const onNewsHide = () => {
        setNewsActive(false);
    }
    const saveSettings = () => {
        const now = new Date();
        const settings = {newsActive};
        const item = {
            settings,
            expiry: now.getTime() + 604800000
        }
        localStorage.setItem(storageKey, JSON.stringify(item));
    }
    const restoreSettings = () => {
        const itemString = localStorage.getItem(storageKey);
        if (itemString) {
            const item = JSON.parse(itemString);
            if (!isStorageExpired()) {
                setNewsActive(item.settings.newsActive);
            }
        }
    }
    const isStorageExpired = () => {
        const itemString = localStorage.getItem(storageKey);
        if (!itemString) {
            return true;
        }
        const item = JSON.parse(itemString);
        const now = new Date();

        if (now.getTime() > item.expiry) {
            localStorage.removeItem(storageKey);
            return true;
        }

        return false;
    }

    useEffect(() => {
        if (sidebarActive)
            document.body.classList.add('blocked-scroll');
        else
            document.body.classList.remove('blocked-scroll');
    }, [sidebarActive]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (!mounted.current) {
            restoreSettings();
            mounted.current = true;
        }
        else {
            saveSettings();
        }
    },[newsActive]); // eslint-disable-line react-hooks/exhaustive-deps

    PrimeReact.ripple = true;

    return (
        <div className={wrapperClassName}>
            <Analytics />
            <Head>
                <base href="/"></base>
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
                <meta property="og:url" content="https://www.primefaces.org/primereact"></meta>
                <meta property="og:description" content="The ultimate collection of design-agnostic, flexible and accessible React UI Components." />
                <meta property="og:image" content="https://www.primefaces.org/static/social/primereact-preview.jpg"></meta>
                <meta property="og:ttl" content="604800"></meta>
                <link rel="icon" href={`${contextPath}/images/favicon.ico`} type="image/x-icon"></link>
                <link rel="stylesheet" href={`${contextPath}/styles/flags.css`}></link>
                {/* eslint-disable */}
                <script src={`${contextPath}/scripts/prism/prism.js`} data-manual></script>
                {/* eslint-enable */}
            </Head>
            <News active={newsActive} onHide={onNewsHide}/>
            <Topbar onMenuButtonClick={onMenuButtonClick} onThemeChange={onThemeChange} theme={props.theme} darkTheme={props.dark} versions={[]} />
            <Menu active={sidebarActive} onMenuItemClick={onMenuItemClick} darkTheme={props.dark} />
            <AppContentContext.Provider value={{
                    ripple: ripple,
                    inputStyle: inputStyle,
                    darkTheme: props.dark,
                    onInputStyleChange: onInputStyleChange,
                    onRippleChange: onRippleChange
                }}>
                <div className="layout-content">
                    <div className="layout-content-inner">
                        {props.children}
                        <Footer></Footer>
                    </div>
                </div>
                <Config ripple={ripple} onRippleChange={onRippleChange}
                        inputStyle={inputStyle} onInputStyleChange={onInputStyleChange} onThemeChange={onThemeChange} />
            </AppContentContext.Provider>
            <div className={maskClassName} onClick={onMaskClick}></div>
        </div>
    )
}
