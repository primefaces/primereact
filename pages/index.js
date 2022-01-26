import Head from 'next/head';
import Analytics from '../components/layout/analytics';
import getConfig from 'next/config';
import HeaderSection from './landing/headersection';
import HeroSection from './landing/herosection';
import ComponentSection from './landing/componentsection';
import ThemeSection from './landing/themesection';
import DesignerSection from './landing/designersection';
import UsersSection from './landing/userssection';
import { useState } from 'react';

export default function Home() {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const [theme, setTheme] = useState('lara-dark-indigo');

    return (
        <div className="landing">
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
                <link href={`${contextPath}/themes/lara-dark-indigo/theme.css`} rel="stylesheet"></link>
                <link rel="stylesheet" href={`${contextPath}/styles/landing/themes/${theme}/theme.css`}></link>
                <link rel="stylesheet" href={`${contextPath}/styles/flags.css`}></link>
                <script src={`${contextPath}/scripts/prism/prism.js`} data-manual></script>
            </Head>
            <HeaderSection />
            {false && <HeroSection />}
            {false &&<ComponentSection />}
            {false &&<ThemeSection theme={theme} onThemeChange={(t) => setTheme(t)}/>}
            {false && <DesignerSection />}
            {false && <UsersSection />}
        </div>
    );
}

Home.getLayout = function getLayout(page) {
    return page;
}