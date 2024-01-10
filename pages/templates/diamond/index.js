import React from 'react';
import TemplateYoutube from '@/components/templates/TemplateYoutube';
import TemplateFeatures from '@/components/templates/TemplateFeatures';
import TemplateConfiguration from '@/components/templates/TemplateConfiguration';
import TemplateRelated from '@/components/templates/TemplateRelated';
import TemplateFeaturesAnimation from '@/components/templates/templateFeaturesAnimation';
import TemplateSeparator from '@/components/templates/TemplateSeparator';
import TemplateHero from '@/components/templates/templateHero/TemplateHero';
import DiamondLogo from './DiamondLogo';

const apolloFeatures2Data = [
    {
        title: 'Fully Responsive',
        description: 'Diamond is crafted to provide optimal viewing and interaction experience for a wide range of devices.',
        src: '/images/templates/diamond/diamond-features2-responsive.png'
    },
    {
        title: 'Cross Browser Compatible',
        description: 'First class support for Firefox, Safari, Chrome and Edge.',
        src: '/images/templates/apollo/apollo-features2-compatible.png'
    },
    {
        title: 'Lifetime Support',
        description: 'Diamond has a dedicated forum where lifetime support is delivered by engineers at PrimeTek in a timely manner.',
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
        src: '/images/templates/diamond/diamond-features2-ready.png'
    },
    {
        title: 'Mobile Experience',
        description: 'Touch optimized enhanced mobile experience with responsive design.',
        src: '/images/templates/diamond/diamond-features2-mobile.png'
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
        description: 'Diamond ships with PrimeIcons, PrimeTek’s modern icon library including a wide range of icons for your applications.',
        src: '/images/templates/apollo/features-animation-icons.png'
    },
    {
        id: 4,
        title: 'Figma File',
        description:
            'Diamond uses Figma as the design tool. It will be possible to download the Figma file after your purchase. You can preview the Figma file before the purchase. Note that PrimeVue UI components are excluded from the Diamond Figma file as they are available in PrimeOne for Figma only.',
        src: '/images/templates/apollo/features-animation-figma.png'
    }
];

const animationFeaturesData2 = [
    {
        id: 1,
        title: 'Light and Dark Modes',
        description: 'The stunning dark and light modes will impress your users.',
        src: '/images/templates/diamond/features-animation-darkmode.png'
    },
    {
        id: 2,
        title: 'Component Themes',
        description: 'Verona offers 20 built-in component themes with dark and light options. You are also free to create you own theme by defining couple SASS variables.',
        src: '/images/templates/diamond/features-animation-component-themes.png'
    },
    {
        id: 3,
        title: '7 Menu Orientations',
        description: 'Choose from Static and Slim menu orientations.',
        src: '/images/templates/diamond/features-animation-orientations.png',
        type: 'inline-animation',
        inlineFeaturesData: [
            {
                id: 1,
                title: 'Static',
                src: '/images/templates/diamond/Static.png'
            },
            {
                id: 2,
                title: 'Slim',
                src: '/images/templates/diamond/Slim.png'
            },
            {
                id: 3,
                title: 'Horizontal',
                src: '/images/templates/diamond/Horizontal.png'
            },
            {
                id: 4,
                title: 'Drawer',
                src: '/images/templates/diamond/Drawer.png'
            },
            {
                id: 5,
                title: 'Overlay',
                src: '/images/templates/diamond/Overlay.png'
            },
            {
                id: 6,
                title: 'Compact',
                src: '/images/templates/diamond/Compact.png'
            },
            {
                id: 7,
                title: 'Reveal',
                src: '/images/templates/diamond/Reveal.png'
            }
        ]
    },
    {
        id: 4,
        title: 'Layout Themes',
        description: 'Verona offers 23 special layout themes featuring gorgeous gradients.',
        src: '/images/templates/diamond/features-animation-orientations.png'
    }
];

