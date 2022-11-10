import { useState } from 'react';
import { Knob } from '../../lib/knob/Knob';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function ReadOnlyDoc(props) {
    const [value, setValue] = useState(50);

    const code = {
        basic: `
<Knob value={value} readOnly />
        `,
        javascript: `
import { useState } from 'react';
import { Knob } from 'primereact/knob';

export default function ReadOnlyDoc() {
    const [value, setValue] = useState(50);
    
    return (
        <Knob value={value} readOnly />
    )
}
        `,
        typescript: `
import { useState } from 'react';
import { Knob } from 'primereact/knob';

export default function ReadOnlyDoc() {
    const [value, setValue] = useState<number>(50);

    return (
        <Knob value={value} readOnly />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>When present, it specifies that the component value cannot be edited.</DocSectionText>
            <div className="card flex justify-content-center">
                <Knob value={value} readOnly />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
