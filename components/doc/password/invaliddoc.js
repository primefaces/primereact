import { useState } from 'react';
import { Password } from '../../lib/password/Password';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function InvalidDoc(props) {
    const [value, setValue] = useState('');

    const code = {
        basic: `
<Password inputId="password" value={value} onChange={(e) => setValue(e.target.value)} className="p-invalid" />
        `,
        javascript: `
import React, { useState } from "react";
import { Password } from 'primereact/password';

export default function InvalidDoc() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-column">
                <label htmlFor="password">Password</label>
                <Password inputId="password" value={value} onChange={(e) => setValue(e.target.value)} className="p-invalid" />
            </div>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Password } from 'primereact/password';

export default function InvalidDoc() {
    const [value, setValue] = useState<string>('');

    return (
        <div className="card flex justify-content-center">
            <div className="flex flex-column">
                <label htmlFor="password">Password</label>
                <Password inputId="password" value={value} onChange={(e) => setValue(e.target.value)} className="p-invalid" />
            </div>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                {/* TO DO: Add demo content. IT'S WRITTEN WITH INPUTCLASSNAME  */}
                <p></p>
            </DocSectionText>
            <div className="card flex flex-column align-items-center justify-content-center ">
                <div className="flex flex-column">
                    <label htmlFor="password">Password</label>
                    <Password inputId="password" value={value} onChange={(e) => setValue(e.target.value)} className="p-invalid" />
                </div>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
