import { useState } from 'react';
import { Knob } from '../../lib/knob/Knob';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function BasicDoc(props) {
    const [value, setValue] = useState(0);

    const code = {
        basic: `
<Knob value={value} onChange={(e) => setValue(e.value)} />
        `,
        javascript: `
import React, { useState } from "react";
import { Knob } from 'primereact/knob';

export default function BasicDoc() {
    const [value, setValue] = useState(0);

    return (
        <Knob value={value} onChange={(e) => setValue(e.value)} />
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Knob, KnobChangeParams } from 'primereact/knob';

export default function BasicDoc() {
    const [value, setValue] = useState<number>(0);

    return (
        <Knob value={value} onChange={(e: KnobChangeParams) => setValue(e.value)} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    There are two ways to display confirm popup. One of them is to use the confirmPopup method and the other is to use the &lg;ConfirmPopup&gl; tag. These independently create popup element. It supports the same properties in both.
                    target property is mandatory to align the popup to its caller.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Knob value={value} onChange={(e) => setValue(e.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
