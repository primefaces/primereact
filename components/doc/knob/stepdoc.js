import { useState } from 'react';
import { Knob } from '../../lib/knob/Knob';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function StepDoc(props) {
    const [value, setValue] = useState(40);

    const code = {
        basic: `
<Knob value={value} step={40} onChange={(e) => setValue(value)} />

        `,
        javascript: `
import { useState } from 'react';
import { Knob } from 'primereact/knob';

export default function StepDoc() {
    const [value, setValue] = useState(40);

    return (
        <Knob value={value} step={40} onChange={(e) => setValue(value)} />
    )
}
        `,
        typescript: `
import { useState } from 'react';
import { Knob, KnobChangeParams } from 'primereact/knob';

export default function StepDoc() {
    const [value, setValue] = useState<number>(40);

    return (
        <Knob value={value} step={40} onChange={(e : KnobChangeParams) => setValue(value)} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Step factor is 1 by default and can be customized with step option.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Knob value={value} step={40} onChange={(e) => setValue(value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
