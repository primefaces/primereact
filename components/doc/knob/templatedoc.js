import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Knob } from '@/components/lib/knob/Knob';
import { useState } from 'react';

export function TemplateDoc(props) {
    const [value, setValue] = useState(60);

    const code = {
        basic: `
<Knob value={value} onChange={(e) => setValue(e.value)} valueTemplate={'{value}%'} />
        `,
        javascript: `
import React, { useState } from 'react';
import { Knob } from 'primereact/knob';

export default function TemplateDemo() {
    const [value, setValue] = useState(60);

    return (
        <div className="card flex justify-content-center">
            <Knob value={value} onChange={(e) => setValue(e.value)} valueTemplate={'{value}%'} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from 'react';
import { Knob, KnobChangeEvent } from 'primereact/knob';

export default function TemplateDemo() {
    const [value, setValue] = useState<number>(60);

    return (
        <div className="card flex justify-content-center">
            <Knob value={value} onChange={(e : KnobChangeEvent) => setValue(e.value)} valueTemplate={"{value}%"} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Label is a string template that can be customized with the <i>valueTemplate</i> property having <i>{value}</i> as the placeholder .
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Knob value={value} onChange={(e) => setValue(e.value)} valueTemplate={'{value}%'} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
