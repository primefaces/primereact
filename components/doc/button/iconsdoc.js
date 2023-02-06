import { Button } from '../../lib/button/Button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function IconsDoc(props) {
    const code = {
        basic: `
<Button icon="pi pi-check" />
<Button label="Submit" icon="pi pi-check" />
<Button label="Submit" icon="pi pi-check" iconPos="right" />
        `,
        javascript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function IconsDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <Button icon="pi pi-check" />
            <Button label="Submit" icon="pi pi-check" />
            <Button label="Submit" icon="pi pi-check" iconPos="right" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function IconsDemo() {
    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <Button icon="pi pi-check" />
            <Button label="Submit" icon="pi pi-check" />
            <Button label="Submit" icon="pi pi-check" iconPos="right" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Icon of a button is specified with <i>icon</i> property and position is configured using <i>iconPos</i> attribute.
                </p>
            </DocSectionText>
            <div className="card flex flex-wrap justify-content-center gap-3">
                <Button icon="pi pi-check" />
                <Button label="Submit" icon="pi pi-check" />
                <Button label="Submit" icon="pi pi-check" iconPos="right" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
