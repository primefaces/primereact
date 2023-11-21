import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputSwitch } from '@/components/lib/inputswitch/InputSwitch';
import { useState } from 'react';

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
        <div className="card flex justify-content-center">
            <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from "react";
import { InputSwitch, InputSwitchChangeEvent } from "primereact/inputswitch";

export default function BasicDemo() {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <div className="card flex justify-content-center">
            <InputSwitch checked={checked} onChange={(e: InputSwitchChangeEvent) => setChecked(e.value)} />
        </div>
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
