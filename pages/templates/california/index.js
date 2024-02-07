import TemplateConfiguration from '@/components/templates/TemplateConfiguration';
import TemplateFeatures from '@/components/templates/TemplateFeatures';
import TemplateIntro from '@/components/templates/TemplateIntro';
import TemplateLicense from '@/components/templates/TemplateLicense';
import TemplateRelated from '@/components/templates/TemplateRelated';
import TemplateSeparator from '@/components/templates/TemplateSeparator';
import TemplateFeaturesAnimation from '@/components/templates/templateFeaturesAnimation';
import TemplateHero from '@/components/templates/templateHero/TemplateHero';
import CaliforniaLogo from './CaliforniaLogo';

const features2Data = [
    {
        title: 'Fully Responsive',
        description: 'Diamond is crafted to provide optimal viewing and interaction experience for a wide range of devices.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/california/california-features2-responsive.png'
    },
    {
        title: 'Cross Browser Compatible',
        description: 'First class support for Firefox, Safari, Chrome and Edge.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/apollo/apollo-features2-compatible.png'
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
        src: 'https://primefaces.org/cdn/primereact/images/templates/california/california-features2-ready.png'
    },
    {
        title: 'Mobile Experience',
        description: 'Touch optimized enhanced mobile experience with responsive design.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/california/california-features2-mobile.png'
    }
];

const relatedData = [
    {
        src: 'https://primefaces.org/cdn/primereact/images/templates/babylon-react.jpg',
        href: 'https://www.primefaces.org/layouts/babylon-react'
    },
    {
        src: 'https://primefaces.org/cdn/primereact/images/templates/apollo-react.jpg',
        href: '/templates/apollo'
    },
    {
        src: 'https://primefaces.org/cdn/primereact/images/templates/roma-react.jpg',
        href: 'https://www.primefaces.org/layouts/roma-react'
    }
];

const animationFeaturesData1 = [
    {
        id: 1,
        title: 'PrimeFlex CSS Utilities',
        description: 'PrimeFlex is a CSS utility library featuring various helpers such as a grid system, flexbox, spacing, elevation and more.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/california/features-animation-utilities.png'
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
        src: 'https://primefaces.org/cdn/primereact/images/templates/california/features-animation-blocks.png'
    },
    {
        id: 3,
        title: 'PrimeIcons',
        description: 'Diamond ships with PrimeIcons, PrimeTek’s modern icon library including a wide range of icons for your applications.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/california/features-animation-icons.png'
    }
];

