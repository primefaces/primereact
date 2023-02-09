import { InputMask } from '../../lib/inputmask/InputMask';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function DisabledDoc(props) {
    const code = {
        basic: `
<InputMask mask="99-999999" placeholder="99-999999" disabled />
        `,
        javascript: `
import React from 'react'; 
import { InputMask } from "primereact/inputmask";

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputMask mask="99-999999" placeholder="99-999999" disabled />
        </div>
    )
}
        `,
        typescript: `
import React from 'react'; 
import { InputMask } from "primereact/inputmask";

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputMask mask="99-999999" placeholder="99-999999" disabled />
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
                <InputMask mask="99-999999" placeholder="99-999999" disabled />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
