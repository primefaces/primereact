import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputSwitch } from '@/components/lib/inputswitch/InputSwitch';

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
        <div className="card flex justify-content-center">
            <InputSwitch disabled />
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from "react";
import { InputSwitch } from "primereact/inputswitch";

export default function DisabledDemo() {
    return (
        <div className="card flex justify-content-center">
            <InputSwitch disabled />
        </div>
    );
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
                <InputSwitch disabled />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
