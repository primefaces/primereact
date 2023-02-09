import { useState } from 'react';
import { InputMask } from '../../lib/inputmask/InputMask';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function SlotCharDoc(props) {
    const [value, setValue] = useState('');

    const code = {
        basic: `
<InputMask value={value} onChange={(e) => setValue(e.target.value)} mask="99/99/9999" placeholder="99/99/9999" slotChar="mm/dd/yyyy" />
        `,
        javascript: `
import React, { useState } from "react";
import { InputMask } from "primereact/inputmask";

export default function SlotCharDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <InputMask value={value} onChange={(e) => setValue(e.target.value)} mask="99/99/9999" placeholder="99/99/9999" slotChar="mm/dd/yyyy"/>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { InputMask, InputMaskChangeParams } from "primereact/inputmask";

export default function SlotCharDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <div className="card flex justify-content-center">
            <InputMask value={value} onChange={(e: InputMaskChangeParams) => setValue(e.target.value)} mask="99/99/9999" placeholder="99/99/9999" slotChar="mm/dd/yyyy"/>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Default placeholder for a mask is underscore that can be customized using <i>slotChar</i> property.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <InputMask value={value} onChange={(e) => setValue(e.target.value)} mask="99/99/9999" placeholder="99/99/9999" slotChar="mm/dd/yyyy" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
