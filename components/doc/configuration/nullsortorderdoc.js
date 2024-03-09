import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function NullSortOrderDoc(props) {
    const code = {
        basic: `
//_app.js
import { PrimeReactProvider } from 'primereact/api';

export default function MyApp({ Component }) {
    const value = {
        nullSortOrder: 1,
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
                    Determines how <i>null</i> values are sorted. The default value of <i>1</i> means sort like Excel with all NULL values at the bottom of the list. A value of <i>-1</i> sorts NULL at the top of the list in ascending mode and at the
                    bottom of the list in descending mode.
                </p>
            </DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideStackBlitz />
        </>
    );
}
