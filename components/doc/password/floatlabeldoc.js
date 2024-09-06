import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { FloatLabel } from '@/components/lib/floatlabel/floatlabel';
import { Password } from '@/components/lib/password/Password';
import Link from 'next/link';
import { useState } from 'react';

export function FloatLabelDoc(props) {
    const [value, setValue] = useState('');

    const code = {
        basic: `
<FloatLabel>
    <Password inputId="password" value={value} onChange={(e) => setValue(e.target.value)} />
    <label htmlFor="password">Password</label>
</FloatLabel>
        `,
        javascript: `
import React, { useState } from "react";
import { Password } from 'primereact/password';
import { FloatLabel } from 'primereact/floatlabel';

export default function FloatLabelDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <FloatLabel>
                <Password inputId="password" value={value} onChange={(e) => setValue(e.target.value)} />
                <label htmlFor="password">Password</label>
            </FloatLabel>
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Password } from 'primereact/password';
import { FloatLabel } from 'primereact/floatlabel';

export default function FloatLabelDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <div className="card flex justify-content-center">
            <FloatLabel>
                <Password inputId="password" value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
                <label htmlFor="password">Password</label>
            </FloatLabel>
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    A floating label appears on top of the input field when focused. Visit <Link href="/floatlabel">FloatLabel</Link> documentation for more information.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <FloatLabel>
                    <Password inputId="password" value={value} onChange={(e) => setValue(e.target.value)} />
                    <label htmlFor="password">Password</label>
                </FloatLabel>
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
