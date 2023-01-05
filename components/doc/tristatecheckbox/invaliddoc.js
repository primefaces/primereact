import { useState } from 'react';
import { TriStateCheckbox } from '../../lib/tristatecheckbox/TriStateCheckbox';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function InvalidDoc(props) {
    const code = {
        basic: `
<TriStateCheckbox className="p-invalid" />
<label>Invalid</label>
        `,
        javascript: `
import React, { useState } from "react";
import { TriStateCheckbox } from 'primereact/tristatecheckbox';

export default function InvalidDoc() {

    return (
        <div className="card flex justify-content-center align-items-center">
            <div className="mr-2">
                <TriStateCheckbox className="p-invalid" />
            </div>
            <label>Invalid</label>
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from "react";
import { TriStateCheckbox, TriStateCheckboxChangeParams } from 'primereact/tristatecheckbox';

export default function InvalidDoc() {
    const [value, setValue] = useState<boolean | undefined | null>(null);

    return (
        <div className="card flex justify-content-center align-items-center">
            <div className="mr-2">
                <TriStateCheckbox className="p-invalid" />
            </div>
            <label>Invalid</label>
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                {/* TO DO: Add demo content. */}
                <p></p>
            </DocSectionText>
            <div className="card flex justify-content-center align-items-center">
                <div className="mr-2">
                    <TriStateCheckbox className="p-invalid" />
                </div>
                <label>Invalid</label>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
