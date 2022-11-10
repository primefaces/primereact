import { useState } from 'react';
import { Knob } from '../../lib/knob/Knob';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function DisabledDoc(props) {
    const [value, setValue] = useState(75);

    const code = {
        basic: `
<Knob value={value} disabled />
        `,
        javascript: `
import { useState } from 'react';
import { Knob } from 'primereact/knob';

export default function DisabledDoc() {
    const [value, setValue] = useState(75);

    return (
        <Knob value={value} disabled />
    )
}
        `,
        typescript: `
import { useState } from 'react';
import { Knob } from 'primereact/knob';

export default function DisabledDoc() {
    const [value, setValue] = useState<number>(75);

    return (
        <Knob value={value} disabled />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>When present, it specifies that the component value cannot be edited.</DocSectionText>
            <div className="card flex justify-content-center">
                <Knob value={value} disabled />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
