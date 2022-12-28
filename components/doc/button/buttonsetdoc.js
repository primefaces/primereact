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
import React from 'react'; 
import { Button } from 'primereact/button';
import './ButtonDemo.css';

export default function ButtonSetDoc() {

    return (
        <div className="card flex flex-column lg:flex-row align-items-center justify-content-center">
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
import './ButtonDemo.css';

export default function ButtonSetDoc() {

    return (
        <div className="card flex flex-column lg:flex-row align-items-center justify-content-center">
            <span className="p-buttonset">
                <Button label="Save" icon="pi pi-check" />
                <Button label="Delete" icon="pi pi-trash" />
                <Button label="Cancel" icon="pi pi-times" />
            </span>
        </div>
    )
}
        `,
        exitFiles: {
            'ButtonDemo.css': `
/* ButtonDemo.css */
.button-demo .p-button {
    margin-right: 0.5rem;
}
.button-demo .p-buttonset .p-button {
    margin-right: 0;
}

@media screen and (max-width: 960px) {
    .button-demo .p-button {
        margin-bottom: 0.5rem;
    }
    .button-demo .p-button:not(.p-button-icon-only) {
        display: flex;
        width: 100%;
    }
    .button-demo .p-buttonset .p-button {
        margin-bottom: 0;
    }
}                     
        `
        }
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Button Set</p>
            </DocSectionText>
            <div className="card flex flex-column lg:flex-row align-items-center justify-content-center">
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
