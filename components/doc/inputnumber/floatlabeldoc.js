import { useState } from 'react';
import { InputNumber } from '../../lib/inputnumber/InputNumber';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function FloatLabelDoc(props) {
    const [value, setValue] = useState(null);

    const code = {
        basic: `
<span className="p-float-label">
    <InputNumber value={value} onValueChange={(e) => setValue(e.value)} mode="decimal" minFractionDigits={2} />
    <label htmlFor="locale-user">User Locale</label>
</span>
`,
        javascript: `
import React, { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';

export default function FloatLabelDoc() {
    const [value, setValue] = useState(151351);

    return (
        <div className="card flex justify-content-center p-fluid">
            <span className="p-float-label">
                <InputNumber value={value} onValueChange={(e) => setValue(e.value)} mode="decimal" minFractionDigits={2} />
                <label htmlFor="locale-user">User Locale</label>
            </span>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { InputNumber, InputNumberValueChangeParams } from 'primereact/inputnumber';

export default function FloatLabelDoc() {
    const [value, setValue] = useState<number>(151351);

    return (
        <div className="card flex justify-content-center p-fluid">
            <span className="p-float-label">
                <InputNumber value={value} onValueChange={(e) => setValue(e.value)} mode="decimal" minFractionDigits={2} />
                <label htmlFor="locale-user">User Locale</label>
            </span>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    A floating label is implemented by wrapping the input and the label inside a container having <i>.p-float-label</i> style class.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center p-fluid">
                <span className="p-float-label">
                    <InputNumber value={value} onValueChange={(e) => setValue(e.value)} mode="decimal" minFractionDigits={2} />
                    <label htmlFor="locale-user">User Locale</label>
                </span>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
