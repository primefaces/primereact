import { useState } from 'react';
import { InputMask } from '../../lib/inputmask/InputMask';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function BasicDoc(props) {
    const [value, setValue] = useState('');

    const code = {
        basic: `
<InputMask value={value} onChange={(e) => setValue(e.target.value)} mask="99-999999" placeholder="99-999999" />
        `,
        javascript: `
import React, { useState } from "react";
import { InputMask } from "primereact/inputmask";

export default function BasicDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <InputMask value={value} onChange={(e) => setValue(e.target.value)} mask="99-999999" placeholder="99-999999"/>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { InputMask, InputMaskChangeEvent } from "primereact/inputmask";

export default function BasicDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <div className="card flex justify-content-center">
            <InputMask value={value} onChange={(e: InputMaskChangeEvent) => setValue(e.target.value)} mask="99-999999" placeholder="99-999999"/>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    InputMask is used as a controlled input with <i>value</i> and <i>onChange</i> properties along with the <i>mask</i> property to define the mask.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <InputMask value={value} onChange={(e) => setValue(e.target.value)} mask="99-999999" placeholder="99-999999" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
