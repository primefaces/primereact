import React from 'react';
import TemplateFeatures from '@/components/templates/TemplateFeatures';
import TemplateConfiguration from '@/components/templates/TemplateConfiguration';
import TemplateRelated from '@/components/templates/TemplateRelated';
import TemplateSeparator from '@/components/templates/TemplateSeparator';
import TemplateHero from '@/components/templates/templateHero/TemplateHero';
import TemplateFeaturesAnimation from '@/components/templates/templateFeaturesAnimation';
import TemplateIntro from '@/components/templates/TemplateIntro';
import SakaiLogo from './SakaiLogo';

const apolloFeatures2Data = [
    {
        title: 'Fully Responsive',
        description: 'Atlantis is crafted to provide optimal viewing and interaction experience for a wide range of devices.',
        src: '/images/templates/sakai/sakai-features2-responsive.png'
    },
    {
        title: 'Cross Browser Compatible',
        description: 'First class support for Firefox, Safari, Chrome and Edge.',
        src: '/images/templates/apollo/apollo-features2-compatible.png',
        darkSrc: '/images/templates/apollo/apollo-features2-compatible-dark.png',
    },
    {
        title: 'Lifetime Support',
        description: 'Atlantis has a dedicated forum where lifetime support is delivered by engineers at PrimeTek in a timely manner.',
        src: '/images/templates/apollo/apollo-features2-lifetime.png'
    },
    {
        title: 'Full SaSS Support',
        description: 'Sass is utilized for both the application and components to provide simplicity and flexibility.',
        src: '/images/templates/apollo/apollo-features2-customizable.png',
        darkSrc: '/images/templates/apollo/apollo-features2-customizable-dark.png'
    },
    {
        title: 'Mobile Experience',
        description: 'Touch optimized enhanced mobile experience with responsive design.',
        src: '/images/templates/sakai/sakai-features2-mobile.png'
    }
];

const apolloRelatedData = [
    {
        src: '/images/templates/ultima-react.jpg',
        href: '/templates/ultima'
    },
    {
        src: '/images/templates/apollo-react.jpg',
        href: '/templates/apollo'
    },
    {
        src: '/images/templates/serenity-react.jpg',
        href: 'https://www.primefaces.org/layouts/serenity-react'
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
        description: 'Atlantis ships with PrimeIcons, PrimeTek’s modern icon library including a wide range of icons for your applications.',
        src: '/images/templates/babylon/features-animation-icons.png'
    },
];

const animationFeaturesData2 = [
    {
        id: 1,
        title: 'Dark / Light Themes',
        description: 'California offers a new mega option as an intuitive way to enhance the user experience across different devices.',
        src: '/images/templates/sakai/features-animation-darkmode.png'
    },
    {
        id: 2,
        title: '3 Different Menu Color ',
        description: 'Choose from Static and Slim menu orientations.',
        src: '/images/templates/sakai/features-animation-component-themes.png'
    },
    {
        id: 3,
        title: 'Special and Solid Themes',
        description: 'California Theme is highly customizable, there are 20 built-in themes and creating your own theme is a matter of defining couple of sass variables.',
        src: '/images/templates/atlantis/features-animation-orientations.png',
        type: 'inline-animation',
        inlineFeaturesData: [
            {
                id: 1,
                title: 'Static',
                src: '/images/templates/sakai/Static.png'
            },
            {
                id: 2,
                title: 'Overlay',
                src: '/images/templates/sakai/Overlay.png'
            },
        ]
    },
];

const apolloFeatures1Data = [
    {
        src: '/images/templates/sakai/sakai-github.png',
        title: 'Open Source and Free to Use',
        description: 'Landing, login and error pages are provided as template pages to get started with building your app in no time.'
    },
    {
        src: '/images/templates/sakai/sakai-ready.png',
        title: 'Ready to Use Pages',
        description: 'Landing, login and error pages are provided as template pages to get started with building your app in no time.'
    },
];

