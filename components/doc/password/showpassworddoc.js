import { useState } from 'react';
import { Password } from '../../lib/password/Password';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

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
    const [value, setValue] = useState<any>('');

    return (
        <Password value={value} onChange={(e : ChangeEventHandler) => setValue(e.target.value)} toggleMask />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                With <i>toggleMask</i> property it shows an icon to display the password as plain text.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Password value={value} onChange={(e) => setValue(e.target.value)} toggleMask />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
