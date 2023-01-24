import { useState } from 'react';
import { InputSwitch } from '../../lib/inputswitch/InputSwitch';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function PreselectionDoc(props) {
    const [checked, setChecked] = useState(true);

    const code = {
        basic: `
<InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
        `,
        javascript: `
import React, { useState } from "react";
import { InputSwitch } from "primereact/inputswitch";

export default function PreselectionDemo() {
    const [checked, setChecked] = useState(true);

    return (
        <div className="card flex justify-content-center">
            <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from "react";
import { InputSwitch, InputSwitchChangeParams } from "primereact/inputswitch";

export default function PreselectionDemo() {
    const [checked, setChecked] = useState<boolean>(true);

    return (
        <div className="card flex justify-content-center">
            <InputSwitch checked={checked} onChange={(e: InputSwitchChangeParams) => setChecked(e.value)} />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Enabling <i>checked</i> property displays the component as active initially.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
