import { useState } from 'react';
import { TriStateCheckbox } from '../../lib/tristatecheckbox/TriStateCheckbox';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function DisabledDoc(props) {
    const [value, setValue] = useState('Disabled');

    const code = {
        basic: `
<TriStateCheckbox disabled value={value} onChange={(e) => setValue(e.value)} />

        `,
        javascript: `
import { useState } from "react";
import { TriStateCheckbox } from 'primereact/tristatecheckbox';

export default function DisabledDoc() {
    const [value, setValue] = useState(null);

    return (
        <TriStateCheckbox disabled value={value} onChange={(e) => setValue(e.value)} />
    );
}
        `,
        typescript: `
import { useState } from "react";
import { TriStateCheckbox } from 'primereact/tristatecheckbox';

export default function DisabledDoc() {
    const [value, setValue] = useState<any>(null);

    return (
        <TriStateCheckbox disabled value={value} onChange={(e : TriStateCheckboxChangeParams) => setValue(e.value)} />
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                With <i>disabled</i> it specifies that the element value cannot be altered.
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
