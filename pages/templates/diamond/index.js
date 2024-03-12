import TemplateConfiguration from '@/components/templates/TemplateConfiguration';
import TemplateFeatures from '@/components/templates/TemplateFeatures';
import TemplateLicense from '@/components/templates/TemplateLicense';
import TemplateRelated from '@/components/templates/TemplateRelated';
import TemplateSeparator from '@/components/templates/TemplateSeparator';
import TemplateYoutube from '@/components/templates/TemplateYoutube';
import TemplateFeaturesAnimation from '@/components/templates/templateFeaturesAnimation';
import TemplateHero from '@/components/templates/templateHero/TemplateHero';
import DiamondLogo from './DiamondLogo';

const features2Data = [
    {
        title: 'Fully Responsive',
        description: 'Diamond is crafted to provide optimal viewing and interaction experience for a wide range of devices.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/diamond/diamond-features2-responsive.png'
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
        title: 'Ready to Use Pages',
        description: 'Landing, login, invoice, help, user management and error pages are provided as template pages to get started with building your app.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/diamond/diamond-features2-ready.png'
    },
    {
        title: 'Mobile Experience',
        description: 'Touch optimized enhanced mobile experience with responsive design.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/diamond/diamond-features2-mobile.png'
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
        description: 'Diamond ships with PrimeIcons, PrimeTek’s modern icon library including a wide range of icons for your applications.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/apollo/features-animation-icons.png'
    },
    {
        id: 4,
        title: 'Figma File',
        description: (
            <>
                Diamond uses Figma as the design tool. It will be possible to download the Figma file after your purchase. You can{' '}
                <a href="https://www.figma.com/file/lKooXEoqqWz7PBYwJ7B8QS/Preview-%7C-Diamond-2022?node-id=271%3A12531" target="_blank">
                    preview the Figma file
                </a>{' '}
                before the purchase. Note that PrimeReact UI components are excluded from the Diamond Figma file as they are available in{' '}
                <a href="/uikit" target="_blank">
                    PrimeOne for Figma
                </a>{' '}
                only.
            </>
        ),
        src: 'https://primefaces.org/cdn/primereact/images/templates/diamond/features-animation-figma.png'
    }
];

const animationFeaturesData2 = [
    {
        id: 1,
        title: 'Light / Dark / Dim Modes',
        description: 'Diamond has 3 display modes to choose from; Light, Dim and Dark.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/diamond/features-animation-darkmode.png'
    },
    {
        id: 2,
        title: 'Component Themes',
        description: 'Diamond offers 30 built-in component themes and creating your own theme is a matter of defining couple of sass variables.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/diamond/features-animation-component-themes.png'
    },
    {
        id: 3,
        title: '7 Menu Orientations',
        description: 'Static, Overlay, Slim, Compact, Horizontal, Reveal and Drawer are the available menu layouts depending on your preference.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/diamond/features-animation-orientations.png',
        type: 'inline-animation',
        inlineFeaturesData: [
            {
                id: 1,
                title: 'Static',
                src: 'https://primefaces.org/cdn/primereact/images/templates/diamond/Static.png'
            },
            {
                id: 2,
                title: 'Slim',
                src: 'https://primefaces.org/cdn/primereact/images/templates/diamond/Slim.png'
            },
            {
                id: 3,
                title: 'Horizontal',
                src: 'https://primefaces.org/cdn/primereact/images/templates/diamond/Horizontal.png'
            },
            {
                id: 4,
                title: 'Drawer',
                src: 'https://primefaces.org/cdn/primereact/images/templates/diamond/Drawer.png'
            },
            {
                id: 5,
                title: 'Overlay',
                src: 'https://primefaces.org/cdn/primereact/images/templates/diamond/Overlay.png'
            },
            {
                id: 6,
                title: 'Compact',
                src: 'https://primefaces.org/cdn/primereact/images/templates/diamond/Compact.png'
            },
            {
                id: 7,
                title: 'Reveal',
                src: 'https://primefaces.org/cdn/primereact/images/templates/diamond/Reveal.png'
            }
        ]
    },
    {
        id: 4,
        title: 'Menu Themes',
        description: 'Stunning theming options for the main menu in light color scheme.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/diamond/features-animation-orientations.png'
    }
];

const license = {
    documentLink: 'https://diamond.primereact.org/documentation/',
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
    pattern: 'https://primefaces.org/cdn/primereact/images/templates/diamond/diamond-hero-pattern.png',
    dashboard1: 'https://primefaces.org/cdn/primereact/images/templates/diamond/diamond-hero-dashboard1.png',
    dashboard2: 'https://primefaces.org/cdn/primereact/images/templates/diamond/diamond-hero-dashboard2.png',
    description: 'An amazing application template for React based on the popular NextJS framework with light-dim-dark modes, four menu layouts, various menu themes, sample apps, ready to use template pages and 30 PrimeReact themes.',
    liveHref: 'https://diamond.primereact.org',
    docHref: 'https://diamond.primereact.org/documentation'
};

const DiamondPage = () => {
    const featuresAnimationTitle = <h2>Features</h2>;

    return (
        <div className="diamond template">
            <TemplateHero {...templateHeroData} />
            <DiamondSeperator />
            <TemplateLicense license={license} />
            <DiamondSeperator />
            <div hidden={1}>
                <TemplateYoutube imgSrc={'https://primefaces.org/cdn/primereact/images/templates/diamond/diamond-youtube-screen.png'} />
                <DiamondSeperator />
            </div>
            <TemplateFeaturesAnimation featuresData={animationFeaturesData2} title={featuresAnimationTitle} />
            <DiamondSeperator />
            <TemplateConfiguration title="React App with No Configuration" description="Diamond is powered by Next.js to get started in no time following the best practices. Template is implemented purely in React with Typescript." />
            <DiamondSeperator />
            <TemplateFeaturesAnimation featuresData={animationFeaturesData1} />
            <DiamondSeperator />
            <TemplateFeatures featuresData={features2Data} displayType="vertical" />
            <DiamondSeperator />
            <TemplateRelated relatedData={relatedData} />
        </div>
    );
};

export default DiamondPage;
