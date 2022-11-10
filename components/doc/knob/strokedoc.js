import { useState } from 'react';
import { Knob } from '../../lib/knob/Knob';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function StrokeDoc(props) {
    const [value, setValue] = useState(40);

    const code = {
        basic: `
<Knob value={value} strokeWidth={5} onChange={(e) => setValue(e.value)}/>

        `,
        javascript: `
import { useState } from 'react';
import { Knob } from 'primereact/knob';

export default function StrokeDoc() {
    const [value, setValue] = useState(40);

    return (
        <Knob value={value} strokeWidth={5} onChange={(e) => setValue(e.value)}/>

    )
}
        `,
        typescript: `
import { useState } from 'react';
import { Knob } from 'primereact/knob';

export default function StrokeDoc() {
    const [value, setValue] = useState<number>(40);

    return (
        <Knob value={value} strokeWidth={5} onChange={(e : KnobChangeParams) => setValue(e.value)}/>

    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>Width of the knob stroke.</DocSectionText>
            <div className="card flex justify-content-center">
                <Knob value={value} strokeWidth={5} onChange={(e) => setValue(e.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
