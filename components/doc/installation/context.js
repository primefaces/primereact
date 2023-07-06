import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ContextDoc(props) {
    const code = {
        basic: `
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
        `
    };

    const code2 = {
        basic: `
// _app.js
import { PrimeReactProvider } from 'primereact/context';

export default function MyApp({ Component, pageProps }) {
    return (
        <PrimeReactProvider>
            <Component {...pageProps} />
        </PrimeReactProvider>
    );
}        
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Configuration is managed by the <i>PrimeReactProvider</i> and <i>PrimeReactContext</i> imported from <i>primereact/api</i>.
                </p>
            </DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideCodeSandbox hideStackBlitz />
            <div className="doc-section-description">
                <p>
                    The <i>PrimeReactProvider</i> component is used to wrap the application and the <i>PrimeReactContext</i> is used to access the configuration options.
                </p>
            </div>
            <DocSectionCode code={code2} hideToggleCode import hideCodeSandbox hideStackBlitz />
        </>
    );
}
