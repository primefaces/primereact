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

export default function InvalidDoc() {
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
import { InputNumber, InputNumberValueChangeParams } from 'primereact/inputnumber';

export default function InvalidDoc() {
    const [value, setValue] = useState<number>(151351);

    return (
        <div className="card flex justify-content-center">
            <InputNumber className="p-invalid" value={value} onValueChange={(e) => setValue(e.value)} mode="decimal" minFractionDigits={2} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Applying <i>p-invalid</i> class to an input element indicates a failed validation.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <InputNumber className="p-invalid" value={value} onValueChange={(e) => setValue(e.value)} mode="decimal" minFractionDigits={2} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
