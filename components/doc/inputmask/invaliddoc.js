import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputMask } from '@/components/lib/inputmask/InputMask';

export function InvalidDoc(props) {
    const code = {
        basic: `
<InputMask invalid mask="99-999999" placeholder="99-999999" />
        `,
        javascript: `
import React from 'react'; 
import { InputMask } from "primereact/inputmask";

export default function InvalidDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputMask invalid mask="99-999999" placeholder="99-999999" />
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
            <InputMask invalid mask="99-999999" placeholder="99-999999" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Invalid state is displayed using the <i>invalid</i> prop to indicate a failed validation. You can use this style when integrating with form validation libraries.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <InputMask invalid mask="99-999999" placeholder="99-999999" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
