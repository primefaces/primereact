import { useState } from 'react';
import { Knob } from '../../lib/knob/Knob';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function SizeDoc(props) {
    const [value, setValue] = useState(60);

    const code = {
        basic: `
<Knob value={value} size={200} onChange={(e) => setValue(e.value)} />
        `,
        javascript: `
import { useState } from 'react';
import { Knob } from 'primereact/knob';

export default function SizeDoc() {
    const [value, setValue] = useState(60);

    return (
        <Knob value={value} size={200} onChange={(e) => setValue(e.value)} />
    )
}
        `,
        typescript: `
import { useState } from 'react';
import { Knob } from 'primereact/knob';

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
            <DocSectionText {...props}>Size of the component in pixels.</DocSectionText>
            <div className="card flex justify-content-center">
                <Knob value={value} size={200} onChange={(e) => setValue(e.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
