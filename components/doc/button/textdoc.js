import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';

export function TextDoc(props) {
    const code = {
        basic: `
<Button label="Primary" text />
<Button label="Secondary" severity="secondary" text />
<Button label="Success" severity="success" text />
<Button label="Info" severity="info" text />
<Button label="Warning" severity="warning" text />
<Button label="Help" severity="help" text />
<Button label="Danger" severity="danger" text />
        `,
        javascript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function TextDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <Button label="Primary" text />
            <Button label="Secondary" severity="secondary" text />
            <Button label="Success" severity="success" text />
            <Button label="Info" severity="info" text />
            <Button label="Warning" severity="warning" text />
            <Button label="Help" severity="help" text />
            <Button label="Danger" severity="danger" text />
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
            <Button label="Primary" text />
            <Button label="Secondary" severity="secondary" text />
            <Button label="Success" severity="success" text />
            <Button label="Info" severity="info" text />
            <Button label="Warning" severity="warning" text />
            <Button label="Help" severity="help" text />
            <Button label="Danger" severity="danger" text />
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
                <Button label="Primary" text />
                <Button label="Secondary" severity="secondary" text />
                <Button label="Success" severity="success" text />
                <Button label="Info" severity="info" text />
                <Button label="Warning" severity="warning" text />
                <Button label="Help" severity="help" text />
                <Button label="Danger" severity="danger" text />
                <Button label="Plain" plain text />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
