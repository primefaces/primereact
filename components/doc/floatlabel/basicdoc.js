import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { FloatLabel } from '@/components/lib/floatlabel/floatlabel';
import { InputText } from '@/components/lib/inputtext/InputText';
import { useState } from 'react';

export function BasicDoc(props) {
    const [value, setValue] = useState('');

    const code = {
        basic: `
<FloatLabel>
    <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
    <label htmlFor="username">Username</label>
</FloatLabel>
        `,
        javascript: `
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";

export default function BasicDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <FloatLabel>
                <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                <label htmlFor"username">Username</label>
            </FloatLabel>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";

export default function BasicDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <div className="card flex justify-content-center">
            <FloatLabel>
                <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                <label htmlFor="username">Username</label>
            </FloatLabel>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>FloatLabel is used by wrapping the input and its label.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <FloatLabel>
                    <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                    <label htmlFor="username">Username</label>
                </FloatLabel>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
