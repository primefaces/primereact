import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function AppendToDoc(props) {
    const code = {
        basic: `
//_app.js
import { PrimeReactProvider } from 'primereact/api';

export default function MyApp({ Component }) {
    const value = {
        appendTo: 'self',
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
                    For components with an overlay like a dropdown, popups can be mounted either into the component or DOM element instance using this option. Valid values are any DOM Element like document body and <i>self</i>. By default all popups
                    are appended to document body via Portals.
                </p>
            </DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideStackBlitz />
        </>
    );
}
