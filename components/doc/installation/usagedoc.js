import { Button } from '../../lib/button/Button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function UsageDoc(props) {
    const code = {
        basic: `
import { Button } from 'primereact/button';                             
        `,
        javascript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function BasicDemo() {
    return (
        <div className="card flex justify-content-center">
            <Button label="Check" icon="pi pi-check" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function BasicDemo() {
    return (
        <div className="card flex justify-content-center">
            <Button label="Check" icon="pi pi-check" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Each component can be imported individually so that you only bundle what you use. Import path is available in the documentation of the corresponding component.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Button label="Check" icon="pi pi-check" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
