import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Checkbox } from '@/components/lib/checkbox/Checkbox';
import { useState } from 'react';

export function FilledDoc(props) {
    const [checked, setChecked] = useState(false);

    const code = {
        basic: `
<Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
        `,
        javascript: `
import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";

export default function FilledDemo() {
    const [checked, setChecked] = useState(false);

    return (
        <div className="card flex justify-content-center">
            <Checkbox variant="filled" onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";

export default function FilledDemo() {
    const [checked, setChecked] = useState<boolean>(false);

    return (
        <div className="card flex justify-content-center">
            <Checkbox variant="filled" onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Specify the <i>variant</i> property as <i>filled</i> to display the component with a higher visual emphasis than the default <i>outlined</i> style.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Checkbox variant="filled" onChange={(e) => setChecked(e.checked)} checked={checked} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
