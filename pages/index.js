import { useAppConfig } from '@/components/context/AppConfigContext';
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

export default function Home() {
    const { darkMode, newsActive, changeThemeMode, } = useAppConfig();
    const landingClass = classNames('landing', { 'layout-light': !darkMode, 'layout-dark': darkMode, 'layout-news-active': newsActive });

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
                <meta property="og:type" content="website" />
                <meta property="og:title" content="PrimeReact | React UI Component Library" />
                <meta property="og:url" content="https://primereact.org" />
                <meta property="og:description" content="The ultimate collection of design-agnostic, flexible and accessible React UI Components." />
                <meta property="og:image" content="https://primefaces.org/static/social/primereact-preview.jpg" />
                <meta property="og:ttl" content="604800" />
            </Head>
            <NewsSection />
            <Topbar onDarkSwitchClick={changeThemeMode} />
            <HeroSection />
            <FeaturesSection />
            <UsersSection />
            <ThemeSection />
            <BlockSection />
            <TemplateSection />
            <FooterSection />
        </div>
    );
}

Home.getLayout = function getLayout(page) {
    return page;
};
