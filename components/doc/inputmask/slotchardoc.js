import { useState } from 'react';
import { InputMask } from '../../lib/inputmask/InputMask';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function SlotCharDoc(props) {
    const [value, setValue] = useState('');

    const code = {
        basic: `
<InputMask value={value} onChange={(e) => setValue(e.target.value)} mask="99/99/9999" placeholder="99/99/9999" slotChar="mm/dd/yyyy />
        `,
        javascript: `
import { useState } from "react";
import { InputMask } from "primereact/inputmask";

export default function SlotCharDemo() {
    const [value, setValue] = useState('');

    return (
        <InputMask value={value} onChange={(e) => setValue(e.target.value)} mask="99/99/9999" placeholder="99/99/9999" slotChar="mm/dd/yyyy/>
    )
}
        `,
        typescript: `
import { useState } from "react";
import { InputMask } from "primereact/inputmask";

export default function SlotCharDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <InputMask value={value} onChange={(e: InputMaskChangeParams) => setValue(e.target.value)} mask="99/99/9999" placeholder="99/99/9999" slotChar="mm/dd/yyyy/>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                Default placeholder for a mask is underscore and it can be customized using <i>slotChart</i> option.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <InputMask value={value} onChange={(e) => setValue(e.target.value)} mask="99/99/9999" placeholder="99/99/9999" slotChar="mm/dd/yyyy" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
