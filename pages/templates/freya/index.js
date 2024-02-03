import React from 'react';
import TemplateYoutube from '@/components/templates/TemplateYoutube';
import TemplateFeatures from '@/components/templates/TemplateFeatures';
import TemplateConfiguration from '@/components/templates/TemplateConfiguration';
import TemplateRelated from '@/components/templates/TemplateRelated';
import TemplateFeaturesAnimation from '@/components/templates/templateFeaturesAnimation';
import TemplateSeparator from '@/components/templates/TemplateSeparator';
import TemplateHero from '@/components/templates/templateHero/TemplateHero';
import FreyaLogo from './FreyaLogo';
import TemplateLicense from '@/components/templates/TemplateLicense';

const apolloFeatures2Data = [
    {
        title: 'Fully Responsive',
        description: 'Freya is crafted to provide optimal viewing and interaction experience for a wide range of devices.',
        src: '/images/templates/freya/freya-features2-responsive.png'
    },
    {
        title: 'Cross Browser Compatible',
        description: 'First class support for Firefox, Safari, Chrome and Edge.',
        src: '/images/templates/apollo/apollo-features2-compatible.png',
        darkSrc: '/images/templates/apollo/apollo-features2-compatible-dark.png',
    },
    {
        title: 'Lifetime Support',
        description: 'Freya has a dedicated forum where lifetime support is delivered by engineers at PrimeTek in a timely manner.',
        src: '/images/templates/apollo/apollo-features2-lifetime.png'
    },
    {
        title: 'Customizable Design',
        description: 'Fully customizable with a mixture of Sass and CSS variables.',
        src: '/images/templates/apollo/apollo-features2-customizable.png',
        darkSrc: '/images/templates/apollo/apollo-features2-customizable-dark.png'
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
        src: '/images/templates/diamond-react.jpg',
        href: '/templates/diamond'
    },
    {
        src: '/images/templates/babylon-react.jpg',
        href: '/templates/babylon'
    },
    {
        src: '/images/templates/ultima-react.jpg',
        href: '/templates/ultima'
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
            <>
                Freya uses Figma as the design tool. It will be possible to download the Figma file after your purchase. You can <a href='https://www.figma.com/file/eYBoRNff6GPTlrgYZaMStp/Preview-%7C-Freya-2022?node-id=0%3A1&t=MGAABDlOnz4QBcEk-1' target='_blank'>preview the Figma file</a> before the purchase. Note that PrimeReact UI components are excluded from the Freya Figma file as they are available in <a href='/uikit' target='_blank'>PrimeOne for Figma</a> only.
            </>,
        src: '/images/templates/freya/features-animation-figma.png'
    }
];

const animationFeaturesData2 = [
    {
        id: 1,
        title: 'Light and Dark Modes',
        description: 'Impress your users with the Light and Dark modes.',
        src: '/images/templates/freya/features-animation-darkmode.png'
    },
    {
        id: 2,
        title: 'Component Themes',
        description: 'Freya offers 16 built-in component themes with dark and light options. Also if you wanna create your own theme you can do it by just defining couple SASS variables.',
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

const license = {
    documentLink: 'https://primefaces.org/freya-react/#/start/documentation',
    description:'The download package is a NextJS-based project containing all application source codes deployed at the live demo. The project code is written in TypeScript.',
    licenseDetails: [
        {
            title: 'Basic Plan',
            price: '$59',
            included: [
                'Non Commercial Usage',
                'Single End Product, No Multi-Use',
                'Lifetime Support',
                'Unlimited Updates',
            ],
        },
        {
            title: 'Extended License',
            price: '$590',
            included: [
                'Commercial Usage',
                'Multiple End Products',
                'Lifetime Support',
                'Unlimited Updates',
            ],
        },
    ]
}

const templateHeroData = {
    pattern: '/images/templates/freya/freya-hero-pattern.png',
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
            <TemplateLicense license={license}/>
            <FreyaSeparator />
            <TemplateYoutube imgSrc={'/images/templates/freya/freya-youtube-screen.png'} />
            <FreyaSeparator />
            <TemplateFeaturesAnimation featuresData={animationFeaturesData2} title={featuresAnimationTitle} />
            <FreyaSeparator />
            <TemplateConfiguration
                title="React based on Next.JS"
                description="Freya is powered by Next.js to get started in no time following the best practices. Template is implemented purely in React."
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
