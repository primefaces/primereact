import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function ContextDoc(props) {
    const code = {
        basic: `
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
        `
    };

    const code2 = {
        basic: `
// _app.js
import { PrimeReactProvider } from 'primereact/api';

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
            <DocSectionCode code={code} hideToggleCode import hideStackBlitz />
            <div className="doc-section-description">
                <p>
                    The <i>PrimeReactProvider</i> component is used to wrap the application and the <i>PrimeReactContext</i> is used to access the configuration options.
                </p>
            </div>
            <DocSectionCode code={code2} hideToggleCode import hideStackBlitz />
        </>
    );
}
