import { useState } from 'react';
import { TriStateCheckbox } from '../../lib/tristatecheckbox/TriStateCheckbox';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function DisabledDoc(props) {
    const [value, setValue] = useState('Disabled');

    const code = {
        basic: `
<TriStateCheckbox disabled value={value} onChange={(e) => setValue(e.value)} />

        `,
        javascript: `
import React, { useState } from "react";
import { TriStateCheckbox } from 'primereact/tristatecheckbox';

export default function DisabledDoc() {
    const [value, setValue] = useState(null);

    return (
        <TriStateCheckbox disabled value={value} onChange={(e) => setValue(e.value)} />
    );
}
        `,
        typescript: `
import React, { useState } from "react";
import { TriStateCheckbox, TriStateCheckboxChangeParams } from 'primereact/tristatecheckbox';

export default function DisabledDoc() {
    const [value, setValue] = useState<boolean | undefined | null>(null);

    return (
        <TriStateCheckbox disabled value={value} onChange={(e : TriStateCheckboxChangeParams) => setValue(e.value)} />
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    With <i>disabled</i> it specifies that the element value cannot be altered.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center align-items-center">
                <div className="mr-2">
                    <TriStateCheckbox disabled value={value} onChange={(e) => setValue(e.value)} />
                </div>
                <label>{String(value)}</label>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
