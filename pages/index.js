import Head from 'next/head';
import { useEffect, useState } from 'react';
import { classNames } from '../components/lib/utils/Utils';
import NewsSection from '../components/news/newssection';
import BlockSection from './landing/blocksection';
import FeaturesSection from './landing/featuressection';
import FooterSection from './landing/footersection';
import HeroSection from './landing/herosection';
import TemplateSection from './landing/templatesection';
import ThemeSection from './landing/themesection';
import UsersSection from './landing/userssection';
import Topbar from '../components/layout/topbar';

export default function Home(props) {
    const [tableTheme, setTableTheme] = useState('lara-light-indigo');
    const landingClass = classNames('landing', { 'layout-light': !props.dark, 'layout-dark': props.dark, 'layout-news-active': props.newsActive });

    const changeTableTheme = (newTheme) => {
        props.onTableThemeChange(tableTheme, newTheme);
        setTableTheme(newTheme);
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

        changeTableTheme(newTheme);
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
            {props.newsActive && <NewsSection announcement={props.announcement} onClose={props.onNewsClose} />}
            <Topbar dark={props.dark} showConfigurator={false} showMenuButton={false} darkModeSwitch={onDarkModeToggle} />
            <HeroSection />
            <FeaturesSection dark={props.dark} />
            <UsersSection dark={props.dark} />
            <ThemeSection theme={tableTheme} onThemeChange={(t) => changeTableTheme(t)} dark={props.dark} />
            <BlockSection />
            <TemplateSection dark={props.dark} />
            <FooterSection dark={props.dark} />
        </div>
    );
}

Home.getLayout = function getLayout(page) {
    return page;
};
