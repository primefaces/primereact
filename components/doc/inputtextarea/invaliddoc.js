import { InputTextarea } from '../../lib/inputtextarea/InputTextarea';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function InvalidDoc(props) {
    const code = {
        basic: `
<InputTextarea rows={5} cols={30} className="p-invalid" />
        `,
        javascript: `
import React from 'react'; 
import { InputTextarea } from "primereact/inputtextarea";

export default function InvalidDemo() {
    return (
        <InputTextarea rows={5} cols={30} className="p-invalid" />
    )
}
        `,
        typescript: `
import React from 'react'; 
import { InputTextarea } from "primereact/inputtextarea";

export default function InvalidDemo() {
    return (
        <InputTextarea rows={5} cols={30} className="p-invalid" />
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
            <div className="card flex justify-content-center">
                <InputTextarea rows={5} cols={30} className="p-invalid" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
