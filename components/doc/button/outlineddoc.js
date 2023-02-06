import { Button } from '../../lib/button/Button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function OutlinedDoc(props) {
    const code = {
        basic: `
<Button label="Primary" className="p-button-outlined" />
<Button label="Secondary" className="p-button-secondary p-button-outlined" />
<Button label="Success" className="p-button-success p-button-outlined" />
<Button label="Info" className="p-button-info p-button-outlined" />
<Button label="Warning" className="p-button-warning p-button-outlined" />
<Button label="Help" className="p-button-help p-button-outlined" />
<Button label="Danger" className="p-button-danger p-button-outlined" />
        `,
        javascript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function OutlinedDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <Button label="Primary" className="p-button-outlined" />
            <Button label="Secondary" className="p-button-secondary p-button-outlined" />
            <Button label="Success" className="p-button-success p-button-outlined" />
            <Button label="Info" className="p-button-info p-button-outlined" />
            <Button label="Warning" className="p-button-warning p-button-outlined" />
            <Button label="Help" className="p-button-help p-button-outlined" />
            <Button label="Danger" className="p-button-danger p-button-outlined" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function OutlinedDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <Button label="Primary" className="p-button-outlined" />
            <Button label="Secondary" className="p-button-secondary p-button-outlined" />
            <Button label="Success" className="p-button-success p-button-outlined" />
            <Button label="Info" className="p-button-info p-button-outlined" />
            <Button label="Warning" className="p-button-warning p-button-outlined" />
            <Button label="Help" className="p-button-help p-button-outlined" />
            <Button label="Danger" className="p-button-danger p-button-outlined" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Outlined buttons display a border without a background initially.</p>
            </DocSectionText>
            <div className="card flex flex-wrap justify-content-center gap-3">
                <Button label="Primary" className="p-button-outlined" />
                <Button label="Secondary" className="p-button-secondary p-button-outlined" />
                <Button label="Success" className="p-button-success p-button-outlined" />
                <Button label="Info" className="p-button-info p-button-outlined" />
                <Button label="Warning" className="p-button-warning p-button-outlined" />
                <Button label="Help" className="p-button-help p-button-outlined" />
                <Button label="Danger" className="p-button-danger p-button-outlined" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
