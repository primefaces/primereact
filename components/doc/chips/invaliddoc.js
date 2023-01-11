import { Chips } from '../../lib/chips/Chips';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function InvalidDoc(props) {
    const code = {
        basic: `
<Chips className="p-invalid" />
        `,
        javascript: `
import React from 'react'; 
import { Chips } from "primereact/chips";

export default function InvalidDemo() {
    return (
        <div className="card p-fluid">
            <Chips className="p-invalid" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { Chips } from "primereact/chips";

export default function InvalidDemo() {
    return (
        <div className="card p-fluid">
            <Chips className="p-invalid" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Applying <i>p-invalid</i> class to an input element indicates a failed validation.
                </p>
            </DocSectionText>
            <div className="card p-fluid">
                <Chips className="p-invalid" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
