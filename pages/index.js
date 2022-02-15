import Head from 'next/head';
import Analytics from '../components/layout/analytics';
import getConfig from 'next/config';
import HeaderSection from './landing/headersection';
import HeroSection from './landing/herosection';
import ComponentSection from './landing/componentsection';
import ThemeSection from './landing/themesection';
import BlockSection from './landing/blocksection';
import DesignerSection from './landing/designersection';
import TemplateSection from './landing/templatesection';
import UsersSection from './landing/userssection';
import FeaturesSection from './landing/featuressection';
import FooterSection from './landing/footersection';
import { classNames } from '../components/lib/utils/ClassNames';
import { useEffect, useRef, useState } from 'react';

export default function Home(props) {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const [prevTheme, setPrevTheme] = useState(null);
    const defaultTheme = props.dark ? 'lara-dark-indigo' : 'lara-light-indigo';
    const [currentTheme, setCurrentTheme] = useState(defaultTheme);
    const [tableTheme, setTableTheme] = useState(defaultTheme);
    const timer = useRef(null);
    const dark = props.dark;
    const mounted = useRef(false);
    const rootClassName = classNames('landing', {'landing-light': !dark, 'landing-dark': dark});

    useEffect(() => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(() => {
            if (prevTheme) {
                setPrevTheme(null);
            }
        }, 1000);
    }, [currentTheme]);

    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
        } 
        else {
            if (dark) {
                setPrevTheme('lara-light-indigo');
                setCurrentTheme('lara-dark-indigo');
                setTableTheme(tableTheme.replace('light', 'dark'));
            }
            else {
                setPrevTheme('lara-dark-indigo');
                setCurrentTheme('lara-light-indigo');
                setTableTheme(tableTheme.replace('dark', 'light'));
            }
        }
    }, [dark]);
    
    return (
        <div className={rootClassName}>
            <Analytics />
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
                <meta property="og:url" content="https://www.primefaces.org/primereact"></meta>
                <meta property="og:description" content="The ultimate collection of design-agnostic, flexible and accessible React UI Components." />
                <meta property="og:image" content="https://www.primefaces.org/primereact/static/social/primereact-preview.jpg"></meta>
                <meta property="og:ttl" content="604800"></meta>
                <link href={`${contextPath}/images/favicon.ico`} rel="icon" type="image/x-icon"></link>
                {prevTheme && <link href={`${contextPath}/themes/${prevTheme}/theme.css`} rel="stylesheet"></link>}
                <link href={`${contextPath}/themes/${currentTheme}/theme.css`} rel="stylesheet"></link>
                <link href={`${contextPath}/styles/landing/themes/${tableTheme}/theme.css`} rel="stylesheet"></link>
                <link rel="stylesheet" href={`${contextPath}/styles/flags.css`}></link>
                <script src={`${contextPath}/scripts/prism/prism.js`} data-manual></script>
            </Head>
            <div className="landing-intro">
                <HeaderSection dark={dark} onToggleColorScheme={props.onColorSchemeChange} />
                <HeroSection />
            </div>
            <ComponentSection />
            <ThemeSection theme={tableTheme} onThemeChange={(t) => setTableTheme(t)} dark={dark} />
            <BlockSection />
            <DesignerSection dark={dark} />
            <TemplateSection dark={dark} />
            <UsersSection dark={dark} />
            <FeaturesSection dark={dark} />
            <FooterSection dark={dark} />
        </div>
    );
}

Home.getLayout = function getLayout(page) {
    return page;
}