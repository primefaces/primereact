import { useState } from 'react';
import { TriStateCheckbox } from '../../lib/tristatecheckbox/TriStateCheckbox';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function InvalidDoc(props) {
    const [value, setValue] = useState(null);

    const code = {
        basic: `
<TriStateCheckbox value={value} onChange={(e) => setValue(e.value)} className="p-invalid" />
        `,
        javascript: `
import React, { useState } from "react";
import { TriStateCheckbox } from 'primereact/tristatecheckbox';

export default function InvalidDemo() {
    const [value, setValue] = useState(null);

    return (
        <div className="card flex flex-column align-items-center gap-3">
            <TriStateCheckbox value={value} onChange={(e) => setValue(e.value)} className="p-invalid" />
            <label>{String(value)}</label>
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from "react";
import { TriStateCheckbox, TriStateCheckboxChangeEvent } from 'primereact/tristatecheckbox';

export default function InvalidDemo() {
    const [value, setValue] = useState<boolean | undefined | null>(null);

    return (
        <div className="card flex flex-column align-items-center gap-3">
            <TriStateCheckbox value={value} onChange={(e : TriStateCheckboxChangeEvent) => setValue(e.value)} className="p-invalid" />
            <label>{String(value)}</label>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Invalid state style is added using the <i>p-invalid</i> class to indicate a failed validation.
                </p>
            </DocSectionText>
            <div className="card flex flex-column align-items-center gap-3">
                <TriStateCheckbox value={value} onChange={(e) => setValue(e.value)} className="p-invalid" />
                <label>{String(value)}</label>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
