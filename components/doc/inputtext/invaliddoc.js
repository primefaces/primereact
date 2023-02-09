import { InputText } from '../../lib/inputtext/InputText';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function InvalidDoc(props) {
    const code = {
        basic: `
<InputText className="p-invalid" />
        `,
        javascript: `
import React from 'react'; 
import { InputText } from "primereact/inputtext";

export default function InvalidDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputText className="p-invalid" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { InputText } from "primereact/inputtext";

export default function InvalidDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputText className="p-invalid" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Invalid state style is added using the <i>p-invalid</i> class to indicate a failed validation.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <InputText className="p-invalid" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
