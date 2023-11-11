import { Button } from '../../lib/button/Button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function RaisedTextDoc(props) {
    const code = {
        basic: `
<Button label="Primary" text raised />
<Button label="Secondary" severity="secondary" text raised />
<Button label="Success" severity="success" text raised />
<Button label="Info" severity="info" text raised />
<Button label="Warning" severity="warning" text raised />
<Button label="Help" severity="help" text raised />
<Button label="Danger" severity="danger" text raised />
        `,
        javascript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function RaisedTextDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <Button label="Primary" text raised />
            <Button label="Secondary" severity="secondary" text raised />
            <Button label="Success" severity="success" text raised />
            <Button label="Info" severity="info" text raised />
            <Button label="Warning" severity="warning" text raised />
            <Button label="Help" severity="help" text raised />
            <Button label="Danger" severity="danger" text raised />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function RaisedTextDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <Button label="Primary" text raised />
            <Button label="Secondary" severity="secondary" text raised />
            <Button label="Success" severity="success" text raised />
            <Button label="Info" severity="info" text raised />
            <Button label="Warning" severity="warning" text raised />
            <Button label="Help" severity="help" text raised />
            <Button label="Danger" severity="danger" text raised />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Text buttons can be displayed as raised for elevation.</p>
            </DocSectionText>
            <div className="card flex flex-wrap justify-content-center gap-3">
                <Button label="Primary" text raised />
                <Button label="Secondary" severity="secondary" text raised />
                <Button label="Success" severity="success" text raised />
                <Button label="Info" severity="info" text raised />
                <Button label="Warning" severity="warning" text raised />
                <Button label="Help" severity="help" text raised />
                <Button label="Danger" severity="danger" text raised />
                <Button label="Plain" plain text raised />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
