import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputNumber } from '@/components/lib/inputnumber/InputNumber';
import { useState } from 'react';

export function FloatLabelDoc(props) {
    const [value, setValue] = useState(null);

    const code = {
        basic: `
<span className="p-float-label">
    <InputNumber id="number-input" value={value} onValueChange={(e) => setValue(e.value)} />
    <label htmlFor="number-input">Number</label>
</span>
`,
        javascript: `
import React, { useState } from "react";
import { InputNumber } from 'primereact/inputnumber';

export default function FloatLabelDemo() {
    const [value, setValue] = useState(151351);

    return (
        <div className="card flex justify-content-center">
            <span className="p-float-label">
                <InputNumber id="number-input" value={value} onValueChange={(e) => setValue(e.value)} />
                <label htmlFor="number-input">Number</label>
            </span>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';

export default function FloatLabelDemo() {
    const [value, setValue] = useState<number>(151351);

    return (
        <div className="card flex justify-content-center">
            <span className="p-float-label">
                <InputNumber id="number-input" value={value} onValueChange={(e: InputNumberValueChangeEvent) => setValue(e.value)} />
                <label htmlFor="number-input">Number</label>
            </span>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>A floating label appears on top of the input field when focused.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <span className="p-float-label">
                    <InputNumber id="number-input" value={value} onValueChange={(e) => setValue(e.value)} />
                    <label htmlFor="number-input">Number</label>
                </span>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
