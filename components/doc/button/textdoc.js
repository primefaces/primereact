import { Button } from '../../lib/button/Button';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function TextButtonsDoc(props) {
    const code = {
        basic: `
<Button label="Primary" className="p-button-text" />
<Button label="Secondary" className="p-button-secondary p-button-text" />
<Button label="Success" className="p-button-success p-button-text" />
<Button label="Info" className="p-button-info p-button-text" />
<Button label="Warning" className="p-button-warning p-button-text" />
<Button label="Help" className="p-button-help p-button-text" />
<Button label="Danger" className="p-button-danger p-button-text" />
<Button label="Plain" className="p-button-text p-button-plain" />
        `,
        javascript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function TextButtonsDoc() {

    return (
        <div className="card flex flex-column lg:flex-row align-items-center justify-content-center button-demo">
            <Button label="Primary" className="p-button-text" />
            <Button label="Secondary" className="p-button-secondary p-button-text" />
            <Button label="Success" className="p-button-success p-button-text" />
            <Button label="Info" className="p-button-info p-button-text" />
            <Button label="Warning" className="p-button-warning p-button-text" />
            <Button label="Help" className="p-button-help p-button-text" />
            <Button label="Danger" className="p-button-danger p-button-text" />
            <Button label="Plain" className="p-button-text p-button-plain" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function TextButtonsDoc() {

    return (
        <div className="card flex flex-column lg:flex-row align-items-center justify-content-center button-demo">
            <Button label="Primary" className="p-button-text" />
            <Button label="Secondary" className="p-button-secondary p-button-text" />
            <Button label="Success" className="p-button-success p-button-text" />
            <Button label="Info" className="p-button-info p-button-text" />
            <Button label="Warning" className="p-button-warning p-button-text" />
            <Button label="Help" className="p-button-help p-button-text" />
            <Button label="Danger" className="p-button-danger p-button-text" />
            <Button label="Plain" className="p-button-text p-button-plain" />
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
                <p>Text Button</p>
            </DocSectionText>
            <div className="card flex flex-column lg:flex-row align-items-center justify-content-center">
                <Button label="Primary" className="p-button-text" />
                <Button label="Secondary" className="p-button-secondary p-button-text" />
                <Button label="Success" className="p-button-success p-button-text" />
                <Button label="Info" className="p-button-info p-button-text" />
                <Button label="Warning" className="p-button-warning p-button-text" />
                <Button label="Help" className="p-button-help p-button-text" />
                <Button label="Danger" className="p-button-danger p-button-text" />
                <Button label="Plain" className="p-button-text p-button-plain" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
