import { Button } from '../../lib/button/Button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

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
