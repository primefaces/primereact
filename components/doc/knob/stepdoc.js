import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Knob } from '@/components/lib/knob/Knob';
import { useState } from 'react';

export function StepDoc(props) {
    const [value, setValue] = useState(10);

    const code = {
        basic: `
<Knob value={value} step={10} onChange={(e) => setValue(e.value)} />
        `,
        javascript: `
import React, { useState } from 'react';
import { Knob } from 'primereact/knob';

export default function StepDemo() {
    const [value, setValue] = useState(10);

    return (
        <div className="card flex justify-content-center">
            <Knob value={value} step={10} onChange={(e) => setValue(e.value)} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from 'react';
import { Knob, KnobChangeEvent } from 'primereact/knob';

export default function StepDemo() {
    const [value, setValue] = useState<number>(10);

    return (
        <div className="card flex justify-content-center">
            <Knob value={value} step={10} onChange={(e : KnobChangeEvent) => setValue(e.value)}  />
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
                <Knob value={value} step={10} onChange={(e) => setValue(e.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
