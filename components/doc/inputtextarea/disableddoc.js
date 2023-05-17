import { InputTextarea } from '../../lib/inputtextarea/InputTextarea';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function DisabledDoc(props) {
    const code = {
        basic: `
<InputTextarea disabled rows={5} cols={30} />
        `,
        javascript: `
import React from 'react'; 
import { InputTextarea } from "primereact/inputtextarea";

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputTextarea disabled rows={5} cols={30} value="Disabled" />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { InputTextarea } from "primereact/inputtextarea";

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputTextarea disabled rows={5} cols={30} value="Disabled" />
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
                <InputTextarea disabled rows={5} cols={30} value="Disabled" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
