import TemplateFeatures from '@/components/templates/TemplateFeatures';
import TemplateLicense from '@/components/templates/TemplateLicense';
import TemplateSeparator from '@/components/templates/TemplateSeparator';
import TemplateFeaturesAnimation from '@/components/templates/templateFeaturesAnimation';
import TemplateHero from '@/components/templates/templateHero/TemplateHero';
import Link from 'next/link';
import GenesisLogo from './GenesisLogo';

const features1Data = [
    {
        title: 'Modern and Sleek Design',
        description: 'Enjoy a contemporary design that looks great on all devices.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/genesis/horizontal-features-img-1.png'
    },
    {
        title: 'SEO & Performance',
        description: 'Optimized for fast loading and high search engine rankings.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/genesis/horizontal-features-img-2.png'
    },
    {
        title: 'Animation / Effects',
        description: 'Enhance engagement with captivating animations and effects.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/genesis/horizontal-features-img-3.png'
    }
];

const features2Data = [
    {
        title: 'Fully Responsive',
        description: 'Genesis is crafted to provide optimal viewing and interaction experience for a wide range of devices.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/genesis/fully-responsive.png'
    },
    {
        title: 'Cross Browser Compatible',
        description: 'First class support for Firefox, Safari, Chrome and Edge.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/apollo/apollo-features2-compatible.png',
        darkSrc: 'https://primefaces.org/cdn/primereact/images/templates/apollo/apollo-features2-compatible-dark.png'
    },
    {
        title: 'Support',
        description:
            'PrimeTek offers assistance with account management and licensing issues, with the expectation that users have the necessary technical knowledge to use our products, as we do not offer technical support or consulting. Users can seek assistance in our community via our public Discord and Forum.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/apollo/apollo-features2-lifetime.png'
    },
    {
        title: 'Customizable Design',
        description: 'Fully customizable with a mixture of Sass and CSS variables.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/apollo/apollo-features2-customizable.png',
        darkSrc: 'https://primefaces.org/cdn/primereact/images/templates/apollo/apollo-features2-customizable-dark.png'
    },
    {
        title: 'Mobile Experience',
        description: 'Touch optimized enhanced mobile experience with responsive design.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/genesis/mobile-experience.png'
    }
];

const animationFeaturesData1 = [
    {
        id: 1,
        title: 'Tailwind',
        description: 'Built with TailwindCSS, offering flexibility and efficiency for responsive design. Enjoy the power of Tailwind, a favorite among developers.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/genesis/animation-tailwind.png'
    },
    {
        id: 2,
        title: 'PrimeBlocks',
        description: (
            <>
                Fully compatible with <a href="https://blocks.primereact.org/">PrimeBlocks</a>, choose from the wide range of blocks and customize the way you like. Note that <a href="https://blocks.primereact.org/">PrimeBlocks</a> is not included in
                the template and requires a separate purchase.
            </>
        ),
        src: 'https://primefaces.org/cdn/primereact/images/templates/apollo/features-animation-blocks.png'
    },
    {
        id: 3,
        title: 'PrimeIcons',
        description: 'Genesis ships with PrimeIcons, PrimeTek’s modern icon library including a wide range of icons for your applications.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/apollo/features-animation-icons.png'
    },
    {
        id: 4,
        title: 'Figma File',
        description: (
            <>
                Genesis uses Figma as the design tool. It will be possible to download the Figma file after your purchase. You can{' '}
                <a href="https://www.figma.com/design/bGujrJyznnSatJFMtkXbTN/Preview-%7C-Genesis?node-id=0-1&t=etuXAwkUAEuhJ3p0-1">preview the Figma file</a> before the purchase. Note that PrimeReact UI components are excluded from the Genesis Figma
                file as they are available in <Link href="/uikit">PrimeOne for Figma</Link> only.
            </>
        ),
        src: 'https://primefaces.org/cdn/primereact/images/templates/genesis/animation-figma.png'
    }
];

const animationFeaturesData2 = [
    {
        id: 1,
        title: 'Various Landing Pages',
        description: 'Choose from 9 templates for industries like SaaS, Travel, and Real Estate, each tailored to specific business needs.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/genesis/animation-landing-pages.png'
    },
    {
        id: 2,
        title: 'Secondary Pages',
        description: 'Includes essential pages like About, Pricing, Blog, and Contact for a complete user experience.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/genesis/animation-second-pages.png'
    },
    {
        id: 3,
        title: 'Dark & Light Modes',
        description: 'Easily switch between Light and Dark modes to match your aesthetic preferences.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/genesis/animation-dark-light-modes.png'
    },
    {
        id: 4,
        title: 'Themes',
        description: 'Customize with 17 color themes to align with your brand effortlessly.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/genesis/animation-menu-themes.png'
    }
];

