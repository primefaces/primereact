import { Button } from '../../lib/button/Button';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function RaisedButtonsDoc(props) {
    const code = {
        basic: `
<Button label="Primary" className="p-button-raised" />
<Button label="Secondary" className="p-button-raised p-button-secondary" />
<Button label="Success" className="p-button-raised p-button-success" />
<Button label="Info" className="p-button-raised p-button-info" />
<Button label="Warning" className="p-button-raised p-button-warning" />
<Button label="Help" className="p-button-raised p-button-help" />
<Button label="Danger" className="p-button-raised p-button-danger" />
        `,
        javascript: `
import React from 'react'; 
import { Button } from 'primereact/button';
import './ButtonDemo.css';

export default function RaisedButtonsDoc() {

    return (
        <div className="card flex flex-column lg:flex-row align-items-center justify-content-center button-demo">
            <Button label="Primary" className="p-button-raised" />
            <Button label="Secondary" className="p-button-raised p-button-secondary" />
            <Button label="Success" className="p-button-raised p-button-success" />
            <Button label="Info" className="p-button-raised p-button-info" />
            <Button label="Warning" className="p-button-raised p-button-warning" />
            <Button label="Help" className="p-button-raised p-button-help" />
            <Button label="Danger" className="p-button-raised p-button-danger" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Button } from 'primereact/button';
import './ButtonDemo.css';

export default function RaisedButtonsDoc() {

    return (
        <div className="card flex flex-column lg:flex-row align-items-center justify-content-center button-demo">
            <Button label="Primary" className="p-button-raised" />
            <Button label="Secondary" className="p-button-raised p-button-secondary" />
            <Button label="Success" className="p-button-raised p-button-success" />
            <Button label="Info" className="p-button-raised p-button-info" />
            <Button label="Warning" className="p-button-raised p-button-warning" />
            <Button label="Help" className="p-button-raised p-button-help" />
            <Button label="Danger" className="p-button-raised p-button-danger" />
        </div>
    )
}
        `,
        css: `
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
}         
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>A button can be raised by having "p-button-raised" style class and similarly borders can be made rounded using "p-button-rounded" class.</p>
            </DocSectionText>
            <div className="card flex flex-column lg:flex-row align-items-center justify-content-center">
                <Button label="Primary" className="p-button-raised" />
                <Button label="Secondary" className="p-button-raised p-button-secondary" />
                <Button label="Success" className="p-button-raised p-button-success" />
                <Button label="Info" className="p-button-raised p-button-info" />
                <Button label="Warning" className="p-button-raised p-button-warning" />
                <Button label="Help" className="p-button-raised p-button-help" />
                <Button label="Danger" className="p-button-raised p-button-danger" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
