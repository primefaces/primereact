import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputTextarea } from '@/components/lib/inputtextarea/InputTextarea';

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
        <div className="card flex justify-content-center">
            <InputTextarea rows={5} cols={30} className="p-invalid" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { InputTextarea } from "primereact/inputtextarea";

export default function InvalidDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputTextarea rows={5} cols={30} className="p-invalid" />
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
                <InputTextarea rows={5} cols={30} className="p-invalid" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
