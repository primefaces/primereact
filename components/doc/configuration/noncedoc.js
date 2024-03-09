import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function NonceDoc(props) {
    const code = {
        basic: `
//_app.js
import { PrimeReactProvider } from 'primereact/api';

export default function MyApp({ Component }) {
    const value = {
        nonce: '.........',
        ...
    };

    return (
        <PrimeReactProvider value={value}>
            <App />
        </PrimeReactProvider>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    The <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/nonce">nonce</a> value to use on dynamically generated style elements.
                </p>
            </DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideStackBlitz />
        </>
    );
}
