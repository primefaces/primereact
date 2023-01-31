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

export default function BasicDemo() {
    const [value, setValue] = useState(0);

    return (
        <div className="card flex justify-content-center">
            <Knob value={value} onChange={(e) => setValue(e.value)} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Knob, KnobChangeEvent } from 'primereact/knob';

export default function BasicDemo() {
    const [value, setValue] = useState<number>(0);

    return (
        <div className="card flex justify-content-center">
            <Knob value={value} onChange={(e: KnobChangeEvent) => setValue(e.value)} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Knob is used as a controlled input with <i>value</i> and <i>onChange</i> properties.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Knob value={value} onChange={(e) => setValue(e.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
