import Layout from '@/components/layout/layout';
import PrimeReact from '@/components/lib/api/Api';
import '@docsearch/css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import { useContext, useState } from 'react';
import { GTagManager } from '../components/analytics/analytics';
import { PrimeReactContext, PrimeReactProvider } from '../components/lib/api/PrimeReactContext';
import '../styles/demo/demo.scss';
import '../styles/layout/layout.scss';

function Main({ component: Component }) {
    const [dark, setDark] = useState(false);
    const [theme, setTheme] = useState('lara-light-cyan');
    const context = useContext(PrimeReactContext);

    const props = {
        dark: dark,
        theme: theme,
        onThemeChange: (newTheme, dark) => {
            if (context) {
                context.changeTheme(theme, newTheme, 'theme-link', () => {
                    setDark(dark);
                    setTheme(newTheme);
                });
            } else {
                PrimeReact.changeTheme(theme, newTheme, 'theme-link', () => {
                    setDark(dark);
                    setTheme(newTheme);
                });
            }
        }
    };

    if (Component.getLayout) {
        return Component.getLayout(<Component {...props} />);
    } else {
        return (
            <Layout {...props}>
                <Component {...props} />
            </Layout>
        );
    }
}

export default function MyApp({ Component }) {
    const isProduction = process.env.NODE_ENV === 'production';

    return (
        <PrimeReactProvider>
            {isProduction && <GTagManager />}
            <Main component={Component} />
        </PrimeReactProvider>
    );
}
