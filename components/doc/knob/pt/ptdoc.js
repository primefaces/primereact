import { useState } from 'react';
import { Knob } from '../../../lib/knob/Knob';
import { DocSectionCode } from '../../common/docsectioncode';
import { DocSectionText } from '../../common/docsectiontext';

export function PTDoc(props) {
    const [value, setValue] = useState(0);

    const code = {
        basic: `
<Knob
    value={value}
    onChange={(e) => setValue(e.value)}
    pt={{
        value: { style: { stroke: 'var(--cyan-500)' } }
    }}
/>
        `,
        javascript: `
import React, { useState } from "react";
import { Knob } from 'primereact/knob';

export default function PTDemo() {
    const [value, setValue] = useState(0);

    return (
        <div className="card flex justify-content-center">
            <Knob
                value={value}
                onChange={(e) => setValue(e.value)}
                pt={{
                    value: { style: { stroke: 'var(--cyan-500)' } }
                }}
            />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Knob, KnobChangeEvent } from 'primereact/knob';

export default function PTDemo() {
    const [value, setValue] = useState<number>(0);

    return (
        <div className="card flex justify-content-center">
            <Knob
                value={value}
                onChange={(e) => setValue(e.value)}
                pt={{
                    value: { style: { stroke: 'var(--cyan-500)' } }
                }}
            />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card flex justify-content-center">
                <Knob
                    value={value}
                    onChange={(e) => setValue(e.value)}
                    pt={{
                        value: { style: { stroke: 'var(--cyan-500)' } }
                    }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