const templateHeroData = {
    logo: <SakaiLogo />,
    pattern: '/images/templates/sakai/sakai-hero-pattern.png',
    dashboard1: '/images/templates/sakai/sakai-hero-dashboard1.png',
    dashboard2: '/images/templates/sakai/sakai-hero-dashboard2.png',
    description: 'A modern and easy to use premium application template with various color schemes.Based on flat design language, it is fully responsive, touch optimized, built with SASS, CSS3 and HTML5.',
    liveHref: 'https://www.primefaces.org/atlantis-react/',
    docHref: 'https://www.primefaces.org/atlantis-react/documentation/'
};

const SakaiSeparator = () => {
    return (
        <TemplateSeparator
            separatorLogo={
                <svg width="33" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1963_1779)">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.2922 11.548C10.2879 11.642 10.2857 11.7366 10.2857 11.8317C10.2857 15.2102 13.0245 17.949 16.4031 17.949C19.7816 17.949 22.5204 15.2102 22.5204 11.8317C22.5204 11.7343 22.5182 11.6375 22.5137 11.5413C23.1234 11.448 23.7316 11.3408 24.3377 11.2196L24.4012 11.2069C24.4171 11.4131 24.4252 11.6214 24.4252 11.8317C24.4252 16.2621 20.8335 19.8538 16.4031 19.8538C11.9726 19.8538 8.38093 16.2621 8.38093 11.8317C8.38093 11.6244 8.38878 11.4189 8.40425 11.2156L8.42421 11.2196C9.04486 11.3437 9.66768 11.4532 10.2922 11.548ZM19.9852 6.87227C18.9784 6.14373 17.7409 5.71429 16.4031 5.71429C15.0628 5.71429 13.8233 6.14526 12.8154 6.87619C11.9976 6.7939 11.1819 6.68324 10.3699 6.54423C11.8402 4.86785 13.998 3.80952 16.4031 3.80952C18.8049 3.80952 20.9603 4.86507 22.4304 6.5376C21.6185 6.67752 20.803 6.7891 19.9852 6.87227ZM26.2801 10.8311C26.3131 11.1602 26.3299 11.4939 26.3299 11.8317C26.3299 17.3141 21.8855 21.7585 16.4031 21.7585C10.9206 21.7585 6.47617 17.3141 6.47617 11.8317C6.47617 11.4969 6.49274 11.166 6.52509 10.8398L4.64954 10.4646C4.59793 10.9132 4.57141 11.3693 4.57141 11.8317C4.57141 18.3661 9.86863 23.6633 16.4031 23.6633C22.9375 23.6633 28.2347 18.3661 28.2347 11.8317C28.2347 11.3663 28.2078 10.9073 28.1556 10.456L26.2801 10.8311ZM26.5411 5.72846L24.5306 6.13055C22.7346 3.57493 19.7639 1.90476 16.4031 1.90476C13.0388 1.90476 10.0654 3.57831 8.27004 6.13832L6.26021 5.73634C8.33027 2.29907 12.0982 0 16.4031 0C20.7046 0 24.4701 2.29555 26.5411 5.72846Z" fill="black" />
                        <mask id="mask0_1963_1779" style={{maskType:"luminance"}} maskUnits="userSpaceOnUse" x="0" y="5" width="33" height="7">
                            <path d="M16.1905 11.019C6.30316 11.5166 0 5.33325 0 5.33325C0 5.33325 9.90476 8.75184 16.1905 8.75184C22.4762 8.75184 32.381 5.33325 32.381 5.33325C32.381 5.33325 26.0778 10.5216 16.1905 11.019Z" fill="var(--surface-0)" />
                        </mask>
                        <g mask="url(#mask0_1963_1779)">
                            <path d="M-2.14577e-05 5.33321L2.23719 -1.14871L-4.802 10.2283L-2.14577e-05 5.33321ZM32.3809 5.33321L36.7388 10.6275L30.1437 -1.14871L32.3809 5.33321ZM-2.14577e-05 5.33321C-4.802 10.2283 -4.79998 10.2302 -4.79796 10.2322C-4.79728 10.2329 -4.79522 10.2349 -4.79381 10.2363C-4.79095 10.2391 -4.78802 10.2419 -4.78497 10.2449C-4.77888 10.2508 -4.77236 10.2572 -4.76543 10.2639C-4.7516 10.2773 -4.73606 10.2922 -4.71888 10.3086C-4.68455 10.3415 -4.64353 10.3802 -4.59591 10.4245C-4.50075 10.5129 -4.37903 10.6236 -4.23137 10.7531C-3.93648 11.0118 -3.53589 11.3474 -3.03474 11.732C-2.03641 12.4979 -0.615084 13.4762 1.18738 14.4273C4.78444 16.3254 10.0575 18.1934 16.5351 17.8675L15.8458 4.17054C12.4361 4.34209 9.61392 3.36727 7.58756 2.29804C6.57834 1.76549 5.80592 1.22908 5.31343 0.85122C5.06916 0.663811 4.90005 0.520257 4.81164 0.442706C4.76764 0.404093 4.74428 0.382436 4.74226 0.380585C4.74131 0.379678 4.74573 0.383773 4.75564 0.393232C4.76059 0.397963 4.76691 0.404043 4.77461 0.411514C4.77849 0.415247 4.78268 0.419335 4.78722 0.423773C4.7895 0.42599 4.79186 0.428299 4.79434 0.430699C4.79556 0.431895 4.79746 0.433761 4.79807 0.43436C4.79998 0.436249 4.80196 0.438158 -2.14577e-05 5.33321ZM16.5351 17.8675C22.6009 17.5623 27.5487 15.8209 30.9779 14.1631C32.6985 13.3313 34.0638 12.5078 35.0305 11.8669C35.515 11.5457 35.9027 11.2682 36.1884 11.0553C36.3313 10.9488 36.449 10.8582 36.5409 10.7861C36.5869 10.75 36.6264 10.7186 36.6594 10.6921C36.6759 10.6788 36.6908 10.6667 36.704 10.656C36.7106 10.6506 36.7168 10.6455 36.7226 10.6408C36.7255 10.6384 36.7283 10.6361 36.731 10.6339C36.7324 10.6328 36.7343 10.6312 36.735 10.6306C36.7369 10.6291 36.7388 10.6275 32.3809 5.33321C28.0231 0.0389223 28.0249 0.0374033 28.0268 0.0359046C28.0273 0.0354308 28.0291 0.0339496 28.0303 0.0330015C28.0326 0.0311043 28.0348 0.0292833 28.0369 0.0275381C28.0412 0.0240475 28.0451 0.0208594 28.0487 0.0179693C28.0558 0.0121893 28.0615 0.00759983 28.0657 0.00416553C28.0743 -0.00270092 28.0772 -0.0049597 28.0745 -0.00289261C28.0692 0.00126016 28.0419 0.0226092 27.9932 0.0589169C27.8955 0.131695 27.7136 0.263387 27.4526 0.436401C26.9285 0.783868 26.1001 1.28848 25.0089 1.81595C22.8147 2.8767 19.6673 3.97824 15.8458 4.17054L16.5351 17.8675ZM32.3809 5.33321C30.1437 -1.14871 30.1443 -1.14891 30.1449 -1.1491C30.145 -1.14915 30.1455 -1.14932 30.1457 -1.14941C30.1463 -1.14959 30.1466 -1.14972 30.1469 -1.1498C30.1474 -1.14997 30.1476 -1.15005 30.1469 -1.1498C30.1455 -1.14932 30.1414 -1.14792 30.1354 -1.14587C30.1234 -1.14177 30.1023 -1.13458 30.0725 -1.12451C30.0129 -1.10437 29.9187 -1.07275 29.7931 -1.03129C29.5418 -0.948296 29.1661 -0.826311 28.692 -0.678322C27.7402 -0.381252 26.4101 0.0148826 24.9049 0.40927C21.7162 1.24472 18.3934 1.89467 16.1905 1.89467V15.6089C20.2733 15.6089 25.0456 14.5496 28.3808 13.6758C30.1375 13.2155 31.6764 12.757 32.7782 12.4131C33.3309 12.2406 33.7781 12.0955 34.093 11.9915C34.2505 11.9395 34.3753 11.8977 34.4638 11.8677C34.5081 11.8528 34.5434 11.8408 34.5692 11.8319C34.5822 11.8275 34.5927 11.8239 34.6009 11.8211C34.605 11.8196 34.6085 11.8185 34.6114 11.8175C34.6128 11.817 34.6141 11.8165 34.6152 11.8161C34.6158 11.816 34.6165 11.8157 34.6168 11.8156C34.6175 11.8153 34.6181 11.8151 32.3809 5.33321ZM16.1905 1.89467C13.9876 1.89467 10.6647 1.24472 7.47605 0.40927C5.9708 0.0148826 4.6407 -0.381252 3.68894 -0.678322C3.21482 -0.826311 2.83914 -0.948296 2.58778 -1.03129C2.46221 -1.07275 2.36801 -1.10437 2.30842 -1.12451C2.27863 -1.13458 2.25752 -1.14177 2.24551 -1.14587C2.23951 -1.14792 2.23578 -1.1492 2.23437 -1.14968C2.23367 -1.14993 2.2339 -1.14985 2.23437 -1.14968C2.23461 -1.1496 2.23463 -1.14959 2.23516 -1.14941C2.23543 -1.14932 2.23594 -1.14915 2.23607 -1.1491C2.23661 -1.14891 2.23719 -1.14871 -2.14577e-05 5.33321C-2.23724 11.8151 -2.23658 11.8153 -2.23588 11.8156C-2.2356 11.8157 -2.23487 11.816 -2.2343 11.8161C-2.23317 11.8165 -2.23188 11.817 -2.23044 11.8175C-2.22757 11.8185 -2.22409 11.8196 -2.22001 11.8211C-2.21184 11.8239 -2.20127 11.8275 -2.18834 11.8319C-2.16249 11.8408 -2.12721 11.8528 -2.08292 11.8677C-1.99435 11.8977 -1.86962 11.9395 -1.71208 11.9915C-1.39722 12.0955 -0.949987 12.2406 -0.397313 12.4131C0.704504 12.757 2.24344 13.2155 4.00009 13.6758C7.33529 14.5496 12.1076 15.6089 16.1905 15.6089V1.89467Z" fill="black" />
                        </g>
                    </g>
                    <defs>
                        <clipPath id="clip0_1963_1779">
                            <rect width="32.381" height="24" fill="var(--surface-0)" />
                        </clipPath>
                    </defs>
                </svg>
            }
        />
    );
};

const BabylonPage = () => {
    const featuresAnimationTitle = (
        <h2>
            Features that the <br />
            Sakai template gives you
        </h2>
    );

    return (
        <div className="sakai template">
            <TemplateHero {...templateHeroData} />
            <SakaiSeparator />
            <TemplateFeatures featuresData={apolloFeatures1Data} displayType="horizontal" />
            <SakaiSeparator />
            <TemplateFeaturesAnimation featuresData={animationFeaturesData2} title={featuresAnimationTitle} animationSeconds={3000} />
            <SakaiSeparator />
            <TemplateConfiguration
                title="Vue.js App with No Configuration"
                description="Atlantis is powered by Angular CLI to get started in no time following the best practices like service based component interaction modular design and strict mode support"
            />
            <SakaiSeparator />
            <TemplateFeaturesAnimation featuresData={animationFeaturesData1} />
            <SakaiSeparator />
            <TemplateFeatures featuresData={apolloFeatures2Data} displayType="vertical" />
            <SakaiSeparator />
            <TemplateRelated relatedData={apolloRelatedData} />
        </div>
    );
};

export default BabylonPage;
