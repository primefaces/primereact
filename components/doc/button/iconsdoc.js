import { Button } from '../../lib/button/Button';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function IconsDoc(props) {
    const code = {
        basic: `
<Button icon="pi pi-check" />
<Button label="Submit" icon="pi pi-check" />
<Button label="Submit" icon="pi pi-check" iconPos="right" />
        `,
        javascript: `
import React from 'react'; 
import { Button } from 'primereact/button';
import './ButtonDemo.css';

export default function IconsDoc() {

    return (
        <div className="card flex flex-column lg:flex-row align-items-center justify-content-center button-demo">
            <Button icon="pi pi-check" />
            <Button label="Submit" icon="pi pi-check" />
            <Button label="Submit" icon="pi pi-check" iconPos="right" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Button } from 'primereact/button';
import './ButtonDemo.css';

export default function IconsDoc() {

    return (
        <div className="card flex flex-column lg:flex-row align-items-center justify-content-center button-demo">
            <Button icon="pi pi-check" />
            <Button label="Submit" icon="pi pi-check" />
            <Button label="Submit" icon="pi pi-check" iconPos="right" />
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
                <p>
                    Icon on a button is specified with <i>icon</i> property and position is configured using <i>iconPos</i> attribute. Default icon position is "left" and alternative is "right". To display only an icon, leave label as undefined.
                </p>
            </DocSectionText>
            <div className="card flex flex-column lg:flex-row align-items-center justify-content-center">
                <Button icon="pi pi-check" />
                <Button label="Submit" icon="pi pi-check" />
                <Button label="Submit" icon="pi pi-check" iconPos="right" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
