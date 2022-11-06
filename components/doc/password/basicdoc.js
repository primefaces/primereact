import { useState } from 'react';
import { Password } from '../../lib/password/Password';
import { DocSectionText } from '../common/docsectiontext';
import { DocSectionCode } from '../common/docsectioncode';

export function BasicDoc(props) {
    const [value, setValue] = useState('');

    const code = {
        basic: `
<Password value={value} onChange={(e) => setValue(e.target.value)} feedback={false} />
        `,
        javascript: `
import { useState } from "react";
import { Password } from 'primereact/password';

export default function BasicDemo() {
    const [value, setValue] = useState('');

    return (
        <Password value={value} onChange={(e) => setValue(e.target.value)} feedback={false} />
    )
}
        `,
        typescript: `
import { useState } from "react";
import { Password } from 'primereact/password';

export default function BasicDemo() {
    const [value, setValue] = useState<any>('');

    return (
        <Password value={value} onChange={(e : ChangeEventHandler) => setValue(e.target.value)} feedback={false} />
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                Password is used as a controlled component with <i>value</i> and <i>onChange</i> properties.
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Password value={value} onChange={(e) => setValue(e.target.value)} feedback={false} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
