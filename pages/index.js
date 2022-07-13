import Head from 'next/head';
import Analytics from '../components/layout/analytics';
import getConfig from 'next/config';
import NewsSection from '../components/news/newssection';
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
import { useEffect, useState } from 'react';

export default function Home(props) {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const [tableTheme, setTableTheme] = useState('lara-light-indigo');
    const rootClassName = classNames('landing', {'landing-light': !props.dark, 'landing-dark': props.dark, 'landing-news-active': props.newsActive});
    const toggleColorScheme = () => {
        const darkMode = !props.dark;
        const newTheme = darkMode ? 'lara-dark-indigo': 'lara-light-indigo';
        props.onThemeChange(newTheme, darkMode);
    };

    useEffect(() => {
        if (props.dark)
            setTableTheme(tableTheme.replace('light','dark'));
        else
            setTableTheme(tableTheme.replace('dark','light'));
    }, [props.dark]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (props.dark)
            props.onThemeChange('lara-dark-indigo', true);
        else
            props.onThemeChange('lara-light-indigo', false);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
                <link href={`${contextPath}/styles/landing/themes/${tableTheme}/theme.css`} rel="stylesheet"></link>
                <link rel="stylesheet" href={`${contextPath}/styles/flags.css`}></link>
                {/* eslint-disable */}
                <script src={`${contextPath}/scripts/prism/prism.js`} data-manual></script>
                {/* eslint-enable */}
            </Head>
            <div className="landing-intro">
                {props.newsActive && <NewsSection announcement={props.announcement} onClose={props.onNewsClose} />}
                <HeaderSection dark={props.dark} onToggleColorScheme={toggleColorScheme} />
                <HeroSection />
            </div>
            <ComponentSection />
            <ThemeSection theme={tableTheme} onThemeChange={(t) => setTableTheme(t)} dark={props.dark} />
            <BlockSection />
            <DesignerSection dark={props.dark} />
            <TemplateSection dark={props.dark} />
            <UsersSection dark={props.dark} />
            <FeaturesSection dark={props.dark} />
            <FooterSection dark={props.dark} />
        </div>
    );
}

Home.getLayout = function getLayout(page) {
    return page;
}
