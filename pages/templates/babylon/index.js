import TemplateConfiguration from '@/components/templates/TemplateConfiguration';
import TemplateFeatures from '@/components/templates/TemplateFeatures';
import TemplateLicense from '@/components/templates/TemplateLicense';
import TemplateRelated from '@/components/templates/TemplateRelated';
import TemplateSeparator from '@/components/templates/TemplateSeparator';
import TemplateFeaturesAnimation from '@/components/templates/templateFeaturesAnimation';
import TemplateHero from '@/components/templates/templateHero/TemplateHero';
import BabylonLogo from './BabylonLogo';

const features2Data = [
    {
        title: 'Fully Responsive',
        description: 'Babylon is crafted to provide optimal viewing and interaction experience for a wide range of devices.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/babylon/babylon-features2-responsive.png'
    },
    {
        title: 'Cross Browser Compatible',
        description: 'First class support for Firefox, Safari, Chrome and Edge.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/apollo/apollo-features2-compatible.png',
        darkSrc: 'https://primefaces.org/cdn/primereact/images/templates/apollo/apollo-features2-compatible-dark.png'
    },
    {
        title: 'Lifetime Support',
        description: 'Babylon has a dedicated forum where lifetime support is delivered by engineers at PrimeTek in a timely manner.',
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
        src: 'https://primefaces.org/cdn/primereact/images/templates/babylon/babylon-features2-ready.png'
    },
    {
        title: 'Mobile Experience',
        description: 'Touch optimized enhanced mobile experience with responsive design.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/babylon/babylon-features2-mobile.png'
    }
];

const relatedData = [
    {
        src: 'https://primefaces.org/cdn/primereact/images/templates/ultima-react.jpg',
        href: '/templates/ultima'
    },
    {
        src: 'https://primefaces.org/cdn/primereact/images/templates/apollo-react.jpg',
        href: '/templates/apollo'
    },
    {
        src: 'https://primefaces.org/cdn/primereact/images/templates/diamond-react.jpg',
        href: '/templates/diamond'
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
        description: 'Babylon ships with PrimeIcons, PrimeTek’s modern icon library including a wide range of icons for your applications.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/babylon/features-animation-icons.png'
    }
];

const animationFeaturesData2 = [
    {
        id: 1,
        title: '4 Menu Orientations, Light and Dark Menus',
        description: 'Babylon has 4 menu modes; Static, Overlay, Horizontal and Slim with Light and Dark color alternatives.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/atlantis/features-animation-orientations.png',
        type: 'inline-animation',
        inlineFeaturesData: [
            {
                id: 1,
                title: 'Static',
                src: 'https://primefaces.org/cdn/primereact/images/templates/babylon/Static.png'
            },
            {
                id: 2,
                title: 'Overlay',
                src: 'https://primefaces.org/cdn/primereact/images/templates/babylon/Overlay.png'
            },
            {
                id: 3,
                title: 'Horizontal',
                src: 'https://primefaces.org/cdn/primereact/images/templates/babylon/Horizontal.png'
            },
            {
                id: 4,
                title: 'Slim',
                src: 'https://primefaces.org/cdn/primereact/images/templates/babylon/Slim.png'
            }
        ]
    },
    {
        id: 2,
        title: '17 Beautiful Themes',
        description: 'Babylon offers 17 built-in themes and creating your own theme is a matter of defining couple of sass variables.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/babylon/features-animation-component-themes.png'
    },

    {
        id: 3,
        title: '2 Profile Modes',
        description: 'User profile menu can either be placed inside the main menu or topbar.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/babylon/features-animation-profile.png'
    }
];

const license = {
    documentLink: 'https://www.primefaces.org/babylon-react/#/documentation',
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
    logo: <BabylonLogo />,
    pattern: 'https://primefaces.org/cdn/primereact/images/templates/babylon/babylon-hero-pattern.png',
    dashboard1: 'https://primefaces.org/cdn/primereact/images/templates/babylon/babylon-hero-dashboard1.png',
    dashboard2: 'https://primefaces.org/cdn/primereact/images/templates/babylon/babylon-hero-dashboard2.png',
    description: 'An elegant premium application template with a beautiful design. Fully customizable with SASS variables and optimized for all devices with responsive design.',
    liveHref: 'https://www.primefaces.org/babylon-react/',
    docHref: 'https://www.primefaces.org/babylon-react/#/documentation'
};

