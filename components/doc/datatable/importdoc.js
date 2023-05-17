import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ImportDoc(props) {
    const code = {
        basic: `
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideCodeSandbox hideStackBlitz />
        </>
    );
}
