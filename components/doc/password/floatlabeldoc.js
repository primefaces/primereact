import { useState } from 'react';
import { Password } from '../../lib/password/Password';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function FloatLabelDoc(props) {
    const [value, setValue] = useState('');

    const code = {
        basic: `
<Password inputId="password" value={value} onChange={(e) => setValue(e.target.value)} />
<label htmlFor="password">Password</label>
        `,
        javascript: `
import React, { useState } from "react";
import { Password } from 'primereact/password';

export default function FloatLabelDoc() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <span className="p-float-label">
                <Password inputId="password" value={value} onChange={(e) => setValue(e.target.value)} />
                <label htmlFor="password">Password</label>
            </span>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Password } from 'primereact/password';

export default function FloatLabelDoc() {
    const [value, setValue] = useState<string>('');

    return (
        <div className="card flex justify-content-center">
            <span className="p-float-label">
                <Password inputId="password" value={value} onChange={(e) => setValue(e.target.value)} />
                <label htmlFor="password">Password</label>
            </span>
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
            <div className="card flex justify-content-center">
                <span className="p-float-label">
                    <Password inputId="password" value={value} onChange={(e) => setValue(e.target.value)} />
                    <label htmlFor="password">Password</label>
                </span>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
