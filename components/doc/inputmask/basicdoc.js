import { useState } from 'react';
import { InputMask } from '../../lib/inputmask/InputMask';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function BasicDoc(props) {
    const [value, setValue] = useState('');

    const code = {
        basic: `
<InputMask value={value} onChange={(e) => setValue(e.target.value)} mask="99-999999" placeholder="99-999999" />
        `,
        javascript: `
import { useState } from "react";
import { InputMask } from "primereact/inputmask";

export default function BasicDemo() {
    const [value, setValue] = useState('');

    return (
        <InputMask value={value} onChange={(e) => setValue(e.target.value)} mask="99-999999" placeholder="99-999999"/>
    )
}
        `,
        typescript: `
import { useState } from "react";
import { InputMask } from "primereact/inputmask";

export default function BasicDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <InputMask value={value} onChange={(e: InputMaskChangeParams) => setValue(e.target.value)} mask="99-999999" placeholder="99-999999"/>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                InputMask is used as a controlled input with <i>value</i> and <i>onChange</i> properties, <i>mask</i> property is required to define the mask of the input.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <InputMask value={value} onChange={(e) => setValue(e.target.value)} mask="99-999999"  placeholder="99-999999" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
