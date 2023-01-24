import { useState } from 'react';
import { InputText } from '../../lib/inputtext/InputText';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function BasicDoc(props) {
    const [value, setValue] = useState('');

    const code = {
        basic: `
<InputText value={value} onChange={(e) => setValue(e.target.value)} />
        `,
        javascript: `
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";

export default function BasicDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <InputText value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";

export default function BasicDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <div className="card flex justify-content-center">
            <InputText value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>InputText is used as a controlled input with <i>value</i> and <i>onChange</i> properties.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <InputText value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
