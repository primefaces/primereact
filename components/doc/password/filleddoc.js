import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';
import { Password } from '@/components/lib/password/Password';
import { useState } from 'react';

export function FilledDoc(props) {
    const [value, setValue] = useState('');

    const code = {
        basic: `
<Password variant="filled" value={value} onChange={(e) => setValue(e.target.value)} feedback={false} tabIndex={1} />
        `,
        javascript: `
import React, { useState } from "react";
import { Password } from 'primereact/password';

export default function FilledDemo() {
    const [value, setValue] = useState('');

    return (
        <div className="card flex justify-content-center">
            <Password variant="filled" value={value} onChange={(e) => setValue(e.target.value)} feedback={false} tabIndex={1} />
        </div>
    )
}
        `,
        typescript: `
import React, { useState } from "react";
import { Password } from 'primereact/password';

export default function FilledDemo() {
    const [value, setValue] = useState<string>('');

    return (
        <div className="card flex justify-content-center">
            <Password variant="filled" value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} feedback={false} tabIndex={1} />
        </div>
    )
}
        `
    };

    return (
        <>
            <DocSectionText {...props}>
                <p>
                    Specify the <i>variant</i> property as <i>filled</i> to display the component with a higher visual emphasis than the default <i>outlined</i> style.
                </p>
            </DocSectionText>
            <div className="card flex justify-content-center">
                <Password variant="filled" value={value} onChange={(e) => setValue(e.target.value)} feedback={false} tabIndex={1} />
            </div>
            <DocSectionCode code={code} />
        </>
    );
}
