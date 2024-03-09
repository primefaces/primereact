import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { InputText } from '@/components/lib/inputtext/InputText';
import { useState } from 'react';

export function FloatLabelDoc(props) {
    const [value, setValue] = useState('');

    const code = {
        basic: `
<span className="p-float-label">
    <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
    <label htmlFor="username">Username</label>
</span>
        `,
        javascript: `
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";

export default function FloatLabelDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <span className="p-float-label">
                <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                <label htmlFor="username">Username</label>
            </span>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";

export default function FloatLabelDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <div className="card flex justify-content-center">
            <span className="p-float-label">
                <InputText id="username" value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
                <label htmlFor="username">Username</label>
            </span>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>A floating label appears on top of the input field when focused.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <span className="p-float-label">
                    <InputText id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                    <label htmlFor="username">Username</label>
                </span>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
