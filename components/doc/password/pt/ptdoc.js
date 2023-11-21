import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Password } from '@/components/lib/password/Password';
import { useState } from 'react';

export function PTDoc(props) {
    const [value, setValue] = useState('');

    const code = {
        basic: `
<Password
    value={value}
    onChange={(e) => setValue(e.target.value)}
    pt={{
        info: { className: 'font-bold' }
    }}
/>
        `,
        javascript: `
import React, { useState } from "react";
import { Password } from 'primereact/password';

export default function PTDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <Password
                value={value}
                onChange={(e) => setValue(e.target.value)}
                pt={{
                    info: { className: 'font-bold' }
                }}
            />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Password } from 'primereact/password';

export default function PTDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <div className="card flex justify-content-center">
            <Password
                value={value}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                pt={{
                    info: { className: 'font-bold' }
                }}
            />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <div className="card flex justify-content-center">
                <Password
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    pt={{
                        info: { className: 'font-bold' }
                    }}
                />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
