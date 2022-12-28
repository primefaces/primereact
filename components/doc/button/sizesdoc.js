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
import React from 'react'; 
import { Button } from 'primereact/button';
import './ButtonDemo.css';

export default function SizesDoc() {

    return (
        <div className="card flex flex-column lg:flex-row align-items-center justify-content-center button-demo">
            <Button label="Small" icon="pi pi-check" className="p-button-sm" />
            <Button label="Normal" icon="pi pi-check" className="p-button" />
            <Button label="Large" icon="pi pi-check" className="p-button-lg" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Button } from 'primereact/button';
import './ButtonDemo.css';

export default function SizesDoc() {

    return (
        <div className="card flex flex-column lg:flex-row align-items-center justify-content-center button-demo">
            <Button label="Small" icon="pi pi-check" className="p-button-sm" />
            <Button label="Normal" icon="pi pi-check" className="p-button" />
            <Button label="Large" icon="pi pi-check" className="p-button-lg" />
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

@media screen and (max-width: 960px) {
    .button-demo .p-button {
        margin-bottom: 0.5rem;
    }
    .button-demo .p-button:not(.p-button-icon-only) {
        display: flex;
        width: 100%;
    }
}                
        `
        }
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
