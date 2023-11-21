import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Knob } from '@/components/lib/knob/Knob';
import { useState } from 'react';

export function ReadOnlyDoc(props) {
    const [value, setValue] = useState(50);

    const code = {
        basic: `
<Knob value={50} readOnly />
        `,
        javascript: `
import React from 'react';
import { Knob } from 'primereact/knob';

export default function ReadOnlyDemo() {
    return (
        <div className="card flex justify-content-center">
            <Knob value={50} readOnly />
        </div>
    )
}
        `,
        typescript: `
import React from 'react';
import { Knob } from 'primereact/knob';

export default function ReadOnlyDemo() {
    return (
        <div className="card flex justify-content-center">
            <Knob value={50} readOnly />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    When <i>readOnly</i> present, value cannot be edited.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Knob value={50} readOnly />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
