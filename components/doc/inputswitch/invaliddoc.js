import { InputSwitch } from '../../lib/inputswitch/InputSwitch';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function InvalidDoc(props) {
    const code = {
        basic: `
<InputSwitch className="p-invalid" />
        `,
        javascript: `
import React, { useState } from "react";
import { InputSwitch } from "primereact/inputswitch";

export default function InvalidDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputSwitch className="p-invalid" />
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from "react";
import { InputSwitch } from "primereact/inputswitch";

export default function InvalidDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputSwitch className="p-invalid" />
        </div>
    );
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
                <InputSwitch className="p-invalid" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
