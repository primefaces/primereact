import { useState } from 'react';
import { Checkbox } from '../../lib/checkbox/Checkbox';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function InvalidDoc(props) {
    const [checked, setChecked] = useState(false);

    const code = {
        basic: `
<Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
        `,
        javascript: `
import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";

export default function InvalidDemo() {
    const [checked, setChecked] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";

export default function InvalidDemo() {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <div className="card flex justify-content-center">
            <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Invalid state style is added using the <i>p-invalid</i> class to indicate a failed validation.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Checkbox onChange={(e) => setChecked(e.checked)} checked={checked} className="p-invalid"></Checkbox>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
