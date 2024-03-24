import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';
import { ButtonGroup } from '@/components/lib/buttongroup/ButtonGroup';

export function ButtonGroupDoc(props) {
    const code = {
        basic: `
<ButtonGroup>
    <Button label="Save" icon="pi pi-check" />
    <Button label="Delete" icon="pi pi-trash" />
    <Button label="Cancel" icon="pi pi-times" />
</ButtonGroup>
        `,
        javascript: `
import React from 'react'; 
import { Button } from 'primereact/button';
import { ButtonGroup } from 'primereact/buttongroup';

export default function ButtonSetDemo() {
    return (
        <div className="card flex justify-content-center">
            <ButtonGroup>
                <Button label="Save" icon="pi pi-check" />
                <Button label="Delete" icon="pi pi-trash" />
                <Button label="Cancel" icon="pi pi-times" />
            </ButtonGroup>
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Button } from 'primereact/button';
import { ButtonGroup } from 'primereact/buttongroup';

export default function ButtonSetDemo() {
    return (
        <div className="card flex justify-content-center">
            <ButtonGroup>
                <Button label="Save" icon="pi pi-check" />
                <Button label="Delete" icon="pi pi-trash" />
                <Button label="Cancel" icon="pi pi-times" />
            </ButtonGroup>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Multiple buttons are grouped when wrapped inside an element with <i>ButtonGroup</i> component.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <ButtonGroup>
                    <Button label="Save" icon="pi pi-check" />
                    <Button label="Delete" icon="pi pi-trash" />
                    <Button label="Cancel" icon="pi pi-times" />
                </ButtonGroup>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
