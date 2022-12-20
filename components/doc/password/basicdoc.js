import { useState } from 'react';
import { Password } from '../../lib/password/Password';
import { DocSectionCode } from '../common/docsectioncode';
import { DocSectionText } from '../common/docsectiontext';

export function BasicDoc(props) {
    const [value, setValue] = useState('');

    const code = {
        basic: `
<Password value={value} onChange={(e) => setValue(e.target.value)} inputClassName="w-15rem" feedback={false} />
        `,
        javascript: `
import { useState } from "react";
import { Password } from 'primereact/password';

export default function BasicDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <Password value={value} onChange={(e) => setValue(e.target.value)} inputClassName="w-15rem" feedback={false} />
        </div>
    )
}
        `,
        typescript: `
import { useState } from "react";
import { Password } from 'primereact/password';

export default function BasicDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <div className="card flex justify-content-center">
            <Password value={value} onChange={(e : ChangeEventHandler) => setValue(e.target.value)} inputClassName="w-15rem" feedback={false} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Password is used as a controlled component with <i>value</i> and <i>onChange</i> properties.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Password value={value} onChange={(e) => setValue(e.target.value)} inputClassName="w-15rem" feedback={false} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
