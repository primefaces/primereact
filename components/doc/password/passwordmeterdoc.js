import { useState } from 'react';
import { Password } from '../../lib/password/Password';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function PasswordMeter(props) {
    const [value, setValue] = useState('');

    const code = {
        basic: `
<Password value={value} onChange={(e) => setValue(e.target.value)} inputClassName="w-15rem" />
        `,
        javascript: `
import { useState } from "react";
import { Password } from 'primereact/password';

export default function PasswordMeter() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <Password value={value} onChange={(e) => setValue(e.target.value)} inputClassName="w-15rem" />
        </div>
    )
}
        `,
        typescript: `
import { useState } from "react";
import { Password } from 'primereact/password';

export default function PasswordMeter() {
    const [value, setValue] = useState<string>('');

    return (
        <div className="card flex justify-content-center">
            <Password value={value} onChange={(e : ChangeEventHandler) => setValue(e.target.value)} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Without <i>feedback</i> property it shows the strength indicator.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Password value={value} onChange={(e) => setValue(e.target.value)} inputClassName="w-15rem" />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
