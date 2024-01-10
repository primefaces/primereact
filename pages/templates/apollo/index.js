import React from 'react';
import TemplateYoutube from '@/components/templates/TemplateYoutube';
import TemplateFeatures from '@/components/templates/TemplateFeatures';
import TemplateConfiguration from '@/components/templates/TemplateConfiguration';
import TemplateRelated from '@/components/templates/TemplateRelated';
import TemplateFeaturesAnimation from '@/components/templates/templateFeaturesAnimation';
import TemplateSeparator from '@/components/templates/TemplateSeparator';
import TemplateHero from '@/components/templates/templateHero/TemplateHero';
import ApolloLogo from './ApolloLogo';

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

const apolloFeatures2Data = [
    {
        title: 'Fully Responsive',
        description: 'Apollo is crafted to provide optimal viewing and interaction experience for a wide range of devices.',
        src: '/images/templates/apollo/apollo-features2-responsive.png'
    },
    {
        title: 'Lifetime Support',
        description: 'Apollo has a dedicated forum where lifetime support is delivered by engineers at PrimeTek in a timely manner.',
        src: '/images/templates/apollo/apollo-features2-lifetime.png'
    },
    {
        title: 'Top Notch Quality',
        description: 'Superior standards with 100% compatibility for strict mode and linting tools.',
        src: '/images/templates/apollo/apollo-features2-quality.png'
    },
    {
        title: 'Cross Browser Compatible',
        description: 'First class support for Firefox, Safari, Chrome and Edge.',
        src: '/images/templates/apollo/apollo-features2-compatible.png'
    },
    {
        title: 'Customizable Design',
        description: 'Fully customizable with a mixture of Sass and CSS variables.',
        src: '/images/templates/apollo/apollo-features2-customizable.png'
    },
    {
        title: 'Mobile Experience',
        description: 'Touch optimized enhanced mobile experience with responsive design.',
        src: '/images/templates/apollo/apollo-features2-mobile.png'
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
        description: 'Apollo ships with PrimeIcons, PrimeTek’s modern icon library including a wide range of icons for your applications.',
        src: '/images/templates/apollo/features-animation-icons.png'
    },
    {
        id: 4,
        title: 'Figma File',
        description:
            'Apollo uses Figma as the design tool. It will be possible to download the Figma file after your purchase. You can preview the Figma file before the purchase. Note that PrimeReact UI components are excluded from the Apollo Figma file as they are available in PrimeOne for Figma only.',
        src: '/images/templates/apollo/features-animation-figma.png'
    }
];

const apolloFeatures1Data = [
    {
        src: '/images/templates/apollo/apollo-features1-feature1.png',
        title: 'Ready to Use Applications',
        description: 'Mail, File System, Tasks, Calendar, Blog and Chat are the sample applications to get started with ease.'
    },
    {
        src: '/images/templates/apollo/apollo-features1-feature2.png',
        title: 'E-Commerce Pages',
        description: 'Apollo offers E-commerce pages to kickstart your e-commerce project powered by PrimeBlocks.'
    },
    {
        src: '/images/templates/apollo/apollo-features1-feature3.png',
        title: 'Ready to Use Pages',
        description: 'Landing, login, invoice, help, user management and error pages are provided as template pages to get started with building your app.'
    }
];

