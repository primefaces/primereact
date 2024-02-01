import React from 'react';
import TemplateYoutube from '@/components/templates/TemplateYoutube';
import TemplateFeatures from '@/components/templates/TemplateFeatures';
import TemplateConfiguration from '@/components/templates/TemplateConfiguration';
import TemplateRelated from '@/components/templates/TemplateRelated';
import TemplateSeparator from '@/components/templates/TemplateSeparator';
import TemplateHero from '@/components/templates/templateHero/TemplateHero';
import TemplateFeaturesAnimation from '@/components/templates/templateFeaturesAnimation';
import RomaLogo from './RomaLogo';
import RomaSeparator from './RomaSeparator';
import TemplateIntro from '@/components/templates/TemplateIntro';

const apolloFeatures2Data = [
    {
        title: 'Fully Responsive',
        description: 'Roma is crafted to provide optimal viewing and interaction experience for a wide range of devices.',
        src: '/images/templates/roma/roma-features2-responsive.png'
    },
    {
        title: 'Cross Browser Compatible',
        description: 'First class support for Firefox, Safari, Chrome and Edge.',
        src: '/images/templates/apollo/apollo-features2-compatible.png',
        darkSrc: '/images/templates/apollo/apollo-features2-compatible-dark.png',
    },
    {
        title: 'Lifetime Support',
        description: 'Roma has a dedicated forum where lifetime support is delivered by engineers at PrimeTek in a timely manner.',
        src: '/images/templates/apollo/apollo-features2-lifetime.png'
    },
    {
        title: 'Customizable Design',
        description: 'Fully customizable with a mixture of Sass and CSS variables.',
        src: '/images/templates/apollo/apollo-features2-customizable.png',
        darkSrc: '/images/templates/apollo/apollo-features2-customizable-dark.png'
    },
    {
        title: 'Ready to Use Applications',
        description: 'Landing, login and error pages are provided as template pages to get started with building your app in no time.',
        src: '/images/templates/roma/roma-features2-ready.png'
    },
    {
        title: 'Mobile Experience',
        description: 'Touch optimized enhanced mobile experience with responsive design.',
        src: '/images/templates/roma/roma-features2-mobile.png'
    }
];

const apolloRelatedData = [
    {
        src: '/images/templates/avalon-react.jpg',
        href: '/templates/avalon'
    },
    {
        src: '/images/templates/babylon-react.jpg',
        href: '/templates/babylon'
    },
    {
        src: '/images/templates/apollo-react.jpg',
        href: '/templates/apollo'
    }
];

const animationFeaturesData1 = [
    {
        id: 1,
        title: 'PrimeFlex CSS Utilities',
        description: 'PrimeFlex is a CSS utility library featuring various helpers such as a grid system, flexbox, spacing, elevation and more.',
        src: '/images/templates/babylon/features-animation-utilities.png'
    },
    {
        id: 2,
        title: 'PrimeBlocks',
        description: 'Fully compatible with PrimeBlocks, choose from the wide range of blocks and customize the way you like. Note that PrimeBlocks is not included in the template and requires a separate purchase.',
        src: '/images/templates/babylon/features-animation-blocks.png'
    },
    {
        id: 3,
        title: 'PrimeIcons',
        description: 'Roma ships with PrimeIcons, PrimeTek’s modern icon library including a wide range of icons for your applications.',
        src: '/images/templates/babylon/features-animation-icons.png'
    },
];

const animationFeaturesData2 = [
    {
        id: 1,
        title: 'Light and Dark Modes',
        description: 'Roma offers you 2 uniquely designed layout modes to choose from; Light and Dark.',
        src: '/images/templates/roma/features-animation-darkmode.png'
    },
    {
        id: 2,
        title: 'Component 15 Beautiful Themes',
        description: 'Roma offers 15 built-in themes and creating your own theme is a matter of defining couple of SaSS variables.',
        src: '/images/templates/roma/features-animation-component-themes.png'
    },
    {
        id: 3,
        title: '4 Menu Orientations',
        description: 'Roma has 4 menu layouts to choose from; Static, Overlay, Horizontal and Slim with Light and Dark options.',
        src: '/images/templates/diamond/features-animation-orientations.png',
        type: 'inline-animation',
        inlineFeaturesData: [
            {
                id: 1,
                title: 'Static',
                src: '/images/templates/roma/Static.png'
            },
            {
                id: 2,
                title: 'Overlay',
                src: '/images/templates/roma/Overlay.png'
            },
            {
                id: 3,
                title: 'Horizontal',
                src: '/images/templates/roma/Horizontal.png'
            },
            {
                id: 4,
                title: 'Slim',
                src: '/images/templates/roma/Slim.png'
            },
        ]
    },
    {
        id: 4,
        title: 'Layout Themes',
        description: 'Roma comes with 11 layout themes guaranteeing an enviable design.',
        src: '/images/templates/roma/features-animation-menu-themes.png'
    }
];


const templateHeroData = {
    logo: <RomaLogo />,
    pattern: '/images/templates/roma/roma-hero-pattern.png',
    dashboard1: '/images/templates/roma/roma-hero-dashboard1.png',
    dashboard2: '/images/templates/roma/roma-hero-dashboard2.png',
    description: 'A minimalist premium application template with a clean and simple design. Fully customizable with SASS variables and optimized for all devices with responsive design.',
    liveHref: 'https://diamond.primereact.org',
    docHref: 'https://diamond.primereact.org/documentation'
};

const AvalonPage = () => {
    const featuresAnimationTitle = (
        <h2>
            Features that the <br />
            Roma template gives you
        </h2>
    );

    return (
        <div className="roma template">
            <TemplateHero {...templateHeroData} />
            <RomaSeparator />
            <TemplateIntro
            title="1000+ Layout Variations"
            description="Choose from various modern designs crafted by our team or create your own Roma experience with the ease of customization."
            imageURL="/images/templates/roma/roma-intro.png"
            />
            <RomaSeparator />
            <TemplateFeaturesAnimation featuresData={animationFeaturesData2} title={featuresAnimationTitle} animationSeconds={3000}/>
            <RomaSeparator />
            <TemplateConfiguration
                title="React App with No Configuration"
                description="Roma is powered by Create-React-App to get started in no time following the best practices. Template is implemented purely in React."
            />
            <RomaSeparator />
            <TemplateFeaturesAnimation featuresData={animationFeaturesData1} />
            <RomaSeparator />
            <TemplateFeatures featuresData={apolloFeatures2Data} displayType="vertical" />
            <RomaSeparator />
            <TemplateRelated relatedData={apolloRelatedData} />
        </div>
    );
};

export default AvalonPage;
