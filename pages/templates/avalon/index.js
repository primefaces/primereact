import React from 'react';
import TemplateFeatures from '@/components/templates/TemplateFeatures';
import TemplateConfiguration from '@/components/templates/TemplateConfiguration';
import TemplateRelated from '@/components/templates/TemplateRelated';
import TemplateHero from '@/components/templates/templateHero/TemplateHero';
import TemplateFeaturesAnimation from '@/components/templates/templateFeaturesAnimation';
import AvalonLogo from './AvalonLogo';
import AvalonSeparator from './AvalonSeparator';

const apolloFeatures2Data = [
    {
        title: 'Fully Responsive',
        description: 'Avalon is crafted to provide optimal viewing and interaction experience for a wide range of devices.',
        src: '/images/templates/avalon/avalon-features2-responsive.png'
    },
    {
        title: 'Cross Browser Compatible',
        description: 'First class support for Firefox, Safari, Chrome and Edge.',
        src: '/images/templates/apollo/apollo-features2-compatible.png',
        darkSrc: '/images/templates/apollo/apollo-features2-compatible-dark.png',
    },
    {
        title: 'Lifetime Support',
        description: 'Diamond has a dedicated forum where lifetime support is delivered by engineers at PrimeTek in a timely manner.',
        src: '/images/templates/apollo/apollo-features2-lifetime.png'
    },
    {
        title: 'Customizable Design',
        description: 'Fully customizable with a mixture of Sass and CSS variables.',
        src: '/images/templates/apollo/apollo-features2-customizable.png',
        darkSrc: '/images/templates/apollo/apollo-features2-customizable-dark.png'
    },
    {
        title: 'Top Notch Quality',
        description: 'Superior standards with 100% compatibility for strict mode and linting tools.',
        src: '/images/templates/apollo/apollo-features2-quality.png',
        darkSrc: '/images/templates/apollo/apollo-features2-quality-dark.png'
    },
    {
        title: 'Mobile Experience',
        description: 'Touch optimized enhanced mobile experience with responsive design.',
        src: '/images/templates/avalon/avalon-features2-mobile.png'
    }
];

const apolloRelatedData = [
    {
        src: '/images/templates/babylon-react.jpg',
        href: '/templates/babylon'
    },
    {
        src: '/images/templates/apollo-react.jpg',
        href: '/templates/apollo'
    },
    {
        src: '/images/templates/roma-react.jpg',
        href: '/templates/roma'
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
        description: 'Avalon ships with PrimeIcons, PrimeTek’s modern icon library including a wide range of icons for your applications.',
        src: '/images/templates/apollo/features-animation-icons.png'
    },
    {
        id: 4,
        title: 'Figma File',
        description:
            <>
                Avalon uses Figma as the design tool. It will be possible to download the Figma file after your purchase. You can <a href='https://www.figma.com/file/two0OGwOwHfq0sdjeK34l0/Preview-%7C-Atlantis-2022?node-id=15%3A1427&t=2lNJ5EzW0xuvQWdm-1' target='_blank'>preview the Figma file</a> before the purchase. Note that PrimeReact UI components are excluded from the Avalon Figma file as they are available in <a href='/uikit' target='_blank'>PrimeOne for Figma</a> only.
            </>,
        src: '/images/templates/avalon/features-animation-figma.png'
    }
];

const animationFeaturesData2 = [
    {
        id: 1,
        title: 'Light and Dark Modes',
        description: 'Avalon offers you 2 uniquely designed layout modes to choose from; Light and Dark.',
        src: '/images/templates/avalon/features-animation-darkmode.png'
    },
    {
        id: 2,
        title: 'Component 15 Beautiful Themes',
        description: 'Avalon offers 15 built-in themes and creating your own theme is a matter of defining couple of SaSS variables.',
        src: '/images/templates/avalon/features-animation-component-themes.png'
    },
    {
        id: 3,
        title: '4 Menu Orientations',
        description: 'Avalon has 7 menu layouts to choose from; Static, Overlay, Slim, Slim+, Reveal, Drawer and Horizontal with Light and Dark options.',
        src: '/images/templates/diamond/features-animation-orientations.png',
        type: 'inline-animation',
        inlineFeaturesData: [
            {
                id: 1,
                title: 'Static',
                src: '/images/templates/avalon/Static.png'
            },
            {
                id: 2,
                title: 'Slim',
                src: '/images/templates/avalon/Slim.png'
            },
            {
                id: 3,
                title: 'Reveal',
                src: '/images/templates/avalon/Reveal.png'
            },
            {
                id: 4,
                title: 'Horizontal',
                src: '/images/templates/avalon/Horizontal.png'
            },
            {
                id: 5,
                title: 'Overlay',
                src: '/images/templates/avalon/Overlay.png'
            },
            {
                id: 6,
                title: 'Slim+',
                src: '/images/templates/avalon/Slim+.png'
            },
            {
                id: 7,
                title: 'Drawer',
                src: '/images/templates/avalon/Drawer.png'
            },
        ]
    },
    {
        id: 4,
        title: 'Layout Themes',
        description: 'Avalon comes with 11 layout themes guaranteeing an enviable design.',
        src: '/images/templates/avalon/features-animation-menu-themes.png'
    }
];

const apolloFeatures1Data = [
    {
        src: '/images/templates/avalon/avalon-features1-feature1.png',
        title: 'Ready to Use Applications',
        description: 'Mail, File System, Tasks, Calendar, Blog and Chat are the sample applications to get started with ease.'
    },
    {
        src: '/images/templates/avalon/avalon-features1-feature2.png',
        title: 'E-Commerce Pages',
        description: 'Avalon offers E-commerce pages to kickstart your e-commerce project powered by PrimeBlocks.'
    },
    {
        src: '/images/templates/avalon/avalon-features1-feature3.png',
        title: 'Ready to Use Pages',
        description: 'Landing, login, invoice, help, user management and error pages are provided as template pages to get started with building your app.'
    }
];


const templateHeroData = {
    logo: <AvalonLogo />,
    pattern: '/images/templates/avalon/avalon-hero-pattern.png',
    light: true,
    rectangle:true,
    dashboard1: '/images/templates/avalon/avalon-hero-dashboard1.png',
    dashboard2: '/images/templates/avalon/avalon-hero-dashboard2.png',
    description: 'A modern and easy to use premium application template with highly customizable layout features. Based on a bootstrap styling, it is fully responsive, touch optimized, built with SASS, CSS3 and HTML5.',
    liveHref: 'https://diamond.primereact.org',
    docHref: 'https://diamond.primereact.org/documentation'
};

const AvalonPage = () => {
    const featuresAnimationTitle = (
        <h2>
            Features that the <br />
            Avalon template gives you
        </h2>
    );

    return (
        <div className="avalon template">
            <TemplateHero {...templateHeroData} />
            <AvalonSeparator />
            <TemplateFeaturesAnimation featuresData={animationFeaturesData2} title={featuresAnimationTitle} />
            <AvalonSeparator />
            <TemplateConfiguration
                title="React App with No Configuration"
                description="Avalon is powered by Next.js to get started in no time following the best practices. Template is implemented purely in React."
            />
            <AvalonSeparator />
            <TemplateFeatures featuresData={apolloFeatures1Data} displayType="horizontal" />
            <AvalonSeparator />
            <TemplateFeaturesAnimation featuresData={animationFeaturesData1} />
            <AvalonSeparator />
            <TemplateFeatures featuresData={apolloFeatures2Data} displayType="vertical" />
            <AvalonSeparator />
            <TemplateRelated relatedData={apolloRelatedData} />
        </div>
    );
};

export default AvalonPage;
