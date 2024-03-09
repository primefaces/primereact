import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Knob } from '@/components/lib/knob/Knob';
import { useState } from 'react';

export function MinMaxDoc(props) {
    const [value, setValue] = useState(10);

    const code = {
        basic: `
<Knob value={value} onChange={(e) => setValue(e.value)} min={-50} max={50} />
        `,
        javascript: `
import React, { useState } from 'react';
import { Knob } from 'primereact/knob';

export default function MinMaxDemo() {
    const [value, setValue] = useState(10);

    return (
        <div className="card flex justify-content-center">
            <Knob value={value} onChange={(e) =>  setValue(e.value)} min={-50} max={50} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from 'react';
import { Knob, KnobChangeEvent } from 'primereact/knob';

export default function MinMaxDemo() {
    const [value, setValue] = useState<number>(10);

    return (
        <div className="card flex justify-content-center">
            <Knob value={value} onChange={(e : KnobChangeEvent) => setValue(e.value)} min={-50} max={50} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Boundaries are configured with the <i>min</i> and <i>max</i> properties whose defaults are 0 and 100 respectively.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Knob value={value} onChange={(e) => setValue(e.value)} min={-50} max={50} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
