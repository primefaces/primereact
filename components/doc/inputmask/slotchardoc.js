import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputMask } from '@/components/lib/inputmask/InputMask';
import { useState } from 'react';

export function SlotCharDoc(props) {
    const [value, setValue] = useState();

    const code = {
        basic: `
<InputMask value={value} onChange={(e) => setValue(e.target.value)} mask="99/99/9999" placeholder="99/99/9999" slotChar="mm/dd/yyyy" />
        `,
        javascript: `
import React, { useState } from "react";
import { InputMask } from "primereact/inputmask";

export default function SlotCharDemo() {
    const [value, setValue] = useState();

    return (
        <div className="card flex justify-content-center">
            <InputMask value={value} onChange={(e) => setValue(e.target.value)} mask="99/99/9999" placeholder="99/99/9999" slotChar="mm/dd/yyyy"/>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { InputMask, InputMaskChangeEvent } from "primereact/inputmask";

export default function SlotCharDemo() {
    const [value, setValue] = useState<string | undefined>();

    return (
        <div className="card flex justify-content-center">
            <InputMask value={value} onChange={(e: InputMaskChangeEvent) => setValue(e.target.value)} mask="99/99/9999" placeholder="99/99/9999" slotChar="mm/dd/yyyy"/>
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