const license = {
    documentLink: '',
    description: 'The download package is a NextJS-based project containing all application source codes deployed at the live demo. The project code is written in TypeScript.',
    showDiscount: false,
    licenseDetails: [
        {
            title: 'Basic License',
            price: '$59',
            discountPrice: '$39',
            included: ['Non Commercial Usage', 'Single End Product, No Multi-Use', '1 Year Free Updates | $19 for +1 year']
        },
        {
            title: 'Extended License',
            price: '$590',
            discountPrice: '$390',
            included: ['Commercial Usage', 'Multiple End Products', '1 Year Free Updates | $190 for +1 year']
        }
    ]
};

const GenesisSeperator = () => {
    return (
        <TemplateSeparator
            separatorLogo={
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path
                        d="M23.0438 12.5C23.5718 12.5 24.0039 12.0712 23.9619 11.5448C23.7992 9.50803 23.1186 7.54079 21.9776 5.83315C20.659 3.85976 18.7849 2.3217 16.5922 1.41345C14.3994 0.505199 11.9867 0.26756 9.65889 0.730581C7.33113 1.1936 5.19294 2.33649 3.51471 4.01471C1.83649 5.69294 0.693602 7.83113 0.230581 10.1589C-0.23244 12.4867 0.00519942 14.8994 0.913448 17.0922C1.8217 19.2849 3.35976 21.159 5.33315 22.4776C7.04079 23.6186 9.00803 24.2992 11.0448 24.4619C11.5712 24.5039 12 24.0718 12 23.5438V20.6561C12 20.128 11.57 19.7065 11.0466 19.6366C9.96068 19.4915 8.91777 19.0998 7.99987 18.4865C6.81584 17.6954 5.893 16.5709 5.34806 15.2553C4.80311 13.9397 4.66052 12.492 4.93834 11.0953C5.21615 9.69866 5.90188 8.41575 6.90881 7.40881C7.91575 6.40188 9.19866 5.71615 10.5953 5.43834C11.992 5.16052 13.4397 5.30311 14.7553 5.84806C16.0709 6.39301 17.1954 7.31584 17.9865 8.49988C18.5998 9.41777 18.9915 10.4607 19.1365 11.5466C19.2065 12.07 19.628 12.5 20.1561 12.5H23.0438Z"
                        fill="var(--surface-900)"
                    />
                    <path
                        d="M17.566 13.6824C17.575 13.6397 17.5422 13.5996 17.4985 13.5996H14.0556C13.5275 13.5996 13.0994 14.0277 13.0994 14.5558V17.9985C13.0994 18.0422 13.1394 18.0751 13.1822 18.066C15.3753 17.6025 17.1023 15.8755 17.566 13.6824Z"
                        fill="var(--surface-900)"
                    />
                    <path
                        d="M19.1544 13.5996C19.0879 13.5996 19.0315 13.6483 19.0203 13.7138C18.5118 16.6753 16.1751 19.0119 13.2136 19.5203C13.1481 19.5316 13.0994 19.588 13.0994 19.6544V23.5438C13.0994 24.0719 13.5275 24.5 14.0556 24.5H15.9679C16.496 24.5 16.9241 24.0719 16.9241 23.5438V19.889C16.9241 19.8642 16.954 19.8518 16.9715 19.8693L20.9704 23.8683C21.3438 24.2417 21.9492 24.2417 22.3227 23.8683L23.368 22.8229C23.7414 22.4495 23.7414 21.8441 23.368 21.4707L19.3691 17.4717C19.3516 17.4542 19.364 17.4243 19.3887 17.4243H23.0436C23.5717 17.4243 23.9998 16.9962 23.9998 16.4682V14.5558C23.9998 14.0277 23.5717 13.5996 23.0436 13.5996H19.1544Z"
                        fill="var(--surface-900)"
                    />
                </svg>
            }
        />
    );
};

const templateHeroData = {
    logo: <GenesisLogo />,
    pattern: 'https://primefaces.org/cdn/primereact/images/templates/genesis/hero-pattern.png',
    dashboard1: 'https://primefaces.org/cdn/primereact/images/templates/genesis/dashboard-2.png',
    dashboard2: 'https://primefaces.org/cdn/primereact/images/templates/genesis/dashboard-1.png',
    description: 'Genesis, crafted by Prime, is the ultimate multi-purpose website template built with React and Next.js. It offers unmatched versatility and performance with a suite of example pages to elevate your projects.',
    liveHref: 'https://genesis.primereact.org',
    docHref: '',
    multipurpose: true
};

const GenesisPage = () => {
    const featuresAnimationTitle = <h2>Features</h2>;

    return (
        <div className="genesis template">
            <TemplateHero {...templateHeroData} />
            <GenesisSeperator />
            <TemplateLicense license={license} />
            <GenesisSeperator />
            <TemplateFeaturesAnimation featuresData={animationFeaturesData2} title={featuresAnimationTitle} />
            <GenesisSeperator />
            <TemplateFeatures featuresData={features1Data} displayType="horizontal" />
            <GenesisSeperator />
            <TemplateFeaturesAnimation featuresData={animationFeaturesData1} />
            <GenesisSeperator />
            <TemplateFeatures featuresData={features2Data} displayType="vertical" />
        </div>
    );
};

export default GenesisPage;