const animationFeaturesData2 = [
    {
        id: 1,
        title: 'Light / Dark / Dim Modes',
        description: 'Apollo has 3 display modes to choose from; Light, Dim and Dark.',
        src: '/images/templates/apollo/features-animation-darkmode.png'
    },
    {
        id: 2,
        title: 'Component Themes',
        description: 'Apollo offers 24 built-in component themes and creating your own theme is a matter of defining couple of sass variables.',
        src: '/images/templates/apollo/features-animation-component-themes.png'
    },
    {
        id: 3,
        title: '7 Menu Orientations',
        description: 'Static, Overlay, Slim, Slim+, Reveal, Drawer and Horizontal are the available menu layouts depending on your preference.',
        src: '/images/templates/apollo/features-animation-orientations.png',
        type: 'inline-animation',
        inlineFeaturesData: [
            {
                id: 1,
                title: 'Static',
                src: '/images/templates/apollo/Static.png'
            },
            {
                id: 2,
                title: 'Slim',
                src: '/images/templates/apollo/Slim.png'
            },
            {
                id: 3,
                title: 'Reveal',
                src: '/images/templates/apollo/Reveal.png'
            },
            {
                id: 4,
                title: 'Horizontal',
                src: '/images/templates/apollo/Horizontal.png'
            },
            {
                id: 5,
                title: 'Overlay',
                src: '/images/templates/apollo/Overlay.png'
            },
            {
                id: 6,
                title: 'Slim+',
                src: '/images/templates/apollo/Slim+.png'
            },
            {
                id: 7,
                title: 'Drawer',
                src: '/images/templates/apollo/Drawer.png'
            }
        ]
    },
    {
        id: 4,
        title: 'Menu Themes',
        description: 'Stunning theming for the main menu with 3 alternatives; Color Scheme, Primary Color and Transparent.',
        src: '/images/templates/apollo/features-animation-menu-themes.png'
    }
];

const templateHeroData = {
    logo: <ApolloLogo />,
    pattern: '/images/templates/apollo/apollo-hero-pattern.png',
    rectangle: '/images/templates/apollo/apollo-hero-rectangle1.png',
    light: '/images/templates/apollo/apollo-hero-light.png',
    dashboard1: '/images/templates/apollo/apollo-hero-dashboard1.png',
    dashboard2: '/images/templates/apollo/apollo-hero-dashboard2.png',
    description: 'Application template for React based on the popular NextJS framework. with light-dim-dark modes, four menu layouts, various menu themes, sample apps, ready to use template pages and 24 PrimeReact themes.',
    liveHref: 'https://apollo.primereact.org',
    docHref: 'https://apollo.primereact.org/documentation'
};

const ApolloSeparator = () => {
    return (
        <TemplateSeparator
            separatorLogo={
                <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3576 34.2499L19.6471 28.2974L17.2754 34.2499H22.3576Z" fill="var(--surface-900)" />
                    <path d="M27.8454 28.2974L30.5559 34.2499H25.4736L27.8454 28.2974Z" fill="var(--surface-900)" />
                    <path d="M24.0043 10.25L12.001 34.187H16.0501L24.0048 17.1962L31.7995 34.187H36.009L24.0043 10.25Z" fill="var(--surface-900)" />
                </svg>
            }
        />
    );
};

const ApolloPage = () => {
    const featuresAnimationTitle = (
        <h2>
            Features that the
            <br />
            Apollo template gives you
        </h2>
    );

    return (
        <div className="apollo template">
            <TemplateHero {...templateHeroData} />
            <ApolloSeparator />
            <div hidden={1}>
                <TemplateYoutube imgSrc={'/images/templates/apollo/apollo-youtube-screen.png'} />
                <ApolloSeparator />
            </div>
            <TemplateFeaturesAnimation featuresData={animationFeaturesData2} title={featuresAnimationTitle} />
            <ApolloSeparator />
            <TemplateFeatures featuresData={apolloFeatures1Data} displayType="horizontal" />
            <ApolloSeparator />
            <TemplateConfiguration title="Apollo with Next.JS" description="Apollo is powered by Next.JS to get started in no time following the best practices like service based component interaction modular design and strict mode support" />
            <ApolloSeparator />
            <TemplateFeaturesAnimation featuresData={animationFeaturesData1} />
            <ApolloSeparator />
            <TemplateFeatures featuresData={apolloFeatures2Data} displayType="vertical" />
            <ApolloSeparator />
            <TemplateRelated relatedData={apolloRelatedData} />
        </div>
    );
};

export default ApolloPage;
