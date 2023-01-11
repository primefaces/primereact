import { useState } from 'react';
import { InputNumber } from '../../lib/inputnumber/InputNumber';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function DisabledDoc(props) {
    const [value, setValue] = useState(50);

    const code = {
        basic: `
<InputNumber inputId="percent" value={value} disabled prefix="%" />
`,
        javascript: `
import React, { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';

export default function DisabledDoc() {
    const [value, setValue] = useState(50);

    return (
        <div className="card flex justify-content-center p-fluid">
            <div className="field col-12 md:col-3">
                <label htmlFor="percent">Percent</label>
                <InputNumber inputId="percent" value={value} disabled prefix="%" />
            </div>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { InputNumber, InputNumberValueChangeParams } from 'primereact/inputnumber';

export default function DisabledDoc() {
    const [value, setValue] = useState<number>(50);

    return (
        <div className="card flex justify-content-center p-fluid">
            <div className="field col-12 md:col-3">
                <label htmlFor="percent">Percent</label>
                <InputNumber inputId="percent" value={value} disabled prefix="%" />
            </div>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    <i>disabled</i> prop prevents an input from being editable.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center p-fluid">
                <div className="field col-12 md:col-3">
                    <label htmlFor="percent">Percent</label>
                    <InputNumber inputId="percent" value={value} disabled prefix="%" />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
