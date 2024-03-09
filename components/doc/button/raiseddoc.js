import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';

export function RaisedDoc(props) {
    const code = {
        basic: `
<Button label="Primary" raised />
<Button label="Secondary" severity="secondary" raised />
<Button label="Success" severity="success" raised />
<Button label="Info" severity="info" raised />
<Button label="Warning" severity="warning" raised />
<Button label="Help" severity="help" raised />
<Button label="Danger" severity="danger" raised />
        `,
        javascript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function RaisedDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <Button label="Primary" raised />
            <Button label="Secondary" severity="secondary" raised />
            <Button label="Success" severity="success" raised />
            <Button label="Info" severity="info" raised />
            <Button label="Warning" severity="warning" raised />
            <Button label="Help" severity="help" raised />
            <Button label="Danger" severity="danger" raised />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function RaisedDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <Button label="Primary" raised />
            <Button label="Secondary" severity="secondary" raised />
            <Button label="Success" severity="success" raised />
            <Button label="Info" severity="info" raised />
            <Button label="Warning" severity="warning" raised />
            <Button label="Help" severity="help" raised />
            <Button label="Danger" severity="danger" raised />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Raised buttons display a shadow to indicate elevation.</p>
            </DocSectionText>
            <div className="card flex flex-wrap justify-content-center gap-3">
                <Button label="Primary" raised />
                <Button label="Secondary" severity="secondary" raised />
                <Button label="Success" severity="success" raised />
                <Button label="Info" severity="info" raised />
                <Button label="Warning" severity="warning" raised />
                <Button label="Help" severity="help" raised />
                <Button label="Danger" severity="danger" raised />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
