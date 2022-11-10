import { useState } from 'react';
import { Knob } from '../../lib/knob/Knob';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function ColorDoc(props) {
    const [value, setValue] = useState(50);

    const code = {
        basic: `
<Knob value={value} valueColor={"SlateGray"} rangeColor={"MediumTurquoise"} onChange={(e) => setValue(e.value)}/>
        `,
        javascript: `
import { useState } from 'react';
import { Knob } from 'primereact/knob';

export default function ColorDoc() {
    const [value, setValue] = useState(50);

    return (
        <Knob value={value} valueColor={"SlateGray"} rangeColor={"MediumTurquoise"} onChange={(e) => setValue(e.value)}/>
    )
}
        `,
        typescript: `
import { useState } from 'react';
import { Knob } from 'primereact/knob';

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
                <i>textColor</i> <i>rangeColor</i> <i>valueColor</i>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Knob value={value} valueColor={'SlateGray'} rangeColor={'MediumTurquoise'} onChange={(e) => setValue(e.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
