import { Button } from '../../lib/button/Button';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function LinkDoc(props) {
    const code = {
        basic: `
<Button label="Submit" className="p-button-link" />
        `,
        javascript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function LinkDemo() {
    return (
        <div className="card flex justify-content-center">
            <Button label="Submit" className="p-button-link" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Button } from 'primereact/button';

export default function LinkDemo() {
    return (
        <div className="card flex justify-content-center">
            <Button label="Submit" className="p-button-link" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    A button can be rendered as a link by adding <i>p-button-link</i> class.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Button label="Submit" className="p-button-link" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
