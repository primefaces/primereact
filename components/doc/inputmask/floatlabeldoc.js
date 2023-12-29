import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputMask } from '@/components/lib/inputmask/InputMask';
import { useState } from 'react';

export function FloatLabelDoc(props) {
    const [value, setValue] = useState();

    const code = {
        basic: `
<span className="p-float-label">
    <InputMask id="ssn_input" value={value} onChange={(e) => setValue(e.target.value)} mask="999-99-9999" />
    <label htmlFor="ssn_input">SSN</label>
</span>
        `,
        javascript: `
import React, { useState } from "react";
import { InputMask } from "primereact/inputmask";

export default function FloatLabelDemo() {
    const [value, setValue] = useState();

    return (
        <div className="card flex justify-content-center">
            <span className="p-float-label">
                <InputMask id="ssn_input" value={value} onChange={(e) => setValue(e.target.value)} mask="999-99-9999" />
                <label htmlFor="ssn_input">SSN</label>
            </span>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { InputMask, InputMaskChangeEvent } from "primereact/inputmask";

export default function FloatLabelDemo() {
    const [value, setValue] = useState<string | undefined>();

    return (
        <div className="card flex justify-content-center">
            <span className="p-float-label">
                <InputMask id="ssn_input" value={value} onChange={(e: InputMaskChangeEvent) => setValue(e.target.value)} mask="999-99-9999" />
                <label htmlFor="ssn_input">SSN</label>
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
                    <InputMask id="ssn_input" value={value} onChange={(e) => setValue(e.target.value)} mask="999-99-9999" />
                    <label htmlFor="ssn_input">SSN</label>
                </span>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
