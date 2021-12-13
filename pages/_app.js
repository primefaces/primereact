import '../styles/layout/layout.scss';
import '../styles/primereact.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import '../styles/demo/demo.scss';
import Layout from '../components/layout/layout';

export default function MyApp({ Component, pageProps }) {
    
    if (Component.getLayout) {
        return Component.getLayout(<Component {...pageProps} />);
    }
    else {
        return (
            <Layout>
                <Component {...pageProps} />
            </Layout>
        )
    }
    
}