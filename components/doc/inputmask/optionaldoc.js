import { useState } from 'react';
import { InputMask } from '../../lib/inputmask/InputMask';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function OptionalDoc(props) {
    const [value, setValue] = useState('');

    const code = {
        basic: `
<InputMask value={value} onChange={(e) => setValue(e.target.value)} mask="(999) 999-9999? x99999" placeholder="(999) 999-9999? x99999"  />
        `,
        javascript: `
import React, { useState } from "react";
import { InputMask } from "primereact/inputmask";

export default function OptionalDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <InputMask value={value} onChange={(e) => setValue(e.target.value)} mask="(999) 999-9999? x99999" placeholder="(999) 999-9999? x99999" />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { InputMask, InputMaskChangeParams} from "primereact/inputmask";

export default function OptionalDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <div className="card flex justify-content-center">
            <InputMask value={value} onChange={(e: InputMaskChangeParams) => setValue(e.target.value)} mask="(999) 999-9999? x99999" placeholder="(999) 999-9999? x99999" />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>When the input does not complete the mask definition, it is cleared by default. Use <i>autoClear</i> property to control this behavior. In addition, <i>?</i> is used to mark anything after the question mark optional.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <InputMask value={value} onChange={(e) => setValue(e.target.value)} mask="(999) 999-9999? x999" placeholder="(999) 999-9999? x999" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
