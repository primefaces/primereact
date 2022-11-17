import { Button } from '../../lib/button/Button';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function SizesDoc(props) {
    const code = {
        basic: `
<Button label="Small" icon="pi pi-check" className="p-button-sm" />
<Button label="Normal" icon="pi pi-check" className="p-button" />
<Button label="Large" icon="pi pi-check" className="p-button-lg" />
        `,
        javascript: `
import { Button } from 'primereact/button';

export default function SizesDoc() {

    return (
        <Button label="Small" icon="pi pi-check" className="p-button-sm" />
        <Button label="Normal" icon="pi pi-check" className="p-button" />
        <Button label="Large" icon="pi pi-check" className="p-button-lg" />
    )
}
        `,
        typescript: `
import { Button } from 'primereact/button';

export default function SizesDoc() {

    return (
        <Button label="Small" icon="pi pi-check" className="p-button-sm" />
        <Button label="Normal" icon="pi pi-check" className="p-button" />
        <Button label="Large" icon="pi pi-check" className="p-button-lg" />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Sizes</p>
            </DocSectionText>
            <div className="card flex flex-column lg:flex-row align-items-center justify-content-center">
                <Button label="Small" icon="pi pi-check" className="p-button-sm" />
                <Button label="Normal" icon="pi pi-check" className="p-button" />
                <Button label="Large" icon="pi pi-check" className="p-button-lg" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
