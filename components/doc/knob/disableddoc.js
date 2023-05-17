import { useState } from 'react';
import { Knob } from '../../lib/knob/Knob';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function DisabledDoc(props) {
    const [value, setValue] = useState(75);

    const code = {
        basic: `
<Knob value={50} disabled />
        `,
        javascript: `
import React from 'react';
import { Knob } from 'primereact/knob';

export default function DisabledDoc() {
    return (
        <div className="card flex justify-content-center">
            <Knob value={50} disabled />
        </div>
    )
}
        `,
        typescript: `
import React from 'react';
import { Knob } from 'primereact/knob';

export default function DisabledDoc() {
    return (
        <div className="card flex justify-content-center">
            <Knob value={50} disabled />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    When <i>disabled</i> is present, a visual hint is applied to indicate that the Knob cannot be interacted with.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Knob value={50} disabled />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
