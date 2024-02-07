import TemplateConfiguration from '@/components/templates/TemplateConfiguration';
import TemplateFeatures from '@/components/templates/TemplateFeatures';
import TemplateLicense from '@/components/templates/TemplateLicense';
import TemplateRelated from '@/components/templates/TemplateRelated';
import TemplateFeaturesAnimation from '@/components/templates/templateFeaturesAnimation';
import TemplateHero from '@/components/templates/templateHero/TemplateHero';
import AvalonLogo from './AvalonLogo';
import AvalonSeparator from './AvalonSeparator';

const features2Data = [
    {
        title: 'Fully Responsive',
        description: 'Avalon is crafted to provide optimal viewing and interaction experience for a wide range of devices.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/avalon/avalon-features2-responsive.png'
    },
    {
        title: 'Cross Browser Compatible',
        description: 'First class support for Firefox, Safari, Chrome and Edge.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/apollo/apollo-features2-compatible.png',
        darkSrc: 'https://primefaces.org/cdn/primereact/images/templates/apollo/apollo-features2-compatible-dark.png'
    },
    {
        title: 'Lifetime Support',
        description: 'Diamond has a dedicated forum where lifetime support is delivered by engineers at PrimeTek in a timely manner.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/apollo/apollo-features2-lifetime.png'
    },
    {
        title: 'Customizable Design',
        description: 'Fully customizable with a mixture of Sass and CSS variables.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/apollo/apollo-features2-customizable.png',
        darkSrc: 'https://primefaces.org/cdn/primereact/images/templates/apollo/apollo-features2-customizable-dark.png'
    },
    {
        title: 'Top Notch Quality',
        description: 'Superior standards with 100% compatibility for strict mode and linting tools.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/apollo/apollo-features2-quality.png',
        darkSrc: 'https://primefaces.org/cdn/primereact/images/templates/apollo/apollo-features2-quality-dark.png'
    },
    {
        title: 'Mobile Experience',
        description: 'Touch optimized enhanced mobile experience with responsive design.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/avalon/avalon-features2-mobile.png'
    }
];

const relatedData = [
    {
        src: 'https://primefaces.org/cdn/primereact/images/templates/babylon-react.jpg',
        href: '/templates/babylon'
    },
    {
        src: 'https://primefaces.org/cdn/primereact/images/templates/apollo-react.jpg',
        href: '/templates/apollo'
    },
    {
        src: 'https://primefaces.org/cdn/primereact/images/templates/roma-react.jpg',
        href: '/templates/roma'
    }
];

const animationFeaturesData1 = [
    {
        id: 1,
        title: 'PrimeFlex CSS Utilities',
        description: 'PrimeFlex is a CSS utility library featuring various helpers such as a grid system, flexbox, spacing, elevation and more.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/apollo/features-animation-utilities.png'
    },
    {
        id: 2,
        title: 'PrimeBlocks',
        description: (
            <>
                Fully compatible with{' '}
                <a href="https://blocks.primereact.org/" target="_blank">
                    PrimeBlocks
                </a>
                , choose from the wide range of blocks and customize the way you like. Note that{' '}
                <a href="https://blocks.primereact.org/" target="_blank">
                    PrimeBlocks
                </a>{' '}
                is not included in the template and requires a separate purchase.
            </>
        ),
        src: 'https://primefaces.org/cdn/primereact/images/templates/apollo/features-animation-blocks.png'
    },
    {
        id: 3,
        title: 'PrimeIcons',
        description: 'Avalon ships with PrimeIcons, PrimeTek’s modern icon library including a wide range of icons for your applications.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/apollo/features-animation-icons.png'
    },
    {
        id: 4,
        title: 'Figma File',
        description: (
            <>
                Avalon uses Figma as the design tool. It will be possible to download the Figma file after your purchase. You can{' '}
                <a href="https://www.figma.com/file/LuzEn29BAxr03T2vMQ5A1y/Preview-%7C-Avalon-1.0.0?type=design&mode=design&t=ME7xK2sAYOLoKCrT-1" target="_blank">
                    preview the Figma file
                </a>{' '}
                before the purchase. Note that PrimeReact UI components are excluded from the Avalon Figma file as they are available in{' '}
                <a href="/uikit" target="_blank">
                    PrimeOne for Figma
                </a>{' '}
                only.
            </>
        ),
        src: 'https://primefaces.org/cdn/primereact/images/templates/avalon/features-animation-figma.png'
    }
];

