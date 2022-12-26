import { Button } from '../../lib/button/Button';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function OutlinedButtonsDoc(props) {
    const code = {
        basic: `
<Button label="Primary" className="p-button-outlined" />
<Button label="Secondary" className="p-button-outlined p-button-secondary" />
<Button label="Success" className="p-button-outlined p-button-success" />
<Button label="Info" className="p-button-outlined p-button-info" />
<Button label="Warning" className="p-button-outlined p-button-warning" />
<Button label="Help" className="p-button-outlined p-button-help" />
<Button label="Danger" className="p-button-outlined p-button-danger" />
        `,
        javascript: `
import React from 'react'; 
import { Button } from 'primereact/button';
import './ButtonDemo.css';

export default function OutlinedButtonsDoc() {

    return (
        <div className="card flex flex-column lg:flex-row align-items-center justify-content-center button-demo">
            <Button label="Primary" className="p-button-outlined" />
            <Button label="Secondary" className="p-button-outlined p-button-secondary" />
            <Button label="Success" className="p-button-outlined p-button-success" />
            <Button label="Info" className="p-button-outlined p-button-info" />
            <Button label="Warning" className="p-button-outlined p-button-warning" />
            <Button label="Help" className="p-button-outlined p-button-help" />
            <Button label="Danger" className="p-button-outlined p-button-danger" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Button } from 'primereact/button';
import './ButtonDemo.css';

export default function OutlinedButtonsDoc() {

    return (
        <div className="card flex flex-column lg:flex-row align-items-center justify-content-center button-demo">
            <Button label="Primary" className="p-button-outlined" />
            <Button label="Secondary" className="p-button-outlined p-button-secondary" />
            <Button label="Success" className="p-button-outlined p-button-success" />
            <Button label="Info" className="p-button-outlined p-button-info" />
            <Button label="Warning" className="p-button-outlined p-button-warning" />
            <Button label="Help" className="p-button-outlined p-button-help" />
            <Button label="Danger" className="p-button-outlined p-button-danger" />
        </div>
    )
}
        `,
        css: `
/* ButtonDemo.css */

.button-demo .p-button {
    margin-right: 0.5rem;
}

@media screen and (max-width: 960px) {
    .button-demo .p-button {
        margin-bottom: 0.5rem;
    }
    .button-demo .p-buttonset .p-button {
        margin-bottom: 0;
    }
}         
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Outlined Buttons</p>
            </DocSectionText>
            <div className="card flex flex-column lg:flex-row align-items-center justify-content-center">
                <Button label="Primary" className="p-button-outlined" />
                <Button label="Secondary" className="p-button-outlined p-button-secondary" />
                <Button label="Success" className="p-button-outlined p-button-success" />
                <Button label="Info" className="p-button-outlined p-button-info" />
                <Button label="Warning" className="p-button-outlined p-button-warning" />
                <Button label="Help" className="p-button-outlined p-button-help" />
                <Button label="Danger" className="p-button-outlined p-button-danger" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
