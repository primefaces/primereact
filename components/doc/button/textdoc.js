import { Button } from '../../lib/button/Button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function TextDoc(props) {
    const code = {
        basic: `
<Button label="Primary" className="p-button-text" />
<Button label="Secondary" className="p-button-secondary p-button-text" />
<Button label="Success" className="p-button-success p-button-text" />
<Button label="Info" className="p-button-info p-button-text" />
<Button label="Warning" className="p-button-warning p-button-text" />
<Button label="Help" className="p-button-help p-button-text" />
<Button label="Danger" className="p-button-danger p-button-text" />
        `,
        javascript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function TextDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <Button label="Primary" className="p-button-text" />
            <Button label="Secondary" className="p-button-secondary p-button-text" />
            <Button label="Success" className="p-button-success p-button-text" />
            <Button label="Info" className="p-button-info p-button-text" />
            <Button label="Warning" className="p-button-warning p-button-text" />
            <Button label="Help" className="p-button-help p-button-text" />
            <Button label="Danger" className="p-button-danger p-button-text" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function TextDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <Button label="Primary" className="p-button-text" />
            <Button label="Secondary" className="p-button-secondary p-button-text" />
            <Button label="Success" className="p-button-success p-button-text" />
            <Button label="Info" className="p-button-info p-button-text" />
            <Button label="Warning" className="p-button-warning p-button-text" />
            <Button label="Help" className="p-button-help p-button-text" />
            <Button label="Danger" className="p-button-danger p-button-text" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Text buttons are displayed as textual elements.</p>
            </DocSectionText>
            <div className="card flex flex-wrap justify-content-center gap-3">
                <Button label="Primary" className="p-button-text" />
                <Button label="Secondary" className="p-button-secondary p-button-text" />
                <Button label="Success" className="p-button-success p-button-text" />
                <Button label="Info" className="p-button-info p-button-text" />
                <Button label="Warning" className="p-button-warning p-button-text" />
                <Button label="Help" className="p-button-help p-button-text" />
                <Button label="Danger" className="p-button-danger p-button-text" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