const DiamondSeperator = () => {
    return (
        <TemplateSeparator
            separatorLogo={
                <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1004_106792)">
                        <path
                            d="M37.7352 20.6899C37.7352 20.6516 37.7352 20.6516 37.773 20.6133C37.8109 20.575 37.8109 20.4985 37.8109 20.4602C37.8109 20.3836 37.8109 20.3071 37.773 20.2305L37.7352 20.1922C37.7352 20.154 37.6974 20.154 37.6974 20.1157L32.0217 12.4594C31.9839 12.4211 31.946 12.3829 31.9082 12.3446C31.8703 12.3063 31.8325 12.3063 31.7568 12.268H31.719C31.6812 12.268 31.6055 12.2297 31.5676 12.2297H16.4325C16.3947 12.2297 16.319 12.2297 16.2812 12.268H16.2433C16.2055 12.268 16.1676 12.3063 16.092 12.3446C16.0541 12.3829 16.0163 12.4211 15.9785 12.4594L10.3028 20.1157C10.3028 20.154 10.2649 20.154 10.2649 20.1922L10.2271 20.2305C10.2271 20.2688 10.1893 20.3071 10.1893 20.3071C10.1514 20.4219 10.1514 20.4985 10.1893 20.6133C10.1893 20.6516 10.1893 20.6516 10.2271 20.6899C10.2271 20.7282 10.2649 20.7282 10.2649 20.7665L10.3028 20.8047L23.546 36.1172H23.6217C23.6595 36.1555 23.6595 36.1555 23.6974 36.1938L23.7352 36.2321L23.8109 36.2704H23.8487C23.9244 36.3086 24.0379 36.3086 24.1514 36.2704H24.1893L24.2649 36.2321L24.3028 36.1938C24.3406 36.1555 24.3785 36.1555 24.3785 36.1172L24.4163 36.079L37.6595 20.7665L37.6974 20.7282C37.7352 20.7282 37.7352 20.6899 37.7352 20.6899ZM17.3406 20.9961H30.6217L24.0001 34.4711L17.3406 20.9961ZM24.0001 13.5696L30.2055 19.8477H17.7947L24.0001 13.5696ZM36.1082 19.8477H32.1352V14.4883L36.1082 19.8477ZM31.0001 13.3399V19.0438L25.3622 13.3399H31.0001ZM17.0001 19.0438V13.3399H22.6379L17.0001 19.0438ZM15.8649 14.4883V19.8477H11.892L15.8649 14.4883ZM16.092 20.9961L21.5406 31.9829L12.0055 20.9961H16.092ZM26.4974 31.9829L31.946 20.9961H36.0325L26.4974 31.9829Z"
                            fill="var(--surface-900)"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_1004_106792">
                            <rect width="28" height="24.5" fill="white" transform="translate(10 12)" />
                        </clipPath>
                    </defs>
                </svg>
            }
        />
    );
};

const templateHeroData = {
    logo: <DiamondLogo />,
    pattern: '/images/templates/diamond/diamond-hero-pattern.png',
    dashboard1: '/images/templates/diamond/diamond-hero-dashboard1.png',
    dashboard2: '/images/templates/diamond/diamond-hero-dashboard2.png',
    description: 'Diamond is a beautiful Vue.js admin template with a modern look and feel optimized for creating Vue apps.',
    liveHref: 'https://diamond.primereact.org',
    docHref: 'https://diamond.primereact.org/documentation'
};

const DiamondPage = () => {
    const featuresAnimationTitle = (
        <h2>
            Features that the <br />
            Diamond template gives you
        </h2>
    );

    return (
        <div className="diamond template">
            <TemplateHero {...templateHeroData} />
            <DiamondSeperator />
            <TemplateYoutube imgSrc={'/images/templates/diamond/diamond-youtube-screen.png'} />
            <DiamondSeperator />
            <TemplateFeaturesAnimation featuresData={animationFeaturesData2} title={featuresAnimationTitle} />
            <DiamondSeperator />
            <TemplateConfiguration
                title="Vue.js App with No Configuration"
                description="Diamond is powered by Angular CLI to get started in no time following the best practices like service based component interaction modular design and strict mode support"
            />
            <DiamondSeperator />
            <TemplateFeaturesAnimation featuresData={animationFeaturesData1} />
            <DiamondSeperator />
            <TemplateFeatures featuresData={apolloFeatures2Data} displayType="vertical" />
            <DiamondSeperator />
            <TemplateRelated relatedData={apolloRelatedData} />
        </div>
    );
};

export default DiamondPage;
