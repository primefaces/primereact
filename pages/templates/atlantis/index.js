import React from 'react';
import TemplateYoutube from '@/components/templates/TemplateYoutube';
import TemplateFeatures from '@/components/templates/TemplateFeatures';
import TemplateConfiguration from '@/components/templates/TemplateConfiguration';
import TemplateRelated from '@/components/templates/TemplateRelated';
import TemplateFeaturesAnimation from '@/components/templates/templateFeaturesAnimation';
import TemplateSeparator from '@/components/templates/TemplateSeparator';
import TemplateHero from '@/components/templates/templateHero/TemplateHero';
import AtlantisLogo from './AtlantisLogo';

const apolloFeatures2Data = [
    {
        title: 'Fully Responsive',
        description: 'Atlantis is crafted to provide optimal viewing and interaction experience for a wide range of devices.',
        src: '/images/templates/atlantis/atlantis-features2-responsive.png'
    },
    {
        title: 'Cross Browser Compatible',
        description: 'First class support for Firefox, Safari, Chrome and Edge.',
        src: '/images/templates/apollo/apollo-features2-compatible.png'
    },
    {
        title: 'Lifetime Support',
        description: 'Atlantis has a dedicated forum where lifetime support is delivered by engineers at PrimeTek in a timely manner.',
        src: '/images/templates/apollo/apollo-features2-lifetime.png'
    },
    {
        title: 'Full SaSS Support',
        description: 'Sass is utilized for both the application and components to provide simplicity and flexibility.',
        src: '/images/templates/apollo/apollo-features2-customizable.png'
    },
    {
        title: 'Ready to Use Pages',
        description: 'Landing, login, invoice, help, user management and error pages are provided as template pages to get started with building your app.',
        src: '/images/templates/atlantis/atlantis-features2-ready.png'
    },
    {
        title: 'Mobile Experience',
        description: 'Touch optimized enhanced mobile experience with responsive design.',
        src: '/images/templates/atlantis/atlantis-features2-mobile.png'
    }
];

const apolloRelatedData = [
    {
        src: '/images/templates/related-atlantis.png',
        href: '/templates/atlantis'
    },
    {
        src: '/images/templates/related-avalon.png',
        href: ''
    },
    {
        src: '/images/templates/related-diamond.png',
        href: '/templates/diamond'
    }
];

const animationFeaturesData1 = [
    {
        id: 1,
        title: 'PrimeFlex CSS Utilities',
        description: 'PrimeFlex is a CSS utility library featuring various helpers such as a grid system, flexbox, spacing, elevation and more.',
        src: '/images/templates/apollo/features-animation-utilities.png'
    },
    {
        id: 2,
        title: 'PrimeBlocks',
        description: 'Fully compatible with PrimeBlocks, choose from the wide range of blocks and customize the way you like. Note that PrimeBlocks is not included in the template and requires a separate purchase.',
        src: '/images/templates/apollo/features-animation-blocks.png'
    },
    {
        id: 3,
        title: 'PrimeIcons',
        description: 'Atlantis ships with PrimeIcons, PrimeTek’s modern icon library including a wide range of icons for your applications.',
        src: '/images/templates/apollo/features-animation-icons.png'
    },
    {
        id: 4,
        title: 'Figma File',
        description:
            'Atlantis uses Figma as the design tool. It will be possible to download the Figma file after your purchase. You can preview the Figma file before the purchase. Note that PrimeVue UI components are excluded from the Atlantis Figma file as they are available in PrimeOne for Figma only.',
        src: '/images/templates/apollo/features-animation-figma.png'
    }
];

