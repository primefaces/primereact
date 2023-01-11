import { Button } from '../../lib/button/Button';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function DisabledDoc(props) {
    const code = {
        basic: `
<Button disabled label="Submit" aria-label="Submit" />
        `,
        javascript: `
import React from 'react'; 
import { Button } from 'primereact/button';
import './ButtonDemo.css';

export default function DisabledDoc() {

    return (
        <div className="card flex flex-column lg:flex-row align-items-center justify-content-center button-demo">
            <Button disabled label="Submit" aria-label="Submit" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Button } from 'primereact/button';
import './ButtonDemo.css';

export default function DisabledDoc() {

    return (
        <div className="card flex flex-column lg:flex-row align-items-center justify-content-center button-demo">
            <Button disabled label="Submit" aria-label="Submit" />
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
                <Button disabled label="Submit" aria-label="Submit" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
