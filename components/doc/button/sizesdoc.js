import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';

export function SizesDoc(props) {
    const code = {
        basic: `
<Button label="Small" icon="pi pi-check" size="small" />
<Button label="Normal" icon="pi pi-check" />
<Button label="Large" icon="pi pi-check" size="large" />
        `,
        javascript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function SizesDemo() {
    return (
        <div className="card flex flex-wrap align-items-center justify-content-center gap-3">
            <Button label="Small" icon="pi pi-check" size="small" />
            <Button label="Normal" icon="pi pi-check" />
            <Button label="Large" icon="pi pi-check" size="large" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function SizesDemo() {
    return (
        <div className="card flex flex-wrap align-items-center justify-content-center gap-3">
            <Button label="Small" icon="pi pi-check" size="small" />
            <Button label="Normal" icon="pi pi-check" />
            <Button label="Large" icon="pi pi-check" size="large" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Button provides <i>small</i> and <i>large</i> sizes as alternatives to the standard.
                </p>
            </DocSectionText>
            <div className="card flex flex-wrap align-items-center justify-content-center gap-3">
                <Button label="Small" icon="pi pi-check" size="small" />
                <Button label="Normal" icon="pi pi-check" />
                <Button label="Large" icon="pi pi-check" size="large" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
