import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Knob } from '@/components/lib/knob/Knob';
import { useState } from 'react';

export function ColorDoc(props) {
    const [value, setValue] = useState(75);

    const code = {
        basic: `
<Knob value={value} onChange={(e) => setValue(e.value)} valueColor="#708090" rangeColor="#48d1cc" />
        `,
        javascript: `
import React, { useState } from 'react';
import { Knob } from 'primereact/knob';

export default function ColorDemo() {
    const [value, setValue] = useState(75);

    return (
        <div className="card flex justify-content-center">
            <Knob value={value} onChange={(e) => setValue(e.value)} valueColor="#708090" rangeColor="#48d1cc" />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from 'react';
import { Knob, KnobChangeEvent } from 'primereact/knob';

export default function ColorDemo() {
    const [value, setValue] = useState<number>(75);

    return (
        <div className="card flex justify-content-center">
            <Knob value={value} onChange={(e : KnobChangeEvent) => setValue(e.value)} valueColor="#708090" rangeColor="#48d1cc" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Colors are customized with the <i>textColor</i>, <i>rangeColor</i> and <i>valueColor</i> properties.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Knob value={value} onChange={(e) => setValue(e.value)} valueColor="#708090" rangeColor="#48d1cc" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
