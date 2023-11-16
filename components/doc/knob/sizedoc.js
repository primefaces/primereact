import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Knob } from '@/components/lib/knob/Knob';
import { useState } from 'react';

export function SizeDoc(props) {
    const [value, setValue] = useState(60);

    const code = {
        basic: `
<Knob value={value} onChange={(e) => setValue(e.value)} size={200} />
        `,
        javascript: `
import React, { useState } from 'react';
import { Knob } from 'primereact/knob';

export default function SizeDemo() {
    const [value, setValue] = useState(60);

    return (
        <div className="card flex justify-content-center">
            <Knob value={value} onChange={(e) => setValue(e.value)} size={200} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from 'react';
import { Knob, KnobChangeEvent } from 'primereact/knob';

export default function SizeDemo() {
    const [value, setValue] = useState<number>(60);

    return (
        <div className="card flex justify-content-center">
            <Knob value={value} onChange={(e : KnobChangeEvent) => setValue(e.value)} size={200} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Diameter of the knob is defined in pixels using the <i>size</i> property.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Knob value={value} onChange={(e) => setValue(e.value)} size={200} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
