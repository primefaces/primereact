import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';

export function BasicDoc(props) {
    const code = {
        basic: `
<Button label="Submit" />
        `,
        javascript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function BasicDemo() {
    return (
        <div className="card flex justify-content-center">
            <Button label="Submit" />
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
            <Button label="Submit" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Text to display on a button is defined with the <i>label</i> property.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Button label="Submit" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
