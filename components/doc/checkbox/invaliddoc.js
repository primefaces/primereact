import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Checkbox } from '@/components/lib/checkbox/Checkbox';
import { useState } from 'react';

export function InvalidDoc(props) {
    const [checked, setChecked] = useState(false);

    const code = {
        basic: `
<Checkbox invalid={!checked} onChange={(e) => setChecked(e.checked)} checked={checked}></Checkbox>
        `,
        javascript: `
import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";

export default function InvalidDemo() { 
    const [checked, setChecked] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Checkbox invalid={!checked} onChange={(e) => setChecked(e.checked)} checked={checked}></Checkbox>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";

export default function InvalidDemo() {
    const [checked, setChecked] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Checkbox invalid={!checked} onChange={(e) => setChecked(e.checked)} checked={checked}></Checkbox>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Invalid state is displayed using the <i>invalid</i> prop to indicate a failed validation. You can use this style when integrating with form validation libraries.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Checkbox invalid={!checked} onChange={(e) => setChecked(e.checked)} checked={checked} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