const BabylonSeparator = () => {
    return (
        <TemplateSeparator
            separatorLogo={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1918_23753)">
                        <path
                            d="M19.7864 20.8729C19.6914 20.8729 19.5966 20.8346 19.5276 20.7588L18.2845 19.399C18.2217 19.3305 18.1888 19.2394 18.193 19.1464C18.1974 19.0534 18.2385 18.966 18.3071 18.9032C19.5662 17.7556 20.5064 16.2446 20.9792 14.6171L19.8911 14.3447C19.3076 16.3235 17.9156 18.0941 16.1132 19.1291L15.7638 18.5207C17.5059 17.5206 18.8284 15.7701 19.3014 13.8374C19.3237 13.7469 19.3811 13.6687 19.461 13.6205C19.5412 13.5727 19.6372 13.5581 19.7273 13.5806L21.4958 14.0233C21.6836 14.07 21.7979 14.2603 21.7512 14.4481C21.31 16.2236 20.3508 17.8912 19.0347 19.1803L19.8047 20.0225C20.7778 19.0746 21.5861 17.9362 22.1547 16.7118C22.7255 15.4868 23.0724 14.1334 23.1657 12.7767L19.5147 12.6394L19.5407 11.9385L23.5472 12.0889C23.7407 12.0961 23.8916 12.2586 23.8845 12.4521C23.8278 14.0178 23.4492 15.5929 22.7903 17.0072C22.1344 18.4202 21.1772 19.7251 20.0224 20.7806C19.9556 20.8427 19.871 20.8729 19.7864 20.8729Z"
                            fill="var(--surface-900)"
                        />
                        <path
                            d="M12.0104 23.8938C10.7856 23.8938 9.55695 23.7067 8.40643 23.3415C8.22185 23.2831 8.11967 23.0862 8.17831 22.9016L8.73451 21.1449C8.76247 21.0563 8.82482 20.9823 8.90746 20.9395C8.98985 20.8967 9.0861 20.8881 9.17493 20.9165C10.7918 21.4297 12.5713 21.4871 14.2241 21.0853L13.917 20.0055C12.9704 20.2312 11.9654 20.2873 10.9888 20.1678C9.9026 20.0352 8.82977 19.6762 7.8866 19.1289L8.23868 18.5225C9.10045 19.0225 10.0807 19.3506 11.0736 19.4716C12.0755 19.5948 13.1094 19.5151 14.0638 19.2425C14.1531 19.2167 14.2493 19.2279 14.3307 19.2731C14.4119 19.3184 14.472 19.3939 14.4975 19.4837L14.9965 21.2374C15.0495 21.4237 14.9414 21.6175 14.7551 21.6707C12.9902 22.1729 11.0665 22.1764 9.29889 21.6853L8.95423 22.7739C10.252 23.1396 11.6417 23.2695 12.9961 23.1495C14.3463 23.0317 15.6923 22.6569 16.9111 22.0611L15.2039 18.831L15.8239 18.5034L17.6976 22.048C17.788 22.219 17.7229 22.431 17.5519 22.5216C16.1706 23.2534 14.6165 23.7122 13.0575 23.8482C12.7101 23.8787 12.3602 23.8938 12.0104 23.8938Z"
                            fill="var(--surface-900)"
                        />
                        <path
                            d="M5.84883 22.1206C5.78499 22.1206 5.72017 22.103 5.66227 22.0664C4.34079 21.2336 3.168 20.1189 2.27109 18.8435C1.3685 17.5638 0.715301 16.081 0.38227 14.5561C0.34095 14.3668 0.460703 14.18 0.649734 14.1385L2.44949 13.7438C2.54054 13.724 2.63555 13.7409 2.71398 13.7913C2.79241 13.8416 2.84759 13.9207 2.86738 14.012C3.22664 15.6661 4.06639 17.235 5.24635 18.4666L6.02821 17.66C5.35299 16.9467 4.80074 16.106 4.42046 15.2093C3.98969 14.1954 3.77122 13.1156 3.77147 12.0005H4.47291C4.47291 13.0209 4.67233 14.0083 5.06623 14.9354C5.45518 15.8534 6.04182 16.7075 6.76256 17.4054C6.82961 17.4703 6.86771 17.5588 6.8692 17.6519C6.87068 17.7449 6.83505 17.8347 6.77048 17.9015L5.50145 19.2109C5.36685 19.3499 5.14491 19.3531 5.0061 19.219C3.68239 17.9401 2.71695 16.2764 2.26293 14.5027L1.14804 14.7471C1.48008 16.0609 2.06301 17.3307 2.84462 18.4394C3.62202 19.5449 4.61914 20.5215 5.74293 21.2811L7.69188 18.1913L8.28495 18.5654L6.14573 21.9565C6.07918 22.0627 5.96536 22.1203 5.84883 22.1206Z"
                            fill="var(--surface-900)"
                        />
                        <path
                            d="M4.45905 12.0623L0.452534 11.9119C0.259297 11.9047 0.108121 11.7419 0.115296 11.5487C0.172204 9.98297 0.550513 8.40788 1.20965 6.99337C1.86556 5.58009 2.82284 4.27518 3.97732 3.22017C4.12057 3.08953 4.34227 3.09967 4.47266 3.24244L5.71571 4.60227C5.77855 4.67106 5.81146 4.76186 5.80726 4.85489C5.80305 4.94792 5.76198 5.03526 5.69319 5.09811C4.43406 6.24565 3.4941 7.75691 3.02103 9.38421L4.10944 9.65662C4.69286 7.67798 6.08486 5.90743 7.88734 4.87246L8.23645 5.48062C6.49435 6.48095 5.17187 8.23172 4.6988 10.1638C4.67678 10.2546 4.61938 10.3326 4.53921 10.3808C4.45905 10.4291 4.36354 10.4434 4.27299 10.4207L2.50441 9.97778C2.31686 9.93077 2.20255 9.74075 2.24932 9.55295C2.69022 7.7777 3.64948 6.11007 4.96552 4.82099L4.1953 3.97852C3.22243 4.9264 2.41385 6.06454 1.84552 7.28904C1.27447 8.51427 0.927585 9.86767 0.834554 11.2243L4.48552 11.3614L4.45905 12.0623Z"
                            fill="var(--surface-900)"
                        />
                        <path
                            d="M8.17608 5.49871L6.30235 1.95389C6.21179 1.78267 6.27711 1.57063 6.44808 1.48008C7.82944 0.748199 9.3835 0.289477 10.9428 0.153395C12.5055 0.0150857 14.1142 0.190261 15.5938 0.659869C15.7784 0.718508 15.8803 0.915457 15.8222 1.10003L15.266 2.85624C15.2378 2.94482 15.1757 3.0188 15.093 3.06185C15.0104 3.1049 14.9136 3.11282 14.8256 3.08486C13.2082 2.57195 11.4292 2.5143 9.77616 2.91612L10.0832 3.99587C11.0301 3.77022 12.0351 3.71405 13.0117 3.83381C14.0981 3.96643 15.171 4.32544 16.1134 4.87249L15.7616 5.47917C14.9003 4.97937 13.9198 4.65104 12.9263 4.53006C11.9243 4.40783 10.8903 4.48676 9.936 4.75942C9.84618 4.78515 9.75043 4.77377 9.66903 4.72874C9.58763 4.68346 9.52775 4.60775 9.50227 4.51818L9.00346 2.76445C8.95051 2.57814 9.05864 2.38416 9.2447 2.33121C11.0093 1.82919 12.9333 1.82548 14.7009 2.31636L15.0455 1.22795C13.7475 0.862261 12.358 0.732611 11.0036 0.852117C9.65369 0.96989 8.30771 1.34498 7.08866 1.94078L8.79588 5.17063L8.17608 5.49871Z"
                            fill="var(--surface-900)"
                        />
                        <path
                            d="M20.2285 12.0002H19.5273C19.5273 10.9794 19.3277 9.99191 18.934 9.06531C18.5453 8.14762 17.9587 7.29327 17.2377 6.59505C17.1709 6.53022 17.1325 6.44164 17.1311 6.34861C17.1296 6.25558 17.1652 6.16577 17.2298 6.09896L18.4988 4.7896C18.6332 4.6508 18.8553 4.64709 18.9941 4.78144C20.3179 6.05987 21.2833 7.72379 21.7376 9.49781L22.8525 9.25336C22.5204 7.93979 21.938 6.66977 21.1561 5.56107C20.3782 4.45533 19.3814 3.47851 18.2578 2.71942L16.3089 5.80948L15.7155 5.43513L17.8548 2.04395C17.9582 1.87991 18.1744 1.83142 18.3385 1.93435C19.6595 2.76692 20.8322 3.88131 21.7296 5.15727C22.6322 6.43719 23.2854 7.92024 23.6182 9.44511C23.6595 9.63414 23.5398 9.82094 23.3508 9.86251L21.5513 10.2569C21.4605 10.2767 21.3652 10.2599 21.2868 10.2096C21.2086 10.1592 21.1532 10.08 21.1336 9.98894C20.7743 8.33467 19.9344 6.76602 18.7546 5.53435L17.973 6.34094C18.6482 7.05426 19.2007 7.89525 19.5803 8.79167C20.0101 9.80486 20.2285 10.8846 20.2285 12.0002Z"
                            fill="var(--surface-900)"
                        />
                        <path
                            d="M12.0619 5.56738C15.6489 5.56738 18.5567 8.47522 18.5567 12.0622C18.5567 15.6492 15.6489 18.5571 12.0619 18.5571C8.47486 18.5571 5.56702 15.6492 5.56702 12.0622C5.56702 8.47522 8.47486 5.56738 12.0619 5.56738ZM12.4503 9.06594H9.67918C9.45155 9.06594 9.39217 9.1748 9.39217 9.35295V15.301C9.39217 15.4791 9.45155 15.588 9.67918 15.588H12.5889C13.9645 15.588 14.9443 14.9447 14.9443 13.6878C14.9443 12.6189 14.113 12.2428 14.0338 12.2132C14.1229 12.1736 14.7563 11.8569 14.7563 10.8573C14.7563 9.92697 14.0635 9.06594 12.4503 9.06594ZM12.4503 10.4614C12.965 10.4614 13.2718 10.5703 13.2718 11.0156C13.2718 11.4016 13.0243 11.6094 12.4503 11.6094H12.3217C12.094 11.6094 12.0346 11.7183 12.0346 11.8965V12.6486C12.0346 12.8268 12.094 12.9356 12.3217 12.9356H12.5493C13.0243 12.9356 13.3707 13.0742 13.3707 13.5393C13.3707 13.9847 13.0936 14.1826 12.6087 14.1826H10.946V10.4614H12.4503Z"
                            fill="var(--surface-900)"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_1918_23753">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            }
        />
    );
};

const BabylonPage = () => {
    const featuresAnimationTitle = <h2>Features</h2>;

    return (
        <div className="babylon template">
            <TemplateHero {...templateHeroData} />
            <BabylonSeparator />
            <TemplateLicense license={license} />
            <BabylonSeparator />
            <TemplateFeaturesAnimation featuresData={animationFeaturesData2} title={featuresAnimationTitle} />
            <BabylonSeparator />
            <TemplateConfiguration title="React App with No Configuration" description="Babylon is powered by Create-React-App to get started in no time following the best practices. Template is implemented purely in React." />
            <BabylonSeparator />
            <TemplateFeaturesAnimation featuresData={animationFeaturesData1} />
            <BabylonSeparator />
            <TemplateFeatures featuresData={features2Data} displayType="vertical" />
            <BabylonSeparator />
            <TemplateRelated relatedData={relatedData} />
        </div>
    );
};

export default BabylonPage;