const animationFeaturesData2 = [
    {
        id: 1,
        title: 'Light and Dark Modes',
        description: 'Avalon offers you 2 uniquely designed layout modes to choose from; Light and Dark.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/avalon/features-animation-darkmode.png'
    },
    {
        id: 2,
        title: 'Component 10 Beautiful Themes',
        description: 'Avalon offers 10 built-in themes and creating your own theme is a matter of defining couple of SaSS variables.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/avalon/features-animation-component-themes.png'
    },
    {
        id: 3,
        title: '7 Menu Orientations',
        description: 'Avalon has 7 menu layouts to choose from; Static, Overlay, Slim, Slim+, Reveal, Drawer and Horizontal with Light and Dark options.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/diamond/features-animation-orientations.png',
        type: 'inline-animation',
        inlineFeaturesData: [
            {
                id: 1,
                title: 'Static',
                src: 'https://primefaces.org/cdn/primereact/images/templates/avalon/Static.png'
            },
            {
                id: 2,
                title: 'Slim',
                src: 'https://primefaces.org/cdn/primereact/images/templates/avalon/Slim.png'
            },
            {
                id: 3,
                title: 'Reveal',
                src: 'https://primefaces.org/cdn/primereact/images/templates/avalon/Reveal.png'
            },
            {
                id: 4,
                title: 'Horizontal',
                src: 'https://primefaces.org/cdn/primereact/images/templates/avalon/Horizontal.png'
            },
            {
                id: 5,
                title: 'Overlay',
                src: 'https://primefaces.org/cdn/primereact/images/templates/avalon/Overlay.png'
            },
            {
                id: 6,
                title: 'Slim+',
                src: 'https://primefaces.org/cdn/primereact/images/templates/avalon/Slim+.png'
            },
            {
                id: 7,
                title: 'Drawer',
                src: 'https://primefaces.org/cdn/primereact/images/templates/avalon/Drawer.png'
            }
        ]
    },
    {
        id: 4,
        title: 'Topbar Themes',
        description: 'Avalon comes with 11 topbar themes guaranteeing an enviable design.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/avalon/features-animation-menu-themes.png'
    }
];

const features1Data = [
    {
        src: 'https://primefaces.org/cdn/primereact/images/templates/avalon/avalon-features1-feature1.png',
        title: 'Ready to Use Applications',
        description: 'Mail, File System, Tasks, Calendar, Blog and Chat are the sample applications to get started with ease.'
    },
    {
        src: 'https://primefaces.org/cdn/primereact/images/templates/avalon/avalon-features1-feature2.png',
        title: 'E-Commerce Pages',
        description: 'Avalon offers E-commerce pages to kickstart your e-commerce project powered by PrimeBlocks.'
    },
    {
        src: 'https://primefaces.org/cdn/primereact/images/templates/avalon/avalon-features1-feature3.png',
        title: 'Ready to Use Pages',
        description: 'Landing, login, invoice, help, user management and error pages are provided as template pages to get started with building your app.'
    }
];

const license = {
    documentLink: 'https://avalon.primereact.org/documentation',
    description: 'The download package is a NextJS-based project containing all application source codes deployed at the live demo. The project code is written in TypeScript.',
    licenseDetails: [
        {
            title: 'Basic License',
            price: '$49',
            included: ['Non Commercial Usage', 'Single End Product, No Multi-Use', 'Lifetime Support', 'Unlimited Updates']
        },
        {
            title: 'Extended License',
            price: '$490',
            included: ['Commercial Usage', 'Multiple End Products', 'Lifetime Support', 'Unlimited Updates']
        }
    ]
};

const templateHeroData = {
    logo: <AvalonLogo />,
    pattern: 'https://primefaces.org/cdn/primereact/images/templates/avalon/avalon-hero-pattern.png',
    light: true,
    rectangle: true,
    dashboard1: 'https://primefaces.org/cdn/primereact/images/templates/avalon/avalon-hero-dashboard1.png',
    dashboard2: 'https://primefaces.org/cdn/primereact/images/templates/avalon/avalon-hero-dashboard2.png',
    description: 'A modern and easy to use premium application template with highly customizable layout features. Based on a bootstrap styling, it is fully responsive, touch optimized, built with SASS, CSS3 and HTML5.',
    liveHref: 'https://avalon.primereact.org/',
    docHref: 'https://avalon.primereact.org/documentation'
};

const AvalonPage = () => {
    const featuresAnimationTitle = <h2>Features</h2>;

    return (
        <div className="avalon template">
            <TemplateHero {...templateHeroData} />
            <AvalonSeparator />
            <TemplateLicense license={license} />
            <AvalonSeparator />
            <TemplateFeaturesAnimation featuresData={animationFeaturesData2} title={featuresAnimationTitle} />
            <AvalonSeparator />
            <TemplateConfiguration title="React App with No Configuration" description="Avalon is powered by Next.js to get started in no time following the best practices. Template is implemented purely in React with Typescript." />
            <AvalonSeparator />
            <TemplateFeatures featuresData={features1Data} displayType="horizontal" />
            <AvalonSeparator />
            <TemplateFeaturesAnimation featuresData={animationFeaturesData1} />
            <AvalonSeparator />
            <TemplateFeatures featuresData={features2Data} displayType="vertical" />
            <AvalonSeparator />
            <TemplateRelated relatedData={relatedData} />
        </div>
    );
};

export default AvalonPage;
