import { Button } from '../../lib/button/Button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function SeverityDoc(props) {
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

export default function SeverityDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
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

export default function SeverityDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
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
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Severity defines the type of button.</p>
            </DocSectionText>
            <div className="card flex flex-wrap justify-content-center gap-3">
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
