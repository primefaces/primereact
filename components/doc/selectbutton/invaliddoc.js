import { useState } from 'react';
import { SelectButton } from '../../lib/selectbutton/SelectButton';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function InvalidDoc(props) {
    const [value, setValue] = useState('Off');
    const options = ['Off', 'On'];

    const code = {
        basic: `
<SelectButton className="p-invalid" value={value} options={options} onChange={(e) => setValue(e.value)} />
        `,
        javascript: `
import React, { useState } from "react";
import { SelectButton } from 'primereact/selectbutton';

export default function InvalidDoc() {
    const [value, setValue] = useState('Off');
    const options = ['Off', 'On'];

    return (
        <div className="card flex justify-content-center">
            <SelectButton className="p-invalid" value={value} options={options} onChange={(e) => setValue(e.value)} />
        </div>
    );
}
        `,
        typescript: `
import React, { useState } from "react";
import { SelectButton, SelectButtonChangeParams } from 'primereact/selectbutton';

export default function InvalidDoc() {
    const [value, setValue] = useState<string>('Off');
    const options = ['Off', 'On'];

    return (
        <div className="card flex justify-content-center">
            <SelectButton className="p-invalid" value={value} options={options} onChange={(e) => setValue(e.value)} />
        </div>
    );
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Applying <i>p-invalid</i> class to an input element indicates a failed validation.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <SelectButton className="p-invalid" value={value} options={options} onChange={(e) => setValue(e.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
