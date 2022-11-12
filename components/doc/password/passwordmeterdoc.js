import { useState } from 'react';
import { Password } from '../../lib/password/Password';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function PasswordMeter(props) {
    const [value, setValue] = useState('');

    const code = {
        basic: `
<Password value={value} onChange={(e) => setValue(e.target.value)} />
        `,
        javascript: `
import { useState } from "react";
import { Password } from 'primereact/password';

export default function PasswordMeter() {
    const [value, setValue] = useState('');

    return (
        <Password value={value} onChange={(e) => setValue(e.target.value)} />
    )
}
        `,
        typescript: `
import { useState } from "react";
import { Password } from 'primereact/password';

export default function PasswordMeter() {
    const [value, setValue] = useState<string>('');

    return (
        <Password value={value} onChange={(e : ChangeEventHandler) => setValue(e.target.value)} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                Without <i>feedback</i> property it shows the strength indicator.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Password value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
