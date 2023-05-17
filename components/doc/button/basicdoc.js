import { Button } from '../../lib/button/Button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

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
