import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Button } from '@/components/lib/button/Button';

export function DisabledDoc(props) {
    const code = {
        basic: `
<Button label="Submit" disabled />
        `,
        javascript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <Button label="Submit" disabled />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <Button label="Submit" disabled />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    When <i>disabled</i> is present, the element cannot be edited and focused.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Button label="Submit" disabled />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
