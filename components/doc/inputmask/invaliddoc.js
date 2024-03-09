import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputMask } from '@/components/lib/inputmask/InputMask';

export function InvalidDoc(props) {
    const code = {
        basic: `
<InputMask mask="99-999999" placeholder="99-999999" className="p-invalid"/>
        `,
        javascript: `
import React from 'react'; 
import { InputMask } from "primereact/inputmask";

export default function InvalidDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputMask mask="99-999999" placeholder="99-999999" className="p-invalid" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { InputMask } from "primereact/inputmask";

export default function InvalidDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputMask mask="99-999999" placeholder="99-999999" className="p-invalid" />
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
                <InputMask mask="99-999999" placeholder="99-999999" className="p-invalid" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
