import { Button } from '../../lib/button/Button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function RoundedDoc(props) {
    const code = {
        basic: `
<Button label="Primary" className="p-button-rounded" />
<Button label="Secondary" className="p-button-secondary p-button-rounded" />
<Button label="Success" className="p-button-success p-button-rounded" />
<Button label="Info" className="p-button-info p-button-rounded" />
<Button label="Warning" className="p-button-warning p-button-rounded" />
<Button label="Help" className="p-button-help p-button-rounded" />
<Button label="Danger" className="p-button-danger p-button-rounded" />
        `,
        javascript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function RoundedDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <Button label="Primary" className="p-button-rounded" />
            <Button label="Secondary" className="p-button-secondary p-button-rounded" />
            <Button label="Success" className="p-button-success p-button-rounded" />
            <Button label="Info" className="p-button-info p-button-rounded" />
            <Button label="Warning" className="p-button-warning p-button-rounded" />
            <Button label="Help" className="p-button-help p-button-rounded" />
            <Button label="Danger" className="p-button-danger p-button-rounded" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function RoundedDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <Button label="Primary" className="p-button-rounded" />
            <Button label="Secondary" className="p-button-secondary p-button-rounded" />
            <Button label="Success" className="p-button-success p-button-rounded" />
            <Button label="Info" className="p-button-info p-button-rounded" />
            <Button label="Warning" className="p-button-warning p-button-rounded" />
            <Button label="Help" className="p-button-help p-button-rounded" />
            <Button label="Danger" className="p-button-danger p-button-rounded" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Rounded buttons have a circular border radius.</p>
            </DocSectionText>
            <div className="card flex flex-wrap justify-content-center gap-3">
                <Button label="Primary" className="p-button-rounded" />
                <Button label="Secondary" className="p-button-secondary p-button-rounded" />
                <Button label="Success" className="p-button-success p-button-rounded" />
                <Button label="Info" className="p-button-info p-button-rounded" />
                <Button label="Warning" className="p-button-warning p-button-rounded" />
                <Button label="Help" className="p-button-help p-button-rounded" />
                <Button label="Danger" className="p-button-danger p-button-rounded" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
