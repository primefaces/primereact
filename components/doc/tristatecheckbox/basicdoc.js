import { useState } from 'react';
import { TriStateCheckbox } from '../../lib/tristatecheckbox/TriStateCheckbox';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function BasicDoc(props) {
    const [value, setValue] = useState(null);

    const code = {
        basic: `
<TriStateCheckbox value={value} onChange={(e) => setValue(e.value)} />

        `,
        javascript: `
import React, { useState } from "react";
import { TriStateCheckbox } from 'primereact/tristatecheckbox';

export default function BasicDoc() {
    const [value, setValue] = useState(null);

    return (
        <TriStateCheckbox value={value} onChange={(e) => setValue(e.value)} />
    );
}
        `,
        typescript: `
import React, { useState } from "react";
import { TriStateCheckbox, TriStateCheckboxChangeParams } from 'primereact/tristatecheckbox';

export default function BasicDoc() {
    const [value, setValue] = useState<boolean | undefined | null>(null);

    return (
        <TriStateCheckbox value={value} onChange={(e : TriStateCheckboxChangeParams) => setValue(e.value)} />
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    TriStateCheckbox is used as a controlled input with <i>checked</i> and <i>onChange</i> properties.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center align-items-center">
                <div className="mr-2">
                    <TriStateCheckbox value={value} onChange={(e) => setValue(e.value)} />
                </div>
                <label>{String(value)}</label>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
