import { useState } from 'react';
import { InputMask } from '../../lib/inputmask/InputMask';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function FloatLabelDoc(props) {
    const [value, setValue] = useState('');

    const code = {
        basic: `
<span className="p-float-label">
    <InputMask id="inputmask" value={value} onChange={(e) => setValue(e.target.value)} mask="99-999999" />
    <label htmlFor="inputmask">InputMask</label>
</span>
        `,
        javascript: `
import { useState } from "react";
import { InputMask } from "primereact/inputmask";

export default function FloatLabelDemo() {
    const [value, setValue] = useState('');

    return (
        <span className="p-float-label">
            <InputMask id="inputmask" value={value} onChange={(e) => setValue(e.target.value)} mask="99-999999" />
            <label htmlFor="inputmask">InputMask</label>
        </span>
    )
}
        `,
        typescript: `
import { useState } from "react";
import { InputMask, InputMaskChangeParams } from "primereact/inputmask";

export default function FloatLabelDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <span className="p-float-label">
            <InputMask id="inputmask" value={value} onChange={(e: InputMaskChangeParams) => setValue(e.target.value)} mask="99-999999" />
            <label htmlFor="inputmask">InputMask</label>
        </span>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                A floating label is implemented by wrapping the input and the label inside a container having <i>.p-float-label</i> style class.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <span className="p-float-label">
                    <InputMask id="inputmask" value={value} onChange={(e) => setValue(e.target.value)} mask="99-999999" />
                    <label htmlFor="inputmask">InputMask</label>
                </span>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
