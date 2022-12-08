import { useState } from 'react';
import { Password } from '../../lib/password/Password';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function ShowPassword(props) {
    const [value, setValue] = useState('');

    const code = {
        basic: `
<Password value={value} onChange={(e) => setValue(e.target.value)} toggleMask />
        `,
        javascript: `
import { useState } from "react";
import { Password } from 'primereact/password';

export default function ShowPassword() {
    const [value, setValue] = useState('');

    return (
        <Password value={value} onChange={(e) => setValue(e.target.value)} toggleMask />
    )
}
        `,
        typescript: `
import { useState } from "react";
import { Password } from 'primereact/password';

export default function ShowPassword() {
    const [value, setValue] = useState<string>('');

    return (
        <Password value={value} onChange={(e : ChangeEventHandler) => setValue(e.target.value)} toggleMask />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    With <i>toggleMask</i> property it shows an icon to display the password as plain text.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Password value={value} onChange={(e) => setValue(e.target.value)} toggleMask />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
