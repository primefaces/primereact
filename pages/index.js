import BlockSection from '@/components/landing/blocksection';
import FeaturesSection from '@/components/landing/featuressection';
import FooterSection from '@/components/landing/footersection';
import HeroSection from '@/components/landing/herosection';
import TemplateSection from '@/components/landing/templatesection';
import ThemeSection from '@/components/landing/themesection';
import UsersSection from '@/components/landing/userssection';
import Topbar from '@/components/layout/topbar';
import { classNames } from '@/components/lib/utils/Utils';
import NewsSection from '@/components/news/newssection';
import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home(props) {
    const [tableTheme, setTableTheme] = useState('lara-light-cyan');
    const [newsActive, setNewsActive] = useState(false);
    const landingClass = classNames('landing', { 'layout-light': !props.dark, 'layout-dark': props.dark, 'layout-news-active': newsActive });

    const onTableThemeChange = (newTheme) => {
        replaceTableTheme(newTheme);
    };

    const replaceTableTheme = (newTheme) => {
        const elementId = 'home-table-link';
        const linkElement = document.getElementById(elementId);
        const tableThemeTokens = linkElement?.getAttribute('href').split('/') || null;
        const currentTableTheme = tableThemeTokens ? tableThemeTokens[tableThemeTokens.length - 2] : null;

        if (currentTableTheme !== newTheme && tableThemeTokens) {
            const newThemeUrl = linkElement.getAttribute('href').replace(currentTableTheme, newTheme);

            const cloneLinkElement = linkElement.cloneNode(true);

            cloneLinkElement.setAttribute('id', elementId + '-clone');
            cloneLinkElement.setAttribute('href', newThemeUrl);
            cloneLinkElement.addEventListener('load', () => {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', elementId);
            });
            linkElement.parentNode?.insertBefore(cloneLinkElement, linkElement.nextSibling);

            setTableTheme(newTheme);
        }
    };

    const onDarkModeToggle = () => {
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
        const newTheme = props.dark ? tableTheme.replace('light', 'dark') : tableTheme.replace('dark', 'light');

        replaceTableTheme(newTheme);
    }, [props.dark]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className={landingClass}>
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
                <meta property="og:image" content="https://primefaces.org/static/social/primereact-preview.jpg"></meta>
                <meta property="og:ttl" content="604800"></meta>
            </Head>
            <NewsSection newsActive={newsActive} setNewsActive={setNewsActive} />
            <Topbar dark={props.dark} showConfigurator={false} showMenuButton={false} darkModeSwitch={onDarkModeToggle} />
            <HeroSection dark={props.dark} />
            <FeaturesSection dark={props.dark} />
            <UsersSection dark={props.dark} />
            <ThemeSection theme={tableTheme} onThemeChange={(t) => onTableThemeChange(t)} dark={props.dark} />
            <BlockSection />
            <TemplateSection dark={props.dark} />
            <FooterSection dark={props.dark} />
        </div>
    );
}

Home.getLayout = function getLayout(page) {
    return page;
};
