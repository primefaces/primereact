import { useState } from 'react';
import { InputNumber } from '../../lib/inputnumber/InputNumber';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function InvalidDoc(props) {
    const [value, setValue] = useState(null);

    const code = {
        basic: `
<InputNumber className="p-invalid" value={value} onValueChange={(e) => setValue(e.value)} mode="decimal" minFractionDigits={2} />
`,
        javascript: `
import React, { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';

export default function InvalidDemo() {
    const [value, setValue] = useState(151351);

    return (
        <div className="card flex justify-content-center">
            <InputNumber className="p-invalid" value={value} onValueChange={(e) => setValue(e.value)} mode="decimal" minFractionDigits={2} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';

export default function InvalidDemo() {
    const [value, setValue] = useState<number>(151351);

    return (
        <div className="card flex justify-content-center">
            <InputNumber className="p-invalid" value={value} onValueChange={(e: InputNumberValueChangeEvent) => setValue(e.value)} mode="decimal" minFractionDigits={2} />
        </div>
    )
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
            <div className="card flex justify-content-center">
                <InputNumber className="p-invalid" value={value} onValueChange={(e) => setValue(e.value)} minFractionDigits={2} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
