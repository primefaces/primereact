import '../styles/layout/layout.scss';
import '../styles/primereact.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import '../styles/demo/demo.scss';
import Layout from '../components/layout/layout';
import { useState } from 'react';

export default function MyApp({ Component }) {
    const [dark, setDark] = useState(false);
    const [theme, setTheme] = useState('lara-light-indigo');

    const props = {
        dark: dark,
        theme: theme,
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
                <Component />
            </Layout>
        )
    }
    
}