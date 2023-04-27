import { useState } from 'react';
import { InputNumber } from '../../lib/inputnumber/InputNumber';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function DisabledDoc(props) {
    const [value, setValue] = useState(50);

    const code = {
        basic: `
<InputNumber value={value} disabled prefix="%" />
`,
        javascript: `
import React, { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';

export default function DisabledDemo() {
    const [value, setValue] = useState(50);

    return (
        <div className="card flex justify-content-center">
            <InputNumber value={value} disabled prefix="%" />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';

export default function DisabledDemo() {
    const [value, setValue] = useState<number>(50);

    return (
        <div className="card flex justify-content-center">
            <InputNumber value={value} disabled prefix="%" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    When <i>disabled</i> is present, the element cannot be edited and focused.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <InputNumber value={value} disabled prefix="%" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
