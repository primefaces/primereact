import React from 'react';
import TemplateYoutube from '@/components/templates/TemplateYoutube';
import TemplateFeatures from '@/components/templates/TemplateFeatures';
import TemplateConfiguration from '@/components/templates/TemplateConfiguration';
import TemplateRelated from '@/components/templates/TemplateRelated';
import TemplateFeaturesAnimation from '@/components/templates/templateFeaturesAnimation';
import TemplateSeparator from '@/components/templates/TemplateSeparator';
import TemplateHero from '@/components/templates/templateHero/TemplateHero';
import VeronaLogo from './VeronaLogo';

const apolloFeatures2Data = [
    {
        title: 'Fully Responsive',
        description: 'Verona is crafted to provide optimal viewing and interaction experience for a wide range of devices.',
        src: '/images/templates/verona/verona-features2-responsive.png'
    },
    {
        title: 'Cross Browser Compatible',
        description: 'First class support for Firefox, Safari, Chrome and Edge.',
        src: '/images/templates/apollo/apollo-features2-compatible.png'
    },
    {
        title: 'Lifetime Support',
        description: 'Verona has a dedicated forum where lifetime support is delivered by engineers at PrimeTek in a timely manner.',
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
        src: '/images/templates/verona/verona-features2-ready.png'
    },
    {
        title: 'Mobile Experience',
        description: 'Touch optimized enhanced mobile experience with responsive design.',
        src: '/images/templates/verona/verona-features2-mobile.png'
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
        description: 'Verona ships with PrimeIcons, PrimeTek’s modern icon library including a wide range of icons for your applications.',
        src: '/images/templates/apollo/features-animation-icons.png'
    },
    {
        id: 4,
        title: 'Figma File',
        description:
            'Verona uses Figma as the design tool. It will be possible to download the Figma file after your purchase. You can preview the Figma file before the purchase. Note that PrimeVue UI components are excluded from the Verona Figma file as they are available in PrimeOne for Figma only.',
        src: '/images/templates/apollo/features-animation-figma.png'
    }
];

const animationFeaturesData2 = [
    {
        id: 1,
        title: 'Light and Dark Modes',
        description: 'The stunning dark and light modes will impress your users.',
        src: '/images/templates/verona/features-animation-darkmode.png'
    },
    {
        id: 2,
        title: 'Component Themes',
        description: 'Verona offers 20 built-in component themes with dark and light options. You are also free to create you own theme by defining couple SASS variables.',
        src: '/images/templates/verona/features-animation-component-themes.png'
    },
    {
        id: 3,
        title: '7 Menu Orientations',
        description: 'Choose from Static and Slim menu orientations.',
        src: '/images/templates/verona/features-animation-orientations.png',
        type: 'inline-animation',
        inlineFeaturesData: [
            {
                id: 1,
                title: 'Static',
                src: '/images/templates/verona/Static.png'
            },
            {
                id: 2,
                title: 'Slim',
                src: '/images/templates/verona/Slim.png'
            },
            {
                id: 3,
                title: 'Slim+',
                src: '/images/templates/verona/Slim+.png'
            },
            {
                id: 4,
                title: 'Overlay',
                src: '/images/templates/verona/Overlay.png'
            }
        ]
    },
    {
        id: 4,
        title: 'Layout Themes',
        description: 'Verona offers 23 special layout themes featuring gorgeous gradients.',
        src: '/images/templates/verona/features-animation-orientations.png'
    }
];

