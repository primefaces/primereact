import '@docsearch/css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import { useEffect, useRef, useState } from 'react';
import Layout from '../components/layout/layout';
import fetchNews from '../service/NewsService';
import '../styles/layout/layout.scss';
// prettier-ignore
import '../styles/primereact.css';
// prettier-ignore
import PrimeReact from '../components/lib/api/PrimeReact';
import '../styles/demo/demo.scss';

export default function MyApp({ Component }) {
    const [dark, setDark] = useState(false);
    const [theme, setTheme] = useState('lara-light-indigo');
    const [newsActive, setNewsActive] = useState(false);
    const storageKey = 'primereact-news';
    const announcement = useRef(null);

    useEffect(() => {
        if (process.env.NODE_ENV === 'production') {
            fetchNews().then((data) => {
                if (data) {
                    announcement.current = data;

                    const itemString = localStorage.getItem(storageKey);

                    if (itemString) {
                        const item = JSON.parse(itemString);

                        if (item.hiddenNews && item.hiddenNews !== data.id) {
                            setNewsActive(true);
                        }
                    } else {
                        setNewsActive(true);
                    }
                }
            });
        }
    }, []);

    const props = {
        dark: dark,
        theme: theme,
        newsActive: newsActive && announcement.current,
        announcement: announcement.current,
        onNewsClose: () => {
            setNewsActive(false);

            const item = {
                hiddenNews: announcement.current.id
            };

            localStorage.setItem(storageKey, JSON.stringify(item));
        },
        onThemeChange: (newTheme, dark) => {
            PrimeReact.changeTheme(theme, newTheme, 'theme-link', () => {
                setDark(dark);
                setTheme(newTheme);
            });
        },
        onTableThemeChange: (currentTableTheme, newTableTheme) => {
            changeTableTheme(currentTableTheme, newTableTheme);
        }
    };

    const changeTableTheme = (currentTableTheme, newTableTheme) => {
        if (currentTableTheme !== newTableTheme) {
            const elementId = 'landing-table-theme-link';
            const linkElement = document.getElementById(elementId);
            const cloneLinkElement = linkElement.cloneNode(true);
            const newThemeUrl = linkElement.getAttribute('href').replace(currentTableTheme, newTableTheme);

            cloneLinkElement.setAttribute('id', elementId + '-clone');
            cloneLinkElement.setAttribute('href', newThemeUrl);
            cloneLinkElement.addEventListener('load', () => {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', elementId);
            });

            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);
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
