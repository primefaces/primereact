import { useState } from 'react';
import { Knob } from '../../lib/knob/Knob';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function TemplateDoc(props) {
    const [value, setValue] = useState(60);

    const code = {
        basic: `
<Knob value={value} valueTemplate={'{value}%'} onChange={(e) => setValue(e.value)} />

        `,
        javascript: `
import { useState } from 'react';
import { Knob } from 'primereact/knob';

export default function TemplateDoc() {
    const [value, setValue] = useState(60);

    return (
        <Knob value={value} valueTemplate={'{value}%'} onChange={(e) => setValue(e.value)} />
    )
}
        `,
        typescript: `
import { useState } from 'react';
import { Knob, KnobChangeParams } from 'primereact/knob';

export default function TemplateDoc() {
    const [value, setValue] = useState<number>(60);

    return (
        <Knob value={value} valueTemplate={"{value}%"} onChange={(e : KnobChangeParams) => setValue(e.value)}/>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>Template string of the value.</DocSectionText>
            <div className="card flex justify-content-center">
                <Knob value={value} valueTemplate={'{value}%'} onChange={(e) => setValue(e.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
