import type { AppConfig } from '@/types/App.types';

const appConfig: AppConfig = {
    preset: 'Aura',
    primary: 'noir',
    isDarkTheme: false,
    isNewsActive: false,
    storageKey: 'primereact',
    versions: [
        {
            name: 'v11',
            url: 'https://primereact.org'
        }
    ],
    primereact: {},
    metadata: {
        title: 'PrimeReact - React UI Component Library',
        description: 'The ultimate collection of design-agnostic, flexible and accessible React UI Components.',
        robots: 'index, follow',
        twitter: {
            card: 'summary_large_image',
            title: 'PrimeReact | React UI Component Library',
            description: 'The ultimate collection of design-agnostic, flexible and accessible React UI Components.'
        },
        openGraph: {
            title: 'PrimeReact | React UI Component Library',
            description: 'The ultimate collection of design-agnostic, flexible and accessible React UI Components.',
            url: 'https://primereact.org',
            siteName: 'PrimeReact',
            images: [
                {
                    url: 'https://www.primefaces.org/static/social/primereact-preview.jpg'
                }
            ],
            type: 'website',
            ttl: 604800
        },
        icons: {
            icon: 'https://primefaces.org/cdn/primereact/images/favicon.ico'
        }
    }
};

export default appConfig;
