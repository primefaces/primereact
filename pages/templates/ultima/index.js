import TemplateConfiguration from '@/components/templates/TemplateConfiguration';
import TemplateFeatures from '@/components/templates/TemplateFeatures';
import TemplateLicense from '@/components/templates/TemplateLicense';
import TemplateRelated from '@/components/templates/TemplateRelated';
import TemplateSeparator from '@/components/templates/TemplateSeparator';
import TemplateYoutube from '@/components/templates/TemplateYoutube';
import TemplateFeaturesAnimation from '@/components/templates/templateFeaturesAnimation';
import TemplateHero from '@/components/templates/templateHero/TemplateHero';
import UltimaLogo from './UltimaLogo';

const features2Data = [
    {
        title: 'Fully Responsive',
        description: 'Ultima is crafted to provide optimal viewing and interaction experience for a wide range of devices.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/ultima/ultima-features2-responsive.png'
    },
    {
        title: 'Cross Browser Compatible',
        description: 'First class support for Firefox, Safari, Chrome and Edge.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/apollo/apollo-features2-compatible.png',
        darkSrc: 'https://primefaces.org/cdn/primereact/images/templates/apollo/apollo-features2-compatible-dark.png'
    },
    {
        title: 'Lifetime Support',
        description: 'Ultima has a dedicated forum where lifetime support is delivered by engineers at PrimeTek in a timely manner.',
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
        description: 'Everything is ready for you to start and build your app in no time. Landing, login, invoice, help, and error pages are provided as template pages.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/ultima/ultima-features2-ready.png'
    },
    {
        title: 'Mobile Experience',
        description: 'Touch optimized enhanced mobile experience with responsive design.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/ultima/ultima-features2-mobile.png'
    }
];

const relatedData = [
    {
        src: 'https://primefaces.org/cdn/primereact/images/templates/diamond-react.jpg',
        href: '/templates/diamond'
    },
    {
        src: 'https://primefaces.org/cdn/primereact/images/templates/apollo-react.jpg',
        href: '/templates/apollo'
    },
    {
        src: 'https://primefaces.org/cdn/primereact/images/templates/babylon-react.jpg',
        href: '/templates/babylon'
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
        description: 'Ultima ships with PrimeIcons, PrimeTek’s modern icon library including a wide range of icons for your applications.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/apollo/features-animation-icons.png'
    },
    {
        id: 4,
        title: 'Figma File',
        description: (
            <>
                Ultima uses Figma as the design tool. It will be possible to download the Figma file after your purchase. You can{' '}
                <a href="https://www.figma.com/file/ijQrxq13lxacgkb6XHlLxA/Preview-%7C-Ultima-2022?node-id=354%3A7715&t=gjWHprUDE5RJIg78-1" target="_blank">
                    preview the Figma file
                </a>{' '}
                before the purchase. Note that PrimeReact UI components are excluded from the Ultima Figma file as they are available in{' '}
                <a href="/uikit" target="_blank">
                    PrimeOne for Figma
                </a>{' '}
                only.
            </>
        ),
        src: 'https://primefaces.org/cdn/primereact/images/templates/ultima/features-animation-figma.png'
    }
];

const animationFeaturesData2 = [
    {
        id: 1,
        title: 'Light and Dark Modes',
        description: 'Ultima offers you 2 uniquely designed layout modes to choose from; Light and Dark.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/ultima/features-animation-darkmode.png'
    },
    {
        id: 2,
        title: 'Component Themes',
        description: 'Ultima offers 17 built-in component themes with dark and light options. Also if you wanna create your own theme you can do it by just defining couple SASS variables.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/ultima/features-animation-component-themes.png'
    },
    {
        id: 3,
        title: '7 Menu Orientations',
        description: 'Static, Overlay, Slim, Slim+, Reveal, Drawer and Horizontal are the available menu layouts depending on your preference.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/atlantis/features-animation-orientations.png',
        type: 'inline-animation',
        inlineFeaturesData: [
            {
                id: 1,
                title: 'Static',
                src: 'https://primefaces.org/cdn/primereact/images/templates/ultima/Static.png'
            },
            {
                id: 2,
                title: 'Slim',
                src: 'https://primefaces.org/cdn/primereact/images/templates/ultima/Slim.png'
            },
            {
                id: 3,
                title: 'Reveal',
                src: 'https://primefaces.org/cdn/primereact/images/templates/ultima/Reveal.png'
            },
            {
                id: 4,
                title: 'Horizontal',
                src: 'https://primefaces.org/cdn/primereact/images/templates/ultima/Horizontal.png'
            },
            {
                id: 5,
                title: 'Overlay',
                src: 'https://primefaces.org/cdn/primereact/images/templates/ultima/Overlay.png'
            },
            {
                id: 6,
                title: 'Slim+',
                src: 'https://primefaces.org/cdn/primereact/images/templates/ultima/Slim+.png'
            },
            {
                id: 7,
                title: 'Drawer',
                src: 'https://primefaces.org/cdn/primereact/images/templates/ultima/Drawer.png'
            }
        ]
    }
];