const animationFeaturesData2 = [
    {
        id: 1,
        title: 'Light and Dark Modes',
        description: 'The stunning dark and light modes will impress your users.',
        src: '/images/templates/atlantis/features-animation-darkmode.png'
    },
    {
        id: 2,
        title: 'Component Themes',
        description: 'Atlantis offers 16 built-in component themes with dark and light options. You are also free to create you own theme by defining couple SASS variables.',
        src: '/images/templates/atlantis/features-animation-component-themes.png'
    },
    {
        id: 3,
        title: '7 Menu Orientations',
        description: 'Static, Overlay, Slim, Slim+, Reveal, Drawer and Horizontal are the available menu layouts depending on your preference.',
        src: '/images/templates/atlantis/features-animation-orientations.png',
        type: 'inline-animation',
        inlineFeaturesData: [
            {
                id: 1,
                title: 'Static',
                src: '/images/templates/atlantis/Static.png'
            },
            {
                id: 2,
                title: 'Slim',
                src: '/images/templates/atlantis/Slim.png'
            },
            {
                id: 3,
                title: 'Reveal',
                src: '/images/templates/atlantis/Reveal.png'
            },
            {
                id: 4,
                title: 'Horizontal',
                src: '/images/templates/atlantis/Horizontal.png'
            },
            {
                id: 5,
                title: 'Overlay',
                src: '/images/templates/atlantis/Overlay.png'
            },
            {
                id: 6,
                title: 'Slim+',
                src: '/images/templates/atlantis/Slim+.png'
            },
            {
                id: 7,
                title: 'Drawer',
                src: '/images/templates/atlantis/Drawer.png'
            }
        ]
    }
];

const templateHeroData = {
    logo: <AtlantisLogo />,
    pattern: '/images/templates/atlantis/atlantis-hero-pattern.png',
    rectangle: '/images/templates/atlantis/atlantis-hero-rectangle1.png',
    light: '/images/templates/atlantis/atlantis-hero-light.png',
    dashboard1: '/images/templates/atlantis/atlantis-hero-dashboard1.png',
    dashboard2: '/images/templates/atlantis/atlantis-hero-dashboard2.png',
    description: 'Atlantis is a beautiful React.js admin template with a modern look and feel optimized for creating React apps.',
    liveHref: 'https://www.primefaces.org/atlantis-react/',
    docHref: 'https://www.primefaces.org/atlantis-react/documentation/'
};

const AtlantisSeperator = () => {
    return (
        <TemplateSeparator
            separatorLogo={
                <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.736 16.7144C18.5426 24.1391 29.4206 24.1338 30.2244 16.7144C27.4389 16.4579 25.0833 14.6946 23.9802 12.25C22.8772 14.6946 20.5216 16.4579 17.736 16.7144ZM23.2804 23.6609C23.0374 26.3486 20.8981 28.6944 18.2461 29.186C14.6619 29.9314 11.1098 27.2517 10.792 23.6609C13.5776 23.4044 15.9332 21.6411 17.0362 19.1965C18.1312 21.6598 20.591 23.4338 23.2804 23.6609ZM30.2244 30.6073C29.904 33.7706 27.2252 36.25 23.9802 36.25C20.7353 36.25 18.0565 33.7706 17.736 30.6073C20.4255 30.3802 22.8852 28.6062 23.9802 26.1429C25.0752 28.6062 27.535 30.3802 30.2244 30.6073ZM37.1683 23.6609C36.8478 27.0219 33.7737 29.6108 30.3525 29.2768C27.436 29.0551 24.9362 26.5757 24.6798 23.6609C27.3693 23.4338 29.829 21.6598 30.924 19.1965C32.0271 21.6411 34.3827 23.4044 37.1683 23.6609Z"
                        fill="var(--surface-900)"
                    />
                </svg>
            }
        />
    );
};

const AtlantisPage = () => {
    const featuresAnimationTitle = (
        <h2>
            Features that the <br />
            Atlantis template gives you
        </h2>
    );

    return (
        <div className="atlantis template">
            <TemplateHero {...templateHeroData} />
            <AtlantisSeperator />
            <TemplateYoutube imgSrc={'/images/templates/atlantis/atlantis-youtube-screen.png'} />
            <AtlantisSeperator />
            <TemplateFeaturesAnimation featuresData={animationFeaturesData2} title={featuresAnimationTitle} />
            <AtlantisSeperator />
            <TemplateConfiguration
                title="Vue.js App with No Configuration"
                description="Atlantis is powered by Angular CLI to get started in no time following the best practices like service based component interaction modular design and strict mode support"
            />
            <AtlantisSeperator />
            <TemplateFeaturesAnimation featuresData={animationFeaturesData1} />
            <AtlantisSeperator />
            <TemplateFeatures featuresData={apolloFeatures2Data} displayType="vertical" />
            <AtlantisSeperator />
            <TemplateRelated relatedData={apolloRelatedData} />
        </div>
    );
};

export default AtlantisPage;
