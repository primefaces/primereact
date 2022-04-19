import '../styles/layout/layout.scss';
import '../styles/primereact.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import '../styles/demo/demo.scss';
import Layout from '../components/layout/layout';
import { useEffect, useRef, useState } from 'react';
import fetchNews from '../service/NewsService';
import { useStorage } from '../components/lib/hooks/useStorage';

export default function MyApp({ Component }) {
    const [dark, setDark] = useState(false);
    const [theme, setTheme] = useStorage('lara-light-indigo', 'primereact-showcase-theme');
    const [storedNews, setStoredNews] = useStorage('', 'primereact-news');
    const [newsActive, setNewsActive] = useState(false);
    const announcement = useRef(null);

    useEffect(() => {
        fetchNews().then(data => {
            if (data) {
                announcement.current = data;
    
                if (storedNews) {
                    if (storedNews.hiddenNews && storedNews.hiddenNews !== data.id) {
                        setNewsActive(true);
                    }
                }
                else {
                    setNewsActive(true);
                }
            }
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            setStoredNews(item);
        },
        onThemeChange: (newTheme, dark) => {
            setDark(dark);
            changeTheme(newTheme);
        }
    }

    const changeTheme = (newTheme) => {
        const elementId = 'theme-link';
        const linkElement = document.getElementById('theme-link');
        const cloneLinkElement = linkElement.cloneNode(true);
        const newThemeUrl = linkElement.getAttribute('href').replace(theme, newTheme);

        cloneLinkElement.setAttribute('id', elementId + '-clone');
        cloneLinkElement.setAttribute('href', newThemeUrl);
        cloneLinkElement.addEventListener('load', () => {
            linkElement.remove();
            cloneLinkElement.setAttribute('id', elementId);
        });
        
        linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);
        setTheme(newTheme);
    }

    if (Component.getLayout) {
        return Component.getLayout(<Component {...props} />);
    }
    else {
        return (
            <Layout {...props}>
                <Component {...props}/>
            </Layout>
        )
    }
    
}