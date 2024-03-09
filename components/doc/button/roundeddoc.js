import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';

export function RoundedDoc(props) {
    const code = {
        basic: `
<Button label="Primary" rounded />
<Button label="Secondary" severity="secondary" rounded />
<Button label="Success" severity="success" rounded />
<Button label="Info" severity="info" rounded />
<Button label="Warning" severity="warning" rounded />
<Button label="Help" severity="help" rounded />
<Button label="Danger" severity="danger" rounded />
        `,
        javascript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function RoundedDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <Button label="Primary" rounded />
            <Button label="Secondary" severity="secondary" rounded />
            <Button label="Success" severity="success" rounded />
            <Button label="Info" severity="info" rounded />
            <Button label="Warning" severity="warning" rounded />
            <Button label="Help" severity="help" rounded />
            <Button label="Danger" severity="danger" rounded />
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
            <Button label="Primary" rounded />
            <Button label="Secondary" severity="secondary" rounded />
            <Button label="Success" severity="success" rounded />
            <Button label="Info" severity="info" rounded />
            <Button label="Warning" severity="warning" rounded />
            <Button label="Help" severity="help" rounded />
            <Button label="Danger" severity="danger" rounded />
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
                <Button label="Primary" rounded />
                <Button label="Secondary" severity="secondary" rounded />
                <Button label="Success" severity="success" rounded />
                <Button label="Info" severity="info" rounded />
                <Button label="Warning" severity="warning" rounded />
                <Button label="Help" severity="help" rounded />
                <Button label="Danger" severity="danger" rounded />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
