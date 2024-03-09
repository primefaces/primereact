import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function FilterMatchModeDoc(props) {
    const code = {
        basic: `
//_app.js
import { PrimeReactProvider } from 'primereact/api';

export default function MyApp({ Component }) {
    const value = {
        filterMatchMode: {
            text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
            numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
            date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
         },
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
                <p>Default filter modes to display on DataTable filter menus.</p>
            </DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideStackBlitz />
        </>
    );
}
