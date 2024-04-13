import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputText } from '@/components/lib/inputtext/InputText';

export function InvalidDoc(props) {
    const code = {
        basic: `
<InputText invalid />
        `,
        javascript: `
import React from 'react'; 
import { InputText } from "primereact/inputtext";

export default function InvalidDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputText invalid />
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
            <InputText invalid />
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
                <InputText invalid />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
