import { useState } from 'react';
import { Knob } from '../../lib/knob/Knob';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function StepDoc(props) {
    const [value, setValue] = useState(40);

    const code = {
        basic: `
<Knob value={value} onChange={(e) => setValue(value)} step={40} />
        `,
        javascript: `
import React, { useState } from 'react';
import { Knob } from 'primereact/knob';

export default function StepDemo() {
    const [value, setValue] = useState(40);

    return (
        <div className="card flex justify-content-center">
            <Knob value={value} onChange={(e) => setValue(value)} step={40} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from 'react';
import { Knob, KnobChangeEvent } from 'primereact/knob';

export default function StepDemo() {
    const [value, setValue] = useState<number>(40);

    return (
        <div className="card flex justify-content-center">
            <Knob value={value} onChange={(e : KnobChangeEvent) => setValue(value)} step={40} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Size of each movement is defined with the <i>step</i> property.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Knob value={value} step={40} onChange={(e) => setValue(value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
