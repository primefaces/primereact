import { Button } from '../../lib/button/Button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function RaisedTextDoc(props) {
    const code = {
        basic: `
<Button label="Primary" className="p-button-text p-button-raised" />
<Button label="Secondary" className="p-button-secondary p-button-text p-button-raised" />
<Button label="Success" className="p-button-success p-button-text p-button-raised" />
<Button label="Info" className="p-button-info p-button-text p-button-raised" />
<Button label="Warning" className="p-button-warning p-button-text p-button-raised" />
<Button label="Help" className="p-button-help p-button-text p-button-raised" />
<Button label="Danger" className="p-button-danger p-button-text p-button-raised" />
        `,
        javascript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function RaisedTextDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <Button label="Primary" className="p-button-text p-button-raised" />
            <Button label="Secondary" className="p-button-secondary p-button-text p-button-raised" />
            <Button label="Success" className="p-button-success p-button-text p-button-raised" />
            <Button label="Info" className="p-button-info p-button-text p-button-raised" />
            <Button label="Warning" className="p-button-warning p-button-text p-button-raised" />
            <Button label="Help" className="p-button-help p-button-text p-button-raised" />
            <Button label="Danger" className="p-button-danger p-button-text p-button-raised" />
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
            <Button label="Primary" className="p-button-text p-button-raised" />
            <Button label="Secondary" className="p-button-secondary p-button-text p-button-raised" />
            <Button label="Success" className="p-button-success p-button-text p-button-raised" />
            <Button label="Info" className="p-button-info p-button-text p-button-raised" />
            <Button label="Warning" className="p-button-warning p-button-text p-button-raised" />
            <Button label="Help" className="p-button-help p-button-text p-button-raised" />
            <Button label="Danger" className="p-button-danger p-button-text p-button-raised" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Text buttons can be displayed as raised as well for elevation.</p>
            </DocSectionText>
            <div className="card flex flex-wrap justify-content-center gap-3">
                <Button label="Primary" className="p-button-text p-button-raised" />
                <Button label="Secondary" className="p-button-secondary p-button-text p-button-raised" />
                <Button label="Success" className="p-button-success p-button-text p-button-raised" />
                <Button label="Info" className="p-button-info p-button-text p-button-raised" />
                <Button label="Warning" className="p-button-warning p-button-text p-button-raised" />
                <Button label="Help" className="p-button-help p-button-text p-button-raised" />
                <Button label="Danger" className="p-button-danger p-button-text p-button-raised" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
