import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputNumber } from '@/components/lib/inputnumber/InputNumber';
import { useState } from 'react';

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
