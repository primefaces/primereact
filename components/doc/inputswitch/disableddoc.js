import { useState } from 'react';
import { InputSwitch } from '../../lib/inputswitch/InputSwitch';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function DisabledDoc(props) {
    const code = {
        basic: `
<InputSwitch disabled />
        `,
        javascript: `
import React, { useState } from "react";
import { InputSwitch } from "primereact/inputswitch";

export default function DisabledDemo() {
    return (
        <InputSwitch disabled />
    );
}
        `,
        typescript: `
import React, { useState } from "react";
import { InputSwitch } from "primereact/inputswitch";

export default function DisabledDemo() {
    return (
        <InputSwitch disabled />
    );
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
                <InputSwitch disabled />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
