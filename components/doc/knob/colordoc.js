import { useState } from 'react';
import { Knob } from '../../lib/knob/Knob';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ColorDoc(props) {
    const [value, setValue] = useState(50);

    const code = {
        basic: `
<Knob value={value} valueColor={"SlateGray"} rangeColor={"MediumTurquoise"} onChange={(e) => setValue(e.value)}/>
        `,
        javascript: `
import React, { useState } from 'react';
import { Knob } from 'primereact/knob';

export default function ColorDoc() {
    const [value, setValue] = useState(50);

    return (
        <Knob value={value} valueColor={"SlateGray"} rangeColor={"MediumTurquoise"} onChange={(e) => setValue(e.value)}/>
    )
}
        `,
        typescript: `
import React, { useState } from 'react';
import { Knob, KnobChangeParams } from 'primereact/knob';

export default function ColorDoc() {
    const [value, setValue] = useState<number>(50);

    return (
        <Knob value={value} valueColor={"SlateGray"} rangeColor={"MediumTurquoise"} onChange={(e : KnobChangeParams) => setValue(e.value)}/>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    <i>textColor</i> <i>rangeColor</i> <i>valueColor</i>
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Knob value={value} valueColor={'SlateGray'} rangeColor={'MediumTurquoise'} onChange={(e) => setValue(e.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
