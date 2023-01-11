import { InputText } from '../../lib/inputtext/InputText';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function DisabledDoc(props) {
    const code = {
        basic: `
<InputText disabled />
        `,
        javascript: `
import React from 'react'; 
import { InputText } from "primereact/inputtext";

export default function DisabledDemo() {
    return (
        <InputText disabled placeholder="Disabled" />
    )
}
        `,
        typescript: `
import React from 'react'; 
import { InputText } from "primereact/inputtext";

export default function DisabledDemo() {
    return (
        <InputText disabled placeholder="Disabled" />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    <i>disabled</i> prop prevents an input from being editable.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <InputText disabled placeholder="Disabled" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
