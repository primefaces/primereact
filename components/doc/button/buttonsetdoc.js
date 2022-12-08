import { Button } from '../../lib/button/Button';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function ButtonSetDoc(props) {
    const code = {
        basic: `
<Button label="Save" icon="pi pi-check" />
<Button label="Delete" icon="pi pi-trash" />
<Button label="Cancel" icon="pi pi-times" />
        `,
        javascript: `
import { Button } from 'primereact/button';

export default function ButtonSetDoc() {

    return (
        <Button label="Save" icon="pi pi-check" />
        <Button label="Delete" icon="pi pi-trash" />
        <Button label="Cancel" icon="pi pi-times" />
    )
}
        `,
        typescript: `
import { Button } from 'primereact/button';

export default function ButtonSetDoc() {

    return (
        <Button label="Save" icon="pi pi-check" />
        <Button label="Delete" icon="pi pi-trash" />
        <Button label="Cancel" icon="pi pi-times" />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Button Set</p>
            </DocSectionText>
            <div className="card flex flex-column lg:flex-row align-items-center justify-content-center p-buttonset">
                <Button label="Save" icon="pi pi-check" />
                <Button label="Delete" icon="pi pi-trash" />
                <Button label="Cancel" icon="pi pi-times" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
