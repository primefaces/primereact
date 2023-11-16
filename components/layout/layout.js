import PrimeReact from '@/components/lib/api/Api';
import { PrimeReactContext } from '@/components/lib/api/PrimeReactContext';
import { classNames } from '@/components/lib/utils/Utils';
import NewsSection from '@/components/news/newssection';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import AppContentContext from './appcontentcontext';
import Config from './config';
import Footer from './footer';
import Menu from './menu';
import Topbar from './topbar';

export default function Layout(props) {
    const [ripple, setRipple] = useState(true);
    const [inputStyle, setInputStyle] = useState('outlined');
    const [disabled, setDisabled] = useState(false);
    const [sidebarActive, setSidebarActive] = useState(false);
    const [configActive, setConfigActive] = useState(false);
    const router = useRouter();
    const context = useContext(PrimeReactContext);

    const wrapperClassName = classNames('layout-wrapper', {
        'layout-news-active': props.newsActive,
        'p-input-filled': (context && context.inputStyle === 'filled') || PrimeReact.inputStyle === 'filled',
        'p-ripple-disabled': (context && context.ripple === false) || PrimeReact.ripple === false,
        'layout-dark': props.dark,
        'layout-light': !props.dark
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
        if (context) {
            context.setInputStyle(value);
        }

        setInputStyle(value);
    };

    const onRippleChange = (value) => {
        if (context) {
            context.setRipple(value);
        }

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

    const toggleColorScheme = () => {
        let newTheme;
        let currentTheme = props.theme;

        if (props.dark) {
            newTheme = currentTheme.replace('dark', 'light');
        } else {
            if (currentTheme.includes('light') && currentTheme !== 'fluent-light') newTheme = currentTheme.replace('light', 'dark');
            else newTheme = 'lara-dark-indigo'; //fallback
        }

        props.onThemeChange(newTheme, !props.dark);
    };

    useEffect(() => {
        if (context) {
            context.setRipple(ripple);
            context.setInputStyle(inputStyle);
        }

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

    PrimeReact.ripple = ripple;

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
            <Topbar dark={props.dark} showConfigurator={true} showMenuButton={true} onMenuButtonClick={onMenuButtonClick} onConfigButtonClick={onConfigButtonClick} darkModeSwitch={toggleColorScheme} />

            <AppContentContext.Provider
                value={{
                    ripple: ripple,
                    inputStyle: inputStyle,
                    disabled: disabled,
                    darkTheme: props.dark,
                    setDisabled: setDisabled,
                    onInputStyleChange: onInputStyleChange,
                    onRippleChange: onRippleChange,
                    onHideOverlaysOnDocumentScrolling: onHideOverlaysOnDocumentScrolling
                }}
            >
                <div className={classNames('layout-mask', { 'layout-mask-active': sidebarActive })} onClick={onMaskClick}></div>
                <Config
                    ripple={ripple}
                    inputStyle={inputStyle}
                    disabled={disabled}
                    onRippleChange={onRippleChange}
                    onHideOverlaysOnDocumentScrolling={onHideOverlaysOnDocumentScrolling}
                    onInputStyleChange={onInputStyleChange}
                    onThemeChange={onThemeChange}
                    active={configActive}
                    onHide={onConfigHide}
                    dark={props.dark}
                    theme={props.theme}
                    darkModeSwitch={toggleColorScheme}
                />
                <div className="layout-content">
                    <Menu active={sidebarActive} darkTheme={props.dark} />
                    <div className="layout-content-slot">{props.children}</div>
                </div>
                <Footer></Footer>
            </AppContentContext.Provider>
        </div>
    );
}