const VeronaSeperator = () => {
    return (
        <TemplateSeparator
            separatorLogo={
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
                    <g clipPath="url(#clip0_987_15401)">
                        <path d="M33.5642 18.0857H14.8584V18.2232H33.5642V18.0857Z" fill="var(--surface-900)" fillOpacity="0.5" />
                        <path d="M35.077 21.7993H12.9326V21.9369H35.077V21.7993Z" fill="var(--surface-900)" fillOpacity="0.5" />
                        <path d="M34.9394 25.5129H13.3452V25.6505H34.9394V25.5129Z" fill="var(--surface-900)" />
                        <path d="M33.9768 29.2266H14.4458V29.3641H33.9768V29.2266Z" fill="var(--surface-900)" />
                        <path d="M22.9547 12.4471L22.834 12.375L14.0757 28.5054L14.1964 28.5775L22.9547 12.4471Z" fill="var(--surface-900)" fillOpacity="0.5" />
                        <path d="M26.8757 12.8025L26.7551 12.7302L16.4265 31.7024L16.5214 31.7932L26.8757 12.8025Z" fill="var(--surface-900)" />
                        <path d="M30.1539 14.3382L30.0337 14.2654L19.3041 33.7536L19.4244 33.8264L30.1539 14.3382Z" fill="var(--surface-900)" />
                        <path d="M32.6656 17.4603L32.5459 17.3865L22.8027 34.7793L22.9225 34.8531L32.6656 17.4603Z" fill="var(--surface-900)" />
                        <path d="M34.541 21.3825L34.4209 21.3094L27.2179 34.3463L27.338 34.4193L34.541 21.3825Z" fill="var(--surface-900)" />
                        <path d="M28.4863 25.8294L32.9655 17.778L34.3133 20.6083L28.0059 32.0445L18.5141 14.5333L20.9781 13.2376L27.6071 25.8194L28.0375 26.6363L28.4863 25.8294Z" fill="var(--surface-900)" stroke="var(--surface-900)" />
                        <path
                            d="M28.0018 33.1409L27.9796 33.1001L17.7893 14.2999L21.9377 14.2281L21.9451 14.2421L28.0495 25.5322L32.2144 18.0938L34.252 21.8213L34.2446 21.8347L28.0018 33.1409ZM17.877 14.3524L28.0023 33.0324L34.1927 21.821L32.2141 18.2015L28.0488 25.6402L28.0269 25.5994L21.9079 14.2826L17.877 14.3524Z"
                            fill="var(--surface-900)"
                        />
                        <g filter="url(#filter1_dd_987_15401)">
                            <mask id="path-15-inside-1_987_15401" fill="white">
                                <path d="M36 24C36 30.6274 30.6274 36 24 36C17.3726 36 12 30.6274 12 24C12 17.3726 17.3726 12 24 12C30.6274 12 36 17.3726 36 24ZM13.2 24C13.2 29.9647 18.0353 34.8 24 34.8C29.9647 34.8 34.8 29.9647 34.8 24C34.8 18.0353 29.9647 13.2 24 13.2C18.0353 13.2 13.2 18.0353 13.2 24Z" />
                            </mask>
                            <path
                                d="M36 24C36 30.6274 30.6274 36 24 36C17.3726 36 12 30.6274 12 24C12 17.3726 17.3726 12 24 12C30.6274 12 36 17.3726 36 24ZM13.2 24C13.2 29.9647 18.0353 34.8 24 34.8C29.9647 34.8 34.8 29.9647 34.8 24C34.8 18.0353 29.9647 13.2 24 13.2C18.0353 13.2 13.2 18.0353 13.2 24Z"
                                stroke="var(--surface-900)"
                                strokeWidth="2"
                                mask="url(#path-15-inside-1_987_15401)"
                            />
                        </g>
                    </g>
                </svg>
            }
        />
    );
};

const VeronaPage = () => {
    const featuresAnimationTitle = (
        <h2>
            Features that the <br />
            Verona template gives you
        </h2>
    );

    return (
        <div className="verona template">
            <TemplateHero
                pattern={'/images/templates/verona/verona-hero-pattern.png'}
                rectangle={'/images/templates/verona/verona-hero-rectangle1.png'}
                light={'/images/templates/verona/verona-hero-light.png'}
                logo={<VeronaLogo />}
                dashboard1={'/images/templates/verona/verona-hero-dashboard1.png'}
                dashboard2={'/images/templates/verona/verona-hero-dashboard2.png'}
                liveHref={''}
            />
            <VeronaSeperator />
            <TemplateYoutube imgSrc={'/images/templates/verona/verona-youtube-screen.png'} />
            <VeronaSeperator />
            <TemplateFeaturesAnimation featuresData={animationFeaturesData2} title={featuresAnimationTitle} animationSeconds={4000} />
            <VeronaSeperator />
            <TemplateConfiguration
                title="Vue.js App with No Configuration"
                description="Verona is powered by Angular CLI to get started in no time following the best practices like service based component interaction modular design and strict mode support"
            />
            <VeronaSeperator />
            <TemplateFeaturesAnimation featuresData={animationFeaturesData1} />
            <VeronaSeperator />
            <TemplateFeatures featuresData={apolloFeatures2Data} displayType="vertical" />
            <VeronaSeperator />
            <TemplateRelated relatedData={apolloRelatedData} />
        </div>
    );
};

export default VeronaPage;
