import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputTextarea } from '@/components/lib/inputtextarea/InputTextarea';

export function InvalidDoc(props) {
    const code = {
        basic: `
<InputTextarea invalid rows={5} cols={30} />
        `,
        javascript: `
import React from 'react'; 
import { InputTextarea } from "primereact/inputtextarea";

export default function InvalidDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputTextarea invalid rows={5} cols={30} />
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
            <InputTextarea invalid rows={5} cols={30} />
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
                <InputTextarea invalid rows={5} cols={30} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
