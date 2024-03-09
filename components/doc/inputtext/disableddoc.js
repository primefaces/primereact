import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputText } from '@/components/lib/inputtext/InputText';

export function DisabledDoc(props) {
    const code = {
        basic: `
<InputText disabled placeholder="Disabled" />
        `,
        javascript: `
import React from 'react'; 
import { InputText } from "primereact/inputtext";

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputText disabled placeholder="Disabled" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { InputText } from "primereact/inputtext";

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputText disabled placeholder="Disabled" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    When <i>disabled</i> is present, the element cannot be edited and focused.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <InputText disabled placeholder="Disabled" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
