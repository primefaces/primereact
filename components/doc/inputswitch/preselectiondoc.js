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
import { useState } from "react";
import { InputSwitch } from "primereact/inputswitch";

export default function PreselectionDemo() {
    const [checked, setChecked] = useState(true);

    return (
        <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
    );
}
        `,
        typescript: `
import { useState } from "react";
import { InputSwitch, InputSwitchChangeParams } from "primereact/inputswitch";

export default function PreselectionDemo() {
    const [checked, setChecked] = useState<boolean>(true);

    return (
        <InputSwitch checked={checked} onChange={(e: InputSwitchChangeParams) => setChecked(e.value)} />
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                Enabling <i>checked</i> property displays the component as active.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
