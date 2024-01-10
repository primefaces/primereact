import React from 'react';
import TemplateYoutube from '@/components/templates/TemplateYoutube';
import TemplateFeatures from '@/components/templates/TemplateFeatures';
import TemplateConfiguration from '@/components/templates/TemplateConfiguration';
import TemplateRelated from '@/components/templates/TemplateRelated';
import TemplateFeaturesAnimation from '@/components/templates/templateFeaturesAnimation';
import TemplateSeparator from '@/components/templates/TemplateSeparator';
import TemplateHero from '@/components/templates/templateHero/TemplateHero';
import FreyaLogo from './FreyaLogo';

const apolloFeatures2Data = [
    {
        title: 'Fully Responsive',
        description: 'Freya is crafted to provide optimal viewing and interaction experience for a wide range of devices.',
        src: '/images/templates/freya/freya-features2-responsive.png'
    },
    {
        title: 'Cross Browser Compatible',
        description: 'First class support for Firefox, Safari, Chrome and Edge.',
        src: '/images/templates/apollo/apollo-features2-compatible.png'
    },
    {
        title: 'Lifetime Support',
        description: 'Freya has a dedicated forum where lifetime support is delivered by engineers at PrimeTek in a timely manner.',
        src: '/images/templates/apollo/apollo-features2-lifetime.png'
    },
    {
        title: 'Customizable Design',
        description: 'Fully customizable with a mixture of Sass and CSS variables.',
        src: '/images/templates/apollo/apollo-features2-customizable.png'
    },
    {
        title: 'Ready to Use Pages',
        description: 'Landing, login, invoice, help, user management and error pages are provided as template pages to get started with building your app.',
        src: '/images/templates/freya/freya-features2-ready.png'
    },
    {
        title: 'Mobile Experience',
        description: 'Touch optimized enhanced mobile experience with responsive design.',
        src: '/images/templates/freya/freya-features2-mobile.png'
    }
];

const apolloRelatedData = [
    {
        src: '/images/templates/related-atlantis.png',
        href: ''
    },
    {
        src: '/images/templates/related-avalon.png',
        href: ''
    },
    {
        src: '/images/templates/related-diamond.png',
        href: ''
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
        description: 'Freya ships with PrimeIcons, PrimeTek’s modern icon library including a wide range of icons for your applications.',
        src: '/images/templates/apollo/features-animation-icons.png'
    },
    {
        id: 4,
        title: 'Figma File',
        description:
            'Freya uses Figma as the design tool. It will be possible to download the Figma file after your purchase. You can preview the Figma file before the purchase. Note that PrimeVue UI components are excluded from the Freya Figma file as they are available in PrimeOne for Figma only.',
        src: '/images/templates/apollo/features-animation-figma.png'
    }
];

const animationFeaturesData2 = [
    {
        id: 1,
        title: 'Light and Dark Modes',
        description: 'The stunning dark and light modes will impress your users.',
        src: '/images/templates/freya/features-animation-darkmode.png'
    },
    {
        id: 2,
        title: 'Component Themes',
        description: 'Atlantis offers 16 built-in component themes with dark and light options. You are also free to create you own theme by defining couple SASS variables.',
        src: '/images/templates/freya/features-animation-component-themes.png'
    },
    {
        id: 3,
        title: '7 Menu Orientations',
        description: 'Static, Overlay, Slim, Slim+, Reveal, Drawer and Horizontal are the available menu layouts depending on your preference.',
        src: '/images/templates/freya/features-animation-orientations.png',
        type: 'inline-animation',
        inlineFeaturesData: [
            {
                id: 1,
                title: 'Static',
                src: '/images/templates/freya/Static.png'
            },
            {
                id: 2,
                title: 'Slim',
                src: '/images/templates/freya/Slim.png'
            },
            {
                id: 3,
                title: 'Reveal',
                src: '/images/templates/freya/Reveal.png'
            },
            {
                id: 4,
                title: 'Horizontal',
                src: '/images/templates/freya/Horizontal.png'
            },
            {
                id: 5,
                title: 'Overlay',
                src: '/images/templates/freya/Overlay.png'
            },
            {
                id: 6,
                title: 'Slim+',
                src: '/images/templates/freya/Slim+.png'
            },
            {
                id: 7,
                title: 'Drawer',
                src: '/images/templates/freya/Drawer.png'
            }
        ]
    }
];

const templateHeroData = {
    pattern: '/images/templates/freya/freya-hero-pattern.png',
    rectangle: '/images/templates/freya/freya-hero-rectangle1.png',
    light: '/images/templates/freya/freya-hero-light.png',
    logo: <FreyaLogo />,
    dashboard1: '/images/templates/freya/freya-hero-dashboard1.png',
    dashboard2: '/images/templates/freya/freya-hero-dashboard2.png',
    description: 'Freya is a modern admin template for developers and IT professionals. It comes with a huge collection of reusable UI components and dozens of built-in layouts for various purposes.',
    liveHref: 'https://www.primefaces.org/freya-react/',
    docHref: 'https://www.primefaces.org/freya-react/documentation/'
};

const FreyaSeparator = () => {
    return (
        <TemplateSeparator
            separatorLogo={
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
                    <path d="M14 12H21.1333V16.5881L34.2105 14V20L21.1333 22.5881V24.5881L34.2105 22V28L21.1333 30.5881V36H14V12Z" fill="var(--surface-900)" />
                </svg>
            }
        />
    );
};

const FreyaPage = () => {
    const featuresAnimationTitle = (
        <h2>
            Features that the <br />
            Freya template gives you
        </h2>
    );

    return (
        <div className="freya template">
            <TemplateHero {...templateHeroData} />
            <FreyaSeparator />
            <TemplateYoutube imgSrc={'/images/templates/freya/freya-youtube-screen.png'} />
            <FreyaSeparator />
            <TemplateFeaturesAnimation featuresData={animationFeaturesData2} title={featuresAnimationTitle} />
            <FreyaSeparator />
            <TemplateConfiguration
                title="Vue.js App with No Configuration"
                description="Freya is powered by Angular CLI to get started in no time following the best practices like service based component interaction modular design and strict mode support"
            />
            <FreyaSeparator />
            <TemplateFeatures featuresData={apolloFeatures2Data} displayType="vertical" />
            <FreyaSeparator />
            <TemplateFeaturesAnimation featuresData={animationFeaturesData1} />
            <FreyaSeparator />
            <TemplateRelated relatedData={apolloRelatedData} />
        </div>
    );
};

export default FreyaPage;