const animationFeaturesData2 = [
    {
        id: 1,
        title: 'Mega Menu',
        description: 'California offers a new mega option as an intuitive way to enhance the user experience across different devices.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/california/features-animation-mega.png'
    },
    {
        id: 2,
        title: 'Special and Solid Themes',
        description: 'California Theme is highly customizable, there are 20 built-in themes and creating your own theme is a matter of defining couple of sass variables.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/california/features-animation-theme.png'
    },
    {
        id: 3,
        title: '3 Different Menu Color ',
        description: 'Choose from Static and Slim menu orientations.',
        src: 'https://primefaces.org/cdn/primereact/images/templates/california/features-animation-color.png'
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
    logo: <CaliforniaLogo />,
    pattern: 'https://primefaces.org/cdn/primereact/images/templates/california/california-hero-pattern.png',
    dashboard1: 'https://primefaces.org/cdn/primereact/images/templates/california/california-hero-dashboard1.png',
    dashboard2: 'https://primefaces.org/cdn/primereact/images/templates/california/california-hero-dashboard2.png',
    description: 'A modern and easy to use premium application template with various color schemes.Based on flat design language, it is fully responsive, touch optimized, built with SASS, CSS3 and HTML5.',
    liveHref: 'https://diamond.primereact.org',
    docHref: 'https://diamond.primereact.org/documentation'
};

const CaliforniaSeparator = () => {
    return (
        <TemplateSeparator
            separatorLogo={
                <svg width="190" height="190" viewBox="0 0 190 190" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_3164_88544)">
                        <path
                            d="M109.25 24.7C109.818 24.9155 110.386 25.1311 110.972 25.3531C112.1 26.125 112.1 26.125 112.516 27.4016C112.535 27.764 112.555 28.1265 112.575 28.5C110.595 29.3762 108.625 30.1587 106.569 30.8461C99.2378 33.306 92.2219 36.5601 85.4999 40.375C86.0289 40.3928 86.558 40.4105 87.103 40.4288C100.283 40.957 112.264 44.4025 121.6 54.15C123.112 55.9124 124.487 57.7013 125.4 59.85C125.222 61.1562 125.222 61.1562 124.925 62.225C123.078 62.3359 121.987 62.0617 120.353 61.2156C110.099 56.3878 98.165 54.0522 86.9249 53.2C87.2072 53.2986 87.4894 53.3972 87.7803 53.4987C96.3472 56.683 103.287 63.0649 107.35 71.25C108.243 73.2715 109.013 75.3333 109.725 77.425C110.172 77.4538 110.619 77.4826 111.079 77.5122C111.967 77.5719 111.967 77.5719 112.872 77.6328C113.748 77.6907 113.748 77.6907 114.642 77.7497C116.192 77.8842 117.695 78.0949 119.225 78.375C114.953 74.6507 110.534 71.2212 105.925 67.925C106.082 67.4547 106.238 66.9845 106.4 66.5C109.178 65.1111 113.729 65.7294 116.659 66.4388C123.772 69.0246 128.951 73.6687 132.525 80.275C132.956 79.8537 133.387 79.4325 133.831 78.9984C139.851 73.8441 148.287 73.5318 155.8 74.1C160.605 74.7461 164.745 76.5524 168.543 79.531C168.727 79.7765 168.911 80.022 169.1 80.275C168.897 81.2715 168.897 81.2715 168.625 82.175C168.334 82.17 168.044 82.165 167.744 82.1599C162.255 82.0792 156.816 82.1121 151.347 82.6203C150.901 82.6616 150.456 82.7028 149.997 82.7453C147.839 82.9099 147.839 82.9099 145.825 83.6C146.188 83.6931 146.551 83.7861 146.925 83.882C156.325 86.5063 164.383 91.8337 169.575 100.225C170.811 102.636 171.586 104.619 171.475 107.35C171.005 107.507 170.534 107.663 170.05 107.825C168.914 107.087 168.914 107.087 167.556 105.984C161.336 101.118 154.252 97.6428 147.25 94.05C147.093 94.2067 146.936 94.3635 146.775 94.525C146.982 94.7442 147.189 94.9634 147.402 95.1893C152.718 101.012 155.472 107.478 155.436 115.369C155.299 117.192 154.922 118.21 153.9 119.7C152.614 119.223 152.086 118.9 151.391 117.694C151.2 117.249 151.009 116.804 150.812 116.345C147.326 109.032 140.49 98.2699 133 94.525C129.98 108.123 130.006 121.945 129.675 135.85C145.82 135.85 161.965 135.85 178.6 135.85C178.757 134.753 178.913 133.655 179.075 132.525C179.606 131.317 180.265 130.322 180.975 129.2C181.759 129.357 182.542 129.513 183.35 129.675C183.085 132.156 182.26 134.001 181.123 136.177C180.95 136.513 180.777 136.85 180.599 137.196C180.251 137.869 179.902 138.542 179.55 139.213C179.155 139.971 178.771 140.734 178.39 141.498C169.106 159.567 152.589 173.44 134.425 181.925C133.89 182.178 133.355 182.432 132.803 182.693C122.744 187.24 111.318 190.033 100.26 190.096C99.6751 190.102 99.6751 190.102 99.0781 190.107C83.0408 190.213 83.0408 190.213 75.9999 188.575C75.5883 188.486 75.1767 188.396 74.7526 188.304C51.0701 183.091 29.2664 168.913 15.8913 148.506C14.3353 146.063 12.8426 143.586 11.3999 141.075C11.177 140.689 10.9541 140.303 10.7245 139.906C10.3975 139.331 10.3975 139.331 10.064 138.745C9.86497 138.395 9.66597 138.046 9.46094 137.686C9.0249 136.8 9.0249 136.8 9.0249 135.85C9.3163 135.85 9.60769 135.849 9.90792 135.849C17.0172 135.842 24.1264 135.822 31.2356 135.787C34.6737 135.771 38.1117 135.759 41.5498 135.757C44.5485 135.756 47.547 135.746 50.5456 135.726C52.1316 135.716 53.7172 135.711 55.3033 135.714C57.0794 135.716 58.8547 135.704 60.6307 135.688C61.1494 135.692 61.668 135.696 62.2024 135.701C65.4533 135.653 67.8026 135.004 70.6955 133.509C71.7249 133 71.7249 133 72.6749 133C72.4561 108.607 71.4773 84.4946 67.9249 60.325C55.0086 66.2566 45.9371 82.4451 39.3996 94.4973C38.1088 96.8546 38.1088 96.8546 36.9312 97.3453C36.5197 97.36 36.5197 97.36 36.0999 97.375C34.4121 95.1769 34.4353 93.2347 34.4671 90.5766C34.4707 90.1558 34.4743 89.7351 34.478 89.3016C34.75 78.2491 40.0565 69.0693 47.0249 60.8C47.6605 60.0101 48.2945 59.219 48.9249 58.425C39.9432 61.3361 30.9046 64.755 23.0201 70.0372C21.126 71.2751 21.126 71.2751 19.7644 71.1238C19.386 70.9512 19.386 70.9512 18.9999 70.775C18.5251 67.2929 20.0083 64.6415 21.8499 61.75C23.4317 59.6972 25.2357 57.8706 27.0749 56.05C27.3768 55.7377 27.6786 55.4254 27.9896 55.1037C33.3716 49.9247 42.8485 45.1105 50.3499 45.0656C50.8202 45.0852 51.2904 45.1048 51.7749 45.125C51.7749 44.8115 51.7749 44.498 51.7749 44.175C51.3584 44.0406 50.9419 43.9061 50.5127 43.7676C49.083 43.279 47.7083 42.7371 46.3198 42.1433C45.8361 41.9384 45.3524 41.7336 44.854 41.5226C43.8541 41.097 42.8546 40.6702 41.8556 40.2423C39.1689 39.1071 36.5243 38.1144 33.7022 37.37C32.7749 37.05 32.7749 37.05 31.8249 36.1C31.8249 34.9719 31.8249 34.9719 32.2999 33.725C36.1045 30.3209 41.4799 30.0686 46.3588 30.2386C54.7702 30.7586 62.055 34.4084 67.9249 40.375C68.1606 40.0364 68.3964 39.6978 68.6393 39.3489C74.9403 30.4653 83.2703 25.6446 93.9441 23.4828C99.0507 22.7896 104.405 22.8425 109.25 24.7ZM75.0499 59.85C75.5228 62.8093 76.0305 65.7576 76.6159 68.6969C80.6392 88.9812 82.7873 109.523 84.0749 130.15C84.6174 130.162 85.1599 130.174 85.7188 130.187C95.6865 130.499 105.293 132.198 114.915 134.764C115.708 134.975 115.708 134.975 116.518 135.189C116.984 135.317 117.45 135.444 117.93 135.575C119.196 135.844 120.31 135.902 121.6 135.85C121.633 135.402 121.666 134.953 121.701 134.491C122.699 121.169 124.152 108.101 127.112 95.0472C127.344 93.9857 127.344 93.9857 127.3 92.625C124.126 92.8414 121.717 93.4565 118.869 94.8516C118.293 95.1295 118.293 95.1295 117.706 95.4131C111.146 98.6954 105.064 103.003 99.3986 107.647C98.1454 108.673 96.9674 109.556 95.4749 110.2C95.5841 103.869 99.1614 98.798 103.55 94.525C103.83 94.2293 104.111 93.9335 104.4 93.6288C106.958 91.1216 110.082 89.7236 113.282 88.2071C114.95 87.447 114.95 87.447 116.375 86.45C107.081 86.2259 97.9903 86.7223 88.8249 88.35C89.0046 86.7324 89.6902 85.8154 90.8678 84.7188C94.114 82.1293 97.727 80.5928 101.65 79.325C99.2924 76.3304 96.5703 74.0667 93.5749 71.725C93.093 71.3472 92.6111 70.9694 92.1146 70.5802C89.3262 68.4088 86.4996 66.2874 83.6593 64.1844C83.3713 63.9695 83.0834 63.7547 82.7867 63.5333C79.2532 60.8058 79.2532 60.8058 75.0499 59.85Z"
                            fill="var(--surface-900)"
                        />
                        <path
                            d="M175.75 47.5C177.227 47.6467 177.919 47.7298 178.893 48.8897C179.09 49.2639 179.288 49.638 179.491 50.0234C179.695 50.3939 179.9 50.7643 180.11 51.146C180.548 52.3862 180.475 52.9357 180.025 54.15C179.398 54.3067 178.771 54.4635 178.125 54.625C177.632 53.8884 177.149 53.1449 176.67 52.3984C176.4 51.9851 176.13 51.5718 175.852 51.146C175.183 49.6716 175.271 49.0181 175.75 47.5Z"
                            fill="var(--surface-900)"
                        />
                        <path
                            d="M188.1 74.1C189.191 78.5698 189.191 78.5698 189.05 80.75C188.266 80.9068 187.482 81.0635 186.675 81.225C185.534 78.943 185.435 76.6028 185.25 74.1C186.433 73.5084 186.87 73.7311 188.1 74.1Z"
                            fill="var(--surface-900)"
                        />
                        <path
                            d="M24.6998 30.875C25.7092 31.3203 25.7092 31.3203 26.5998 31.825C26.3149 33.5115 25.6628 34.4586 24.5514 35.7437C24.2691 36.0793 23.9868 36.4148 23.696 36.7605C22.7998 37.525 22.7998 37.525 20.8998 37.525C20.564 36.7142 20.564 36.7142 20.4248 35.625C21.0724 34.521 21.0724 34.521 21.9982 33.3984C22.3001 33.0243 22.602 32.6502 22.913 32.2647C23.7498 31.35 23.7498 31.35 24.6998 30.875Z"
                            fill="var(--surface-900)"
                        />
                        <path
                            d="M147.725 16.625C150.31 16.7866 151.97 18.3839 153.9 19.95C153.743 20.577 153.586 21.204 153.425 21.85C152.616 22.1896 152.616 22.1896 151.525 22.325C150.404 21.644 150.404 21.644 149.269 20.6922C148.889 20.3793 148.509 20.0664 148.118 19.744C147.832 19.4985 147.545 19.253 147.25 19C147.407 18.2162 147.563 17.4325 147.725 16.625Z"
                            fill="var(--surface-900)"
                        />
                        <path
                            d="M5.22515 123.025C6.13618 123.09 6.13618 123.09 7.12515 123.5C7.74302 124.519 7.74302 124.519 8.22358 125.786C8.38829 126.2 8.553 126.615 8.7227 127.042C9.04326 128.322 9.09647 128.952 8.55015 130.15C8.0799 130.307 7.60965 130.464 7.12515 130.625C5.70094 129.913 5.55277 128.818 5.03589 127.367C4.66328 126.041 4.61679 124.867 4.75015 123.5C4.9069 123.343 5.06365 123.187 5.22515 123.025Z"
                            fill="var(--surface-900)"
                        />
                        <path
                            d="M158.175 25.65C159.695 25.49 160.362 25.5166 161.63 26.4145C162.124 26.9178 162.124 26.9178 162.628 27.4313C162.965 27.7619 163.302 28.0926 163.649 28.4332C164.35 29.45 164.35 29.45 164.309 30.4965C163.875 31.35 163.875 31.35 162.45 31.825C161.496 31.1608 161.496 31.1608 160.491 30.2219C160.157 29.9145 159.822 29.6071 159.478 29.2905C158.176 28.0468 158.176 28.0468 158.146 26.8078C158.155 26.4258 158.165 26.0437 158.175 25.65Z"
                            fill="var(--surface-900)"
                        />
                        <path
                            d="M122.55 4.27502C125.122 4.49671 126.923 4.86544 129.2 6.17502C129.043 6.95877 128.887 7.74252 128.725 8.55002C126.218 8.29423 124.328 7.70764 122.075 6.65002C122.232 5.86627 122.389 5.08252 122.55 4.27502Z"
                            fill="var(--surface-900)"
                        />
                        <path
                            d="M108.775 0.950012C109.617 0.968113 110.459 1.02397 111.298 1.09845C111.986 1.15448 111.986 1.15448 112.688 1.21163C113.948 1.41662 114.804 1.73747 115.9 2.37501C115.743 3.00201 115.586 3.62901 115.425 4.27501C113.808 4.81524 112.682 4.67396 111.031 4.3047C110.607 4.21224 110.184 4.11978 109.747 4.02452C109.426 3.95044 109.105 3.87635 108.775 3.80001C108.593 3.01334 108.436 2.22084 108.3 1.42501C108.457 1.26826 108.613 1.11151 108.775 0.950012Z"
                            fill="var(--surface-900)"
                        />
                        <path
                            d="M185.725 115.425C186.734 115.603 186.734 115.603 187.625 115.9C187.216 120.839 187.216 120.839 186.2 122.55C185.191 122.936 185.191 122.936 184.3 123.025C183.554 121.862 183.319 121.322 183.536 119.934C183.67 119.524 183.805 119.113 183.944 118.691C184.074 118.278 184.203 117.865 184.337 117.44C184.775 116.375 184.775 116.375 185.725 115.425Z"
                            fill="var(--surface-900)"
                        />
                        <path
                            d="M181.925 60.325C182.552 60.325 183.179 60.325 183.825 60.325C184.159 61.0638 184.484 61.8068 184.805 62.5516C184.987 62.9649 185.168 63.3782 185.356 63.804C185.769 65.228 185.654 66.0406 185.25 67.45C184.152 67.45 184.152 67.45 182.875 66.975C181.753 65.0986 181.185 62.9822 181.45 60.8C181.607 60.6433 181.763 60.4865 181.925 60.325Z"
                            fill="var(--surface-900)"
                        />
                        <path
                            d="M35.5154 21.5197C35.865 21.6287 36.2146 21.7377 36.5748 21.85C36.5357 23.1823 36.2898 24.0063 35.4115 25.0173C34.0654 26.2466 33.2194 27.0183 31.3795 27.2531C31.0562 27.1943 30.7329 27.1356 30.3998 27.075C30.2489 25.5966 30.2269 24.9257 31.1476 23.724C31.4789 23.4387 31.8101 23.1534 32.1514 22.8594C32.4765 22.5667 32.8017 22.274 33.1367 21.9725C34.1998 21.375 34.1998 21.375 35.5154 21.5197Z"
                            fill="var(--surface-900)"
                        />
                        <path
                            d="M0.475098 95.475C2.22894 95.8038 2.22894 95.8038 2.8501 96.425C2.88458 97.4635 2.88987 98.5031 2.87979 99.5422C2.8755 100.111 2.87121 100.68 2.8668 101.266C2.86129 101.706 2.85578 102.146 2.8501 102.6C2.06343 102.782 1.27093 102.939 0.475098 103.075C9.76555e-05 102.6 9.76555e-05 102.6 -0.0629883 101.116C-0.0617637 100.508 -0.0605391 99.9008 -0.0592773 99.275C-0.060502 98.6676 -0.0617266 98.0602 -0.0629883 97.4344C9.76555e-05 95.95 9.76555e-05 95.95 0.475098 95.475Z"
                            fill="var(--surface-900)"
                        />
                        <path
                            d="M8.5498 54.625C9.33355 54.7818 10.1173 54.9385 10.9248 55.1C10.6906 57.4425 10.3083 59.2784 9.0248 61.275C7.98574 61.6906 7.98574 61.6906 7.1248 61.75C6.5793 60.9707 6.5793 60.9707 6.1748 59.85C6.60156 58.5215 6.60156 58.5215 7.30293 57.1187C7.53193 56.6509 7.76093 56.1831 7.99687 55.7012C8.17934 55.346 8.36181 54.9909 8.5498 54.625Z"
                            fill="var(--surface-900)"
                        />
                        <path
                            d="M15.6748 42.275C16.3018 42.275 16.9288 42.275 17.5748 42.275C18.0929 43.5796 18.0907 44.0734 17.5562 45.3996C17.3076 45.8185 17.059 46.2373 16.8029 46.6688C16.5616 47.0925 16.3204 47.5162 16.0718 47.9528C15.1998 48.925 15.1998 48.925 13.9121 49.066C13.3738 48.9962 13.3738 48.9962 12.8248 48.925C12.3498 47.5 12.3498 47.5 12.9101 46.3385C13.1758 45.9185 13.4416 45.4984 13.7154 45.0656C13.9787 44.6432 14.242 44.2207 14.5132 43.7854C15.1998 42.75 15.1998 42.75 15.6748 42.275Z"
                            fill="var(--surface-900)"
                        />
                        <path
                            d="M168.625 35.625C170.786 36.5595 172.406 38.2302 173.375 40.375C173.2 41.4308 173.2 41.4308 172.9 42.275C171.811 42.3845 171.811 42.3845 170.525 42.275C169.669 41.5272 169.669 41.5272 168.951 40.5234C168.587 40.0357 168.587 40.0357 168.215 39.5382C167.587 38.3019 167.572 37.4683 167.675 36.1C167.988 35.9432 168.302 35.7865 168.625 35.625Z"
                            fill="var(--surface-900)"
                        />
                        <path
                            d="M47.9752 13.775C47.9752 14.8141 47.9752 14.8141 47.5002 16.15C46.3407 17.1768 45.1281 17.9264 43.7002 18.525C42.2752 18.4359 42.2752 18.4359 41.3252 18.05C41.3252 17.0109 41.3252 17.0109 41.8002 15.675C43.6703 14.019 45.4805 12.7615 47.9752 13.775Z"
                            fill="var(--surface-900)"
                        />
                        <path
                            d="M135.375 9.5C138.086 9.7213 139.726 10.4203 142.025 11.875C141.868 12.6588 141.711 13.4425 141.55 14.25C139.514 14.4236 138.536 14.005 136.889 12.825C136.514 12.5605 136.138 12.296 135.752 12.0234C135.471 11.8177 135.189 11.612 134.9 11.4C135.057 10.773 135.213 10.146 135.375 9.5Z"
                            fill="var(--surface-900)"
                        />
                        <path
                            d="M73.625 2.85001C73.7817 3.32026 73.9385 3.79051 74.1 4.27501C73.625 5.22501 73.625 5.22501 72.6063 5.6462C72.1881 5.77172 71.7699 5.89724 71.3391 6.02657C70.9245 6.15576 70.51 6.28496 70.0829 6.41807C68.8423 6.65628 68.1543 6.58462 66.975 6.17501C66.8182 5.54801 66.6615 4.92101 66.5 4.27501C71.6084 2.01554 71.6084 2.01554 73.625 2.85001Z"
                            fill="var(--surface-900)"
                        />
                        <path
                            d="M2.64238 109.695C3.2155 109.71 3.2155 109.71 3.8002 109.725C4.43472 112.025 4.8705 113.969 4.7502 116.375C3.96645 116.532 3.1827 116.688 2.3752 116.85C1.53573 114.611 1.15097 112.569 0.950195 110.2C1.4252 109.725 1.4252 109.725 2.64238 109.695Z"
                            fill="var(--surface-900)"
                        />
                        <path
                            d="M187.625 101.65C188.252 101.807 188.879 101.964 189.525 102.125C189.99 103.928 189.965 105.213 189.555 107.023C189.462 107.443 189.37 107.862 189.275 108.294C189.201 108.61 189.127 108.925 189.05 109.25C188.266 109.093 187.483 108.937 186.675 108.775C186.572 106.192 186.626 104.086 187.625 101.65Z"
                            fill="var(--surface-900)"
                        />
                        <path
                            d="M87.3999 0.475025C87.5567 1.10202 87.7134 1.72902 87.8749 2.37502C86.2839 3.33718 85.0868 3.42828 83.2437 3.3844C82.7759 3.37583 82.3081 3.36725 81.8261 3.35842C81.2934 3.34189 81.2934 3.34189 80.7499 3.32502C80.453 2.4344 80.453 2.4344 80.2749 1.42502C81.3875 0.312385 81.7811 0.30268 83.303 0.148462C83.6692 0.107438 84.0353 0.0664134 84.4126 0.0241458C85.5058 -0.000106864 86.3582 0.158704 87.3999 0.475025Z"
                            fill="var(--surface-900)"
                        />
                        <path
                            d="M60.3248 7.12498C60.4816 7.59523 60.6383 8.06548 60.7998 8.54998C59.5173 10.1342 57.9343 10.7176 56.0498 11.4C54.6545 11.489 54.6545 11.489 53.6748 11.4C53.6748 10.6162 53.6748 9.83248 53.6748 9.02498C54.5132 8.6136 55.355 8.20917 56.1982 7.80779C56.6667 7.58185 57.1351 7.35591 57.6177 7.12312C58.8998 6.64998 58.8998 6.64998 60.3248 7.12498Z"
                            fill="var(--surface-900)"
                        />
                        <path
                            d="M3.8 67.925C4.58375 68.0817 5.3675 68.2385 6.175 68.4C5.93083 70.7603 5.58892 72.8129 4.75 75.05C3.96625 74.8932 3.1825 74.7365 2.375 74.575C2.42957 73.8225 2.49011 73.0705 2.55312 72.3187C2.58619 71.8999 2.61925 71.4811 2.65332 71.0496C2.84929 69.8294 3.18801 68.9897 3.8 67.925Z"
                            fill="var(--surface-900)"
                        />
                        <path
                            d="M187.625 87.875C188.409 88.0318 189.193 88.1885 190 88.35C190 90.5445 190 92.739 190 95C189.216 95 188.433 95 187.625 95C186.973 93.6961 187.087 92.6234 187.091 91.1703C187.09 90.6554 187.088 90.1404 187.087 89.6099C187.15 88.35 187.15 88.35 187.625 87.875Z"
                            fill="var(--surface-900)"
                        />
                        <path
                            d="M0.95 81.7C1.73375 81.8568 2.5175 82.0135 3.325 82.175C3.16825 84.2128 3.0115 86.2505 2.85 88.35C2.06625 88.5068 1.2825 88.6635 0.475 88.825C0.31825 88.6683 0.1615 88.5115 0 88.35C0.0304696 87.3196 0.0954735 86.2901 0.178125 85.2625C0.220986 84.6992 0.263848 84.1359 0.308008 83.5555C0.475 82.175 0.475 82.175 0.95 81.7Z"
                            fill="var(--surface-900)"
                        />
                        <path
                            d="M94.5249 0C96.8762 0 99.2274 0 101.65 0C101.65 0.78375 101.65 1.5675 101.65 2.375C101.175 2.85 101.175 2.85 100.036 2.91309C99.5691 2.91186 99.1025 2.91064 98.6218 2.90937C98.1577 2.9106 97.6935 2.91182 97.2153 2.91309C95.9499 2.85 95.9499 2.85 94.5249 2.375C94.5249 1.59125 94.5249 0.8075 94.5249 0Z"
                            fill="var(--surface-900)"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_3164_88544">
                            <rect width="190" height="190" fill="var(--surface-900)" />
                        </clipPath>
                    </defs>
                </svg>
            }
        />
    );
};

const CaliforniaPage = () => {
    const featuresAnimationTitle = <h2>Features</h2>;

    return (
        <div className="california template">
            <TemplateHero {...templateHeroData} />
            <CaliforniaSeparator />
            <TemplateLicense license={license} />
            <CaliforniaSeparator />
            <TemplateIntro
                title="Create Your Own California"
                description="Variety of options for the layout color palette are offered to define your own California experience."
                imageURL="https://primefaces.org/cdn/primereact/images/templates/california/california-intro.png"
            />
            <CaliforniaSeparator />
            <TemplateFeaturesAnimation featuresData={animationFeaturesData2} title={featuresAnimationTitle} />
            <CaliforniaSeparator />
            <TemplateConfiguration
                title="Next.js App with No Configuration"
                description="Diamond is powered by Angular CLI to get started in no time following the best practices like service based component interaction modular design and strict mode support"
            />
            <CaliforniaSeparator />
            <TemplateFeaturesAnimation featuresData={animationFeaturesData1} />
            <CaliforniaSeparator />
            <TemplateFeatures featuresData={features2Data} displayType="vertical" />
            <CaliforniaSeparator />
            <TemplateRelated relatedData={relatedData} />
        </div>
    );
};

export default CaliforniaPage;
