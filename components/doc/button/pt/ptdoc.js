import { Button } from '../../../lib/button/Button';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function PTDoc(props) {
    const code = {
        basic: `
<Button label="Submit" icon="pi pi-check"
    pt={{
        root: { className: 'bg-blue-500 border-blue-500' }
    }}
/>
        `,
        javascript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function PTDemo() {
    return (
        <div className="card flex flex-wrap gap-3 justify-content-center">
            <Button
                label="Submit"
                icon="pi pi-check"
                pt={{
                    root: { className: 'bg-blue-500 border-blue-500' }
                }}
            />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function PTDemo() {
    return (
        <div className="card flex flex-wrap gap-3 justify-content-center">
            <Button
                label="Submit"
                icon="pi pi-check"
                pt={{
                    root: { className: 'bg-blue-500 border-blue-500' }
                }}
            />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card flex flex-wrap gap-3 justify-content-center">
                <Button
                    label="Submit"
                    icon="pi pi-check"
                    pt={{
                        root: { className: 'bg-blue-500 border-blue-500' }
                    }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
