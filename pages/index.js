import Head from 'next/head';
import Analytics from '../components/layout/analytics';
import getConfig from 'next/config';
import HeaderSection from './landing/headersection';
import HeroSection from './landing/herosection';
import GetStartedSection from './landing/getstartedsection';
import ComponentSection from './landing/componentsection';
import ThemeSection from './landing/themesection';
import BlockSection from './landing/blocksection';
import DesignerSection from './landing/designersection';
import TemplateSection from './landing/templatesection';
import UsersSection from './landing/userssection';
import FeaturesSection from './landing/featuressection';
import FooterSection from './landing/footersection';
import { classNames } from '../components/lib/utils/ClassNames';
import { useState } from 'react';

export default function Home() {
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    const [mainTheme, setMainTheme] = useState('lara-dark-indigo');
    const [tableTheme, setTableTheme] = useState('lara-dark-indigo');
    const [dark, setDark] = useState(true);
    const rootClassName = classNames('landing', {'landing-light': !dark, 'landing-dark': dark});
    const onColorSchemeChange = () => {
        if (dark) {
            setDark(false);
            setMainTheme('lara-light-indigo');
            setTableTheme(tableTheme.replace('dark', 'light'));
        }
        else {
            setDark(true);
            setMainTheme('lara-dark-indigo');
            setTableTheme(tableTheme.replace('light', 'dark'));
        }
    }

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
                <link href={`${contextPath}/themes/${mainTheme}/theme.css`} rel="stylesheet"></link>
                <link rel="stylesheet" href={`${contextPath}/styles/landing/themes/${tableTheme}/theme.css`}></link>
                <link rel="stylesheet" href={`${contextPath}/styles/flags.css`}></link>
                <script src={`${contextPath}/scripts/prism/prism.js`} data-manual></script>
            </Head>
            <div className="landing-intro">
                <HeaderSection dark={dark} onToggleColorScheme={onColorSchemeChange} />
                <HeroSection />
            </div>
            <ComponentSection />
            <ThemeSection theme={tableTheme} onThemeChange={(t) => setTableTheme(t)} dark={dark} />
            <BlockSection />
            <DesignerSection />
            <TemplateSection dark={dark} />
            <UsersSection dark={dark}/>
            <FeaturesSection />
            <GetStartedSection />
            <FooterSection dark={dark} />
        </div>
    );
}

Home.getLayout = function getLayout(page) {
    return page;
}