import { GTagManager } from '@/components/analytics/analytics';
import { AppConfigProvider } from '@/components/context/AppConfigContext';
import Layout from '@/components/layout/layout';
import '@docsearch/css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '../styles/demo/demo.scss';
import '../styles/layout/layout.scss';

function AppContent({ component: Component, pageProps }) {
    if (Component.getLayout) {
        return (
            <AppConfigProvider themeStorageKey="primeTheme">
                {Component.getLayout(<Component {...pageProps} />)}
            </AppConfigProvider>
        );
    }

    return (
        <AppConfigProvider themeStorageKey="appTheme">
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AppConfigProvider>
    );
}

export default function MyApp({ Component, pageProps }) {
    const isProduction = process.env.NODE_ENV === 'production';

    return (
        <>
            {isProduction && <GTagManager />}
            <AppContent component={Component} pageProps={pageProps} />
        </>
    );
}
