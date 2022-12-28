import { Button } from '../../lib/button/Button';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function SeveritiesDoc(props) {
    const code = {
        basic: `
<Button label="Primary" />
<Button label="Secondary" className="p-button-secondary" />
<Button label="Success" className="p-button-success" />
<Button label="Info" className="p-button-info" />
<Button label="Warning" className="p-button-warning" />
<Button label="Help" className="p-button-help" />
<Button label="Danger" className="p-button-danger" />
        `,
        javascript: `
import React from 'react'; 
import { Button } from 'primereact/button';
import './ButtonDemo.css';

export default function SeveritiesDoc() {

    return (
        <div className="card flex flex-column lg:flex-row align-items-center justify-content-center button-demo">
            <Button label="Primary" />
            <Button label="Secondary" className="p-button-secondary" />
            <Button label="Success" className="p-button-success" />
            <Button label="Info" className="p-button-info" />
            <Button label="Warning" className="p-button-warning" />
            <Button label="Help" className="p-button-help" />
            <Button label="Danger" className="p-button-danger" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Button } from 'primereact/button';
import './ButtonDemo.css';


export default function SeveritiesDoc() {

    return (
        <div className="card flex flex-column lg:flex-row align-items-center justify-content-center button-demo">
            <Button label="Primary" />
            <Button label="Secondary" className="p-button-secondary" />
            <Button label="Success" className="p-button-success" />
            <Button label="Info" className="p-button-info" />
            <Button label="Warning" className="p-button-warning" />
            <Button label="Help" className="p-button-help" />
            <Button label="Danger" className="p-button-danger" />
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
                <p>Different color options are available as severity levels. .p-button-secondary .p-button-success .p-button-info .p-button-warning .p-button-danger</p>
            </DocSectionText>
            <div className="card flex flex-column lg:flex-row align-items-center justify-content-center">
                <Button label="Primary" />
                <Button label="Secondary" className="p-button-secondary" />
                <Button label="Success" className="p-button-success" />
                <Button label="Info" className="p-button-info" />
                <Button label="Warning" className="p-button-warning" />
                <Button label="Help" className="p-button-help" />
                <Button label="Danger" className="p-button-danger" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
