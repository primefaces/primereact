import { useState } from 'react';
import { InputSwitch } from '../../lib/inputswitch/InputSwitch';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function BasicDoc(props) {
    const [checked, setChecked] = useState(false);

    const code = {
        basic: `
<InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
        `,
        javascript: `
import React, { useState } from "react";
import { InputSwitch } from "primereact/inputswitch";

export default function BasicDemo() {
    const [checked, setChecked] = useState(false);

    return (
        <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
    );
}
        `,
        typescript: `
import React, { useState } from "react";
import { InputSwitch, InputSwitchChangeParams } from "primereact/inputswitch";

export default function BasicDemo() {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <InputSwitch checked={checked} onChange={(e: InputSwitchChangeParams) => setChecked(e.value)} />
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    InputSwitch is used as a controlled input with <i>checked</i> and <i>onChange</i> properties.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
