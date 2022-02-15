import '../styles/layout/layout.scss';
import '../styles/primereact.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import '../styles/demo/demo.scss';
import Layout from '../components/layout/layout';
import { useState } from 'react';

export default function MyApp({ Component }) {
    const [dark, setDark] = useState(true);

    const props = {
        dark: dark,
        onColorSchemeChange: (value) => {
            setDark(value);
        }
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