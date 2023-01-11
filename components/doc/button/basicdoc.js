import { Button } from '../../lib/button/Button';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function BasicDoc(props) {
    const code = {
        basic: `
<Button label="Submit" aria-label="Submit" />
<Button label="Disabled" disabled />
<Button label="Link" className="p-button-link" />
        `,
        javascript: `
import React from 'react'; 
import { Button } from 'primereact/button';
import './ButtonDemo.css';

export default function BasicDoc() {

    return (
        <div className="card flex flex-column lg:flex-row align-items-center justify-content-center button-demo">
            <Button label="Submit" aria-label="Submit" />
            <Button label="Disabled" disabled />
            <Button label="Link" className="p-button-link" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Button } from 'primereact/button';
import './ButtonDemo.css';

export default function BasicDoc() {

    return (
        <div className="card flex flex-column lg:flex-row align-items-center justify-content-center button-demo">
            <Button label="Submit" aria-label="Submit" />
            <Button label="Disabled" disabled />
            <Button label="Link" className="p-button-link" />
        </div>
    )
}
        `,
        extFiles: {
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
                <p>Button is created using the Button element. </p>
            </DocSectionText>
            <div className="card flex flex-column lg:flex-row align-items-center justify-content-center">
                <Button label="Submit" aria-label="Submit" />
                <Button label="Disabled" disabled />
                <Button label="Link" className="p-button-link" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
