import TemplateConfiguration from '@/components/templates/TemplateConfiguration';
import TemplateFeatures from '@/components/templates/TemplateFeatures';
import TemplateLicense from '@/components/templates/TemplateLicense';
import TemplateRelated from '@/components/templates/TemplateRelated';
import TemplateFeaturesAnimation from '@/components/templates/templateFeaturesAnimation';
import TemplateHero from '@/components/templates/templateHero/TemplateHero';
import RomaLogo from './RomaLogo';
import RomaSeparator from './RomaSeparator';

const features2Data = [
    {
        title: 'Fully Responsive',
        description: 'Roma is crafted to provide optimal viewing and interaction experience for a wide range of devices.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/roma/roma-features2-responsive.png'
    },
    {
        title: 'Cross Browser Compatible',
        description: 'First class support for Firefox, Safari, Chrome and Edge.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/apollo/apollo-features2-compatible.png',
        darkSrc: 'https://primefaces.org/cdn/primereact/images/templates/apollo/apollo-features2-compatible-dark.png'
    },
    {
        title: 'Lifetime Support',
        description: 'Roma has a dedicated forum where lifetime support is delivered by engineers at PrimeTek in a timely manner.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/apollo/apollo-features2-lifetime.png'
    },
    {
        title: 'Customizable Design',
        description: 'Fully customizable with a mixture of Sass and CSS variables.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/apollo/apollo-features2-customizable.png',
        darkSrc: 'https://primefaces.org/cdn/primereact/images/templates/apollo/apollo-features2-customizable-dark.png'
    },
    {
        title: 'Ready to Use Applications',
        description: 'Landing, login and error pages are provided as template pages to get started with building your app in no time.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/roma/roma-features2-ready.png'
    },
    {
        title: 'Mobile Experience',
        description: 'Touch optimized enhanced mobile experience with responsive design.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/roma/roma-features2-mobile.png'
    }
];

const apolloRelatedData = [
    {
        src: 'https://primefaces.org/cdn/primereact/images/templates/avalon-react.jpg',
        href: '/templates/avalon'
    },
    {
        src: 'https://primefaces.org/cdn/primereact/images/templates/babylon-react.jpg',
        href: '/templates/babylon'
    },
    {
        src: 'https://primefaces.org/cdn/primereact/images/templates/apollo-react.jpg',
        href: '/templates/apollo'
    }
];

const animationFeaturesData1 = [
    {
        id: 1,
        title: 'PrimeFlex CSS Utilities',
        description: 'PrimeFlex is a CSS utility library featuring various helpers such as a grid system, flexbox, spacing, elevation and more.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/babylon/features-animation-utilities.png'
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
        src: 'https://primefaces.org/cdn/primereact/images/templates/babylon/features-animation-blocks.png'
    },
    {
        id: 3,
        title: 'PrimeIcons',
        description: 'Roma ships with PrimeIcons, PrimeTek’s modern icon library including a wide range of icons for your applications.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/babylon/features-animation-icons.png'
    }
];

const animationFeaturesData2 = [
    {
        id: 1,
        title: 'Light and Dark Menus',
        description: 'Roma offers you 2 menu modes to choose from; Light and Dark.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/roma/features-animation-darkmode.png'
    },
    {
        id: 2,
        title: '15 Beautiful Themes',
        description: 'Roma offers 15 built-in themes and creating your own theme is a matter of defining couple of SaSS variables.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/roma/features-animation-component-themes.png'
    },
    {
        id: 3,
        title: '4 Menu Orientations',
        description: 'Roma has 4 menu layouts to choose from; Static, Overlay, Horizontal and Slim with Light and Dark options.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/diamond/features-animation-orientations.png',
        type: 'inline-animation',
        inlineFeaturesData: [
            {
                id: 1,
                title: 'Static',
                src: 'https://primefaces.org/cdn/primereact/images/templates/roma/Static.png'
            },
            {
                id: 2,
                title: 'Overlay',
                src: 'https://primefaces.org/cdn/primereact/images/templates/roma/Overlay.png'
            },
            {
                id: 3,
                title: 'Horizontal',
                src: 'https://primefaces.org/cdn/primereact/images/templates/roma/Horizontal.png'
            },
            {
                id: 4,
                title: 'Slim',
                src: 'https://primefaces.org/cdn/primereact/images/templates/roma/Slim.png'
            }
        ]
    }
];

const license = {
    documentLink: 'https://www.primefaces.org/roma-react/#/documentation',
    description: 'Download package is an create-react-app project that contains all the resources including css, scss, images, fonts, login, promotion, error pages and sample demos.',
    licenseDetails: [
        {
            title: 'Basic License',
            price: '$19',
            included: ['Non Commercial Usage', 'Single End Product, No Multi-Use', 'Lifetime Support', 'Unlimited Updates']
        },
        {
            title: 'Extended License',
            price: '$190',
            included: ['Commercial Usage', 'Multiple End Products', 'Lifetime Support', 'Unlimited Updates']
        }
    ]
};

const templateHeroData = {
    logo: <RomaLogo />,
    pattern: 'https://primefaces.org/cdn/primereact/images/templates/roma/roma-hero-pattern.png',
    dashboard1: 'https://primefaces.org/cdn/primereact/images/templates/roma/roma-hero-dashboard1.png',
    dashboard2: 'https://primefaces.org/cdn/primereact/images/templates/roma/roma-hero-dashboard2.png',
    description: 'A minimalist premium application template with a clean and simple design. Fully customizable with SASS variables and optimized for all devices with responsive design.',
    liveHref: 'https://www.primefaces.org/roma-react/',
    docHref: 'https://www.primefaces.org/roma-react/#/documentation'
};

const AvalonPage = () => {
    const featuresAnimationTitle = <h2>Features</h2>;

    return (
        <div className="roma template">
            <TemplateHero {...templateHeroData} />
            <RomaSeparator />
            <TemplateLicense license={license} />
            <RomaSeparator />
            <TemplateFeaturesAnimation featuresData={animationFeaturesData2} title={featuresAnimationTitle} animationSeconds={3000} />
            <RomaSeparator />
            <TemplateConfiguration title="React App with No Configuration" description="Roma is powered by Create-React-App to get started in no time following the best practices. Template is implemented purely in React." />
            <RomaSeparator />
            <TemplateFeaturesAnimation featuresData={animationFeaturesData1} />
            <RomaSeparator />
            <TemplateFeatures featuresData={features2Data} displayType="vertical" />
            <RomaSeparator />
            <TemplateRelated relatedData={apolloRelatedData} />
        </div>
    );
};

export default AvalonPage;
