import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';

export function ButtonSetDoc(props) {
    const code = {
        basic: `
<span className="p-buttonset">
    <Button label="Save" icon="pi pi-check" />
    <Button label="Delete" icon="pi pi-trash" />
    <Button label="Cancel" icon="pi pi-times" />
</span>
        `,
        javascript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function ButtonSetDemo() {
    return (
        <div className="card flex justify-content-center">
            <span className="p-buttonset">
                <Button label="Save" icon="pi pi-check" />
                <Button label="Delete" icon="pi pi-trash" />
                <Button label="Cancel" icon="pi pi-times" />
            </span>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function ButtonSetDemo() {
    return (
        <div className="card flex justify-content-center">
            <span className="p-buttonset">
                <Button label="Save" icon="pi pi-check" />
                <Button label="Delete" icon="pi pi-trash" />
                <Button label="Cancel" icon="pi pi-times" />
            </span>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Multiple buttons are grouped when wrapped inside an element with <i>p-buttonset</i> class.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <span className="p-buttonset">
                    <Button label="Save" icon="pi pi-check" />
                    <Button label="Delete" icon="pi pi-trash" />
                    <Button label="Cancel" icon="pi pi-times" />
                </span>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
