import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Password } from '@/components/lib/password/Password';
import { useState } from 'react';

export function ToggleMaskDoc(props) {
    const [value, setValue] = useState('');

    const code = {
        basic: `
<Password value={value} onChange={(e) => setValue(e.target.value)} toggleMask />
        `,
        javascript: `
import React, { useState } from "react";
import { Password } from 'primereact/password';

export default function ToggleMaskDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <Password value={value} onChange={(e) => setValue(e.target.value)} toggleMask />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Password } from 'primereact/password';

export default function ToggleMaskDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <div className="card flex justify-content-center">
            <Password value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} toggleMask />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    When <i>toggleMask</i> is present, an icon is displayed to show the value as plain text.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Password value={value} onChange={(e) => setValue(e.target.value)} toggleMask />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
