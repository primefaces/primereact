import { useState } from 'react';
import { Knob } from '../../lib/knob/Knob';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function SizeDoc(props) {
    const [value, setValue] = useState(60);

    const code = {
        basic: `
<Knob value={value} size={200} onChange={(e) => setValue(e.value)} />
        `,
        javascript: `
import React, { useState } from 'react';
import { Knob } from 'primereact/knob';

export default function SizeDoc() {
    const [value, setValue] = useState(60);

    return (
        <Knob value={value} size={200} onChange={(e) => setValue(e.value)} />
    )
}
        `,
        typescript: `
import React, { useState } from 'react';
import { Knob, KnobChangeParams } from 'primereact/knob';

export default function SizeDoc() {
    const [value, setValue] = useState<number>(60);

    return (
        <Knob value={value} size={200} onChange={(e : KnobChangeParams) => setValue(e.value)} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Size of the component in pixels.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Knob value={value} size={200} onChange={(e) => setValue(e.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