const license = {
    documentLink: 'https://ultima.primereact.org/documentation/',
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

const UltimaSeperator = () => {
    return (
        <TemplateSeparator
            separatorLogo={
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M36.9818 19.6064C36.9445 19.5171 36.8573 19.4593 36.7606 19.4593H35.4433L36.1606 18.594C36.22 18.5228 36.2319 18.424 36.1927 18.3404C36.1534 18.2568 36.0691 18.2034 35.9762 18.2034H21.5204L17.421 14.3157C17.3415 14.2408 17.2208 14.2283 17.1289 14.2866L14.829 15.7264L14.8271 15.7283L14.8247 15.7292L12.1082 17.5124C12.1015 17.5167 12.0982 17.5233 12.0919 17.5286C12.0785 17.5391 12.067 17.5506 12.0565 17.5635C12.0469 17.5749 12.0393 17.5864 12.0321 17.5993C12.0244 17.6131 12.0192 17.627 12.0144 17.6418C12.0096 17.6571 12.0067 17.6723 12.0048 17.6886C12.0043 17.6967 12 17.7034 12 17.712C12 17.7196 12.0034 17.7253 12.0043 17.733C12.0057 17.7487 12.0091 17.7636 12.0139 17.7793C12.0187 17.7951 12.0239 17.8099 12.0321 17.8247C12.0354 17.8309 12.0359 17.8376 12.0397 17.8438C12.0431 17.849 12.0493 17.8509 12.0532 17.8557C12.0699 17.8772 12.0895 17.8949 12.1125 17.9092C12.1211 17.9144 12.1279 17.9211 12.1365 17.9254C12.1681 17.9407 12.2026 17.9507 12.2399 17.9507H15.5109L16.2493 19.7878L16.2502 19.7893V19.7907L21.054 31.2682L18.2183 33.8346C18.145 33.9009 18.1201 34.005 18.156 34.0972C18.1915 34.1894 18.2806 34.25 18.3792 34.25H22.4618C22.4934 34.25 22.5246 34.2433 22.5538 34.2314C22.5829 34.2194 22.6093 34.2017 22.6313 34.1798L24.7775 32.0314C24.7804 32.0347 24.7813 32.039 24.7847 32.0424L26.8169 34.1755C26.8624 34.2238 26.9223 34.2371 26.9917 34.25C30.6812 34.2294 36.2789 34.2108 36.5423 34.2381C36.5671 34.2462 36.5925 34.25 36.6179 34.25C36.6998 34.25 36.7797 34.2084 36.8243 34.1364C36.9627 33.9119 36.9617 33.9095 29.8916 26.9127L36.9296 19.8681C36.9986 19.7983 37.0187 19.6957 36.9818 19.6064ZM35.4677 18.6804L34.8227 19.4593H22.8449L22.0237 18.6804H35.4677ZM17.2261 14.789L22.1506 19.4593H16.6333L15.2528 16.0244L17.2261 14.789ZM13.0386 17.4727L14.8429 16.2884L15.3189 17.4727H13.0386ZM25.1314 31.7129C25.1251 31.7062 25.1165 31.7033 25.1098 31.6981L26.8251 29.9813V33.4903L25.1314 31.7129ZM36.0653 33.7581C35.1613 33.7448 32.915 33.7391 27.3039 33.7701V29.6571C27.3039 29.6131 27.2886 29.5739 27.268 29.5381L29.554 27.2498C31.8084 29.4813 34.9999 32.6574 36.0653 33.7581ZM22.5451 33.5891L16.8306 19.9368H34.8754C34.8926 19.9406 34.9099 19.9459 34.9271 19.9459C34.941 19.9459 34.9539 19.9392 34.9678 19.9368H36.1841L22.5451 33.5891Z"
                        fill="var(--surface-900)"
                    />
                </svg>
            }
        />
    );
};

const UltimaPage = () => {
    const featuresAnimationTitle = <h2>Features</h2>;

    return (
        <div className="ultima template">
            <TemplateHero
                pattern={'https://primefaces.org/cdn/primereact/images/templates/ultima/ultima-hero-pattern.png'}
                logo={<UltimaLogo />}
                description={'A highly customizable premium application template featuring 4 menu modes, 13 themes, light and dark modes. Based on material design language, it is fully responsive, touch optimized, built with SASS, CSS3 and HTML5.'}
                dashboard1={'https://primefaces.org/cdn/primereact/images/templates/ultima/ultima-hero-dashboard1.png'}
                dashboard2={'https://primefaces.org/cdn/primereact/images/templates/ultima/ultima-hero-dashboard2.png'}
                liveHref={'https://ultima.primereact.org'}
                docHref={'https://ultima.primereact.org/documentation'}
            />
            <UltimaSeperator />
            <TemplateLicense license={license} />
            <UltimaSeperator />
            <div hidden={1}>
                <TemplateYoutube imgSrc={'https://primefaces.org/cdn/primereact/images/templates/ultima/ultima-youtube-screen.png'} />
                <UltimaSeperator />
            </div>
            <TemplateFeaturesAnimation featuresData={animationFeaturesData2} title={featuresAnimationTitle} />
            <UltimaSeperator />
            <TemplateConfiguration title="React App with No Configuration" description="Ultima is powered by Next.js to get started in no time following the best practices. Template is implemented purely in React with Typescript." />
            <UltimaSeperator />
            <TemplateFeaturesAnimation featuresData={animationFeaturesData1} />
            <UltimaSeperator />
            <TemplateFeatures featuresData={features2Data} displayType="vertical" />
            <UltimaSeperator />
            <TemplateRelated relatedData={relatedData} />
        </div>
    );
};

export default UltimaPage;
