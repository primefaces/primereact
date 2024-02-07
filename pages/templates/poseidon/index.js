import TemplateConfiguration from '@/components/templates/TemplateConfiguration';
import TemplateFeatures from '@/components/templates/TemplateFeatures';
import TemplateLicense from '@/components/templates/TemplateLicense';
import TemplateRelated from '@/components/templates/TemplateRelated';
import TemplateSeparator from '@/components/templates/TemplateSeparator';
import TemplateFeaturesAnimation from '@/components/templates/templateFeaturesAnimation';
import TemplateHero from '@/components/templates/templateHero/TemplateHero';
import PoseidonLogo from './PoseidonLogo';

const features2Data = [
    {
        title: 'Fully Responsive',
        description: 'Atlantis is crafted to provide optimal viewing and interaction experience for a wide range of devices.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/poseidon/poseidon-features2-responsive.png'
    },
    {
        title: 'Cross Browser Compatible',
        description: 'First class support for Firefox, Safari, Chrome and Edge.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/apollo/apollo-features2-compatible.png',
        darkSrc: 'https://primefaces.org/cdn/primereact/images/templates/apollo/apollo-features2-compatible-dark.png'
    },
    {
        title: 'Lifetime Support',
        description: 'Atlantis has a dedicated forum where lifetime support is delivered by engineers at PrimeTek in a timely manner.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/apollo/apollo-features2-lifetime.png'
    },
    {
        title: 'Full SaSS Support',
        description: 'Sass is utilized for both the application and components to provide simplicity and flexibility.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/apollo/apollo-features2-customizable.png',
        darkSrc: 'https://primefaces.org/cdn/primereact/images/templates/apollo/apollo-features2-customizable-dark.png'
    },
    {
        title: 'Ready to Use Pages',
        description: 'Landing, login, invoice, help, user management and error pages are provided as template pages to get started with building your app.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/poseidon/poseidon-features2-ready.png'
    },
    {
        title: 'Mobile Experience',
        description: 'Touch optimized enhanced mobile experience with responsive design.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/poseidon/poseidon-features2-mobile.png'
    }
];

const relatedData = [
    {
        src: 'https://primefaces.org/cdn/primereact/images/templates/apollo-react.jpg',
        href: '/templates/apollo'
    },
    {
        src: 'https://primefaces.org/cdn/primereact/images/templates/avalon-react.jpg',
        href: '/templates/avalon'
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
        description: 'Atlantis ships with PrimeIcons, PrimeTek’s modern icon library including a wide range of icons for your applications.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/babylon/features-animation-icons.png'
    }
];

const animationFeaturesData2 = [
    {
        id: 1,
        title: 'Light / Dim / Dark Modes',
        description: 'Poseidon offers you 3 uniquely designed layout modes to choose from; Light, Dim, and Dark.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/poseidon/features-animation-darkmode.png'
    },
    {
        id: 2,
        title: 'Component Themes',
        description: 'Poseidon offers 12 built-in component themes with dark, light and dim options. Also if you wanna create your own theme you can do it by just defining couple SASS variables.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/poseidon/features-animation-component-themes.png'
    },
    {
        id: 3,
        title: '3 Menu Orientations',
        description: 'Poseidon has 3 menu layouts to choose from; Static, Overlay and Horizontal',
        src: 'https://primefaces.org/cdn/primereact/images/templates/poseidon/features-animation-orientations.png',
        type: 'inline-animation',
        inlineFeaturesData: [
            {
                id: 1,
                title: 'Static',
                src: 'https://primefaces.org/cdn/primereact/images/templates/poseidon/Static.png'
            },
            {
                id: 2,
                title: 'Overlay',
                src: 'https://primefaces.org/cdn/primereact/images/templates/poseidon/Overlay.png'
            },
            {
                id: 3,
                title: 'Horizontal',
                src: 'https://primefaces.org/cdn/primereact/images/templates/poseidon/Horizontal.png'
            }
        ]
    }
];

const license = {
    documentLink: 'https://primefaces.org/freya-react/#/start/documentation',
    description: 'The download package is a NextJS-based project containing all application source codes deployed at the live demo. The project code is written in TypeScript.',
    licenseDetails: [
        {
            title: 'Basic License',
            price: '$59',
            included: ['Non Commercial Usage', 'Single End Product, No Multi-Use', 'Lifetime Support', 'Unlimited Updates']
        },
        {
            title: 'Extended License',
            price: '$590',
            included: ['Commercial Usage', 'Multiple End Products', 'Lifetime Support', 'Unlimited Updates']
        }
    ]
};

const PoseidonSeparator = () => {
    return (
        <TemplateSeparator
            separatorLogo={
                <svg width="24" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11.0876 0L13.9043 2.1136L12.6009 3.85069L12.0386 3.42929L12.0363 13.583L16.231 15.1112L19.1018 1.34789L22.1539 4.382L21.3935 6.14085L20.4104 5.71186L17.8451 18.0106L12.0363 15.8953L12.0345 24H10.134L10.1358 15.886L4.30245 18.0106L1.74345 5.71186L0.450113 6.14085L0 4.382L3.05322 1.34691L5.91759 15.1112L10.1358 13.5737L10.1382 3.42619L9.57319 3.85069L8.26983 2.1136L11.0876 0Z"
                        fill="url(#paint0_linear_1894_9038)"
                    />
                    <defs>
                        <linearGradient id="paint0_linear_1894_9038" x1="1107.7" y1="0" x2="1107.7" y2="2400" gradientUnits="userSpaceOnUse">
                            <stop stopColor="var(--surface-900)" />
                            <stop offset="1" stopColor="var(--surface-900)" />
                        </linearGradient>
                    </defs>
                </svg>
            }
        />
    );
};

const templateHeroData = {
    logo: <PoseidonLogo />,
    pattern: 'https://primefaces.org/cdn/primereact/images/templates/poseidon/poseidon-hero-pattern.png',
    dashboard1: 'https://primefaces.org/cdn/primereact/images/templates/poseidon/poseidon-hero-dashboard1.png',
    dashboard2: 'https://primefaces.org/cdn/primereact/images/templates/poseidon/poseidon-hero-dashboard2.png',
    description: 'A modern and easy to use premium application template with various color schemes.Based on flat design language, it is fully responsive, touch optimized, built with SASS, CSS3 and HTML5.',
    liveHref: 'https://diamond.primereact.org',
    docHref: 'https://diamond.primereact.org/documentation'
};

const PoseidonPage = () => {
    const featuresAnimationTitle = <h2>Features</h2>;

    return (
        <div className="poseidon template">
            <TemplateHero {...templateHeroData} />
            <PoseidonSeparator />
            <TemplateLicense license={license} />
            <PoseidonSeparator />
            <TemplateFeaturesAnimation featuresData={animationFeaturesData2} title={featuresAnimationTitle} />
            <PoseidonSeparator />
            <TemplateConfiguration
                title="Vue.js App with No Configuration"
                description="Diamond is powered by Angular CLI to get started in no time following the best practices like service based component interaction modular design and strict mode support"
            />
            <PoseidonSeparator />
            <TemplateFeaturesAnimation featuresData={animationFeaturesData1} />
            <PoseidonSeparator />
            <TemplateFeatures featuresData={features2Data} displayType="vertical" />
            <PoseidonSeparator />
            <TemplateRelated relatedData={relatedData} />
        </div>
    );
};

export default PoseidonPage;
