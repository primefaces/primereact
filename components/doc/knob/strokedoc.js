import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Knob } from '@/components/lib/knob/Knob';
import { useState } from 'react';

export function StrokeDoc(props) {
    const [value, setValue] = useState(40);

    const code = {
        basic: `
<Knob value={value} onChange={(e) => setValue(e.value)} strokeWidth={5} />
        `,
        javascript: `
import React, { useState } from 'react';
import { Knob } from 'primereact/knob';

export default function StrokeDemo() {
    const [value, setValue] = useState(40);

    return (
        <div className="card flex justify-content-center">
            <Knob value={value} strokeWidth={5} onChange={(e) => setValue(e.value)} strokeWidth={5} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from 'react';
import { Knob, KnobChangeEvent } from 'primereact/knob';

export default function StrokeDemo() {
    const [value, setValue] = useState<number>(40);

    return (
        <div className="card flex justify-content-center">
            <Knob value={value} onChange={(e : KnobChangeEvent) => setValue(e.value)} strokeWidth={5} />
        </div>

    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    The border size is specified with the <i>stroke</i> property as a number in pixels.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Knob value={value} onChange={(e) => setValue(e.value)} strokeWidth={5} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
