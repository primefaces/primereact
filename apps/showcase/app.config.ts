import Noir from '@/themes/noir';
import type { AppConfig } from '@/types/App.types';

const appConfig: AppConfig = {
    preset: 'Aura',
    primary: 'noir',
    isDarkTheme: false,
    isNewsActive: false,
    isRTL: false,
    storageKey: 'primereact',
    versions: [
        {
            name: 'v11',
            url: 'https://v11.primereact.org'
        },
        {
            name: 'v10',
            url: 'https://primereact.org'
        },
        {
            name: 'v9',
            url: 'https://v9.primereact.org'
        }
    ],
    primereact: {
        theme: {
            preset: Noir,
            options: {
                cssLayer: {
                    name: 'primereact',
                    order: 'theme, base, primereact'
                },
                darkModeSelector: '.p-dark'
            }
        }
    },
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
