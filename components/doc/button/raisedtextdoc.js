import { Button } from '../../lib/button/Button';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function RaisedTextButtonsDoc(props) {
    const code = {
        basic: `
<Button label="Primary" className="p-button-raised p-button-text" />
<Button label="Secondary" className="p-button-raised p-button-secondary p-button-text" />
<Button label="Success" className="p-button-raised p-button-success p-button-text" />
<Button label="Info" className="p-button-raised p-button-info p-button-text" />
<Button label="Warning" className="p-button-raised p-button-warning p-button-text" />
<Button label="Help" className="p-button-raised p-button-help p-button-text" />
<Button label="Danger" className="p-button-raised p-button-danger p-button-text" />
<Button label="Plain" className="p-button-raised p-button-text p-button-plain" />
        `,
        javascript: `
import React from 'react'; 
import { Button } from 'primereact/button';
import './ButtonDemo.css';

export default function RaisedTextButtonsDoc() {

    return (
        <div className="card flex flex-column lg:flex-row align-items-center justify-content-center button-demo">
            <Button label="Primary" className="p-button-raised p-button-text" />
            <Button label="Secondary" className="p-button-raised p-button-secondary p-button-text" />
            <Button label="Success" className="p-button-raised p-button-success p-button-text" />
            <Button label="Info" className="p-button-raised p-button-info p-button-text" />
            <Button label="Warning" className="p-button-raised p-button-warning p-button-text" />
            <Button label="Help" className="p-button-raised p-button-help p-button-text" />
            <Button label="Danger" className="p-button-raised p-button-danger p-button-text" />
            <Button label="Plain" className="p-button-raised p-button-text p-button-plain" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Button } from 'primereact/button';
import './ButtonDemo.css';

export default function RaisedTextButtonsDoc() {

    return (
        <div className="card flex flex-column lg:flex-row align-items-center justify-content-center button-demo">
            <Button label="Primary" className="p-button-raised p-button-text" />
            <Button label="Secondary" className="p-button-raised p-button-secondary p-button-text" />
            <Button label="Success" className="p-button-raised p-button-success p-button-text" />
            <Button label="Info" className="p-button-raised p-button-info p-button-text" />
            <Button label="Warning" className="p-button-raised p-button-warning p-button-text" />
            <Button label="Help" className="p-button-raised p-button-help p-button-text" />
            <Button label="Danger" className="p-button-raised p-button-danger p-button-text" />
            <Button label="Plain" className="p-button-raised p-button-text p-button-plain" />
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
                <p>Raised Text Button</p>
            </DocSectionText>
            <div className="card flex flex-column lg:flex-row align-items-center justify-content-center">
                <Button label="Primary" className="p-button-raised p-button-text" />
                <Button label="Secondary" className="p-button-raised p-button-secondary p-button-text" />
                <Button label="Success" className="p-button-raised p-button-success p-button-text" />
                <Button label="Info" className="p-button-raised p-button-info p-button-text" />
                <Button label="Warning" className="p-button-raised p-button-warning p-button-text" />
                <Button label="Help" className="p-button-raised p-button-help p-button-text" />
                <Button label="Danger" className="p-button-raised p-button-danger p-button-text" />
                <Button label="Plain" className="p-button-raised p-button-text p-button-plain" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
