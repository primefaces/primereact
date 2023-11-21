import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Password } from '@/components/lib/password/Password';
import { useState } from 'react';

export function MeterDoc(props) {
    const [value, setValue] = useState('');

    const code = {
        basic: `
<Password value={value} onChange={(e) => setValue(e.target.value)} />
        `,
        javascript: `
import React, { useState } from "react";
import { Password } from 'primereact/password';

export default function MeterDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <Password value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Password } from 'primereact/password';

export default function MeterDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <div className="card flex justify-content-center">
            <Password value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>Strength meter is displayed as a popup while a value is being entered.</p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Password value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
