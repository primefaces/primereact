import { useState } from 'react';
import { Knob } from '../../lib/knob/Knob';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function MinMaxDoc(props) {
    const [value, setValue] = useState(10);

    const code = {
        basic: `
<Knob value={value} min={-50} max={50} onChange={(e) =>  setValue(e.value)}/>
        `,
        javascript: `
import { useState } from 'react';
import { Knob } from 'primereact/knob';

export default function MinMaxDoc() {
    const [value, setValue] = useState(10);

    return (
        <Knob value={value} min={-50} max={50} onChange={(e) =>  setValue(e.value)}/>
    )
}
        `,
        typescript: `
import { useState } from 'react';
import { Knob } from 'primereact/knob';

export default function MinMaxDoc() {
    const [value, setValue] = useState<number>(10);

    return (
        <Knob value={value} min={-50} max={50} onChange={(e : KnobChangeParams) =>  setValue(e.value)}/>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                Boundaries are configured with the <i>min</i> and <i>max</i> values whose defaults are 0 and 100 respectively.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Knob value={value} min={-50} max={50} onChange={(e) => setValue(e.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
